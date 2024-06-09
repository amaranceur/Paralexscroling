let text = document.getElementById('text');
let lefttree=document.getElementById('tree-left');
let righttree=document.getElementById('tree-right');
let leftgate=document.getElementById('gate-left');
let rightgate=document.getElementById('gate-right');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    lefttree.style.left=value *-1.5 +'px';
    righttree.style.left=value *1.5 +'px';
    leftgate.style.left=value*0.5+'px';
    rightgate.style.left=value*-0.5+'px';

});
