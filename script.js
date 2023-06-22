const list = document.querySelector(".chartsList");
const ulList = document.querySelector(".ulList");
const sortSelect = document.querySelector("#sort");
const searchInput = document.querySelector('#searchInput');

sortSelect.addEventListener("change", () => {
  const selectedElement = sortSelect.value;
  if (selectedElement === "SortedA") {
    sortAZ();
    updateCharts();
  } else if (selectedElement === "SortedZ") {
    sortZA();
    updateCharts();
  }
});

const sortAZ = () => {
  charts.sort((a, b) => a.id - b.id);
};

const sortZA = () => {
  charts.sort((a, b) => b.id - a.id);
};

const updateCharts = () => {
  ulList.innerHTML = "";

  for (let i = 0; i < charts.length; i++) {
    const liList = ulList.appendChild(document.createElement("li"));

    liList.addEventListener("click", () => {
      const selectedValue = charts[i].id;
      console.log(selectedValue);
      if (selectedValue === 1) {
        window.location.href = "https://genius.com/Doja-cat-attention-lyrics";
      } else if (selectedValue === 2) {
        window.location.href = "https://genius.com/Gunna-fukumean-lyrics";
      } else if (selectedValue === 3) {
        window.location.href =
          "https://genius.com/Fifty-fifty-cupid-twin-version-lyrics";
      } else if (selectedValue === 4) {
        window.location.href =
          "https://genius.com/Genius-romanizations-yoasobi-idol-romanized-lyrics";
      } else if (selectedValue === 5) {
        window.location.href =
          "https://genius.com/Dave-and-central-cee-sprinter-lyrics";
      } else if (selectedValue === 6) {
        window.location.href =
          "https://genius.com/Gunna-back-to-the-moon-lyrics";
      } else if (selectedValue === 7) {
        window.location.href =
          "https://genius.com/Xxxtentacion-and-lil-uzi-vert-im-not-human-lyrics";
      } else if (selectedValue === 8) {
        window.location.href =
          "https://genius.com/Genius-english-translations-fifty-fifty-cupid-english-translation-lyrics";
      } else if (selectedValue === 9) {
        window.location.href =
          "https://genius.com/Genius-english-translations-ateez-bouncy-k-hot-chilli-peppers-english-translation-lyrics";
      } else if (selectedValue === 10) {
        window.location.href =
          "https://genius.com/Sassa-gurl-maria-hiwaga-lyrics";
      }
    });

    const pList = liList.appendChild(document.createElement("p"));
    pList.textContent = charts[i].id;

    const imgList = liList.appendChild(document.createElement("img"));
    imgList.src = charts[i].image;

    const pList1 = liList.appendChild(document.createElement("p"));
    pList1.textContent = charts[i].title;

    const pList2 = liList.appendChild(document.createElement("p"));
    pList2.textContent = charts[i].artist;

    const pList3 = liList.appendChild(document.createElement("p"));
    const viewsIcon = pList3.appendChild(document.createElement("i"));
    viewsIcon.classList.add("far", "fa-eye");
    pList3.appendChild(document.createTextNode(` ${charts[i].views}`));
  }
};

const displayMatchingOptions = (matchingOptions) => {
  ulList.innerHTML = "";

  for (let i = 0; i < matchingOptions.length; i++) {
    const liList = ulList.appendChild(document.createElement("li"));

    const pList = liList.appendChild(document.createElement("p"));
    pList.textContent = matchingOptions[i].id;

    const imgList = liList.appendChild(document.createElement("img"));
    imgList.src = matchingOptions[i].image;

    const pList1 = liList.appendChild(document.createElement("p"));
    pList1.textContent = matchingOptions[i].title;

    const pList2 = liList.appendChild(document.createElement("p"));
    pList2.textContent = matchingOptions[i].artist;

    const pList3 = liList.appendChild(document.createElement("p"));
    const viewsIcon = pList3.appendChild(document.createElement("i"));
    viewsIcon.classList.add('far', 'fa-eye');
    pList3.appendChild(document.createTextNode(` ${matchingOptions[i].views}`));
  }
};

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const matchingOptions = charts.filter(chart =>
    chart.title.toLowerCase().includes(searchValue) ||
    chart.artist.toLowerCase().includes(searchValue)
  );

  displayMatchingOptions(matchingOptions);
});

const charts = [
  {
    id: 1,
    image: "./img/song1.jpeg",
    title: "Attention",
    artist: "Doja Cat",
    views: "218052",
  },
  {
    id: 2,
    image: "./img/song2.jpg",
    title: "fukumean",
    artist: "Gunna",
    views: "58052",
  },
  {
    id: 3,
    image: "./img/song3.jpg",
    title: "Cupid",
    artist: "FIFTY FIFTY",
    views: "2300021",
  },
  {
    id: 4,
    image: "./img/song8.png",
    title: "YOASOBI",
    artist: "Genius Romanizations",
    views: "840212",
  },
  {
    id: 5,
    image: "./img/song4.jpg",
    title: "Sprinter",
    artist: "Dave & Central Cee",
    views: "583135",
  },
  {
    id: 6,
    image: "./img/song2.jpg",
    title: "back to the moon",
    artist: "Gunna",
    views: "41022",
  },
  {
    id: 7,
    image: "./img/song5.jpg",
    title: "I'm Not Human",
    artist: "XXXTENTACION",
    views: "51402",
  },
  {
    id: 8,
    image: "./img/song3.jpg",
    title: "FIFTY FIFTY",
    artist: "Genius",
    views: "445900",
  },
  {
    id: 9,
    image: "./img/song6.jpg",
    title: "BOUNCY",
    artist: "ATEEZ",
    views: "38107",
  },
  {
    id: 10,
    image: "./img/song7.jpg",
    title: "Maria Hiwaga",
    artist: "Sassa Gurl",
    views: "17694",
  },
];

const loadBtns = document.querySelectorAll(".hide");
const loaders = document.querySelectorAll(".loader");
const loaderPs = document.querySelectorAll('.loaderP');

const hideBtn = (event) => {
  const clickedBtn = event.target;
  const loader = clickedBtn.closest(".hide").nextElementSibling;
  const loaderP = loader.parentElement.querySelector('.loaderP');

  clickedBtn.style.display = 'none';
  loader.style.display = "block";

  setTimeout(() => {
    clickedBtn.style.display = 'none';
    loader.style.display = "none";
    loaderP.textContent = 'No more data available';
  }, 1000);
};

searchInput.addEventListener('blur', () => {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
});


loadBtns.forEach((btn, index) => {
  btn.addEventListener("click", hideBtn);
  loaderPs[index].textContent = '';
});

sortAZ();
updateCharts();