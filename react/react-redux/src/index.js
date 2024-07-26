import { createStore } from "redux"

let recordState;
const initalState = []

const reducer = function(state = initalState, action){
    recordState = state;
    switch(action.type){
        case "addBook": 
        console.log(action);
            return [
                ...state,
                {
                    bookId: action.info.bookId,
                    bookName: `<<${action.info.bookName}>>`
                }
            ]
        case "delBook":
            return state.filter(book => book.bookId != action.info.bookId)
        default: 
            return [
                ...state
            ]
            break;
    }
}

const store = createStore(reducer);

const root = document.getElementById('app');
const addBook = document.getElementById('addBook');
const delBook = document.getElementById('delBook');
const bookList = document.getElementById('bookList');

const addBookBtn = document.createElement('button');
const bookNameInput = document.createElement('input');
const delBookBtn = document.createElement('button');
const bookIdInput = document.createElement('input');

addBookBtn.innerText = 'Add Book';
delBookBtn.innerText = 'Delete Book';

addBookBtn.addEventListener("click", addBookFn)
delBookBtn.addEventListener("click", delBookFn) 

function* generateID(){
    let id = 0;
    while(true){
        yield id++;
    }
}

const generateId = generateID();
const genBookId = () => generateId.next().value;

function addBookFn() {
    const bookName = bookNameInput.value;
    if(bookName){
        const bookId = genBookId();
        bookNameInput.value = '';
        const action = {
            type: "addBook",
            info: {
                bookId: bookId,
                bookName: bookName
            }
        }
        store.dispatch(action);
    }
}
function delBookFn() {
    const bookId = bookIdInput.value;
    if(bookId){
        bookIdInput.value = '';
        const action = {
            type: "delBook",
            info: {
                bookId: bookId
            }
        }
        store.dispatch(action);
    }
}

addBook.appendChild(bookNameInput)
addBook.appendChild(addBookBtn)
delBook.appendChild(bookIdInput)
delBook.appendChild(delBookBtn)

const showState = store.subscribe(() => {
    console.log("old state", recordState);
    console.log("new state", store.getState());
})

const showNewList = store.subscribe(() =>{
    const currentState = store.getState();
    if(currentState.length !== recordState.length){
        bookList.innerText = "";
        currentState.forEach(ele => {
            bookList.appendChild(createBookList(ele));
        })
    }
})

const createBookList = (info) => {
    const ele = document.createElement('li');
    ele.innerText = `bookId: ${info.bookId}--bookName: ${info.bookName}`;
    return ele;
}