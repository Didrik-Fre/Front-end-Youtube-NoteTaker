let videoPlayer = document.querySelector('#video-player');
let videoUrl = document.querySelector('#video-url');
let watchButton = document.querySelector('#watch-button');

function extractVideoID(url) {
    return url.split('v=')[1].substring(0, 11);
}

watchButton.addEventListener('click', function () {
    let url = videoUrl.value;

    if (url !== '') {

        let videoID = extractVideoID(url);
        videoPlayer.src = 'https://www.youtube.com/embed/' + videoID;
        videoPlayer.classList.remove('h-0');
        videoPlayer.classList.add('h-[200px]', 'md:h-[400px]', 'w-full');
        videoUrl.value = '';
    }

});