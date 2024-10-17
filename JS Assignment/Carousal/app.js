var gettingImage = document.getElementById("image");
var links = [
  "https://wallpapers.com/images/hd/bmw-m5-4k-1cmka4yb4ytqle1h.jpg",
  "https://i.pinimg.com/736x/46/d9/42/46d942089c7a2c7a247a0b2f67fa6fc2.jpg",
  "https://c4.wallpaperflare.com/wallpaper/157/340/999/car-sports-car-supercar-lamborghini-aventador-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/734/612/921/911-porsche-gt3-2019-porsche-911-gt3-rs-2019-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1021/871/632/autumn-bmw-bmw-car-bmw-4-series-hd-wallpaper-preview.jpg"
];
var count = 0;
gettingImage.setAttribute("src", links[count]);
function carousel(value) {
  if (count > 4) {
    count = 0;
  }
  if (count < 0) {
    count = 4;
  }
  gettingImage.setAttribute("src", links[count]);
  if (value === "forward") {
    count++;
    return;
  }
  if (value === "backward") {
    count--;
    return;
  }
  count++;
}
setInterval(carousel, 2000);
