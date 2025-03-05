/*
if (age < 16) {
    alert("you can not drive!");
}else if (age < 18) {
    alert("You cant hate from outside of the club!");
}else if (age < 21) {
    alert("You can not drink!");
}else if (age < 25) {
    alert("you can not rent cars affordably");
}else if (age < 30) {
    alert("you cant rent fancy cars");
}else if (age >= 30) {
    alert("Nothing to look forward to");
}
*/

document.querySelector('#supermanRide').addEventListener('click', supermanRide) 
document.querySelector('#cycloneRide').addEventListener('click', cycloneRide)

function supermanRide() {
    age = document.querySelector('#danceDanceRevolution').value 
    height = document.querySelector('#danceDanceRevolution2').value 

    if( age >= 16 && height >= 69 ) {
        document.querySelector('#showSuperman').innerText = 'You are eligible to ride!'
    }else if ( age < 16 && height < 69 ) {
        document.querySelector('#showSuperman').innerText = 'You are not eligible to ride!'
    }else if ( age >= 16 && height < 69 ) {
        document.querySelector('#showSuperman').innerText = 'You are not eligible to ride due to height restrictions'
    }else if ( age < 16 && height >= 69 ) {
        document.querySelector('#showSuperman').innerText = 'You are not eligible to ride due to age restrictions'
    }
}

function cycloneRide() {
    age = document.querySelector('#cycloneRevolution').value 
    height = document.querySelector('#cycloneRevolution2').value

    if ( age >=18 && height >= 69 ) {
        document.querySelector('#showCyclone').innerText = 'You are eligible to ride!'
    }else if ( age < 18 && height < 69 ) {
        document.querySelector('#showCyclone').innerText = 'You are not eligible to ride!'
    }else if ( age < 18 && height >= 69 ) {
        document.querySelector('#showCyclone').innerText = 'You are not eligible to ride due to age restrictions!'
    }else if ( age >= 18 && height < 69 ) {
        document.querySelector('#showCyclone').innerText = 'You are not eligible to ride due to height restrictions'
    }
}