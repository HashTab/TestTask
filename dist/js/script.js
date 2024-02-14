document.addEventListener("DOMContentLoaded", function () {
  var logosData = [
    "icons/clientsLogos/logo1.svg",
    "icons/clientsLogos/logo2.svg",
    "icons/clientsLogos/logo3.svg",
    "icons/clientsLogos/logo4.svg",
    "icons/clientsLogos/logo5.svg",
    "icons/clientsLogos/logo6.svg",
    "icons/clientsLogos/logo3.svg",
  ];
  var cardsData = [
    {
      imageSrc: "icons/manageLogos/logo1.svg",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "icons/manageLogos/logo2.svg",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      imageSrc: "icons/manageLogos/logo3.svg",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  var helpingData = [
    {
      imageSrc: "icons/helpingLogos/logo1.png",
      title: "2,245,341",
      description: "Members",
    },
    {
      imageSrc: "icons/helpingLogos/logo2.png",
      title: "46,328",
      description: "Clubs",
    },
    {
      imageSrc: "icons/helpingLogos/logo3.png",
      title: "828,867",
      description: "Event Bookings",
    },
    {
      imageSrc: "icons/helpingLogos/logo4.png",
      title: "1,926,436",
      description: "Payments",
    },
  ];

  var communityData = [
    {
      imageUrl: "img/community/image1.png",
      textContent: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imageUrl: "img/community/image2.png",
      textContent:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      imageUrl: "img/community/image3.png",
      textContent: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  var logoWrapper = document.querySelector(".clients__logos_wrapper");
  var cardWrapper = document.querySelector(".manage__cards_wrapper");
  var helpingWrapper = document.querySelector(".helping__logos_wrapper");
  var customersWrapper = document.querySelector(".customers__logos_wrapper");
  var communityWrapper = document.querySelector(".community__cards_wrapper");

  logosData.forEach(function (logoSrc) {
    var imgElement = document.createElement("img");
    imgElement.src = logoSrc;
    imgElement.alt = "Client Logo";
    logoWrapper.appendChild(imgElement);
  });

  logosData.forEach(function (logoSrc) {
    var imgElement = document.createElement("img");
    imgElement.src = logoSrc;
    imgElement.alt = "Client Logo";
    customersWrapper.appendChild(imgElement);
  });

  var lastImgElement = customersWrapper.lastChild;
  if (lastImgElement) {
    customersWrapper.removeChild(lastImgElement);
  }

  var meetAllCustomersLink = document.createElement("a");
  meetAllCustomersLink.classList.add("link_normal");
  meetAllCustomersLink.href = "meet-customers-page.html";
  meetAllCustomersLink.textContent = "Meet all customers";

  var arrowImgElement = document.createElement("img");
  arrowImgElement.src = "icons/arrow.svg";
  arrowImgElement.alt = "Arrow Icon";
  meetAllCustomersLink.appendChild(arrowImgElement);

  customersWrapper.appendChild(meetAllCustomersLink);

  cardsData.forEach(function (card) {
    var outerDiv = document.createElement("div");
    outerDiv.classList.add("card");

    var innerDiv = document.createElement("div");
    innerDiv.classList.add("card__img");

    var imgElement = document.createElement("img");
    imgElement.src = card.imageSrc;
    imgElement.alt = "Card Image";
    innerDiv.appendChild(imgElement);

    var h3Element = document.createElement("h3");
    h3Element.textContent = card.title;
    outerDiv.appendChild(innerDiv);
    outerDiv.appendChild(h3Element);

    var pElement = document.createElement("p");
    pElement.textContent = card.description;
    outerDiv.appendChild(pElement);

    cardWrapper.appendChild(outerDiv);
  });

  helpingData.forEach(function (logo) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");

    var imgElement = document.createElement("img");
    imgElement.src = logo.imageSrc;
    imgElement.alt = "Logo Image";
    cardElement.appendChild(imgElement);

    var textWrapper = document.createElement("div");
    textWrapper.classList.add("card__text_wrapper");

    var h3Element = document.createElement("h3");
    h3Element.textContent = logo.title;
    textWrapper.appendChild(h3Element);

    var pElement = document.createElement("p");
    pElement.textContent = logo.description;
    textWrapper.appendChild(pElement);

    cardElement.appendChild(textWrapper);

    helpingWrapper.appendChild(cardElement);
  });

  communityData.forEach(function (cardData) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");

    var imgElement = document.createElement("img");
    imgElement.src = cardData.imageUrl;
    imgElement.alt = "Card Image";
    cardElement.appendChild(imgElement);

    var textDiv = document.createElement("div");

    var pElement = document.createElement("p");
    pElement.textContent = cardData.textContent;
    textDiv.appendChild(pElement);

    var aElement = document.createElement("a");
    aElement.classList.add("link_normal");
    aElement.textContent = "Read More";
    textDiv.appendChild(aElement);

    var arrowImgElement = document.createElement("img");
    arrowImgElement.src = "icons/arrow.svg";
    arrowImgElement.alt = "Arrow Icon";
    aElement.appendChild(arrowImgElement);

    cardElement.appendChild(textDiv);

    communityWrapper.appendChild(cardElement);
  });

  var splideList = document.getElementById("splide");

  for (var i = 0; i < 3; i++) {
    var li = document.createElement("li");
    li.className = "splide__slide";

    var content =
      '<div class="wrapper"> \
        <div class="hero__text_wrapper"> \
          <h2>Lessons and insights<br /><span>from 8 years</span></h2> \
          <p> \
            Where to grow your business as a photographer: site or \
            social media? \
          </p> \
          <button class="button_medium">Register</button> \
        </div> \
        <div><img src="img/hero.svg" alt="hero" /></div> \
      </div>';

    li.innerHTML = content;

    splideList.appendChild(li);
  }

  const splide = new Splide(".splide", {
    classes: {
      page: "splide__pagination__page splide__pagination__page--custom",
    },
  });

  splide.mount();
});
