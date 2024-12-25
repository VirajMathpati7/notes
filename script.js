document.getElementById('notesButton').addEventListener('click', function() {
    const notes = [
        'Note 1: This is the content of note 1.',
        'Note 2: This is the content of note 2.',
        'Note 3: This is the content of note 3.'
    ];
    
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';  // Clear the previous notes
    
    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note-item');
        noteDiv.textContent = note;
        notesList.appendChild(noteDiv);
    });
});
