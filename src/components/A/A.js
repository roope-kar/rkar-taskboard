export class A extends HTMLElement {

    static get observedAttributes() { 
        return ['secret']; 
    }
    
    constructor() {
        super();
        const template = document.querySelector('.A');
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
        
        /* var clone = document.importNode(t.content, true);
        document.body.appendChild(clone); */
    }

    connectedCallback() {
        if(this.isConnected) {
            console.log('Custom A element added to page.');
        }
    }

    disconnectedCallback() {
        console.log('Custom A element removed from page.');
    }

    attributeChangedCallback() {
        console.log('Custom A element attributes changed.');
    }
}

customElements.define('rkar-a', A, { extends: '' });
