export function registerComponent({ name, render, onMount, onUnmount, attrs = [] }) {
    class Component extends HTMLElement {
        static get observedAttributes() { return attrs; }
        constructor() { super(); render.call(this); }
        connectedCallback() { onMount.call(this); }
        disconnectedCallback() { onUnmount.call(this); }
        attributeChangedCallback() { render.call(this); }
    }
    customElements.define(name, Component);
}
