const registerServiceWorker = async () => {
    if("serviceWorker" in navigator) {
        try{
            const registration = await navigator.serviceWorker.register("/sw.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Servie worker is being installed.");
            } else if (registration.waiting) {
                console.log("Service worker has been installed");
            } else if (registration.active) {
                console.log("Service worker is active.");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();