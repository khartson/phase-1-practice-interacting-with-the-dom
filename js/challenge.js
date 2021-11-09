// User increment/decrement
let plus  = document.querySelector('#plus'); // grab the html + and -
let minus = document.querySelector('#minus');

function increment() {
    let timer = document.querySelector('#counter');
    let time  = parseInt(timer.innerText, 10); // get current 'count' 
    timer.innerText = ++time; // increment accordingly  
}

function decrement() {
    let timer = document.querySelector('#counter');
    let time  = parseInt(timer.innerText, 10);
    timer.innerText = --time;  
}

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);

// User can "like" the current count of the timer 

let heart = document.querySelector('#heart');
let likeList = []; 
function like(count, frequency) {
    this.count     =     count; 
    this.frequency = frequency; 
}

function handleLike() {
    let current  = parseInt(document.querySelector('#counter').innerText); 
    let likes    = document.querySelector(".likes");
    let likeList = likes.querySelectorAll('li');
    
    // Case: empty list
    if (likeList.length === 0) {
        console.log('empty list');
        let li = document.createElement('li'); 
        li.dataset.count     = current;
        li.dataset.frequency = 1; 
        li.innerText = `${current} has been liked ${li.dataset.frequency} time`; 
        likes.append(li); 
    } else {
        for (element of likeList) {
            if(parseInt(element.dataset.count) === current) {
               element.dataset.frequency = parseInt(element.dataset.frequency) + 1;
               element.innerText =   `${element.dataset.count} has been liked ${element.dataset.frequency} times`
               return; 
            }
        };
        let li = document.createElement('li'); 
        li.dataset.count     = current;
        li.dataset.frequency = 1; 
        li.innerText = `${current} has been liked ${li.dataset.frequency} time`; 
        likes.append(li); 
    }
}

heart.addEventListener('click', handleLike);

// User can leave comments about the 'game'
const formSubmit = () => {
    const inputForm = document.querySelector('form'); 
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const input = document.querySelector('input');
        comments    = document.querySelector('.comments');
        comment     = document.createElement('p');

        comment.innerText = input.value;
        input.value = ''; 
        comments.append(comment); 
    }); 
}

document.addEventListener('DOMContentLoaded', formSubmit);

// Time functions - continually tick 1s, can be paused

const pause = document.querySelector('#pause');

function incrementCounter() { 
    let timer   = document.querySelector('#counter');
    let current = parseInt(timer.innerText, 10);
    
    timer.innerText = ++current; 

}

let play = setInterval(incrementCounter, 1000); 
function timer(e) {
    console.log('clicked')
    button = e.target; 
    if (button.innerText == 'pause') {
        button.innerText = 'resume';
        clearInterval(play);
        plus.disabled  = true;
        minus.disabled = true;
        heart.disabled = true;  
    } else {
        button.innerText = 'pause';
        play = setInterval(incrementCounter, 1000);
        plus.disabled  = false;
        minus.disabled = false;
        heart.disabled = false;  
    }
}

pause.addEventListener('click', timer); 