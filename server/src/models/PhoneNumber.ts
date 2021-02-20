import { Schema ,model} from 'mongoose';

const phoneShema:Schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default model('PhoneNumber' ,phoneShema);