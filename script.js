const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');



// Promt to select media stream, pass to video element, than play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('error here:>> ', error);
    }
}

btn.addEventListener('click', async () =>{
    // disable button
    btn.disabled = true;

    //start Picture
    await videoElement.requestPictureInPicture();

    //reset the button
    btn.disabled = false;
})
selectMediaStream();