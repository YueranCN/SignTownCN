function navigate(direction) {
    window.parent.postMessage({ type: 'navigate', direction: direction }, '*');
}
