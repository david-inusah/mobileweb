(function() {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
}
        document.getElementById("capturePhoto").onclick = function() {
         //   alert("I'm here");
            navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
                quality: 50,
                destinationType: destinationType.DATA_URL
            });
        }

        document.getElementById("geolocator").onclick = function() {
            navigator.geolocation.getCurrentPosition (onSuccess, onError, {enableHighAccuracy: true
            }); 
        }
        
        // document.getElementById("barcode").onclick = function() {

        // };    
        
         function onSuccess(position) {

        alert(
            'Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n'
        );
    }

    function onError(error) {
        alert(
            'code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }


    function onSuccess(position) {

        alert(
            'Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n'
        );
    }

    function onError(error) {
        alert(
            'code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    function onPhotoDataSuccess(imageData) {

        var smallImage = document.getElementById('smallImage');

        smallImage.style.display = 'block';

        smallImage.src = "data:image/jpeg;base64," + imageData;

    }

    function onFail(message) {

        alert('Failed because: ' + message);

    }

})();