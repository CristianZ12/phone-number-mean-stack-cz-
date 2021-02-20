"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server/server"));
require("./database");
class Index {
    constructor() {
        this.app = server_1.default(express_1.default());
        this.listen();
    }
    listen() {
        this.app.listen(this.app.get('Port'), () => {
            console.log(`Server on Port ${this.app.get('Port')}`);
        });
    }
}
new Index();
