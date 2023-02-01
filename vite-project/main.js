'use strict';

let count = 0;

document.getElementById('incrementCount')
.addEventListener('click', function(){
    count++;
    document.getElementById('totalCount').innerHTML = count
});

document.getElementById('decrementCount')
.addEventListener('click', function(){
    count--;
    document.getElementById('totalCount').innerHTML = count
});

document.getElementById('resetCount')
.addEventListener('click' , function(){
    count = 0
    document.getElementById('totalCount').innerHTML = count
})