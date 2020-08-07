import Component from '../lib/component.js';
// import store from '../store/index.js';
import Store from '../store/store.js';

let store = new Store();

export default class Random extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.random')
    });
  }

  render() {
    this.element = document.querySelector('.random');
    this.element.innerHTML = `randomc component ${store.state.randomString}`;
  }
}