import { config } from 'dotenv';
config();
import express from 'express';
import server from './server/server';
import './database';

class Index{
    public app:express.Application;
    constructor(){
        this.app = server(express());
        this.listen();
    }
    listen():void{
        this.app.listen(this.app.get('Port'), () => {
            console.log(`Server on Port ${this.app.get('Port')}`);
        });
    }
}

new Index();
