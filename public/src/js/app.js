var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('Service Worker registered!');
        }
    );
}

window.addEventListener('beforeinstallprompt', function() {
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event;
    return false;
});
