const { pushState, replaceState } = require("../router");

customElements.define('rkar-app', class extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.getStyle());
        this.shadowRoot.appendChild(this.getTemplate());

        window.addEventListener('popstate', () => {
            console.log('ROOT! | pop');
        });

        window.addEventListener('pushstate', () => {
            console.log('ROOT! | push');
        });

    }

    getStyle() {
        const stylesheet = document.createElement('style');
        stylesheet.innerHTML = `* { color: green; }`;
        return stylesheet.cloneNode(true);
    }
    
    getTemplate() {
        const template = document.createElement('template').content.cloneNode(true);
        const h2 = document.createElement('h2');
        h2.innerText = 'Root';
        const buttonPush = document.createElement('button');
        const buttonPop = document.createElement('button');
        buttonPush.innerText = 'push';
        buttonPop.innerText = 'pop';
        buttonPush.addEventListener('click', () => {
            pushState({}, '1', '/1');
        });
        buttonPop.addEventListener('click', () => {
            replaceState({}, '2', '/2');
        });
        template.appendChild(h2);
        template.appendChild(buttonPush);
        template.appendChild(buttonPop);
        return template;
    }

});
