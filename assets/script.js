let plus = document.createElement('button');
let minus = document.createElement('button');
let counter = document.createElement('h1');
let count = 0;

document.body.appendChild(plus);
document.body.appendChild(counter);
document.body.appendChild(minus);

plus.classList.add("plus");
minus.classList.add("minus");

counter.innerHTML = '0';
plus.innerHTML = '+';
minus.innerHTML = '-';


plus.onclick = function() {
    count++;
    refresh();    
};

minus.onclick = function() {
    count--;
    refresh();   
};


function refresh() {
    changeColor();
    counter.innerHTML = count;
}

function changeColor() {
    if(count == 0)
        counter.style.color = '#ffff';
    if(count < 0)
        counter.style.color = '#537942';
}


