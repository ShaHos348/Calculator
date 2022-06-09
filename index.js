// All the variables used
const numbers = document.querySelectorAll('[num]');
const operations1 = document.querySelectorAll('[operation1]');
const operations2 = document.querySelectorAll('[operation2]');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const equal = document.getElementById('equal');
let view = document.getElementById('view');
let done;

//Calculator functions
clear.onclick = function(){
    view.innerHTML = "";
}
del.onclick = function(){
    view.innerHTML = view.innerHTML.substring(0,view.innerHTML.length-1);
}
equal.onclick = function(){
    compute();
}
function compute(){
    view.innerHTML = Math.round(eval(view.innerHTML)*10000000)/10000000;
    done = true;
}



//Number and operation clicked
numbers.forEach(button => {
    button.addEventListener('click', () => {
            addNumber(button.innerHTML);
    })
})

operations1.forEach(button => {
    button.addEventListener('click', () => {
            addOperation(button.innerHTML);
    })
})

operations2.forEach(button => {
    button.addEventListener('click', () => {
        let num = Number(eval(view.innerHTML));
        switch (button.innerHTML) {
            case '!':
                num = factorial(num);
                break;
            case '√':
                num = Math.sqrt(num);
                break;
            case '%':
                num = num/100;
                break;
            case '^':
                num = Math.pow(num,2);
                break;
        }
        view.innerHTML = num;
    })
})

function factorial(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * factorial( num - 1 ); }
}

//Adding numbers amd operation
function addNumber(number){
    if(done){
        view.innerHTML = "";
        done = false;
    }
    if (number === '.' && view.innerHTML.includes('.')) return
    view.innerHTML = view.innerHTML.toString() + number.toString()
}
function addOperation(sign){
    let last = view.innerHTML.substring(view.innerHTML.length-2);
    if(((last==='+ ')||(last==='- '))||((last==='* ')||(last==='/ '))){return}
    if(sign==='x'){
        sign = '*';
    }else if(sign==='÷'){
        sign = '/';
    }
    view.innerHTML = view.innerHTML.toString() + ' ' + sign.toString()  + ' ';
}
