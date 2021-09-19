export default [
    {
        "name": "Portfolio Source Code",
        "html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Howard Leung | Portfolio</title>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link rel="stylesheet" type="text/css" href="style.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
      crossorigin="anonymous"
    />
    <link rel="icon" type="image/png" href="assets/icons/favicon.png" />
    <link rel="stylesheet" href="codemirror/lib/codemirror.css" /> 
  </head>

  <body>
    <nav class="flex-row-right">
      <a href="#about-me">About Me</a>
      <a href="#my-work">Projects</a>
      <a href="#contact-links">Contact/Links</a>
    </nav>

    <section id="splash">
      <h1 id="name">Howard Leung</h1>

      <div id="splash-textbox" class="flex-center">
        <span id="typer-container">
          <!--TextTyper renders here-->
        </span>

        <span id="cursor">|</span>
      </div>

      <div class="icons-container flex-row-evenly">
        <span class="icon-row flex-row-evenly">
          <i class="fab icon fa-4x fa-html5"></i>
          <i class="fab icon fa-4x fa-css3-alt"></i>
          <i class="fab icon fa-4x fa-js"></i>
        </span>

        <span class="icon-row flex-row-evenly">
          <i class="fab icon fa-4x fa-react"></i>
          <i class="fab icon fa-4x fa-node"></i>
          <img class="icon mongodb" src="assets/icons/mongodb.svg" />
        </span>
      </div>
    </section>

    <section id="welcome">
      <h2>Hello and welcome to my portfolio!</h2>
    </section>

    <section id="about-me">
      <div class="flex-row-evenly">
        <span><img src="assets/laptop_bg.jpg" /></span>

        <div id="about-me-text">
          <h2>About Me</h2>
          <p>
            I'm a self-taught coder with experience in HTML, CSS, Javascript, React, NodeJS/Express, and MongoDB. By
            working on full-stack personal projects, I have gained insight into various aspects of web development, to
            include: idea and conception, wire-frames and planning, front-end code, back-end code, UI/UX design, copy
            and writing, and deployment procedures. What I enjoy most about web development is learning many different
            skillsets and putting them all together to create a cohesive, finished product.
          </p>
        </div>
      </div>

      <div id="skillset">
        <h2>My Skill Set:</h2>

        <ul>
          <li>Web Development fundamentals: HTML, CSS, and Javascript (ES6)</li>
          <li>React/Redux, NodeJS/Express, MongoDB</li>
          <li>Development of full-stack CRUD application from design to deployment</li>
          <li>Implementation of external libraries and API's</li>
          <li>NPM, Git, Github</li>
          <li>Debugging and problem solving</li>
          <li>Asynchronous Javascript</li>
          <li>Mobile-friendly layouts</li>
        </ul>
      </div>
    </section>

    <section id="my-work">
      <h2>Projects</h2>

      <div id="projects-container">
        <!--Render projects here from main.js-->
      </div>
    </section>

    <section id="contact-links">
      <h2>Contact / Links</h2>

      <a id="mailto-link" href="mailto:hwrdleung@gmail.com">hwrdleung@gmail.com</a>

      <div id="links-container">
        <a id="copy-email-link">Copy<br />Email</a>
        <a id="github-link" href="https://github.com/hwrdleung" target="__blank">Github</a>
        <a id="resume-link">Resume</a>
        <a id="code-link">Code Samples</a>
      </div>

      <input type="text" value="hwrdleung@gmail.com" id="copy-email-input" style="opacity: 0" />
    </section>

    <div id="code-viewer" class="pop-out">
      <div class="flex-row-between pop-out-top-bar">
        <h1>Code Samples</h1>
        <button id="code-viewer-close-btn" class="pop-out-close-btn"><i class="fas fa-2x fa-times"></i></button>
      </div>
      <!-- Render code viewer here -->
    </div>

    <div id="resume-viewer" class="pop-out flex-center">
      <div class="flex-row-between pop-out-top-bar">
        <h1>Resume</h1>
        <button id="resume-viewer-close-btn" class="pop-out-close-btn"><i class="fas fa-2x fa-times"></i></button>
      </div>

      <iframe src="assets/Howard_Leung_Resume.pdf"></iframe>
    </div>

    <script src="node_modules/prettier/standalone.js"></script>
    <script src="node_modules/prettier/parser-typescript.js"></script>
    <script src="node_modules/prettier/parser-postcss.js"></script>
    <script src="node_modules/prettier/parser-html.js"></script>
    <script src="codemirror/lib/codemirror.js"></script>
    <script src="codemirror/mode/javascript/javascript.js"></script>
    <script src="codemirror/mode/xml/xml.js"></script>
    <script src="codemirror/mode/css/css.js"></script>
    <script src="codemirror/mode/jsx/jsx.js"></script>
    <script type="module" src="main.js"></script>
  </body>
</html>
`,
        "css": `@import url('https://fonts.googleapis.com/css?family=Roboto|Montserrat|Rock+Salt');

        /* Define defaults-------- */
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-weight: normal;
            outline: none;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            color: #000;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            margin: 15px auto;
        }
        
        p {
            line-height: 1.5rem;
        }
        
        a {
            text-decoration: none;
            display: inline;
        }
        
        button:hover {
            cursor: pointer;
        }
        
        ul li {
            list-style-type: circle;
            line-height: 1.75rem;
        }
        
        section {
            width: 100%;
            height: auto;
            padding: 100px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        section>* {
            max-width: 1000px;
        }
        
        .no-scroll {
            position: fixed;
            overflow-y: scroll;
            width: 100%;
        }
        
        /*  Positioning classes-------- */
        
        .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .flex-row-left {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
        
        .flex-row-right {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }
        
        .flex-row-evenly {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
        
        .flex-row-between {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        
        /*----------------------------*/
        
        .pop-out {
            height: 100vh;
            width: 800px;
            position: fixed;
            top: 0px;
            left: -100%;
            z-index: 100;
            background: #FFF;
            transition: left 0.2s;
            box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
        }
        
        .pop-out-top-bar {
            width: 100%;
            height: auto;
            background: rgb(87, 87, 87);
        }
        
        .pop-out-top-bar h1 {
            font-size: 1.2rem;
            color: #FFF;
            margin: 0 10px;
        }
        
        .pop-out-close-btn {
            align-self: flex-end;
            width: 30px;
            height: 30px;
            font-size: 10px;
            background: transparent;
            transition: color 0.2s;
            color: #FFF;
            margin: 0;
            padding: 0;
            border: 0;
        }
        
        .pop-out-close-btn:hover {
            background: red;
            cursor: pointer;
        }
        
        /* Code viewer ------------------------*/
        
        #code-viewer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgb(34, 34, 34);
        }
        
        .cv-menu {
            justify-self: space-evenly;
            margin: 0 auto 10px auto;
            width: 100%;
            flex-wrap: wrap;
        }
        
        .cv-menu button {
            margin: 0 1px 1px 0;
            padding: 5px 30px;
            outline: none;
        }
        
        .cv-menu-unselected {
            background: rgb(78, 78, 78);
            color: rgb(170, 170, 170);
            border: 0;
            border-top: 4px transparent solid;
            border-bottom: 4px transparent solid;
        }
        
        .cv-menu-selected {
            background: rgb(56, 56, 56);
            color: rgb(255, 255, 255);
            border: 0;
            border-top: 4px transparent solid;
            border-bottom: 4px green solid;
        }
        
        .cv-view-btns-container {
            align-self: center;
            justify-self: flex-end;
        }
        
        .cv-view-btns-container button {
            margin: 0 1px;
            padding: 5px 30px;
            outline: none;
        }
        
        .cv-code-text-box {
            justify-self: flex-end;
            width: 100%;
            overflow: auto;
            flex: 1;
        }
        
        .CodeMirror {
            width: 100% !important;
            height: 100% !important;
            font-size: 1rem;
        }
        
        .cv-view-unselected {
            background: rgb(214, 214, 214);
            color: rgb(163, 163, 163);
            border: 0;
        }
        
        .cv-view-selected {
            background: rgb(255, 255, 255);
            color: rgb(0, 0, 0);
            border: 0;
        }
        
        /* Resume viewer ------------------------*/
        
        #resume-viewer {
            background: linear-gradient(300deg, rgb(168, 168, 168), rgb(216, 216, 216));
            flex-direction: column;
        }
        
        #resume-viewer iframe {
            width: 100%;
            height: auto;
            flex: 1;
            border: 0;
            margin: 0;
            padding: 0;
        }
        
        /*----------------------------*/
        
        nav {
            background: #000;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            max-width: 100vw;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
        }
        
        nav a {
            color: #FFF;
            padding: 10px 20px;
            transition: background 0.2s;
        }
        
        nav a:hover {
            background: #00F;
        }
        
        /*----------------------------*/
        
        #splash {
            min-height: 100vh;
            background: linear-gradient(60deg, rgba(0, 0, 0, 0.8), transparent, rgba(0, 0, 0, 0.8)), url('assets/crab.JPG');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        #name {
            color: #FFF;
            font-size: 4rem;
            line-height: 5rem;
            font-family: 'Rock Salt', cursive;
            text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
            margin-top: 50px;
        }
        
        #splash-textbox {
            font-family: 'Montserrat', sans-serif;
            color: rgb(255, 255, 255);
            font-size: 4rem;
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
            border: 7px #FFF solid;
            width: 700px;
            max-width: 90vw;
            height: 100px;
            text-align: center;
            margin-bottom: 75px;
        }
        
        #cursor {
            margin: 0;
            padding: 0;
            text-align: left;
            animation: 1s blink step-end infinite;
        }
        
        .icon {
            height: 55px;
            width: 55px;
            margin: 0 25px;
            filter: invert(100) drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
        }
        
        .icon:hover {
            margin-top: -20px;
        }
        
        .icon-row {
            max-width: 90vw;
            min-height: 50px;
            margin: 25px auto;
        }
        
        .icons-container {
            flex-wrap: wrap;
        }
        
        /*----------------------------*/
        
        #welcome {
            background: #00F;
            color: #FFF;
            height: 100px;
            padding: 0;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
            background: linear-gradient(rgba(0, 0, 255, 0.85), rgba(0, 0, 255, 0.85)), url('assets/code.jpg');
            background-attachment: fixed;
            background-size: cover;
        }
        
        /*----------------------------*/
        
        #about-me {
            background: linear-gradient(transparent, rgb(200, 239, 252));
        }
        
        #about-me img {
            max-width: 95vw;
            width: 200px;
            border-radius: 20px;
            margin: 25px 0 25px 25px;
        }
        
        #about-me>div {
            flex-direction: row;
        }
        
        #about-me-text {
            width: auto;
            max-width: 90vw;
            margin: 25px;
        }
        
        #skillset {
            margin: 25px auto;
        }
        
        #skillset ul {
            max-width: 90vw;
            column-count: 2;
            column-gap: 50px;
            margin: 0 auto 0 15px;
        }
        
        /*----------------------------*/
        
        #my-work {
            background: linear-gradient(rgb(200, 239, 252), transparent);
        }
        
        .project-container {
            height: auto;
            width: auto;
            display: flex;
            margin: 25px auto 100px auto;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        
        .image-container {
            width: 500px;
            max-width: 95vw;
            height: 350px;
            background: #000;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .image-container img {
            max-width: 100%;
            max-height: 100%;
        }
        
        .description-container {
            width: 500px;
            max-width: 95vw;
            height: 350px;
            background: #FFF;
            padding: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .project-title {
            font-size: 2rem;
        }
        
        .nav-container i {
            margin: 0 3px;
            color: silver;
            transition: color 0.2s;
        }
        
        .nav-container i:hover {
            cursor: pointer;
            color: blue;
        }
        
        .page-indicator-container i {
            color: silver;
            margiN: 0 3px;
        }
        
        .description-text {
            height: 60%;
            width: 90%;
            text-align: left;
            line-height: 1.5;
            margin-top: 10px;
        }
        
        .description-container ul {
            margin-left: 25px;
        }
        
        .description-container .links-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        
        .description-container .links-container a {
            font-size: 0.8rem;
            width: 100px;
            text-align: center;
            color: #FFF;
            background: blue;
            border-radius: 25px;
            padding: 5px;
            margin: 0 5px;
            text-decoration: none;
            transition: background 0.2s;
        }
        
        .description-container .links-container a:hover {
            background: green;
            cursor: pointer;
        }
        
        /*----------------------------*/
        
        #contact-links {
            min-height: 80vh;
            width: 100%;
            background: linear-gradient(rgb(255, 255, 255), transparent), url('assets/beach_water.JPG');
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        #links-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        
        #links-container a {
            height: 80px;
            width: 80px;
            max-width: 90vw;
            text-align: center;
            margin: 25px;
            border-radius: 50%;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('assets/code.jpg');
            background-attachment: fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            font-size: 1rem;
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
            transition: background 0.2s;
        }
        
        #links-container a:hover {
            background: linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.8)), url('assets/code.jpg');
            background-attachment: fixed;
            background-size: cover;
            cursor: pointer;
        }
        
        #mailto-link {
            font-size: 2rem;
            margin: 25px auto;
            color: #00F;
            transition: color 0.2s;
        }
        
        #mailto-link:hover {
            color: rgb(0, 100, 0);
        }
        
        @keyframes blink {
            from, to {
                color: transparent;
            }
            50% {
                color: #FFF;
            }
        }
        
        @media only screen and (max-width: 800px) {
            /* Defaults */
            section {
                padding: 50px 0;
            }
            #welcome h2 {
                font-size: 4vw;
            }
        
            nav {
                justify-content: center;
                align-items: center;
            }
        
            /* Splash */
            #name {
                font-size: 8vw;
                line-height: 9vw;
            }
            #splash-textbox {
                font-size: 8vw;
                height: 12vw;
                border: 1vw #FFF solid;
            }
            /* About me */
            #about-me>div {
                flex-wrap: wrap;
            }
            #about-me-text {
                width: 80vw;
            }
            #skillset ul {
                column-count: 1;
                width: 80vw;
            }
            .pop-out {
                width: 100vw;
                height: 100vh;
            }
        
        
        }
        
        @media only screen and (max-width: 450px) {
            /* Defaults */
            a, p, ul li {
                font-size: 0.9rem;
            }
            h2 {
                font-size: 1.9rem;
            }
            nav a {
                font-size: 0.8rem;
            }
            /* Splash */
            .icon {
                margin: 0 15px;
                height: 12vw;
                width: 12vw;
                font-size: 12vw !important;
            }
            /*  About me */
            #about-me img {
                margin: 25px 0;
            }
            /*  My Work */
            .project-title {
                font-size: 1.5rem;
            }
            .description-text, .description-text ul li {
                font-size: 0.8rem;
                line-height: 1.4;
            }
        
            .description-container,
            .image-container {
                height: 300px;
            }
        
            /* Code-viewer */
            .CodeMirror,    
            .cv-menu button,
            .cv-view-btns-container button {
                font-size: 0.7rem;
            }
        
                /* Contact */
                #mailto-link {
                    font-size: 7vw;
                }
        }
        `,
        "js": `import ProjectViewer from './models/projectViewer.js';
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
            if (classList.includes('fa-react')) splashTyper.typeText('React');
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
        `
    },
    {
        name: 'projectViewer.js',
        js: `
        export default class ProjectViewer {
            constructor(name) {
                this.name = name;
                this.github = '';
                this.codepen = '';
                this.projectLink = '';
                this.currentPage = 0;
                this.pages = [];
        
                this.projectContainer = document.createElement('div');
                this.imageContainer = document.createElement('div');
                this.descriptionContainer = document.createElement('div');
                this.pageIndicatorContainer = document.createElement('div');
                this.linksContainer = document.createElement('div');
                this.navContainer = document.createElement('div');
                this.projectTitle = document.createElement('h3');
                this.image = document.createElement('img');
                this.descriptionText = document.createElement('div');
                this.prevPageBtn = document.createElement('i');
                this.nextPageBtn = document.createElement('i');
                this.circle = document.createElement('i');
                this.circleFilled = document.createElement('i');
        
                this.projectTitle.innerText = this.name;
            }
        
            addPage(imageUrl, descriptionHTML) {
                let page = {
                    imageUrl: imageUrl,
                    descriptionText: descriptionHTML
                }
        
                this.pages.push(page);
            }
        
            setGithub(url) {
                this.github = url;
            }
        
            setCodepen(url) {
                this.codepen = url;
            }
        
            setProjectLink(url) {
                this.projectLink = url;
            }
        
            nextPage() {
                if (this.currentPage < this.pages.length - 1) {
                    this.currentPage++;
                    this.refresh();
                }
            }
        
            prevPage() {
                if (this.currentPage > 0) {
                    this.currentPage--;
                    this.refresh();
                }
            }
        
            refresh() {
                // This function changes the innerHTML for dynamic content
                // Set image.src and descriptionText
                this.image.src = this.pages[this.currentPage].imageUrl;
                this.descriptionText.innerHTML = this.pages[this.currentPage].descriptionText;
        
                // Set pageIndicator
                this.pageIndicatorContainer.innerHTML = '';
                for (let i = 0; i < this.pages.length; i++) {
                    if (i === this.currentPage) {
                        this.pageIndicatorContainer.appendChild(this.circleFilled.cloneNode(true));
                    } else {
                        this.pageIndicatorContainer.appendChild(this.circle.cloneNode(true));
                    }
                }
            }
        
            setClassNames() {
                this.descriptionText.classList.add('description-text');
                this.projectTitle.classList.add('project-title');
                this.projectContainer.classList.add('project-container');
                this.descriptionContainer.classList.add('description-container');
                this.imageContainer.classList.add('image-container');
                this.linksContainer.classList.add('links-container');
                this.pageIndicatorContainer.classList.add('page-indicator-container');
                this.navContainer.classList.add('nav-container');
                this.prevPageBtn.classList.add("far", "fa-2x", "fa-arrow-alt-circle-left");
                this.nextPageBtn.classList.add("far", "fa-2x", "fa-arrow-alt-circle-right");
                this.circle.classList.add("far", "fa-xs", "fa-circle");
                this.circleFilled.classList.add("fas", "fa-xs", "fa-circle");
            }
        
            initializeLinks() {
                if (this.github) {
                    let linkElement = document.createElement('a');
                    linkElement.href = this.github;
                    linkElement.target = '__blank';
                    linkElement.innerText = 'Github';
                    this.linksContainer.appendChild(linkElement);
                }
        
                if (this.codepen) {
                    let linkElement = document.createElement('a');
                    linkElement.href = this.codepen;
                    linkElement.target = '__blank';
                    linkElement.innerText = 'Codepen';
                    this.linksContainer.appendChild(linkElement);
                }
        
                if (this.projectLink) {
                    let linkElement = document.createElement('a');
                    linkElement.href = this.projectLink;
                    linkElement.target = '__blank';
                    linkElement.innerText = 'View Project';
                    this.linksContainer.appendChild(linkElement);
                }
            }
        
            initializeNavBtns() {
                this.prevPageBtn.addEventListener('click', () => { this.prevPage(); });
                this.nextPageBtn.addEventListener('click', () => { this.nextPage(); });
            }
        
            renderTo(htmlElement) {
                // This function handles the initial render to the DOM
                this.initializeNavBtns();
                this.initializeLinks();
                this.setClassNames();
        
                // Append all elements
                this.imageContainer.appendChild(this.image);
                this.navContainer.appendChild(this.prevPageBtn);
                this.navContainer.appendChild(this.nextPageBtn);
                this.descriptionContainer.appendChild(this.projectTitle);
                this.descriptionContainer.appendChild(this.navContainer);
                this.descriptionContainer.appendChild(this.pageIndicatorContainer);
                this.descriptionContainer.appendChild(this.descriptionText);
                this.descriptionContainer.appendChild(this.linksContainer);
                this.projectContainer.appendChild(this.imageContainer);
                this.projectContainer.appendChild(this.descriptionContainer);
                htmlElement.appendChild(this.projectContainer);
        
                // Refresh dynamic content
                this.refresh();
            }
        }
        `
    },
    {
        name: 'textTyper.js',
        js: `
        export default class TextTyper {
            constructor(htmlElement, interval) {
                this.htmlElement = htmlElement;
                this.interval = interval;
            }
        
            typeText(str) {
                // Call clear() to prevent redundant setIntervals
                this.clear();
                let i = 0;
        
                // Append each letter of str to htmlElement
                this.typer = setInterval(() => {
                    let textNode = document.createTextNode(str.charAt(i));
                    this.htmlElement.appendChild(textNode);
                    i++;
        
                    if (i === str.length) clearInterval(this.typer);
                }, this.interval);
            }
        
            clear() {
                this.htmlElement.innerText = '';
                clearInterval(this.typer);
            }
        }`
    },
    {
        "name": "React container component",
        "js": `import React from "react";
        import { connect } from "react-redux";
        import FormEditStoreData from "./FormEditStoreData";
        import FormEditHours from "./FormEditHours";
        import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
        import { faTimes } from "@fortawesome/free-solid-svg-icons";
        import { updateBusinessHours, updateStatus, updateContactInfo, updateLogo } from "../../state-management/actions";
        import "../style.css";
        import StoreInfo from "./StoreInfo";
        import StoreStatus from "./StoreStatus";
        import BusinessHours from "./BusinessHours";
        import SalesChart from "./SalesChart";
        import SalesStats from "./SalesStats";
        import PopularProducts from "./PopularProducts";
        import moment from "moment";
        import LogoUploader from "./LogoUploader";
        
        const mapStateToProps = (state) => ({
          ...state,
        });
        
        const mapDispatchToProps = (dispatch) => ({
          updateBusinessHours: (formData) => dispatch(updateBusinessHours(formData)),
          updateStatus: (formData) => dispatch(updateStatus(formData)),
          updateContactInfo: (formData) => dispatch(updateContactInfo(formData)),
          updateLogo: (imageData) => dispatch(updateLogo(imageData)),
        });
        
        class ViewOverview extends React.PureComponent {
          constructor() {
            super();
            this.state = {
              editBusinessHours: false,
              editStoreData: false,
              timeFrame: "year",
            };
          }
        
          toggleState = async (property) => {
            await this.setState({ [property]: !this.state[property] });
          };
        
          render() {
            return (
              <div className="dashboard-subview w-100 flex-col-evenly justify-start pb-20px overflow-auto">
                <div className="w-100 flex-col-evenly">
                  <div className="text-align-center px-10px">
                    <h1>Overview</h1>
                  </div>
        
                  <div className="w-100 flex-row-evenly flex-wrap align-start">
                    <div className="w-100 flex-row-evenly justify-center align-start flex-wrap">
                      <div className="responsive-container flex-col-evenly">
                        <div className="content-container w-300px">
                          <StoreStatus
                            isOnline={this.props.userReducer.store.isOnline}
                            isCartEnabled={this.props.userReducer.store.isCartEnabled}
                            isCurbsideEnabled={this.props.userReducer.store.isCurbsideEnabled}
                            save={this.props.updateStatus}
                          />
                        </div>
        
                        <div className="content-container w-300px">
                          <LogoUploader logoImgSrc={this.props.userReducer.store.logo.src} onSubmit={this.props.updateLogo} />
                        </div>
        
                        <div className="content-container w-300px">
                          <StoreInfo user={this.props.userReducer} editStoreData={() => this.toggleState("editStoreData")} />
                        </div>
        
                        <div className="content-container w-300px">
                          <BusinessHours
                            user={this.props.userReducer}
                            editBusinessHours={() => this.toggleState("editBusinessHours")}
                          />
                        </div>
                      </div>
        
                      <div className="responsive-container flex-col-evenly">
                        <div className="content-container w-300px">
                          <SalesStats
                            timeFrame={"day"}
                            transactions={this.props.userReducer.transactions}
                            chartWidth={"300px"}
                          />
                        </div>
        
                        <div className="content-container w-300px">
                          <PopularProducts user={this.props.userReducer} />
                        </div>
                      </div>
        
                      <div className="responsive-container flex-col-evenly">
                        <div className="content-container w-700px flex-col-evenly">
                          <h1 className="w-100 text-align-center">
                            {this.state.timeFrame === "year" && "Sales (" + moment().format("YYYY") + ")"}
                            {this.state.timeFrame === "month" && "Sales (" + moment().format("MMMM YYYY") + ")"}
                            {this.state.timeFrame === "week" && "Sales (this week)"}
                          </h1>
        
                          <div className="w-100 flex-row-evenly justify-start">
                            <button className="link px-10px" onClick={() => this.setState({ timeFrame: "year" })}>
                              This year
                            </button>
                            <button className="link px-10px" onClick={() => this.setState({ timeFrame: "month" })}>
                              This month
                            </button>
                            <button className="link px-10px" onClick={() => this.setState({ timeFrame: "week" })}>
                              This week
                            </button>
                          </div>
        
                          <div className="w-100 h-300px mt-20px">
                            <SalesChart timeFrame={this.state.timeFrame} transactions={this.props.userReducer.transactions} />
                          </div>
                        </div>
        
                        <div className="content-container w-700px flex-col-evenly">
                          <SalesStats
                            transactions={this.props.userReducer.transactions}
                            timeFrame={this.state.timeFrame}
                            chartWidth={"300px"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                {this.state.editStoreData && (
                  <div className="floating-modal flex-col-evenly">
                    <div className="modal-content-container w-400px flex-col-evenly justify-start">
                      <div className="content-header w-100 flex-row-between">
                        <div></div>
                        <h1>Edit contact & social</h1>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="close-icon"
                          onClick={() => this.toggleState("editStoreData")}
                        />
                      </div>
        
                      <div className="content-body content-form w-100">
                        <FormEditStoreData
                          done={() => this.toggleState("editStoreData")}
                          user={this.props.userReducer}
                          onSubmit={this.props.updateContactInfo}
                        />
                      </div>
                    </div>
                  </div>
                )}
        
                {this.state.editBusinessHours && (
                  <div className="floating-modal flex-col-evenly">
                    <div className="modal-content-container w-400px flex-col-evenly justify-start">
                      <div className="content-header w-100 flex-row-between">
                        <div></div>
                        <h1>Edit business hours</h1>
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="close-icon"
                          onClick={() => this.toggleState("editBusinessHours")}
                        />
                      </div>
                      <div className="content-body content-form w-100">
                        <FormEditHours
                          user={this.props.userReducer}
                          done={() => this.toggleState("editBusinessHours")}
                          onSubmit={this.props.updateBusinessHours}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(ViewOverview);`
    },
    {
        "name": "React log-in form",
        "js": `
        import React from "react";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isRequired } from "../FormValidations";

class FormLogin extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      usernameErrors: [],
      passwordErrors: [],
      responseErrors: [],
      isLoading: false,
    };
  }

  hasErrors = async () => {
    await this.validate("username", this.state.username);
    await this.validate("password", this.state.password);
    if (this.state.usernameErrors.length) return true;
    if (this.state.passwordErrors.length) return true;
    if (this.state.responseErrors.length) return true;
    return false;
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({ [e.target.name]: e.target.value, responseErrors: [] });
    this.validate(e.target.name, e.target.value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (await this.hasErrors()) return;

    await this.setState({ isLoading: true });

    let formData = {
      username: this.state.username,
      password: this.state.password,
    };

    let res = await this.props.handleSubmit(formData);

    if (!res.data.success) await this.setState({ responseErrors: [res.data.message] });
    await this.setState({ isLoading: false });
  };

  validate = async (name, value) => {
    switch (name) {
      case "username":
        let usernameErrors = [];
        if (isRequired(value)) usernameErrors.push(isRequired(value));
        await this.setState({ usernameErrors: usernameErrors });
        break;

      case "password":
        let passwordErrors = [];
        if (isRequired(value)) passwordErrors.push(isRequired(value));
        await this.setState({ passwordErrors: passwordErrors });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <form className="form-login flex-col-evenly w-100 h-100" onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="content-header w-100 flex-row-between">
          <div></div>
          <h1 className="bold">Sign in</h1>
          <FontAwesomeIcon icon={faTimes} className="icon-red close-icon clickable" onClick={this.props.done} />
        </div>

        <div className="w-100 flex-col-evenly">
          {this.state.responseErrors.map((error, i) => (
            <p key={i} className="small-text alert-text">
              {error}
            </p>
          ))}
        </div>

        <div className="flex-col-evenly justify-start w-100 content-body">
          <section className="w-100 flex-col-evenly">
            <label className="w-100 text-align-left mt-10px">User name:</label>
            <input className=" w-100" type="text" name="username" value={this.state.username} />
            <div className="w-100 flex-col-evenly align-start">
              {this.state.usernameErrors.map((error, i) => (
                <p key={i} className="small-text alert-text">
                  {error}
                </p>
              ))}
            </div>
          </section>

          <section className="w-100 flex-col-evenly">
            <label className="w-100 text-align-left mt-10px">Password:</label>
            <input className=" w-100" type="password" name="password" value={this.state.password} />
            <div className="w-100 flex-col-evenly align-start">
              {this.state.passwordErrors.map((error, i) => (
                <p key={i} className="small-text alert-text">
                  {error}
                </p>
              ))}
            </div>
          </section>

          {!this.state.isLoading && (
            <button className="btn-green btn-lg shadow-md mt-20px h-50px w-100" type="submit">
              Sign in
            </button>
          )}

          {this.state.isLoading && (
            <div className="w-100 h-50px mt-20px flex-row-evenly justify-center">
              <FontAwesomeIcon icon={faSpinner} className="loader-icon" />
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default FormLogin;
        `
    }
]

