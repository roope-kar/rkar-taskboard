const { pushState } = require("../router");

customElements.define('rkar-app', class extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.getStyle());
        this.shadowRoot.appendChild(this.getTemplate());

        if(window.location.pathname === '/1') {
            console.log('insert content for 1');
        }
        if(window.location.pathname === '/2') {
            console.log('insert content for 2');
        }

        window.addEventListener('route', (event) => {
            window.console.log(event.detail.state);
            if(window.location.pathname === '/1') {
                console.log('insert content for 1');
            }
            if(window.location.pathname === '/2') {
                console.log('insert content for 2');
            }
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
        const buttonReplace = document.createElement('button');
        buttonPush.innerText = 'Push 1';
        buttonReplace.innerText = 'Push 2';
        buttonPush.addEventListener('click', () => {
            pushState({}, '1', '/1');
        });
        buttonReplace.addEventListener('click', () => {
            pushState({}, '2', '/2');
        });
        template.appendChild(h2);
        template.appendChild(buttonPush);
        template.appendChild(buttonReplace);
        return template;
    }

});
