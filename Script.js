//Progamming Exercise 7

//When you submit the form, a new to-do should pop up in your to-do list
function addItem() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var input = document.getElementById("input");
    var value = input.value;
    var itemText = document.createTextNode(value);
    item.appendChild(itemText);
    list.appendChild(item);
}