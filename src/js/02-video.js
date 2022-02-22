import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let playerSecond;
const startVideoSecond = localStorage.getItem('videoplayer-current-time') ?? 0;

player.setCurrentTime(startVideoSecond)

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function (data) {
    playerSecond = data.seconds;
    throttle(localStorage.setItem('videoplayer-current-time', playerSecond), 1000)
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
