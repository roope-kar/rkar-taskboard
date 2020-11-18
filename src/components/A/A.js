export default class A extends HTMLElement {

    static get observedAttributes() { 
        return ['secret', 'value']; 
    }
    
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div>
            <style>
                div { color: blue; }
            </style>
            <slot name="my-text">default message</slot>
            <div>A!</div>
        </div>
        `;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
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

customElements.define('rkar-a', A);
