console.log('colege library');
class Book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
     }

     clear() {
        let libForm = document.getElementById('libForm');
        libForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        } else {
            return true;
        }
    }

    show = function (type,displayMessage){
        let message =document.getElementById('message');
        let boldText;
        if(type==='success'){
boldText = 'Success!'
        }else{
            boldText = 'Error!'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldText}</strong> ${displayMessage}
        
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
setTimeout(() => {
    message.innerHTML = '';
}, 3000);

    }

}

//Add submit event listener to libForm
libForm.addEventListener('submit', libFormSubmit);

function libFormSubmit(e) {
    console.log('u submit the form ');
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    }
    let book = new Book(name, author, type);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully submited');
    } else { 
        //show error to the user
        display.show('danger','Sorry you can not add this book');
    }
    console.log(book);
    e.preventDefault();
}