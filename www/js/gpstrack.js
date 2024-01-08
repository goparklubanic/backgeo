document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Configure the plugin
    var bgGeo = window.BackgroundGeolocation;

    var config = {
        // locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
        // desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
        interval: 60000, // 1 minute
        fastestInterval: 30000, // 30 seconds
        activitiesInterval: 5000, // 5 seconds
        desiredAccuracy: 15,
        stationaryRadius: 10,
        distanceFilter: 50,
        debug: true,
        stopOnTerminate: false, // Allow the background-service to continue tracking when the app is terminated
        startForeground: true,
        notificationTitle: 'Background tracking',
        notificationText: 'Aktif'
    };

    // Start the background geolocation
    bgGeo.configure(config, function (location) {
        console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
        
        // Handle the location data as needed (e.g., log to a server, update UI)
    });

    // Start the plugin
    bgGeo.start();

    bgGeo.on('location',onLocation);
    function onLocation(location) {
        // console.log("Latitude: " + location.latitude);
        // console.log("Longitude: " + location.longitude);
        // Process the location data further
        var lat = location.latitude;
        var lon = location.longitude;
        document.getElementById('info').innerHTML = "Position Updated";
        document.getElementById('latpos').innerHTML = lat;
        document.getElementById('lonpos').innerHTML = lon;
        localStorage.setItem('lat',lat);
        localStorage.setItem('lon',lon);
    }

    bgGeo.on('stationary',onStationer);
    function onStationer(){
        document.getElementById('info').innerHTML = "Object currently on stationary position";
        var plat = localStorage.getItem('lat');
        var plon = localStorage.getItem('lon');
        document.getElementById('platpos').innerHTML = plat;
        document.getElementById('plonpos').innerHTML = plon;
    }

}
