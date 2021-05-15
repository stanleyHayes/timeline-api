const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: function (value) {
            if (!validator.isEmail(value)) {
                throw new Error(`${value} not a valid email`);
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: function (value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error(`${value} is not a strong password`);
            }
        }
    },
    phone: {
        type: String,
        required: true,
        validate: function (value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error(`${value} is not a valid mobile phone number`);
            }
        }
    },
    github: {
        type: String,
        required: true,
        validate: function (value) {
            if (!validator.isURL(value)) {
                throw new Error(`${value} is not a valid URL`)
            }
        }
    },
    birthdate: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        trim: true
    },
    rank: {
        type: String,
        enum: ['SENIOR', 'JUNIOR', 'INTERMEDIATE'],
        default: 'JUNIOR'
    },
    roles: {
        type: [String],
        enum: ['FRONTEND', 'BACKEND', 'DEVOPS', 'MOBILE', 'FULLSTACK']
    },
    employment_type: {
        type: String,
        enum: ['CONTRACT', 'PART-TIME', 'FULL-TIME'],
        default: 'FULL-TIME'
    },
    tech_stack: {
        type: [String]
    },
    website: {
        type: String,
        required: true,
        validate: function (value) {
            if (!validator.isURL(value)) {
                throw new Error(`${value} is not a valid URL`)
            }
        }
    },
    image: {
        type: String
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

const User = mongoose.model('User', userSchema);

module.exports = User;
