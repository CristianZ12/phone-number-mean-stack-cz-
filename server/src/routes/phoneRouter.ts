import express from 'express';
import { phoneC } from '../controllers/phoneControllers';

class PhoneRouter{
    
    public router:express.Router;
    
    constructor(){
        this.router = express.Router();
        this.getPhoneNumbers();
        this.getPhoneNumber();
        this.addPhoneNumber();
        this.updatePhoneNumber();
        this.deletePhoneNumber();
    }

    getPhoneNumbers():void{
        this.router.get('/numbers', phoneC.getNumbers);
    }

    getPhoneNumber():void{
        this.router.get('/numbers/:idNumber', phoneC.getNumber);
    }

    addPhoneNumber():void{
        this.router.post('/numbers', phoneC.addNumber);
    }

    updatePhoneNumber():void{
        this.router.put('/numbers/:idNumber', phoneC.updateNumber);
    }

    deletePhoneNumber():void{
        this.router.delete('/numbers/:idNumber', phoneC.deleteNumber);
    }
}

const phoneNumber = new PhoneRouter();

export default phoneNumber.router;