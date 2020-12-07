window.addEventListener('popstate', event => {
    window.console.log(window.location.pathname, event.state);
});

export function pushState(state, title, url) {
    window.history.pushState(state, title, url);
    window.dispatchEvent(new CustomEvent('pushstate', { detail: { state, title, url } }));
}

export function replaceState(state, title, url) {
    window.history.replaceState(state, title, url);
    window.dispatchEvent(new CustomEvent('pushstate', { detail: { state, title, url } }));
}
