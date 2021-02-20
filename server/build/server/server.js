"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const indexRouter_1 = __importDefault(require("../routes/indexRouter"));
const phoneRouter_1 = __importDefault(require("../routes/phoneRouter"));
exports.default = (app) => {
    class Server {
        constructor() {
            this.app = app;
            this.setting();
            this.middleware();
            this.routes();
        }
        setting() {
            this.app.set('Port', process.env.PORT || 3500);
        }
        middleware() {
            this.app.use(cors_1.default());
            this.app.use(morgan_1.default('dev'));
            this.app.use(express_1.default.json());
            this.app.use(express_1.default.urlencoded({ extended: false }));
        }
        routes() {
            this.app.use(indexRouter_1.default);
            this.app.use('/api', phoneRouter_1.default);
        }
    }
    new Server();
    return app;
};
