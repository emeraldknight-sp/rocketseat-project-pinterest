const menuHeader = [
  {
    title: "All",
    url: "#",
  },
  {
    title: "@davidalmeidadev",
    url: "#",
  },
  {
    title: "Web",
    url: "#",
  },
  {
    title: "Mobile",
    url: "#",
  },
  {
    title: "Node",
    url: "#",
  },
];

const projects = [
  {
    image: "./assets/images/cineverse.webp",
    urlVercel: "https://react-project-cineverse.vercel.app/",
    urlGithub: "https://github.com/emeraldknight-sp/react-project-cineverse",
    details: [
      {
        title: "Cineverse | Streaming",
      },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
  {
    image:
      "https://i.pinimg.com/564x/0a/2f/01/0a2f01117b15bb4056afbc0b618eb56e.jpg",
    urlVercel: "",
    urlGithub: "",
    details: [
      {
        title: "Nightwing Gym Rat",
      },
      {
        user: {
          name: "Monark AI",
          img: "https://i.pinimg.com/280x280_RS/52/09/8c/52098c91d703fc6849e0a6ec85cae656.jpg",
        },
      },
    ],
  },
  {
    image: "./assets/images/one-piece.webp",
    urlVercel: "https://react-project-one-piece.vercel.app/",
    urlGithub: "https://github.com/emeraldknight-sp/react-project-one-piece",
    details: [
      { title: "One Piece | Reatividade" },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
  {
    image:
      "https://i.pinimg.com/564x/81/47/5c/81475c95beb10295560abaff4fb6f8bd.jpg",
    urlVercel: "",
    urlGithub: "",
    details: [
      { title: "Technomancer" },
      {
        user: {
          name: "Ambrose",
          img: "https://i.pinimg.com/280x280_RS/5d/22/f6/5d22f6b156d74751d19cd648daa4e00c.jpg",
        },
      },
    ],
  },
  {
    image: "./assets/images/the-mandalorian.webp",
    urlVercel: "https://next-project-the-mandalorian.vercel.app/",
    urlGithub:
      "https://github.com/emeraldknight-sp/next-project-the-mandalorian",
    details: [
      { title: "The Mandalorian | APIs" },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
  {
    image: "./assets/images/stranger-things.webp",
    urlVercel: "https://react-project-stranger-things.vercel.app/",
    urlGithub:
      "https://github.com/emeraldknight-sp/react-project-stranger-things",
    details: [
      { title: "Mundo Invertido | Switch Mode" },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
  {
    image:
      "https://i.pinimg.com/564x/dd/4f/2d/dd4f2d244d3cf20728e37173a74ad186.jpg",
    urlVercel: "",
    urlGithub: "",
    details: [
      { title: "" },
      {
        user: {
          name: "Katerina",
          img: "https://i.pinimg.com/280x280_RS/66/ac/70/66ac70342a778dda8aa23e008e473751.jpg",
        },
      },
    ],
  },

  {
    image: "./assets/images/metin-2.webp",
    urlVercel: "https://next-project-metin2.vercel.app/",
    urlGithub: "https://github.com/emeraldknight-sp/next-project-metin2",
    details: [
      { title: "Metin 2 | SEO" },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
  {
    image: "./assets/images/weather.webp",
    urlVercel: "https://react-project-weather.vercel.app/",
    urlGithub: "https://github.com/emeraldknight-sp/react-project-weather",
    details: [
      { title: "Project Weather | Weather App" },
      {
        user: {
          name: "@davidalmeidadev",
          img: "https://github.com/emeraldknight-sp.png",
        },
      },
    ],
  },
];

const menuFooter = [
  {
    title: "Home",
    url: "#",
    element: "i",
    class: {
      1: "ph-fill",
      2: "ph-house",
    },
  },
  {
    title: "Search",
    url: "#",
    element: "i",
    class: {
      1: "ph-bold",
      2: "ph-magnifying-glass",
    },
  },
  {
    title: "Add",
    url: "#",
    element: "i",
    class: {
      1: "ph-bold",
      2: "ph-plus",
    },
  },
  {
    title: "Chat",
    url: "#",
    element: "ion-icon",
    name: "chatbubble-ellipses",
  },
  {
    title: "Profile",
    url: "#",
    element: "img",
    src: "https://github.com/emeraldknight-sp.png",
    alt: "go to profile",
  },
];

// HEADER MENU

const menu = document.querySelector(".header__nav");

menuHeader.forEach((menuItem) => {
  const link = document.createElement("a");
  link.innerHTML = menuItem.title;
  link.href = menuItem.url;
  link.classList.add("header__link");

  menu.appendChild(link);
});

const links = document.querySelectorAll(".header__link");

links.forEach((link) => {
  const markerLink = document.createElement("span");
  markerLink.classList.add("header__link--marker");

  link.appendChild(markerLink);
});

menu.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
    const marker = e.target.childNodes[1];
    const markers = document.querySelectorAll(".header__link--marker");

    markers.forEach((m) => {
      m.classList.remove("selected");
    });

    marker.classList.add("selected");
  }
});

// MAIN PROJECTS

const main = document.querySelector("main");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = `${project.details[0].title} picture`;
  image.classList.add("card__image");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card__info");

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card__details");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card__details-container");

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-ellipsis");

  const button = document.createElement("button");
  button.classList.add("button", "card__details__button");

  button.appendChild(icon);

  const title = document.createElement("h3");
  title.innerText = project.details[0].title;
  title.classList.add("card__details__title");

  const avatar = document.createElement("img");
  avatar.src = project.details[1].user.img;
  avatar.alt = `${project.details[1].user.name} avatar`;
  avatar.classList.add("card__details__avatar");

  const user = document.createElement("span");
  user.textContent = project.details[1].user.name;
  user.classList.add("card__details__author");

  project.details.forEach(() => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card__details--container");
    cardDetails.appendChild(cardContainer);
  });

  cardDetails.children[0].appendChild(title);
  cardDetails.children[1].appendChild(avatar);
  cardDetails.children[1].appendChild(user);

  cardInfo.appendChild(cardDetails);
  cardInfo.appendChild(button);

  card.appendChild(image);
  card.appendChild(cardInfo);
  main.appendChild(card);
});

const footer = document.querySelector("footer");

menuFooter.forEach((menuItem) => {
  const button = document.createElement("button");
  button.type = "button";
  button.ariaLabel = menuItem.title;
  button.classList.add("button", "footer__button");

  const icon = document.createElement(menuItem.element);

  if (icon.tagName === "I" || icon.tagName === "ION-ICON") {
    icon.tagName === "I"
      ? icon.classList.add(menuItem.class[1], menuItem.class[2])
      : icon.setAttribute("name", menuItem.name);
    icon.classList.add("footer__button__text");
  } else if (menuItem.src !== undefined) {
    icon.src = menuItem.src;
    icon.alt = menuItem.alt;
    icon.classList.add("footer__button__avatar");
  }

  button.appendChild(icon);
  footer.appendChild(button);
});

footer.addEventListener("click", (e) => {
  e.preventDefault();

  const selectedButton = e.target.parentNode;

  if (selectedButton.tagName === "BUTTON") {
    const buttons = document.querySelectorAll(".footer__button");

    buttons.forEach((m) => {
      m.classList.remove("selected");
    });

    selectedButton.classList.add("selected");
  }
});
