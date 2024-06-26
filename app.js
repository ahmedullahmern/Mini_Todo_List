var userInput = document.getElementById("userInput")
var list_item = document.getElementById("list_item")

function yourtask() {
    console.log(userInput.value)
    
    var li1 = `<li><span>${userInput.value}</span>
    <button id="del"  onclick="deletechal(this)">Del</button>
    <button id="edit"  onclick="editchal(this)">Edit</button>
     </li>`
    userInput.value = ""
    list_item.innerHTML += li1
}

function deletechal(currentElement) {
    console.log(currentElement)
    currentElement.parentElement.remove()
}

function editchal(currentElement) {
    var update = prompt("editing your tense", currentElement.parentElement.firstElementChild.innerHTML)
    currentElement.parentElement.firstElementChild.innerHTML = update
}

function deleteallchal(currentElement){
    console.log(currentElement)
    list_item.innerHTML=""
}
