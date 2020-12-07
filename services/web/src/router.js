const internalState = {
    prevLocation: ''
};

window.addEventListener('popstate', () => {
    window.dispatchEvent(new CustomEvent('route', { detail: { state: internalState } }));
    internalState.prevLocation = location.pathname;
});

export function pushState(state, title, url) {
    internalState.prevLocation = location.pathname;
    const newState = { ...internalState, ...state  };
    window.history.pushState(newState, title, url);
    window.dispatchEvent(new CustomEvent('route', { detail: { state: newState, title, url } }));
}
