import { pushState } from '../router';

export default customElements.define('rkar-task', class extends HTMLElement {

    static get observedAttributes() {
        return ['value'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.getStyle());
        this.shadowRoot.appendChild(this.getTemplate());
    }

    getStyle() {
        const stylesheet = document.createElement('style');
        stylesheet.innerHTML = `span { color: blue; }`;
        return stylesheet.cloneNode(true);
    }
    
    getTemplate() {
        const template = document.createElement('template').content.cloneNode(true);
        const button = document.createElement('button');
        button.innerText = this.getAttribute('value');
        button.addEventListener('click', () => {
            pushState({ secret: 123 }, 'test', '/test');
        });
        template.appendChild(button);
        return template;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        if(name === 'value' && oldValue !== newValue) {
            this.shadowRoot.querySelector('button').innerText = newValue;
        }
    }

});









