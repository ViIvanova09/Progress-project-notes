// This is the constructor function where we declare our arguments
function Note(description, active){  //  конструктор-функция. Използва се като напишеш  ключовата дума new и името на контруктора зедно с аргоментите, които иска в скобите
this.description = description;  // Изполва се за създаване на обекти 
this.active = active;
}

// This are our global variables
let notes = []; //Глобална променлива(празен масив) за съхранение на обектите  от тип Note
let htmlList = document.getElementById("list");
// Here we declare when the note is created
function buttonSave_onClick(){
    let noteContent = document.getElementById("noteContent").value;
    document.getElementById("noteContent").value = "";
    let note = new Note(noteContent, true); //  Създаване на обект "Note", който ще бъде запазен в "note"
    notes.push(note);
    displayNotes();
    document.getElementById("noteContent").focus();
}
// this function displays the notes after they are declared
function displayNotes(){
    list.innerHTML = "";
    for(let i = 0; i < notes.length; i++){
        if(notes[i].active == true){
        let entry = document.createElement('li');
        entry.addEventListener("click", deactivateNote);
        entry.appendChild(document.createTextNode(notes[i].description));
        htmlList.appendChild(entry);
        }
    }
}
// after displaying the notest this function deletes the text that is declared
function deactivateNote(e){
    for(let i = 0; i < notes.length; i++){
        if(notes[i].description === e.target.innerHTML){
            notes[i].active = false;
            break;
        }
    }
    displayNotes();
}