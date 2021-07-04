const yourDate = new Date('Wed Dec 02 2020 00:00:00 GMT+0700');
const songName = {
  'i-miss-you': '[Goblin OST] Soyou - I Miss You (FMV) [HAN-ROM-ENG]',
  everytime: '[MV] CHEN(첸)XPunch(펀치) - Everytime l 태양의 후예 OST Part.2',
  'this-love':
    '[MV] DAVICHI(다비치) - This Love(이 사랑) l 태양의 후예 OST Part.3',
  'beautiful-in-white': 'Westlife - Beautiful in white',
  'you-are-my-everything': 'You Are My Everything',
  'Doi-Loi-Hoang-Dung': 'Đôi lời - Hoàng Dũng',
  'Meghan-Trainor-Like-Im-Gonna-Lose-You-ft-JohnLegend':
    'Meghan Trainor Like Im Gonna Lose You ft JohnLegend',
  'vi-yeu-la-nho': 'Vì yêu là nhớ',
  'tu-thich-thich-thanh-thuong-thuong': 'Từ thích thích thành thương thương',
  'the-playah': 'SOOBIN X SLIMV - THE PLAYAH (Special Performance)',
  'khong-sao-ma-em-day-roi':
    'KHÔNG SAO MÀ EM ĐÂY RỒI - SUNI HẠ LINH ft. Lou Hoàng',
};

const music = [
  'i-miss-you',
  'everytime',
  'this-love',
  'beautiful-in-white',
  'you-are-my-everything',
  'Doi-Loi-Hoang-Dung',
  'Meghan-Trainor-Like-Im-Gonna-Lose-You-ft-JohnLegend',
  'vi-yeu-la-nho',
  'tu-thich-thich-thanh-thuong-thuong',
  'the-playah',
  'khong-sao-ma-em-day-roi',
];

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const rootTime = document.querySelector('time');
    const audio = document.getElementById('audio');
    document.querySelector('anni').textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : '0' + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : '0' + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector('date').textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      ' DAYS';

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : '0' + hrs}:${
        min > 9 ? min : '0' + min
      }:${sec > 9 ? sec : '0' + sec}`;
    }
    setInterval(function () {
      olock();
    }, 1000);
    let currentSong = Math.floor(Math.random() * music.length);
    const scrollToSong = () => {
      const currentSongEl = document.getElementById(music[currentSong]);
      currentSongEl.scrollIntoView();
    };
    const play = () => {
      audio.setAttribute('src', `music/${music[currentSong]}.mp3`);
      let htmlRender = '';
      Object.values(songName).map((item, index) => {
        htmlRender += `<div class="song-name-container" id=${music[index]}>
        ${
          index === currentSong
            ? `<img id="dvd-icon-spin" src="./img/couple.jpg"/>`
            : ''
        }
            <p>
              ${index === currentSong ? `<strong>${item}</strong>` : item}
            </p>
        </div>
        `;
      });
      document.getElementById(
        'song-name'
      ).innerHTML = `<div>${htmlRender}<div/>`;
      songName[music[currentSong]];
      scrollToSong();
      olock();
    };
    play();
    const playNext = () => {
      currentSong = currentSong === music.length - 1 ? 0 : currentSong + 1;
      play();
    };
    document
      .getElementById('btn-next')
      .addEventListener('click', () => playNext());
    const playPrev = () => {
      currentSong = currentSong ? currentSong - 1 : music.length - 1;
      play();
    };
    document
      .getElementById('btn-prev')
      .addEventListener('click', () => playPrev());
    audio.onended = () => {
      playNext();
    };
    document
      .getElementsByTagName('body')[0]
      .insertAdjacentHTML('beforeend', "<div id='mask'></div>");
  },
  false
);
