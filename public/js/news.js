document.addEventListener("DOMContentLoaded", () => {
  news();
  searchNews();
});

const news = () => {
  const newsList = database.news;
  const list = document.getElementById("news-list");

  newsList.map((item) => {
    list.innerHTML += `<div class="overlay-bg relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md" style="background-image:url('${globalUrl}/images/news/${item.image}')"><div class="absolute bottom-2 z-10 w-full p-6"><p class="text-sm text-muted">${item.date}</p><h4 class="mt-2 font-bold leading-normal text-white hover:underline">${item.title}</h4></div></div>`;
  });
};

const searchNews = () => {
  const newsList = database.news;
  const search = document.getElementById("search");
  const list = document.getElementById("news-list");
  const notFound = document.getElementById("no-news");

  search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    list.innerHTML = "";
    newsList.map((item) => {
      notFound.classList.add("hidden");
      if (item.title.toLowerCase().includes(value)) {
        list.innerHTML += `<div class="overlay-bg relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat shadow-md" style="background-image:url('${globalUrl}/images/news/${item.image}')"><div class="absolute bottom-2 z-10 w-full p-6"><p class="text-sm text-muted">${item.date}</p><h4 class="mt-2 font-bold leading-normal text-white hover:underline">${item.title}</h4></div></div>`;
      } else {
        notFound.classList.remove("hidden");
      }
    });
  });
};
