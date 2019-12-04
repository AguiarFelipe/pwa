const PUBLIC_KEY = "BO1WyIr4QMaY2XotJk5zIMbi89pop5ywFFUTdeX88hOIn-wAQjQzBhYKKExdh2mc9-cM0wH54_2gYDmYVLYE5po";

function urlBase64ToUnit8Array(base64String){
    var padding = '='.repeat((4 - base64String.length%4)%4);
    var base64 = (base64String + padding).replace(/\-/g,"+").replace(/_/g,"/");
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for(var i=0;i<rawData.length;i++){
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const ToDoNotification = {
    subscribeUserToNotification(){
        Notification.requestPermission().then(function(permission){
            if(permission === 'granted'){
                var subscribeOptions={
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUnit8Array(PUBLIC_KEY)
                }
                navigator.serviceWorker.ready
                .then(function(registration){
                    return registration.pushManager.subscribe(subscribeOptions);
                })
                .then(function(subscription){
                    return fetch('http://localhost:3006'),{
                        'method':'POST',
                        'Content-Type':'application/json',
                        'body':JSON.stringify(subscription)
                    }
                })
            }
        })
    }
}