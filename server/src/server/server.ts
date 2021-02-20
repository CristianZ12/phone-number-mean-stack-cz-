import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from '../routes/indexRouter';
import routerPhone from '../routes/phoneRouter';

export default (app:express.Application) => {
    class Server {
        public app:express.Application;
        constructor(){
            this.app = app;
            this.setting();
            this.middleware();
            this.routes();
        }
        setting():void{
            this.app.set('Port', process.env.PORT || 3500);
        }
        middleware():void{
            this.app.use(cors());
            this.app.use(morgan('dev'));
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: false }));
        }
        routes():void{
            this.app.use(router);
            this.app.use('/api', routerPhone);
        }
    }

    new Server();

    return app;
}