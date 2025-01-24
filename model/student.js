import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 54
    },
    fees: {
        type: mongoose.Types.Decimal128,
        required: true
    }
});

const StudentModel = mongoose.model('Student', studentSchema);
export default StudentModel;