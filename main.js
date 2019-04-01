import Project from './project.js';
import TextTyper from './textTyper.js';
import CodeViewer from './codeViewer.js';

// Resume viewer controller
let resumeLink = document.getElementById('resume-link');
let resumeViewerContainer = document.getElementById('resume-viewer');
let resumeViewerCloseBtn = document.getElementById('resume-viewer-close-btn');
let resumeViewerClosedPos = `-${resumeViewerContainer.clientWidth}px`;

// On page load, initialize resume viewer to 'closed' position
resumeViewerContainer.style.left = resumeViewerClosedPos;

resumeViewerCloseBtn.addEventListener('click', () => {
  resumeViewerContainer.style.left = resumeViewerClosedPos;
});

resumeLink.addEventListener('click', () => {
  if(codeViewerContainer.style.left === '0px') codeViewerContainer.style.left = codeViewerClosedPos;

  switch(resumeViewerContainer.style.left){
    case '0px' : resumeViewerContainer.style.left = resumeViewerClosedPos; break;
    case resumeViewerClosedPos : resumeViewerContainer.style.left = '0px'; break;
  }
});

// Code Viewer controller
let codeLink = document.getElementById('code-link');
let codeViewerContainer = document.getElementById('code-viewer');
let codeViewerCloseBtn = document.getElementById('code-viewer-close-btn');
let codeViewerClosedPos = `-${codeViewerContainer.clientWidth}px`

// On page load, initialize Code Viewer to 'closed' position
codeViewerContainer.style.left = codeViewerClosedPos;

codeViewerCloseBtn.addEventListener('click', () => {
  codeViewerContainer.style.left = codeViewerClosedPos;
})

codeLink.addEventListener('click', () => {
  if(resumeViewerContainer.style.left === '0px') resumeViewerContainer.style.left = resumeViewerClosedPos;

  switch(codeViewerContainer.style.left) {
    case '0px' : codeViewerContainer.style.left = codeViewerClosedPos; break;
    case codeViewerClosedPos : codeViewerContainer.style.left = '0px'; break;
  }
});

// Populate code Viewer with projects and render to DOM
let codeViewer = new CodeViewer(codeViewerContainer);

// codeViewer.addCodeProject({
//   name: "Test project",
//   html: ``,
//   css: ``,
//   js: ``
// });

codeViewer.addCodeProject({
  name: "Test project2",
  html: ``,
  css: ``,
  js: `https://gist.github.com/hwrdleung/589c48ad5bf022c32f03ae9179b564fe.js`
});

codeViewer.render();

const splashIcons = Array.from(document.getElementsByClassName('icon'));
const splashTyperContainer = document.getElementById('typer-container');
let splashTyper = new TextTyper(splashTyperContainer, 50);

// UI effects for splash section
splashTyper.type('Web Developer');

splashIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    // Identify icon by using classList
    let classList = Array.from(icon.classList);
    if(classList.includes('fa-node')) splashTyper.type('NodeJS');
    if(classList.includes('fa-html5')) splashTyper.type('HTML5');
    if(classList.includes('fa-css3-alt')) splashTyper.type('CSS3');
    if(classList.includes('fa-js')) splashTyper.type('Javascript');
    if(classList.includes('jquery')) splashTyper.type('JQuery');
    if(classList.includes('bootstrap')) splashTyper.type('Bootstrap');
    if(classList.includes('fa-angular')) splashTyper.type('Angular');
    if(classList.includes('mongodb')) splashTyper.type('MongoDB');
  })

  icon.addEventListener('mouseleave', () => {
    splashTyper.clear();
    splashTyper.type('Web Developer');
  })
})

// Create and render Projects
const projectsContainer = document.getElementById('projects-container');
// Project: GameTrader
let gameTrader = new Project('GameTrader');
gameTrader.setGithub('https://www.github.com/hwrdleung/gametrade');
gameTrader.setProjectLink('https://gametrader.herokuapp.com/');

let text = `GameTrader is a full-stack CRUD application that manages a mock video game trading club.  Its users can publicly list their video games and initiate "trade requests" with other users.  GameTrader helps its users keep track of their trade activity and connect with other gamers.
`;
gameTrader.addPage('assets/project_images/gametrader01.jpg', text);

text = `GameTrader requires its users to register, and has a functioning registration system that secures sensitive data--passwords are never saved in plain-text and email addresses are only displayed with the user's permission.
`;
gameTrader.addPage('assets/project_images/gametrader03.jpg', text);

text = `The "My Trades" dashboard is where all trade-related activity is displayed.  It's divided into four sections:  "Incoming Trades", "Outgoing Requests", "Active Trades", and "Trade History".  When users recieve an incoming trade request, they can accept the request by choosing a game from the initiator.  The trade then moves to the "Active Trades" section.  All activity is logged in the "Trade History".
`;
gameTrader.addPage('assets/project_images/gametrader04.jpg', text);

text = `All users have a profile page where other users can view their video game collection, initiate trade requests, and post reviews of their trading experience.  To avoid discrepencies, profile pages only display games that are available for trade.
`;
gameTrader.addPage('assets/project_images/gametrader05.jpg', text);

text = `GameTrader is a personal project that I created to practice full-stack web development, and to learn more about how the front-end, the back-end, and the database all work together to deliver a positive user experience.  It was built with an Angular front-end, a NodeJS back-end, and a MongoDB database.  In addition, it fetches video game data and images from igdb.com's video game database API.  
`;
gameTrader.addPage('assets/project_images/gametrader02.jpg', text);


// Project: Creative Studio
let creativeStudio = new Project('Creative Studio');
creativeStudio.setGithub('https://www.github.com/hwrdleung/deckbuilder2');
creativeStudio.setProjectLink('https://deckbuilder2.herokuapp.com/');

text = `Creative Studio is a presentation-builder single-page-application that brings Google Fonts library, Pixabay image search, image editing, and the browser's CSS styling capabilities conveniently into one place.  Presentations can be saved online for later access, or exported to PNG and PSD formats.`;
creativeStudio.addPage('assets/project_images/creativeStudio01.jpg', text);

text= `Creative Studio serves as a sandbox where users can fine-tune their font styles and perform image manipulation as they create their slides.  Users can also save their font and image styles as presets, which can be re-used throughout their presentation.`;
creativeStudio.addPage('assets/project_images/creativeStudio02.jpg', text);

text = `Creative Studio's front-end was built with Angular, and the back-end was built with NodeJS.  Users' account and project data saves to a MongoDB database while images are stored and served via Google Firebase Storage.`;
creativeStudio.addPage('assets/project_images/creativeStudio03.jpg', text);

text = `Other libraries and API's include: 
<ul>
  <li>HTML2CANVAS for conversion of HTML to images</li>
  <li>jsPDF for conversion of images to PDF</li>
  <li>CamanJS for image manipulation</li>
  <li>Pixabay image search API</li>
  <li>Google Fonts API</li>
</ul>`;
creativeStudio.addPage('assets/project_images/creativeStudio04.jpg', text);

text = `Creative Studio is a personal project that I created to gain a better understanding of object-oriented programming, MVC architecture, and modular code.  Working on this project has also taught me about state management, asynchronous Javascript, and the importance of planning before writing any code.`;
creativeStudio.addPage('assets/project_images/creativeStudio05.jpg', text);

// Project: SPF Boost
let spfBoost = new Project('spfboost.com');
spfBoost.setProjectLink('https://www.spfboost.com/');

text = `spfboost.com is a Squarespace website that <a href="https://www.jesslikes.work/">Jess</a>, graphic designer, created for her client.  She had an envisioned finished product for the website, but the theme's default options made it difficult to achieve.  For this project, Jess provided me with PSD mockups of her design, and I was responsible for implementing her design by modifying the website's "Custom CSS".`;
spfBoost.addPage('assets/project_images/spf01.jpg', text);
spfBoost.addPage('assets/project_images/spf02.jpg', text);
spfBoost.addPage('assets/project_images/spf03.jpg', text);
spfBoost.addPage('assets/project_images/spf04.jpg', text);

// Render Projects
creativeStudio.render(projectsContainer);
gameTrader.render(projectsContainer);
spfBoost.render(projectsContainer);



