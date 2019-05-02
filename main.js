import ProjectViewer from './models/projectViewer.js';
import TextTyper from './models/textTyper.js';
import CodeViewer from './models/codeViewer.js';
import codeSamples from './data/codeSamples.js';
import codeProjects from './data/codeProjects.js';

let bodyScrollController = {
  currentScrollPosition: 0,
  disable() {
    this.currentScrollPosition = window.scrollY;

    document.body.classList.add('no-scroll');
    document.body.style.top = '-' + this.currentScrollPosition + 'px';
  },
  enable() {
    this.currentScrollPosition;
    document.body.classList.remove('no-scroll');

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, this.currentScrollPosition);
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}

// Copy email link controller
let copyEmailLink = document.getElementById('copy-email-link');
let copyEmailInput = document.getElementById('copy-email-input');
let emailTyper = new TextTyper(copyEmailLink, 20);

copyEmailLink.addEventListener('click', () => {
  copyEmailInput.select();
  document.execCommand("copy");

  emailTyper.typeText('Copied');
  setTimeout(() => {
    emailTyper.clear();
    copyEmailLink.innerHTML = "Copy<br>Email";
  }, 1500);
});

// Splash section TextTyper controller
const splashIcons = Array.from(document.getElementsByClassName('icon'));
const splashTyperContainer = document.getElementById('typer-container');
const defaultText = 'Web Developer';
let splashTyper = new TextTyper(splashTyperContainer, 50);

// Initialize splashTyperContainer on page load
splashTyper.typeText(defaultText);

splashIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    // Identify icon by using classList
    let classList = Array.from(icon.classList);
    if (classList.includes('fa-node')) splashTyper.typeText('NodeJS');
    if (classList.includes('fa-html5')) splashTyper.typeText('HTML5');
    if (classList.includes('fa-css3-alt')) splashTyper.typeText('CSS3');
    if (classList.includes('fa-js')) splashTyper.typeText('Javascript');
    if (classList.includes('jquery')) splashTyper.typeText('jQuery');
    if (classList.includes('bootstrap')) splashTyper.typeText('Bootstrap');
    if (classList.includes('fa-angular')) splashTyper.typeText('Angular');
    if (classList.includes('mongodb')) splashTyper.typeText('MongoDB');
  });

  icon.addEventListener('mouseleave', () => {
    splashTyper.typeText(defaultText);
  });
});

// Pop-out Resume viewer controller
const resumeLink = document.getElementById('resume-link');
const resumeViewerContainer = document.getElementById('resume-viewer');
const resumeViewerCloseBtn = document.getElementById('resume-viewer-close-btn');
const resumeViewerClosedPos = '-' + resumeViewerContainer.offsetWidth * 3 + 'px';

// On page load, initialize resume viewer to 'closed' position
resumeViewerContainer.style.left = resumeViewerClosedPos;

resumeViewerCloseBtn.addEventListener('click', () => {
  resumeViewerContainer.style.left = resumeViewerClosedPos;
  bodyScrollController.enable();
});

resumeLink.addEventListener('click', () => {
  // Close codeViewer if it is open
  if (codeViewerContainer.style.left === '0px') {
    codeViewerContainer.style.left = codeViewerClosedPos;
    bodyScrollController.enable();
  }

  // Toggle resumeViewer position between opened and closed
  switch (resumeViewerContainer.style.left) {
    case '0px':
      resumeViewerContainer.style.left = resumeViewerClosedPos;
      bodyScrollController.enable();
      break;
    case resumeViewerClosedPos:
      resumeViewerContainer.style.left = '0px';
      bodyScrollController.disable();
      break;
  }
});

// Pop out Code Viewer controller
const codeLink = document.getElementById('code-link');
const codeViewerContainer = document.getElementById('code-viewer');
const codeViewerCloseBtn = document.getElementById('code-viewer-close-btn');
const codeViewerClosedPos = '-' + codeViewerContainer.offsetWidth * 3 + 'px';
let codeViewer = new CodeViewer();

// On page load, initialize Code Viewer to 'closed' position
codeViewerContainer.style.left = codeViewerClosedPos;

codeViewerCloseBtn.addEventListener('click', () => {
  codeViewerContainer.style.left = codeViewerClosedPos;
  bodyScrollController.enable();
});

codeLink.addEventListener('click', () => {
  // Close resumeViewer if it is open
  if (resumeViewerContainer.style.left === '0px') {
    resumeViewerContainer.style.left = resumeViewerClosedPos;
    bodyScrollController.enable();
  }

  // Toggle codeViewer position between opened and closed
  switch (codeViewerContainer.style.left) {
    case '0px':
      codeViewerContainer.style.left = codeViewerClosedPos;
      bodyScrollController.enable();
      break;
    case codeViewerClosedPos:
      codeViewerContainer.style.left = '0px';
      bodyScrollController.disable();
      break;
  }
});

// Populate CodeViewer with data from imported array: codeSamples and render to DOM
codeSamples.forEach(codeSampleData => {
  codeViewer.addCodeProject(codeSampleData);
});

codeViewer.renderTo(codeViewerContainer);

// Create and render Projects for 'My Work' section using data from imported array: codeProjects
const projectsContainer = document.getElementById('projects-container');

codeProjects.forEach(projectData => {
  let newProject = new ProjectViewer(projectData.name);

  if (projectData.github) newProject.setGithub(projectData.github);
  if (projectData.projectLink) newProject.setProjectLink(projectData.projectLink);
  if (projectData.codepen) newProject.setCodepen(projectData.codepen);

  projectData.pages.forEach(page => {
    newProject.addPage(page.imageUrl, page.text);
  });

  newProject.renderTo(projectsContainer);
});




