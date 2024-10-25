let noteInput = document.querySelector('#note');
let saveButton = document.querySelector('#save-button');
let notesList = document.querySelector('#notes-list');
let noNotesText = document.querySelector('#no-notes-text');

saveButton.addEventListener('click', function () {

    let note = noteInput.value;
    
    if (note !== '') {

        let noteItem = document.createElement('li');
        noteItem.textContent = note;
        noteItem.classList.add('bg-gray-100', 'p-2', 'mt-2');
        notesList.appendChild(noteItem);

        noteInput.value = '';
        noNotesText.style.display = 'none';

    } 

});