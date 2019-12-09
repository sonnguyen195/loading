var imgBg1 = document.createElement("img");
var imgBg2 = document.createElement("img");
var imgBg3 = document.createElement("img");
var a1 = document.getElementsByClassName("abg")

var containerBg = document.getElementsByClassName("container-bg");
a1[0].addEventListener('click',function(event) {
	event.preventDefault();
// imgBg1.onload = function () {
	containerBg[0].style.backgroundImage = "url('http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-2_043140658.jpeg')";
	containerBg[0].style.opacity = "1";
// };	
})
var containerBg = document.getElementsByClassName("container-bg");
a1[1].addEventListener('click',function(event) {
	event.preventDefault();
// imgBg2.onload = function () {
	containerBg[0].style.backgroundImage = "url('https://anhdep360blog.files.wordpress.com/2017/03/pexels-photo.jpeg?w=1400')";
	containerBg[0].style.opacity = "1";
// };
})
var containerBg = document.getElementsByClassName("container-bg");
a1[2].addEventListener('click',function(event) {
	event.preventDefault();
// imgBg3.onload = function () {
	containerBg[0].style.backgroundImage = "url('http://i.imgur.com/3Ai1eoy.jpg')";
	containerBg[0].style.opacity = "1";
// };
})

// imgBg1.src = "http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-2_043140658.jpeg";
// imgBg1.src = "https://anhdep360blog.files.wordpress.com/2017/03/pexels-photo.jpeg?w=1400";
// imgBg1.src = "http://i.imgur.com/3Ai1eoy.jpg";