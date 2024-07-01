document.addEventListener("DOMContentLoaded", () => {
  navMenu();
  footerMenu();
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
  const menu = database.menu;
  const navigation = document.getElementById("nav-menu");
  const mobNavMenu = document.getElementById("mobile-nav-menu");

  menu.map((item) => {
    navigation.innerHTML += `<li class="group relative ${item.child && item.child.length > 0 ? "wrap-menu" : ""}"><a class="text-sm font-medium group-hover:text-primary py-3 text-foreground" href="${item.slug}">${item.parent}</a><ul class="-translate-x-1/2 absolute bg-white duration-300 group-hover:md:block group-hover:opacity-100 hidden hover:md:block left-1/2 mt-2 opacity-0 overflow-hidden rounded-md shadow-lg submenu transform transition-opacity w-48">
    ${item.child
      .map((child) => {
        return `<li><a class="text-sm block hover:bg-muted px-4 py-2" href="${child.slug}">${child.name}</a></li>`;
      })
      .join("")}</ul></li>`;

    mobNavMenu.innerHTML += `<li><a href="${item.slug}" class="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-foreground hover:text-primary">${item.parent}</a>${
      item.child && item.child.length > 0
        ? `<ul class="transition-max-height max-h-screen ml-1 overflow-hidden border-l border-border duration-300 ease-in-out">${item.child
            .map((child) => {
              return `<li><a class="block px-4 py-2 text-sm hover:text-primary" href="${child.slug}">${child.name}</a></li>`;
            })
            .join("")}</ul>`
        : ""
    }</li>`;
  });
};

const footerMenu = () => {
  const menu = database.menu;
  const footerNav = document.getElementById("footer-nav");
  menu.map((item) => {
    footerNav.innerHTML += `<li><a href="${item.slug}" class="footer-link">${item.parent}</a></li>`;
  });
};

const openDropdownNavbar = (brand) => {
  const dropdownNavbar = document.getElementById(`dropdownNavbar-${brand}`);
  dropdownNavbar.classList.toggle("hidden");
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
