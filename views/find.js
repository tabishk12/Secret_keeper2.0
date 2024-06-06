document.addEventListener('DOMContentLoaded', function() {
    let snackbar = document.createElement('webchatgpt-custom-element-79f5caed-c9a5-4f0a-91cc-f1bc30efeee1');
    snackbar.id = 'webchatgpt-snackbar';
    snackbar.style.color = 'rgb(255, 255, 255)';
    snackbar.className = '__web-inspector-hide-shortcut__';
    document.body.appendChild(snackbar);
});

document.addEventListener('DOMContentLoaded', function() {
    let element = document.querySelector('#webchatgpt-snackbar');
    if (element) {
        element.remove();
        console.log('Custom element removed.');
    } else {
        console.error('Custom element not found.');
    }
});
