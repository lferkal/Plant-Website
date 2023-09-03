var swiper = new Swiper('.Collection-Card-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.Collection-Card-slider-pagination',
      clickable: true,
    }
  });

// Wrapper effect

  const Slider_image = document.querySelector(".Slider-image"),
  firstImg = Slider_image.querySelectorAll("img")[0]
    
  const dragStart = (e) => {
      // updatating global variables value on mouse down event
      isDragStart = true;
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = Slider_image.scrollLeft;
  }
  
  const dragging = (e) => {
      // scrolling images/carousel to left according to mouse pointer
      if(!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      Slider_image.classList.add("dragging");
      positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
      Slider_image.scrollLeft = prevScrollLeft - positionDiff;
      showHideIcons();
  }
  
  const dragStop = () => {
      isDragStart = false;
      Slider_image.classList.remove("dragging");
  
      if(!isDragging) return;
      isDragging = false;
      autoSlide();
  }
  
  Slider_image.addEventListener("mousedown", dragStart);
  Slider_image.addEventListener("touchstart", dragStart);
  
  document.addEventListener("mousemove", dragging);
  Slider_image.addEventListener("touchmove", dragging);
  
  document.addEventListener("mouseup", dragStop);
  Slider_image.addEventListener("touchend", dragStop);