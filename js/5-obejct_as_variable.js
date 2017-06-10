'use strict';


/*Obiekty jako zmienne*/


var student = {
    imie: "Kaja",
    wzrost: 152,
    wyswitlDane: function()
    {console.log(this.imie)}
}

student.wyswitlDane();

console.log(student);