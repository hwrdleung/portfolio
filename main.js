/*  Mobile main nav menu button */
let mobileNavBtn = document.getElementById("mobile-nav-btn");
let navMobile = document.getElementById("nav-mobile");
let showMobileNavMenu = false;

mobileNavBtn.addEventListener("click", function () {
  toggleMobileNavMenu();
});

navMobile.addEventListener("click", function () {
  toggleMobileNavMenu();
});

function toggleMobileNavMenu() {
  showMobileNavMenu = !showMobileNavMenu;

  if (showMobileNavMenu) {
    navMobile.style.top = "45px";
  } else if (!showMobileNavMenu) {
    navMobile.style.top = "-200px";
  }
}

/*  Mobile work nav menu */
let workMobileNavBtn = document.getElementById('work-mobile-nav-btn');
let workMenu = document.getElementById('work-menu');
let showWorkMobileNavMenu = false;

workMobileNavBtn.addEventListener('click', function () {
  console.log('click');
  toggleWorkMobileNavMenu();
});

workMenu.addEventListener('click', function () {
  console.log('click');
  toggleWorkMobileNavMenu();
});

function toggleWorkMobileNavMenu() {
  showWorkMobileNavMenu = !showWorkMobileNavMenu;

  if (showWorkMobileNavMenu) {
    workMenu.style.top = "50px";
  } else if (!showWorkMobileNavMenu) {
    workMenu.style.top = "-500px";
  }
}

/*  My work slide show viewer */

// Define classes
class Project {
  constructor(name) {
    this.name = name;
    this.currentSlideIndex = 0;
    this.slides = [];
    this.codepenLink = "";
    this.githubLink = "";
    this.herokuLink = "";
    this.squarespaceLink = "";
  }

  addNewSlide(imagePath, description) {
    let newSlide = new Slide(imagePath, description);
    this.slides.push(newSlide);
  }

  setProperty(propertyName, propertyValue) {
    this[propertyName] = propertyValue;
  }

  getProperty(propertyName) {
    return this[propertyName];
  }
}

class Slide {
  constructor(imagePath, description) {
    this.imagePath = imagePath;
    this.description = description;
  }

  setProperty(propertyName, propertyValue) {
    this[propertyName] = propertyValue;
  }

  getProperty(propertyName) {
    return this[propertyName];
  }
}

// Global variables
let projects = [];
let currentProjectIndex = 0;

// Functionality for nextSlide and prevSlide icons
let prevSlideIcon = document.getElementById("prev-slide-icon");
let nextSlideIcon = document.getElementById("next-slide-icon");

prevSlideIcon.addEventListener("click", function () {
  if (projects[currentProjectIndex].currentSlideIndex > 0) {
    projects[currentProjectIndex].currentSlideIndex--;
    refreshWorkContent();
  }
});

nextSlideIcon.addEventListener("click", function () {
  if (
    projects[currentProjectIndex].currentSlideIndex <
    projects[currentProjectIndex].slides.length - 1
  )
    projects[currentProjectIndex].currentSlideIndex++;
  refreshWorkContent();
});

function refreshWorkContent() {
  renderImage();
  renderTextElements();
  renderSlideIndicator();
  renderProjectLinks();
}

function renderWorkMenu() {
  // Work menu is a list of buttons labled by project title
  let workMenu = document.getElementById("work-menu");

  projects.forEach(function (project, index) {
    let newProjectLink = document.createElement("BUTTON");
    newProjectLink.id = "project-link-" + index;
    newProjectLink.innerHTML = project.name;
    newProjectLink.addEventListener("click", function () {
      // Remove background from current selcted project link
      let currentSelection = document.getElementById(
        "project-link-" + currentProjectIndex
      );
      currentSelection.style.backgroundColor = "transparent";

      currentProjectIndex = index;
      // Set background color on newly selected project link
      let newSelection = document.getElementById(
        "project-link-" + currentProjectIndex
      );
      newSelection.style.backgroundColor = "blue";
      refreshWorkContent();
    });
    workMenu.appendChild(newProjectLink);
  });

  // Set background color for onload
  let currentSelection = document.getElementById(
    "project-link-" + currentProjectIndex
  );
  currentSelection.style.backgroundColor = "blue";
}

function renderTextElements() {
  // Text elements are located in the project description box
  // This includes the title, and text of the project
  let descriptionTextbox = document.getElementById("work-description-textbox");
  let currentProject = projects[currentProjectIndex];
  let currentSlideIndex = projects[currentProjectIndex].currentSlideIndex;

  // Clear old description and set new description
  descriptionTextbox.innerHTML = "";
  let description = currentProject.slides[currentSlideIndex].description;
  let textNode = document.createTextNode(description);
  let pElement = document.createElement("P");
  pElement.appendChild(textNode);
  descriptionTextbox.appendChild(pElement);

  // Render project title
  let projectName = document.createElement("H2");
  let projectNameTextNode = document.createTextNode(currentProject.name);
  projectName.appendChild(projectNameTextNode);
  let projectNameContainer = document.getElementById("project-name-container");
  projectNameContainer.innerHTML = "";
  projectNameContainer.appendChild(projectName);
}

function renderImage() {
  let imgContainer = document.getElementById("work-img-container");
  let currentProject = projects[currentProjectIndex];
  let currentSlideIndex = projects[currentProjectIndex].currentSlideIndex;
  // Clear old image and set new image
  imgContainer.innerHTML = "";
  let imgElement = document.createElement("IMG");
  imgElement.src = currentProject.slides[currentSlideIndex].imagePath;
  imgContainer.appendChild(imgElement);
}

function renderSlideIndicator() {
  let currentProject = projects[currentProjectIndex];
  let currentSlideIndex = projects[currentProjectIndex].currentSlideIndex;

  let circle = document.createElement("I");
  circle.classList.add("far");
  circle.classList.add("fa-xs");
  circle.classList.add("fa-circle");

  let circleFilled = document.createElement("I");
  circleFilled.classList.add("fas");
  circleFilled.classList.add("fa-xs");
  circleFilled.classList.add("fa-circle");

  let slideIndicatorContainer = document.getElementById(
    "slide-indicator-container"
  );
  slideIndicatorContainer.innerHTML = "";

  currentProject.slides.forEach(function (slide, index) {
    if (index !== currentSlideIndex) {
      slideIndicatorContainer.appendChild(circle.cloneNode(true));
    } else if (index === currentSlideIndex) {
      slideIndicatorContainer.appendChild(circleFilled);
    }
  });
}

function renderProjectLinks() {
  let linksContainer = document.getElementById("work-links-container");
  let currentProject = projects[currentProjectIndex];
  linksContainer.innerHTML = "";

  if (currentProject.codepenLink) {
    let codepenIcon = document.createElement("IMG");
    codepenIcon.src = "assets/icons/codepen.svg";
    codepenIcon.className = "work-link-icon";

    let caption = document.createTextNode("Source code/Full Project");

    let codepenLink = document.createElement("A");
    codepenLink.href = currentProject.codepenLink;
    codepenLink.target = "__blank";

    codepenLink.appendChild(codepenIcon);
    codepenLink.appendChild(caption);
    linksContainer.appendChild(codepenLink);
  }

  if (currentProject.githubLink) {
    let githubIcon = document.createElement("IMG");
    githubIcon.src = "assets/icons/github.svg";
    githubIcon.className = "work-link-icon";

    let caption = document.createTextNode("Source code");

    let githubLink = document.createElement("A");
    githubLink.href = currentProject.githubLink;
    githubLink.target = "__blank";

    githubLink.appendChild(githubIcon);
    githubLink.appendChild(caption);
    linksContainer.appendChild(githubLink);
  }

  if (currentProject.herokuLink) {
    let herokuIcon = document.createElement("IMG");
    herokuIcon.src = "assets/icons/heroku.svg";
    herokuIcon.className = "work-link-icon";

    let caption = document.createTextNode("Full Project");

    let herokuLink = document.createElement("A");
    herokuLink.href = currentProject.herokuLink;
    herokuLink.target = "__blank";

    herokuLink.appendChild(herokuIcon);
    herokuLink.appendChild(caption);
    linksContainer.appendChild(herokuLink);
  }

  if (currentProject.squarespaceLink) {
    let squarespaceLink = document.createElement("A");
    squarespaceLink.href = currentProject.squarespaceLink;
    squarespaceLink.target = "__blank";

    let caption = document.createTextNode("Full Project");

    let squarespaceIcon = document.createElement("IMG");
    squarespaceIcon.src = "assets/icons/squarespace.svg";
    squarespaceIcon.className = "work-link-icon";

    squarespaceLink.appendChild(squarespaceIcon);
    squarespaceLink.appendChild(caption);
    linksContainer.appendChild(squarespaceLink);
  }
}

/*  Create projects here */

// PROJECT: SPF BOOST
let spfBoost = new Project("SPF Boost");
spfBoost.setProperty(
  "squarespaceLink",
  "https://www.spfboost.com/"
);

// Slide 1
let spfBoostImg1 = "assets/project_images/spf01.jpg";
let spfBoostText1 =
  `Jess, a graphic designer, wanted to implement some additional design touches to a Squarespace website which her theme's settings did not allow.  She provided me with mockups of her envisioned finished product, and I added the custom CSS necessary to make it happen.  We worked together to deliver an end-product to her client that was pixel-perfect and responsive to all screen sizes.`;
spfBoost.addNewSlide(spfBoostImg1, spfBoostText1);

// Slide 2
let spfBoostImg2 = "assets/project_images/spf02.jpg";
spfBoost.addNewSlide(spfBoostImg2, spfBoostText1);

// Slide 3
let spfBoostImg3 = "assets/project_images/spf03.jpg";
spfBoost.addNewSlide(spfBoostImg3, spfBoostText1);

// Slide 4
let spfBoostImg4 = "assets/project_images/spf04.jpg";
spfBoost.addNewSlide(spfBoostImg4, spfBoostText1);

// PROJECT: GAMETRADER
let gameTrader = new Project("Gametrader");
gameTrader.setProperty("githubLink", "https://github.com/hwrdleung/gametrade");
gameTrader.setProperty("herokuLink", "https://gametrader.herokuapp.com");

// Slide 1
let gameTraderImg1 = "assets/project_images/gametrader01.jpg";
let gameTraderText1 =
  "Gametrader is a personal project that I created to practice full-stack web development. It's a web application built with the MEAN stack that manages a mock video game trading club. Its users can view other users' video game collections, initiate trade requests, and post reviews on other users' public profile pages.";
gameTrader.addNewSlide(gameTraderImg1, gameTraderText1);

// Slide 2
let gameTraderImg2 = "assets/project_images/gametrader02.jpg";
let gameTraderText2 =
  "Gametrader has a simple and intuitive UI, a consistent color theme throughout the app, and a fully responsive layout that makes efficient use of smaller screen sizes.";
gameTrader.addNewSlide(gameTraderImg2, gameTraderText2);

// Slide 3
let gameTraderImg3 = "assets/project_images/gametrader03.jpg";
let gameTraderText3 =
  "It also has a fully functioning registration and login system with form validations. Form validations help the user along as the forms are being filled out while ensuring that all data sent to the server is formatted properly. Once registered, users are able to edit their account information and privacy options in their account settings.";
gameTrader.addNewSlide(gameTraderImg3, gameTraderText3);

// Slide 4
let gameTraderImg4 = "assets/project_images/gametrader04.jpg";
let gameTraderText4 =
  "Every user has a dashboard where they can manage their trade activity. Here, users can accept and deny incoming trade requests, view and cancel outgoing trade requests, keep track of who they have traded their games to, and see whose games they have not yet returned.";
gameTrader.addNewSlide(gameTraderImg4, gameTraderText4);

// Slide 5
let gameTraderImg5 = "assets/project_images/gametrader05.jpg";
let gameTraderText5 =
  "Every user gets a profile page which displays their video game collection and reviews posted by other users. Profile pages are only accessible to registered users.";
gameTrader.addNewSlide(gameTraderImg5, gameTraderText5);

// PROJECT: TWITCH STREAMERS
let twitchStreamers = new Project("Twitch Streamers");
twitchStreamers.setProperty(
  "codepenLink",
  "https://codepen.io/noodles01/full/EbxgqB/"
);

// Slide 1
let twitchStreamersImg1 = "assets/project_images/twitch01.jpg";
let twitchStreamersText1 =
  "Twitch Streamers is a front-end client which uses JQuery to fetch data from twitch.com's API. It then displays that data in a user-friendly interface with HTML and CSS.  The UI allows its users to sort streamers by online, offline, or both. Users can also get updated information by clicking the 'refresh' button. Clicking on a streamer's username opens that streamer's twitch channel in a new browser tab.";
twitchStreamers.addNewSlide(twitchStreamersImg1, twitchStreamersText1);

// PROJECT: JAVASCRIPT CALCULATOR
let calculator = new Project("Javascript Calculator");
calculator.setProperty(
  "codepenLink",
  "https://codepen.io/noodles01/full/qovaLb/"
);

// Slide 1
let calculatorImg1 = "assets/project_images/calculator01.jpg";
let calculatorText1 =
  "Javascript Calculator is a basic calculator that I coded with HTML, CSS, and Javascript. It has all the functionalities of a typical calculator: add, subtract, multiply, divide, decimals, and negatives. It also has a responsive UI and switches into full-screen mode when viewed on a mobile device.";
calculator.addNewSlide(calculatorImg1, calculatorText1);

// PROJECT: SIMON
let simon = new Project("Simon");
simon.setProperty("codepenLink", "https://codepen.io/noodles01/full/JOZxxo/");

// Slide 1
let simonImg1 = "assets/project_images/simon01.jpg";
let simonText1 =
  "Test your memory by repeating the color sequence that Simon shows you! Each new level adds another color to the sequence. Be careful in strict mode--mistakes will bring you back to level 1! Make it to level 20 to beat the game. Simon is a personal project that I created to practice HTML, CSS, and Javascript.";
simon.addNewSlide(simonImg1, simonText1);

// PROJECT: POMODORO CLOCK
let pomodoro = new Project("Pomodoro Clock");
pomodoro.setProperty(
  "codepenLink",
  "https://codepen.io/noodles01/full/Zxoxwy/"
);

// Slide 1
let pomodoroImg1 = "assets/project_images/pomodoro01.jpg";
let pomodoroText1 =
  "Pomodoro Clock is a personal project that I created using HTML, CSS, and Javascript. It functions just like a pomodoro timer--25 minute sessions with 5 minute breaks in between, and includes settings to adjust the alarm's volume, and change the durations of sesions and breaks.";
pomodoro.addNewSlide(pomodoroImg1, pomodoroText1);

// Push all projects projects array
projects.push(spfBoost);
projects.push(gameTrader);
projects.push(twitchStreamers);
projects.push(calculator);
projects.push(simon);
projects.push(pomodoro);

// Render all contents
renderWorkMenu();
refreshWorkContent();

// Contact section
let contactEmail = document.getElementById("contact-email");
let contactAlert = document.getElementById("contact-alert");
let copyText = document.getElementById("copyText");
let alertDuration = 1000;

contactEmail.addEventListener("click", function () {
  copyText.value = "hwrdleung@gmail.com";
  copyText.select();
  document.execCommand("copy");

  contactAlert.style.opacity = "1";
  setTimeout(function () {
    contactAlert.style.opacity = "0";
  }, alertDuration);
});
