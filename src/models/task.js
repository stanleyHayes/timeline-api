const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    title: {
        type: String,
        required: true
    },
    short_description: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    progress: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['STARTED', 'IN PROGRESS', 'COMPLETED'],
        default: 'STARTED'
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    instructions: {
        type: [String]
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;