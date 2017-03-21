var skylink = new Skylink();

    // skylink.on('peerJoined', function (peerId, peerInfo, isSelf) {
    //     if (isSelf) return; // We already have a video element for our video and don't need to create a new one.
    //     var vid = document.createElement('video');
    //     vid.autoplay = true;
    //     vid.muted = true; // Added to avoid feedback when testing locally
    //     vid.id = peerId;
    //     document.body.appendChild(vid);
    // });

    // skylink.on('incomingStream', function (peerId, stream, isSelf) {
    //     if (isSelf) return;
    //     var vid = document.getElementById(peerId);
    //     attachMediaStream(vid, stream);
    // });

    // skylink.on('peerLeft', function (peerId, peerInfo, isSelf) {
    //     var vid = document.getElementById(peerId);
    //     document.body.removeChild(vid);
    // });

    // skylink.on('mediaAccessSuccess', function (stream) {
    //     var vid = document.getElementById('myvideo'); attachMediaStream(vid, stream);
    // });

    // skylink.init({
    //     apiKey: 'd94a0366-609d-4e1f-8230-d9bf42b2af5e',
    //     apiSecret: 'k5w1ds70pa6k1',
    //     defaultRoom: 'SkylinkShare'
    // }, function () {
    //     skylink.joinRoom({
    //         audio: true,
    //         video: true
    //     });
    // });


function shareScreen() {
    if (location.protocol === 'http:') {
        if (window.confirm('To use screensharing you\'ll have to visit the secure HTTPS version of this site.\nWould you like to go there now?')) {
            location = 'https://' + location.host + location.pathname;
        }
        return;
    }
    skylink.shareScreen(function (error, success) {
        if (success) {
            console.log('success', success);
            var v = document.getElementById('screen');
            attachMediaStream(v, success);
        }
    });
}