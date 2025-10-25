// All button elements
const buttons = document.querySelectorAll(".btn");

// For each button play matching audio
buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		stopAll();
		document
			.getElementById(`${btn.id}-sound`)
			.play();
	});
});

// Stop button
document.getElementById("stop").addEventListener("click", stopAll);

// Stop all audio
function stopAll() {
	document.querySelectorAll("audio").forEach(audio => {
		audio.pause();
		audio.currentTime = 0;
	});
}
