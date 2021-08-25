function Hesabla1(){
    var Deyer = document.getElementById('inp').value;
    var text = document.getElementById('msg');
    var manat = Deyer * 1.7; 
   
    text.innerHTML=`${Deyer} dollar ${manat} manatdir`;
}

function Hesabla2(){
    var Deyer2 = document.getElementById('inp2').value;
    var text2 = document.getElementById('msg2');
    var manat = Deyer2 * 2; 
   
    text2.innerHTML=`${Deyer2} euro ${manat} manatdir`;
}

function Hesabla3(){
    var Deyer3 = document.getElementById('inp3').value;
    var text3 = document.getElementById('msg3');
    var manat = Deyer3 * 0.2; 
   
    text3.innerHTML=`${Deyer3} tl ${manat} manatdir`;
}