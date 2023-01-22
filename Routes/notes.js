const NotesModel = require('../Models/NoteModel')
const router = require("express").Router();


// Get all notes
router.get('/', async (req, res) => {
    const notes = await NotesModel.find()
    res.status(200).json(notes)
})

// Get a single note
router.get('/find/:id', async (req, res) => {
    try {
        const notes = await NotesModel.findById(req.params.id)
        res.status(200).json(notes)
    } catch (err) {
        res.status(500).json('Invalid Credentials')
    }
})

// Add a new note
router.post("/", async (req, res) => {
    const newNote = new NotesModel(req.body)
    try {
        const saveNote = await newNote.save();
        res.status(200).json(saveNote)
    } catch (err) {
        res.status(500).json(err)
    }
})

// Updating an existing Note
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await NotesModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json('Invalid Credentials')
    }
})

// Delete a Note
router.delete('/:id', async (req, res) => {
    try {
        await NotesModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Product deleted')
    } catch (err) {
        res.status(500).json('Invalid Credentials')
    }
})


module.exports = router
