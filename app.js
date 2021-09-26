const myDate = new Date("Wed Dec 02 2020 00:00:00 GMT+0700");
const songName = {
  "i-miss-you": "[Goblin OST] Soyou - I Miss You (FMV) [HAN-ROM-ENG]",
  everytime: "[MV] CHEN(첸)XPunch(펀치) - Everytime l 태양의 후예 OST Part.2",
  "this-love": "[MV] DAVICHI(다비치) - This Love(이 사랑) l 태양의 후예 OST Part.3",
  "beautiful-in-white": "Westlife - Beautiful in white",
  "you-are-my-everything": "You Are My Everything",
  "Doi-Loi-Hoang-Dung": "Đôi lời - Hoàng Dũng",
  "Meghan-Trainor-Like-Im-Gonna-Lose-You-ft-JohnLegend":
    "Meghan Trainor Like Im Gonna Lose You ft JohnLegend",
  "vi-yeu-la-nho": "Vì yêu là nhớ",
  "tu-thich-thich-thanh-thuong-thuong": "Từ thích thích thành thương thương",
  "the-playah": "SOOBIN X SLIMV - THE PLAYAH (Special Performance)",
  "khong-sao-ma-em-day-roi": "KHÔNG SAO MÀ EM ĐÂY RỒI - SUNI HẠ LINH ft. Lou Hoàng",
};

const music = [
  "i-miss-you",
  "everytime",
  "this-love",
  "beautiful-in-white",
  "you-are-my-everything",
  "Doi-Loi-Hoang-Dung",
  "Meghan-Trainor-Like-Im-Gonna-Lose-You-ft-JohnLegend",
  "vi-yeu-la-nho",
  "tu-thich-thich-thanh-thuong-thuong",
  "the-playah",
  "khong-sao-ma-em-day-roi",
];

function monthDiff(d1) {
  let d2 = new Date();
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const rootTime = document.querySelector("time");
    const audio = document.getElementById("audio");
    document.querySelector("anni").textContent = `${
      myDate.getDate() > 9 ? myDate.getDate() : "0" + myDate.getDate()
    }-${
      myDate.getMonth() > 8 ? myDate.getMonth() + 1 : "0" + (myDate.getMonth() + 1)
    }-${myDate.getFullYear()}`;

    const dayN = Math.floor(Math.floor((new Date() - myDate) / 1000) / 60 / 60 / 24) + " Days";
    const monthN = monthDiff(myDate) + " Months";
    const yearN = Math.floor(monthDiff(myDate) / 12);
    const eventContent = yearN ? [dayN, monthN, yearN + " Years"] : [dayN, monthN];
    document.querySelector("date").textContent = eventContent.join(" - ");

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - myDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - myDate) / 1000) / 60) % 60,
        sec = Math.floor((today - myDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${min > 9 ? min : "0" + min}:${
        sec > 9 ? sec : "0" + sec
      }`;
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
      audio.setAttribute("src", `music/${music[currentSong]}.mp3`);
      let htmlRender = "";
      Object.values(songName).map((item, index) => {
        htmlRender += `<div class="song-name-container">
        ${index === currentSong ? `<img id="dvd-icon-spin" src="./img/couple.jpg"/>` : ""}
            <p id=${music[index]}>
              ${index === currentSong ? `<strong>${item}</strong>` : item}
            </p>
        </div>
        `;
      });
      document.getElementById("song-name").innerHTML = `<div>${htmlRender}<div/>`;
      songName[music[currentSong]];
      scrollToSong();
      olock();

      music.map((item, index) => {
        document.getElementById(item).addEventListener("dblclick", function () {
          currentSong = index;
          play();
        });
      });
    };
    play();
    const playNext = () => {
      currentSong = currentSong === music.length - 1 ? 0 : currentSong + 1;
      play();
    };
    document.getElementById("btn-next").addEventListener("click", () => playNext());
    const playPrev = () => {
      currentSong = currentSong ? currentSong - 1 : music.length - 1;
      play();
    };
    document.getElementById("btn-prev").addEventListener("click", () => playPrev());
    audio.onended = () => {
      playNext();
    };
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);

var container = document.getElementById("heart"),
  bigHeart = document.getElementById("bigHeart"),
  shadow = document.getElementById("shadow"),
  heartSrc = bigHeart.getAttribute("src"),
  A = document.createElement("audio");
A.src = "./sounds/heart-click.mp3";
A.volume = 0.7;
bigHeart.addEventListener("click", generateHeart);
function generateHeart() {
  A.currentTime = 0.09;
  A.play();
  TweenMax.fromTo(
    [bigHeart, shadow],
    0.15,
    { scale: 1 },
    { scale: 0.88, repeat: 1, yoyo: true, ease: Back.easeIn.config(7) }
  );
  var newH = document.createElement("img"),
    newC = document.createElement("div"),
    WH = R(80, 15),
    newDs = [];
  for (var nd, i = 2; i--; ) {
    nd = document.createElement("div");
    nd.className = "dots";
    newDs.push(nd);
    container.insertBefore(nd, bigHeart);
  }
  newH.src = heartSrc;
  newH.className = "hearts";
  newC.className = "circ";
  TweenLite.set(newH, { width: WH, height: WH });
  container.insertBefore(newH, bigHeart);
  container.appendChild(newC);
  heartAnim(newH, newC, newDs);
}
function heartAnim(e1, e2, e34) {
  var dur = R(3.5, 1.5),
    Path = [],
    Y = R(-250, -380),
    xStep = ~~R(6, 3);
  for (var i = 1; i < xStep; i++) {
    Path.push({ x: R(32, -96), y: i * (Y / xStep) });
  }
  TweenLite.to(e1, dur, {
    scale: 0.3,
    bezier: { curviness: 1.5, values: Path, autoRotate: 90 },
    onComplete: function () {
      container.removeChild(e1);
      container.removeChild(e2);
    },
  });
  TweenLite.to(e1, dur - 0.2, {
    force3D: true,
    opacity: 1,
    ease: SlowMo.ease.config(0.1, 0.8, true),
  });
  TweenLite.fromTo(e2, 0.6, { force3D: true, scale: 0.3 }, { scale: 1, opacity: 0 });
  TweenMax.staggerTo(
    e34,
    R(3.5, 1.5),
    {
      force3D: true,
      opacity: 0,
      scale: 0,
      cycle: {
        bezier: function () {
          var nPath = [];
          for (var i = 1; i < xStep; i++) {
            nPath.push({ x: R(32, -96), y: i * (Y / xStep) });
          }
          return { curviness: 1.5, values: nPath };
        },
      },
    },
    R(0.5, 0),
    function () {
      for (var i = 2; i--; ) {
        container.removeChild(e34[i]);
      }
    }
  );
}
function R(M, m) {
  return m + (M - m) * Math.random();
}
