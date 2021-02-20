import mongoose from 'mongoose';
const URI = 'mongodb://localhost/phone-number-mean-stack-cz-1'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MONGODB is Connected');
});