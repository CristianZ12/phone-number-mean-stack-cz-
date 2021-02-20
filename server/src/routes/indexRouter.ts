import express from 'express';

class IndexRouter{
    public router:express.Router;
    constructor(){
        this.router = express.Router();
        this.index();
    }
    index():void{
        this.router.get('/', (req, resp) => {
            resp.send('Hello World Node Js');
        });
    }
}

const router1 = new IndexRouter();

export default router1.router;