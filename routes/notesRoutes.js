const express = require('express');
const router = express.Router();
const notes = require('../controller/notesController.js');

router.post("/add/", notes.addNote);
router.put("/edit/:id/", notes.editNote);
router.put("/:id/",notes.finishNote);
router.get("/",notes.getNotes);
router.get("/:id/",notes.getNoteById);
router.delete("/:id/",notes.deleteNote);



module.exports = router;