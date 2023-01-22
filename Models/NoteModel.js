const mongoose = require('mongoose')
// Note Models
const NoteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("Notes", NoteSchema)