const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    tech_stack: {
        type: [String]
    },
    libraries: {
        type: [String]
    },
    progress: {
        type: Number,
        default: 0
    },
    team: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['STARTED', 'IN PROGRESS', 'COMPLETED'],
        default: 'STARTED'
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;