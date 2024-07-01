document.addEventListener("DOMContentLoaded", () => {
  getBandara();
  promoSlider();
});

const getBandara = () => {
  const data = database.bandara;
  const from = document.getElementById("flight-from");
  const to = document.getElementById("flight-to");

  data.map((item) => {
    const option = document.createElement("option");
    option.value = item.kode;
    option.textContent = `${item.kota} (${item.nama})`;
    from.innerHTML += option.outerHTML;
  });

  const dataTo = data.sort(() => Math.random() - 0.5);
  dataTo.map((item) => {
    const option = document.createElement("option");
    option.value = item.kode;
    option.textContent = `${item.kota} (${item.nama})`;
    to.innerHTML += option.outerHTML;
  });
};

const promoSlider = () => {
  const data = database.promotion;
  const slides = document.getElementById("slides");

  data.map((item) => {
    const slide = document.createElement("img");
    slide.classList.add("h-fit", "min-w-full", "slide");
    slide.src = item.image;
    slide.alt = item.text;
    slides.appendChild(slide);
  });

  promoNavigation(slides);
};

const promoNavigation = (slides) => {
  const slideCount = document.querySelectorAll(".slide").length;
  let currentIndex = 0;

  const updateSlidePosition = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  };

  setInterval(nextSlide, 3000);

  window.prevSlide = prevSlide;
  window.nextSlide = nextSlide;
};
