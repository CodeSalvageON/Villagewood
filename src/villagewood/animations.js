let current_cloud_left = 0;
let current_cloud1_left = 0;

function animateCloud () {
  current_cloud_left += 0.05;
  current_cloud1_left += 0.001;

  clouds.style.left = current_cloud_left + "px";
  clouds1.style.left = current_cloud1_left + "px";

  if (current_cloud_left > 510) {
    current_cloud_left = -500;
  }

  if (current_cloud1_left > 510) {
    current_cloud_left = -500;
  }
}

try {
  setInterval(animateCloud, 10);
}

catch (error) {
  alert(error);
}