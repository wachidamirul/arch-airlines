document.addEventListener("DOMContentLoaded", () => {
  navMenu();
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.remove("absolute");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("navbar-fixed");
    header.classList.add("absolute");
    header.classList.add("bg-transparent");
  }
};

const hamburger = () => {
  const hamburger = document.getElementById("hamburger");
  const mobNavMenu = document.getElementById("mobile-menu");

  hamburger.classList.toggle("hamburger-active");
  if (mobNavMenu.classList.contains("opacity-0")) {
    mobNavMenu.classList.remove(
      "opacity-0",
      "translate-y-full",
      "pointer-events-none",
    );
    mobNavMenu.classList.add("opacity-100", "animate-slideUp");
  } else {
    mobNavMenu.classList.remove("opacity-100", "animate-slideUp");
    mobNavMenu.classList.add(
      "opacity-0",
      "pointer-events-none",
      "animate-slideDown",
    );
  }
};

const navMenu = () => {
  const data = JSON.parse(products);
  const navigation = document.getElementById("nav-menu");
  const mobNavMenu = document.getElementById("mobile-nav-menu");

  let brands = data.map((item) => item.model.brand);
  let uniqueBrands = [...new Set(brands)];

  let menu = uniqueBrands.map((brand) => {
    // Filter data for the current brand
    let filteredData = data.filter((item) => item.model.brand === brand);

    return {
      brand: brand,
      models: filteredData.map((item) => ({
        id: item.id,
        name: item.model.name,
      })),
    };
  });

  menu.map((item) => {
    navigation.innerHTML += `<li class="group relative wrap-menu"><a class="text-sm font-medium group-hover:text-primary py-3 text-foreground" href=#>${item.brand}</a><ul class="-translate-x-1/2 absolute bg-white duration-300 group-hover:md:block group-hover:opacity-100 hidden hover:md:block left-1/2 mt-2 opacity-0 overflow-hidden rounded-md shadow-lg submenu transform transition-opacity w-40">
    ${item.models
      .map((model) => {
        return `<li><a onclick="selectedMenu('${model.id}')" class="text-sm block hover:bg-secondary px-4 py-2" href=#>${model.name}</a></li>`;
      })
      .join("")}</ul></li>`;

    mobNavMenu.innerHTML += `<li class="accordion-item"><button class="accordion-header flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-foreground" aria-expanded="false" onclick="toggleAccordion(this)"><span>${item.brand}</span><svg class="h-5 w-5 transform transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></button><ul class="accordion-content transition-max-height ml-1 max-h-0 overflow-hidden border-l border-border duration-300 ease-in-out">${item.models
      .map((model) => {
        return `<li><a onclick="selectedMenu('${model.id}')" class="block px-4 py-2 text-sm" href="javascript:void(0)">${model.name}</a></li>`;
      })
      .join("")}</ul></li>`;
  });
};

const toggleAccordion = (button) => {
  const expanded = button.getAttribute("aria-expanded") === "true" || false;

  document.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.querySelector("svg").classList.remove("rotate-180");
    btn.nextElementSibling.style.maxHeight = "0";
  });

  document.querySelectorAll(".accordion-content").forEach((content) => {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-screen");
  });

  if (!expanded) {
    button.setAttribute("aria-expanded", "true");
    button.querySelector("svg").classList.add("rotate-180");
    button.nextElementSibling.style.maxHeight =
      button.nextElementSibling.scrollHeight + "px";
  }
};

const openDropdownNavbar = (brand) => {
  const dropdownNavbar = document.getElementById(`dropdownNavbar-${brand}`);
  dropdownNavbar.classList.toggle("hidden");
};

const toggleDarkMode = () => {
  if (localStorage.getItem("color-theme")) {
    // if set via local storage previously
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // if NOT set via local storage previously
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

const formatCurrency = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

const formatDecimal = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(number);
};

const selectedMenu = (id) => {
  const database = JSON.parse(localStorage.getItem("database"));
  const selectedProduct = database.filter((item) => item.id == id);
  localStorage.setItem("selected-product", JSON.stringify(selectedProduct));
  window.location.href = "./detail.html";
};
