const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Link = new Schema(
    {
        url: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Link', Link);
