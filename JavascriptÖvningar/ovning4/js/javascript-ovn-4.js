let hourNow = new Date();
let time= hourNow.getHours();
let greetings;

if(time>0 && time<12){
    greetings = 'Godmorgon';
}else if(time>11 && time <17){
    greetings = 'God förmiddag';
}else {
    greetings = 'God middag';
}
const sayName = document.querySelector('#output');

document.write(greetings+' '+sayName.per);
