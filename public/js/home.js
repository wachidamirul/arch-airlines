document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(products);
  localStorage.setItem("database", JSON.stringify(data));

  getVehicles(data);
  getMerek();
});

const getVehicles = (data) => {
  const countData = data.length;

  let currentPage;
  const getCurrentPage = localStorage.getItem("home-current-page");
  if (getCurrentPage) {
    currentPage = parseInt(getCurrentPage);
  } else {
    currentPage = 1;
    localStorage.setItem("home-current-page", 1);
  }
  const itemsPerPage = 4; // set items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  let endIndex;
  if (currentPage == totalPages) {
    endIndex = countData;
  } else {
    endIndex = startIndex + itemsPerPage;
  }

  // get count
  setCountVehicles(countData);

  // show product
  setVehiclesList(data, startIndex, endIndex, endIndex);

  // show pagination
  setVehiclesPagination(
    countData,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
  );
};

const setCountVehicles = (count) => {
  const totalMotor = document.getElementById("total-motor");

  totalMotor.innerHTML = count + " Motor";
};

const setVehiclesList = (data, startIndex, endIndex) => {
  const productList = document.getElementById("product-list");
  const vehicles = data.slice(startIndex, endIndex);

  vehicles.map((item) => {
    productList.innerHTML += `<div onclick="selectProduct('${item.id}')" class="bg-background cursor-pointer group relative rounded-lg shadow-md"><div class="w-full aspect-h-1 aspect-w-1 duration-500 group-hover:opacity-75 lg:aspect-none lg:h-72 overflow-hidden rounded-t-lg transition-all"><img alt="Front of men's Basic Tee in black."class="w-full h-full lg:h-full lg:w-full object-center object-cover"src=${item.vehicle_images}></div><div class="flex justify-between border-t-[1px] p-3 sm:p-4 xs:p-2"><div class="flex justify-between flex-col items-start"><div class=w-full><h2 class="font-semibold leading-relaxed line-clamp-1 md:line-clamp-2 text-base text-foreground">${item.title}</h2><p class="flex items-center leading-[150%] text-muted-foreground text-xs font-normal mb-3 md:text-sm"><svg class="mr-[1px] text-sm"fill=currentColor height=1em stroke=currentColor stroke-width=0 viewBox="0 0 384 512"width=1em xmlns=http://www.w3.org/2000/svg><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg> ${item.city}<h3 class="font-bold leading-[130%] md:text-xl text-lg text-primary">${formatCurrency(item.price)}</h3></div><div class="flex items-center flex-wrap"><div class="leading-[150%] text-muted-foreground text-xs border border-border font-medium mt-[6px] px-2 py-1 rounded-full">${item.model.brand}</div><div class="flex items-center leading-[150%] text-muted-foreground text-xs border border-border font-medium mt-[6px] px-2 py-1 rounded-full mx-[4px]"><svg class="mr-1 text-[#E94934]"fill=none height=1em stroke=currentColor stroke-width=2 viewBox="0 0 24 24"width=1em xmlns=http://www.w3.org/2000/svg stroke-linecap=round stroke-linejoin=round><rect height=18 rx=2 ry=2 width=18 x=3 y=4></rect><line x1=16 x2=16 y1=2 y2=6></line><line x1=8 x2=8 y1=2 y2=6></line><line x1=3 x2=21 y1=10 y2=10></line></svg> ${item.model.year}</div><div class="flex items-center leading-[150%] text-muted-foreground text-xs border border-border font-medium mt-[6px] px-2 py-1 rounded-full"><svg class="mr-1 text-[#E94934]"fill=currentColor height=1em stroke=currentColor stroke-width=0 viewBox="0 0 24 24"width=1em xmlns=http://www.w3.org/2000/svg role=img><path d="M11.628 16.186l-2.047-2.14 6.791-5.953 1.21 1.302zm8.837 6.047c2.14-2.14 3.535-5.117 3.535-8.466 0-6.604-5.395-12-12-12s-12 5.396-12 12c0 3.35 1.302 6.326 3.535 8.466l1.674-1.675c-1.767-1.767-2.79-4.093-2.79-6.79A9.568 9.568 0 0 1 12 4.185a9.568 9.568 0 0 1 9.581 9.581c0 2.605-1.116 5.024-2.79 6.791Z"/></svg>${formatDecimal(item.model.mileage)} KM</div></div></div></div></div>`;
  });
};

const setVehiclesPagination = (
  count,
  currentPage,
  totalPages,
  startIndex,
  endIndex,
) => {
  const startItem = document.getElementById("start-item");
  const endItem = document.getElementById("end-item");
  const totalItem = document.getElementById("total-item");
  const wrapPagination = document.getElementById("wrap-pagination");
  const pagination = document.getElementById("pagination");
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");
  let currentClass;
  let paginationList = "";

  // show pagination
  startItem.innerHTML = startIndex + 1;
  endItem.innerHTML = endIndex;
  totalItem.innerHTML = count;

  for (let i = 1; i <= totalPages; i++) {
    if (currentPage === i) {
      currentClass =
        "relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-background focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
    } else {
      currentClass =
        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-muted-foreground ring-1 ring-inset ring-gray-300 hover:bg-primary/10 focus:z-20 focus:outline-offset-0";
    }
    paginationList += `<button type="button" class="${currentClass}" onclick="showCurrentPage(${i})">${i}</button>`;
  }

  pagination.innerHTML = paginationList;
  localStorage.setItem("home-total-page", totalPages);

  if ((!"home-current-page") in localStorage || currentPage <= 1) {
    prevPage.disabled = true;
    prevPage.classList.add("cursor-not-allowed");
  }

  if ((!"home-current-page") in localStorage || currentPage >= totalPages) {
    nextPage.disabled = true;
    nextPage.classList.add("cursor-not-allowed");
  }

  if (totalPages === 1) {
    wrapPagination.classList.add("hidden");
  }
};

const showCurrentPage = (page) => {
  const productList = document.getElementById("product-list");
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");

  const totalPages = parseInt(localStorage.getItem("home-total-page"));
  const database = JSON.parse(localStorage.getItem("database"));

  if (page > 1) {
    prevPage.disabled = false;
    prevPage.classList.remove("cursor-not-allowed");
  } else {
    prevPage.disabled = true;
    prevPage.classList.add("cursor-not-allowed");
  }

  if (page < totalPages) {
    nextPage.disabled = false;
    nextPage.classList.remove("cursor-not-allowed");
  } else {
    nextPage.disabled = true;
    nextPage.classList.add("cursor-not-allowed");
  }

  productList.innerHTML = "";
  localStorage.setItem("home-current-page", page);
  getVehicles(database);
};

const showPrevPage = () => {
  const prevPage = document.getElementById("prev-page");
  const currentPage = parseInt(localStorage.getItem("home-current-page"));

  if (currentPage > 1) {
    prevPage.disabled = false;
    prevPage.classList.remove("cursor-not-allowed");
    showCurrentPage(currentPage - 1);
  } else {
    prevPage.disabled = true;
    prevPage.classList.add("cursor-not-allowed");
  }
};

const showNextPage = () => {
  const nextPage = document.getElementById("next-page");
  const totalPages = parseInt(localStorage.getItem("home-total-page"));
  const currentPage = parseInt(localStorage.getItem("home-current-page"));

  if (currentPage < totalPages) {
    nextPage.disabled = false;
    nextPage.classList.remove("cursor-not-allowed");
    showCurrentPage(currentPage + 1);
  } else {
    nextPage.disabled = true;
    nextPage.classList.add("cursor-not-allowed");
  }
};

const getMerek = () => {
  var data = JSON.parse(products);
  const merek = document.getElementById("merek");

  let brands = data.map((item) => item.model.brand);
  let uniqueBrands = [...new Set(brands)];

  uniqueBrands.map((uniqueBrands) => {
    merek.innerHTML += `<option value="${uniqueBrands}">${uniqueBrands}</option>`;
  });
};

const getModel = () => {
  var data = JSON.parse(products);
  const merek = document.getElementById("merek");
  const model = document.getElementById("model");

  // reset model
  if (
    merek.value === "Pilih merek" ||
    merek.value === null ||
    merek.value === ""
  ) {
    model.disabled = true;
    model.classList.add("cursor-not-allowed");
    model.innerHTML = `<option value="">Pilih model</option>`;
    return;
  }

  model.disabled = false;
  model.classList.remove("cursor-not-allowed");
  model.innerHTML = `<option value="">Pilih model</option>`;

  // get model
  data.map((item) => {
    if (item.model.brand == merek.value) {
      model.innerHTML += `<option value="${item.model.name}">${item.model.name}</option>`;
    }
  });
};

const search = () => {
  const data = JSON.parse(products);
  const merek = document.getElementById("merek").value;
  const model = document.getElementById("model").value;
  const productList = document.getElementById("product-list");

  // validation
  if (merek === "Pilih merek" || merek === null || merek === "") {
    alert("Pastikan sudah memilih merek");
    return;
  }

  if (model === "Pilih model" || model === null || model === "") {
    alert("Pastikan sudah memilih model");
    return;
  }

  // search
  const searchResult = data.filter((item) => {
    return item.model.brand == merek && item.model.name == model;
  });
  localStorage.setItem("database", JSON.stringify(searchResult));
  localStorage.setItem("home-current-page", 1);

  productList.innerHTML = "";
  getVehicles(searchResult);
};

const selectProduct = (id) => {
  const database = JSON.parse(localStorage.getItem("database"));
  const selectedProduct = database.filter((item) => item.id == id);
  localStorage.setItem("selected-product", JSON.stringify(selectedProduct));
  window.location.href = "./detail.html";
};
