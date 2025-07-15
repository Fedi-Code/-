let fruit = "Ananas"

if (Ananas){
    console.log("its the right fruit");
}
else if (banana){
    console.log("wtf?")
}






































































document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      // `this` refers to the button that was clicked
      console.log(this.id);  // Logs the ID of the clicked button
    });
  });




  const person = { name: 'Alice', age: 25 };
person.age = 26;  // This is allowed. You can modify properties of the object.
console.log(person.age);  // Output: 26

person = { name: 'Bob', age: 30 };  // Error! Cannot reassign the entire object.


























if (this.id === 'btn1') {
    console.log("You clicked on btn1");
} else if (this.id === 'btn2') {
    console.log("You clicked on btn2");
} else if (this.id === 'btn3') {
    console.log("You clicked on btn3");
} else {
    console.log("Unknown button clicked");
}








switch (this.id) {
    case 'btn1':
        console.log("You clicked on btn1");
        break;
    case 'btn2':
        console.log("You clicked on btn2");
        break;
    case 'btn3':
        console.log("You clicked on btn3");
        break;
    default:
        console.log("Unknown button clicked");
}
