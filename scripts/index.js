(function() {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        document.getElementById("capturePhoto").onclick = function () {
            //   alert("I'm here");
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                destinationType: destinationType.DATA_URL
            });
        }

        // document.getElementById("geolocator").onclick = function () {
        //     navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        //         enableHighAccuracy: true
        //     });
        // }
        // $(function () {
        //     document.getElementById("barcode").addEventListener("click", function () {
        //         cordova.plugins.barcodeScanner.scan(
        //             function (result) {
        //                 alert("Information: " + result.text + "\n" +
        //                     "Format: " + result.format + "\n");
        //             },
        //             function (error) {
        //                 alert(error);
        //             }
        //         );
        //     });
        // });
    };
    // function onSuccess(position) {

    //     var latitude = position.coords.latitude,
    //         longitude = position.coords.longitude,
    //         cordinates = latitude +','+ longitude;
    //     alert('Latitude: ' + latitude + '\n' + 'Longitude: ' + longitude + '\n');
    //     document.getElementById('google-map').setAttribute('src, http://maps.google.co.uk?q=' + cordinates + '&z=60&output=embed')

    // }

    // function onError(error) {
    //     alert(
    //         'code: ' + error.code + '\n' +
    //         'message: ' + error.message + '\n');
    // }

    function onPhotoDataSuccess(imageData) {

        var smallImage = document.getElementById('smallImage');

        smallImage.style.display = 'block';

        smallImage.src = "data:image/jpeg;base64," + imageData;

    }

    function onFail(message) {

        alert('Failed because: ' + message);

    }
})();