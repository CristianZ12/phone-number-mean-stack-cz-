"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phoneControllers_1 = require("../controllers/phoneControllers");
class PhoneRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.getPhoneNumbers();
        this.getPhoneNumber();
        this.addPhoneNumber();
        this.updatePhoneNumber();
        this.deletePhoneNumber();
    }
    getPhoneNumbers() {
        this.router.get('/numbers', phoneControllers_1.phoneC.getNumbers);
    }
    getPhoneNumber() {
        this.router.get('/numbers/:idNumber', phoneControllers_1.phoneC.getNumber);
    }
    addPhoneNumber() {
        this.router.post('/numbers', phoneControllers_1.phoneC.addNumber);
    }
    updatePhoneNumber() {
        this.router.put('/numbers/:idNumber', phoneControllers_1.phoneC.updateNumber);
    }
    deletePhoneNumber() {
        this.router.delete('/numbers/:idNumber', phoneControllers_1.phoneC.deleteNumber);
    }
}
const phoneNumber = new PhoneRouter();
exports.default = phoneNumber.router;
