let personname :string = '';
personname = prompt('whatis youe name?') || '';

let lowercase :string = personname.toLowerCase() ;
let uppercase :string = personname.toUpperCase() ;
let titlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ')

if(personname !== null && personname !== ''){
    alert(`hello ${personname}, Here are you name in:
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}

