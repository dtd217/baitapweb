const element=document.getElementById('id-1');
const buttons=document.getElementsByTagName( 'button');
const redClasses=document.getElementsByClassName ('red');
const querySelectorRedClass=document.querySelector('.red');
console.log('class',redClasses)
buttons [e].onclick=function(){
    element.innerText="Nguyen Hoai Duc";
}
buttons[1].onclick=function(){
    element.innerText="My teacher";
}
console.log('buttons', buttons);
// element.innerText="Nguyen Hoai Duc";
console.log('getEById',element);