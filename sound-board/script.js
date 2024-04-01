// solution 1
// const btns = document.querySelectorAll(".btn");
// const audios = document.querySelectorAll("audio");
// btns.forEach(btn => {
//     btn.addEventListener("click", function () {
//         console.log(btn.innerHTML);
//         audios.forEach(audio => {
//             if (btn.innerHTML === audio.id) {
//                 audio.play();
//             } else {
//                 audio.pause();
//                 audio.currentTime = 0;
//             }
//             // btn.innerHTML === audio.id ? audio.play() :
//             // audio.pause();
//         })
//     })
// });

// solution 2

const songs = ['applause', 'boo', 'gasp', "tada", 'victory', 'wrong'];
const buttons = document.querySelector("#buttons");
const audios = document.querySelectorAll("audio");

songs.forEach((song, index) => {
    let htmlSong = document.createElement("button");
    let newContent = document.createTextNode(songs[index]);
    htmlSong.appendChild(newContent);
    htmlSong.classList.add("btn");
    buttons.append(htmlSong);
    htmlSong.addEventListener("click", function () {
        stopSong();
        document.getElementById(song).play()
    })
})

function stopSong() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
