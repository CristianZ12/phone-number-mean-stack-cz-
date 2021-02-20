"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneC = void 0;
const PhoneNumber_1 = __importDefault(require("../models/PhoneNumber"));
class PhoneControllers {
    getNumbers(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const numbers = yield PhoneNumber_1.default.find();
            resp.json(numbers);
        });
    }
    getNumber(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNumber } = req.params;
            const number = yield PhoneNumber_1.default.findOne({ _id: idNumber });
            resp.json(number);
        });
    }
    addNumber(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, description, number } = req.body;
            const userData = {
                firstName,
                lastName,
                description,
                number
            };
            const user = new PhoneNumber_1.default(userData);
            yield user.save();
            resp.json('Phone Number Saved');
        });
    }
    updateNumber(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, description, number } = req.body;
            const { idNumber } = req.params;
            const userData = {
                firstName,
                lastName,
                description,
                number
            };
            yield PhoneNumber_1.default.findOneAndUpdate({ _id: idNumber }, userData);
            resp.json('Phone Number Updated');
        });
    }
    deleteNumber(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNumber } = req.params;
            yield PhoneNumber_1.default.findByIdAndDelete(idNumber);
            resp.json('Phone Number Deleted');
        });
    }
}
exports.phoneC = new PhoneControllers();
