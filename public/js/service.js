document.addEventListener("DOMContentLoaded", () => {
  services();
});

const services = () => {
  const serviceList = database.service;
  const service = document.getElementById("service-list");

  serviceList.map((item, index) => {
    const reverseClass = index % 2 === 0 ? "" : "flex-row-reverse";
    service.innerHTML += `<div class="flex ${reverseClass} items-center justify-center"><img src="${getGlobalUrl()}/images/services/${item.image}" class="aspect-video max-w-2xl rounded-lg object-cover" alt="${item.title}"><div class="w-full rounded-lg py-8 px-16 text-start shadow-lg"><h4 class="bottom-line mb-4 text-2xl font-bold text-primary">${item.title}</h4><p class="mb-8 text-lg">${item.description}</p><a href="#" class="italic text-primary underline">Learn More</a></div></div>`;
  });
};
