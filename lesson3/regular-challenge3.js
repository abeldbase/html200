// Create an array that has at least 5 strings:
//Use a for loop to console log all of the elements plus the index and a comma

function animalList(){
  //array of 5 animals
 const animal = ['',"cats", "dogs", "lions", "birds", "bear", "frog"];
 console.log("Index" + "  " + "Name");
 
 //loop to console log all of the elements plus the index and a comma
 for (var i =1;i < animal.length;i++) {
  console.log(i  + ", " + animal[i]);
}
}
animalList();