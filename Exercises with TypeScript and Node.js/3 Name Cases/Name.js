"use strict";
let personname = '';
personname = prompt('whatis youe name?') || '';
let lowercase = personname.toLowerCase();
let uppercase = personname.toUpperCase();
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personname !== null && personname !== '') {
    alert(`hello ${personname}, Here are you name in:
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`);
}
else {
    alert('please fill your name !');
}
