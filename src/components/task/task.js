export default customElements.define('rkar-task', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style> color: blue; </style>
            ${this.getAttribute('value')}
        `;
    }
});









