document.addEventListener("DOMContentLoaded", () => {
  setArticle();
  getListArticles();
});

const setArticle = (index = 0) => {
  const title = document.getElementById("title");
  const article = document.getElementById("article");

  title.innerHTML = database.about[index].title;
  article.innerHTML = database.about[index].article;
};

const getListArticles = () => {
  const listArticles = document.getElementById("list-article");

  database.about.map((item, index) => {
    listArticles.innerHTML += `<div class="cursor-pointer border border-border px-16 py-8 transition-all duration-300 ease-in-out hover:bg-primary/5" onclick="setArticle(${index})"><h4 class="text-xl font-bold leading-normal">${item.title}</h4><p>${item.description}</p></div>`;
  });
};
