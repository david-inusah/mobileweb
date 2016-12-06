/**
 * Created by owner on 11/26/2016.
 */
(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        document.getElementById("capturePhoto").onclick = function () {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,

                destinationType: destinationType.DATA_URL
            });
        }

        document.getElementById("geolocationdata").addEventListener("click", function () {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {
                enableHighAccuracy: true
            });
        });
        $(function () {
            document.getElementById("barcode").addEventListener("click", function () {
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        alert("Information: " + result.text + "\n" +
                            "Format: " + result.format + "\n");
                    },
                    function (error) {
                        alert(error);
                    }
                );
            });
        });


        //watchPosition
        var watchId = navigator.geolocation.watchPosition(onWatchSuccess, onWatchError, {
            timeout: 30000
        });

        document.getElementById("clearWatchbtn").addEventListener("click", function () {
            navigator.geolocation.clearWatch(watchID);
        });

    };

    function onPhotoDataSuccess(imageData) {

        var smallImage = document.getElementById('smallImage');

        smallImage.style.display = 'block';

        smallImage.src = "data:image/jpeg;base64," + imageData;

    }

    function onFail(message) {

        alert('Failed because: ' + message);

    }

    ///////////geolocation bit/////////////////
    var onSuccess = function (position) {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude,
            cordinates = latitude + longitude;
        alert('Latitude: ' + latitude + '\n' + 'Longitude: ' + longitude + '\n');
        document.getElementById('google-map').setAttribute('src, http://maps.google.co.uk?q=' + cordinates + '&z=60&output=embed')
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    //watchPosition

    var onWatchSuccess = function (position) {
        var element = document.getElementById('divWatchMeMove');
        element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude + '<br />' + '<hr />' + element.innerHTML;
    };

    function onWatchError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

})();
