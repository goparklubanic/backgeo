document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Configure the plugin
    var bgGeo = window.BackgroundGeolocation;

    var config = {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true,
        stopOnTerminate: false, // Allow the background-service to continue tracking when the app is terminated
        startForeground: true,
        notificationTitle: 'Background tracking',
        notificationText: 'enabled'
    };

    // Start the background geolocation
    bgGeo.configure(config, function (location) {
        // console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
        
        // Handle the location data as needed (e.g., log to a server, update UI)
    });

    // Start the plugin
    bgGeo.start();

    bgGeo.on('location',onLocation);
    function onLocation(location) {
        // console.log("Latitude: " + location.latitude);
        // console.log("Longitude: " + location.longitude);
        // Process the location data further
        document.getElementById('info').innerHTML = 'Get Location: ' + location.latitude +', '+location.longitude;
    }
}
