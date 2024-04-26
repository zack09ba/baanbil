//alert('Welcome To Bills Gallery');

const video = document.getElementById("live");
video.addEventsListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});