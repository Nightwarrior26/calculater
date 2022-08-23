// let Firstnum, secondnum,multi,div,res;
function viv(){
    Firstnum = parseInt(document.getElementById("one").value);
    secondnum= parseInt(document.getElementById("two").value);
    document.getElementById("result").innerHTML=Firstnum * secondnum;
    document.getElementById("resultinput").value = Firstnum * secondnum;
   
}
function div(){
  Firstnum = document.getElementById("one").value;
  secondnum= document.getElementById("two").value;
  document.getElementById("result").innerHTML= Firstnum/secondnum;
}


function multi() {
  a = parseInt(document.getElementById("firstnum").value);
  b = parseInt(document.getElementById("secondnum").value);
  document.getElementById("mix").innerHTML = a * b;
}
function Div() {
  a = parseInt(document.getElementById("firstnum").value);
  b = parseInt(document.getElementById("secondnum").value);
  document.getElementById("mix").innerHTML = a / b;
}
function add() {
  a = parseInt(document.getElementById("firstnum").value);
  b = parseInt(document.getElementById("secondnum").value);
  document.getElementById("mix").innerHTML = a + b;
}
function sub() {
  a = parseInt(document.getElementById("firstnum").value);
  b = parseInt(document.getElementById("secondnum").value);
  document.getElementById("mix").innerHTML = a - b;
}