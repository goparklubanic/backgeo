BackgroundGeolocation.configure({
    locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    stationaryRadius: 50,
    distanceFilter: 50,
    notificationTitle: 'Background tracking',
    notificationText: 'enabled',
    debug: true,
    interval: 10000,
    fastestInterval: 5000,
    activitiesInterval: 10000,
    url: 'http://192.168.0.154:8000/api/set',
    // httpHeaders: {
    //   'X-FOO': 'bar'
    // },
    // customize post properties
    postTemplate: {
      lat: '@latitude',
      lon: '@longitude',
      foo: 'bar' // you can also add your own properties
    }
  });