let x = {
    firstName:'Arif',
    lastName:'Hossain',
    age:30,
    eyeColour:'black'

};

document.getElementById('demo').innerHTML=
    x.firstName+' '+ x.lastName+' is '+x.age+' years old and his eys are '+x.eyeColour+'!';

console.log(x);