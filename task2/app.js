
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');
const item3 = document.querySelector('#item3');
const item4 = document.querySelector('#item4');


item1.addEventListener('dragstart', dragStart);
item2.addEventListener('dragstart', dragStart);
item3.addEventListener('dragstart', dragStart);
item4.addEventListener('dragstart', dragStart);


function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
   
}
const boxes = document.querySelector('#box');

boxes.addEventListener('dragenter', dragEnter)
boxes.addEventListener('dragover', dragOver);

boxes.addEventListener('drop', drop);

function dragEnter(e) {
    
    e.preventDefault();
}

function dragOver(e) {
    
    e.preventDefault();
}


function drop(e) {
    
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id).cloneNode(true);

    box.appendChild(draggable)
    var name=prompt("enter the name of the entry")
    var myobj,myjson,text,obj;
    myobj={
        n:name
    };
    myjson=JSON.stringify(myobj);
    localStorage.setItem('testjson',myjson);
    text=localStorage.getItem('testjson');
    obj=JSON.parse(text)
    console.log(obj.n," is the entry name")
}

