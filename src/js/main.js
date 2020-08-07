// import store from './store/index.js'; 
import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';
import Random from './components/random.js';

import Store from './store/store.js';

let store = new Store();

const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

formElement.addEventListener('submit', evt => {
    evt.preventDefault();

    let value = inputElement.value.trim();

    if(value.length) {
        store.dispatch('addItem', value);
        inputElement.value = '';
        inputElement.focus();
    }
});

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();
const random = new Random();

countInstance.render();
listInstance.render();
statusInstance.render();
random.render();