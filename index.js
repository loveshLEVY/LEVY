document.querySelectorAll(".rectangle").forEach((rectangle) => {
	rectangle.addEventListener("mouseenter", () => {
		const video = rectangle.querySelector("video");
		video.play();
	});

	rectangle.addEventListener("mouseleave", () => {
		const video = rectangle.querySelector("video");
		video.pause();
		video.currentTime = 0; // Reset video to the beginning
	});
});

document.querySelectorAll(".rectangle,.new-rectangle").forEach((element) => {
	element.addEventListener("mouseenter", () => {
		const video = element.querySelector("video");
		if (video) {
			// Check if there's a video element inside
			video.play();
		}
	});

	element.addEventListener("mouseleave", () => {
		const video = element.querySelector("video");
		if (video) {
			// Check if there's a video element inside
			video.pause();
			video.currentTime = 0; // Reset video to the beginning
		}
	});
});
