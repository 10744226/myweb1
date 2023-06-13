//hambureger
function toggleMenu() {
	let menu = document.querySelector(".menu-links");
	let icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
  }
  
  //關於我對話框
  let show = document.querySelector(".about-dialog-show");
  let info = document.querySelector(".about-dialog-info");
  let close = document.querySelector(".about-dialog-close");
  
  show.addEventListener("click", function(){
	info.showModal();
  })
  close.addEventListener("click", function(){
	info.close();
  })
  
  //圖片切換
  let photoDirection = document.getElementById("photochange");
  
  photoDirection.onmouseover = function(){
	this.src = "assets/img/livephoto.jpg";
  }
  photoDirection.onmouseleave = function(){
	this.src = "assets/img/dennis.png";
  }