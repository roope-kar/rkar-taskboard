export default class Joke extends HTMLElement {

    static get observedAttributes() { 
        return ['seed']; 
    }
    
    constructor() {
        super();
        this.controller;
        this.render();
    }

    render() {
        this.innerHTML = this.getAttribute('joke');
    }

    getJoke() {
        this.controller = new AbortController();
        return window.fetch("https://api.icndb.com/jokes/random", { signal: this.controller.signal })
            .then(response => response.json())
            .then(data => this.setAttribute('joke', data.value.joke));
    }

    connectedCallback() {
        if(this.isConnected) {
            this.setAttribute('seed', '123');
        }
    }

    disconnectedCallback() {
        this.controller.abort();
    }

    attributeChangedCallback() {
        this.controller.abort();
        this.getJoke().then(this.render);
    }
}

customElements.define('rkar-joke', Joke);











