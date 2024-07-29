document.addEventListener("DOMContentLoaded", () => {
  getBandara();
  promoSlider();
  services();
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

const services = () => {
  const serviceList = database.service;
  const service = document.getElementById("service-list");

  serviceList.map((item) => {
    service.innerHTML += `<div class="relative bg-card rounded-lg bg-center bg-cover bg-no-repeat border min-h-[320px] size-full"style=background-image:url('${item.image}')><div class="relative pt-6 px-6 text-center z-10"><span class="font-light text-muted-foreground text-xs tracking-[0.2em] uppercase">Cabin Features</span><h3 class="after:mx-auto bottom-line font-semibold mt-2 text-lg tracking-wider">${item.title}</h3></div></div>`;
  });
};
