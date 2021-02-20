import { Request, Response } from 'express';
import userModels from '../models/PhoneNumber';

class PhoneControllers{

    public async getNumbers(req:Request, resp:Response){
        const numbers = await userModels.find();
        resp.json(numbers);
    }

    public async getNumber(req:Request, resp:Response){
        const { idNumber } = req.params;
        const number = await userModels.findOne({_id: idNumber});
        resp.json(number);
    }

    public async addNumber(req:Request, resp:Response){
        const { firstName, lastName, description, number } = req.body;
        const userData = {
            firstName,
            lastName,
            description,
            number
        }
        const user = new userModels(userData);
        await user.save();
        resp.json('Phone Number Saved');
    }

    public async updateNumber(req:Request, resp:Response){
        const { firstName, lastName, description, number } = req.body;
        const { idNumber } = req.params;
        const userData = {
            firstName,
            lastName,
            description,
            number
        };
        await userModels.findOneAndUpdate({_id: idNumber}, userData);
        resp.json('Phone Number Updated');
    }

    public async deleteNumber(req:Request, resp:Response){
        const { idNumber } = req.params;
        await userModels.findByIdAndDelete(idNumber);
        resp.json('Phone Number Deleted');
    }
}

export const phoneC = new PhoneControllers();