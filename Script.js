//Progamming Exercise 7

var list = document.querySelector("ol");
var i;


//When you submit the form, a new to-do should pop up in your to-do list
function addItem() {
    item = document.createElement("li");
    item.text = document.createTextNode("");
    item.appendChild(item.text);
    list.appendChild(item);
}

//Submitting the form again should add another to do below the previous to-do

//Use an array to keep track of the todos (Meaning every time the form is submitted, you push the new value onto the array)
todos = [

]

//Build a template from the array using the map method learned about in programming exercise 6.

//Display the template on the screen