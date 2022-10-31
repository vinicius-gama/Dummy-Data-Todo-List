let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]
let filteredTodos
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}



let ol = document.getElementById ("todo-list")

const populateTodos = () => {
for (let i=0; i < arrayOfTodos.length; i++) {
let listItem = document.createElement('li')
let listItemText = document.createTextNode(arrayOfTodos[i].title)

listItem.appendChild(listItemText)

ol.appendChild(listItem)  

    }
    
}

const filterTodos = () => {
    let userIdElement = document.getElementById("userId")
    console.log("userIdElement", [userIdElement])
    let userIdValue = userIdElement.value
    
    console.log("userIdValue:", userIdValue)

    ol.innerHTML = null


filteredTodos = arrayOfTodos.filter((todo) => {
    
    
    
    return todo.userId === parseInt(userIdValue)




 })

 console.log('filteredTodos:', filteredTodos)
 for (let i=0; i < filteredTodos.length; i++) {
    let listItem = document.createElement('li')
    let listItemText = document.createTextNode(filteredTodos[i].title)
    
    listItem.appendChild(listItemText)
    
    ol.appendChild(listItem)  
    
        }


}


    // // crete li element
    // const newLi = document.createElement("li");
    // // create text node to put titlr property
    // const newContent = document.createTextNode(arrayOfTodos[i].title);
    // // append text to li element
    // newLi.appendChild(newContent);
    // // append li element to ol
    // OlElement.appendChild(newLi);
    // }
