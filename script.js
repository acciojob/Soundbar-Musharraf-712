//your JS code here. If required.
// List of sounds
const sounds = [
    "sound1.mp3",
    "sound2.mp3",
    "sound3.mp3",
    "sound4.mp3"
];

document.querySelectorAll(".btn").forEach((button, i) => {
    const audio = new Audio(`./sounds/${sounds[i]}`);

    button.addEventListener("click", () => {
        stopAllSounds();
        audio.play();
    });
});

document.querySelector(".stop").addEventListener("click", stopAllSounds);

// Stop all sounds
function stopAllSounds() {
    const audios = document.querySelectorAll("audio");
    audios.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
