import PubSub from "../lib/pubsub.js";

let pubsub = new PubSub();
let state = {items: [
    'I made this',
    'Another thing'
], randomString : 'Random String'};

export default class Store {
    constructor() {
        let self = this;
        self.actions = {addItem : this.addItem, clearItem : this.clearItem};
        self.state = state;
        self.events = pubsub;

        self.state = new Proxy((this.state), {
            set: function(state, key, value) {
            
                state[key] = value;
            
                self.events.publish('stateChange', self.state);
            
                return true;
            }
        });
    }

    dispatch(actionKey, payload) {
        this.actions[actionKey](payload);
        return true;
    }

    addItem = (payload) => {
        let newState = Object.assign({}, this.state);
        newState.items.push(payload);
        this.state = Object.assign(this.state, newState);
    }

    clearItem = (payload) => {
        let newState = Object.assign({}, this.state);
        newState.items.splice(payload.index, 1);
        this.state = Object.assign(this.state, newState);
    }
}