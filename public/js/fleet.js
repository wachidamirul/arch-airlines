document.addEventListener("DOMContentLoaded", () => {
  fleets();
});

const fleets = () => {
  const fleetList = database.fleets;
  const list = document.getElementById("fleets");

  fleetList.map((item) => {
    list.innerHTML += `<div class="overlay-bg relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md" style="background-image:url('${getGlobalUrl()}/images/fleet/${item.image}')"><div class="absolute bottom-2 z-10 w-full p-6"><h4 class="mt-2 font-bold leading-normal text-white hover:underline">${item.title}</h4></div></div>`;
  });
};
