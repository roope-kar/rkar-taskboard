export default customElements.define('rkar-taskboard', class extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.getStyle());
        this.shadowRoot.appendChild(this.getTemplate());
    }

    getStyle() {
        const stylesheet = document.createElement('style');
        stylesheet.innerHTML = `p { color: red; }`;
        return stylesheet.cloneNode(true);
    }
    
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <p>Taskboard</p>
            <slot name="tasks"></slot>
        `;
        return template.content.cloneNode(true);
    }
    
});










