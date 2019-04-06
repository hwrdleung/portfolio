export default class CodeViewer {
  constructor() {
    this.projects = [];
    this.currentProjectIndex = 0;
    this.menu = document.createElement("div");
    this.codeTextBox = document.createElement("div");
    this.viewBtnsContainer = document.createElement("div");
    this.htmlBtn = document.createElement("button");
    this.cssBtn = document.createElement("button");
    this.jsBtn = document.createElement("button");
  }

  addCodeProject(codeProject) {
    /*
        projects will follow this model:
        {
            name: name as string,
            html: github gist link,
            css: github gist link,
            js: github gist link,
            view: 'HTML' or 'CSS' or 'JS'
        }
    */

    // Initialize view and push to this.projects
    codeProject.view = codeProject.html ? "HTML" : codeProject.css ? "CSS" : "JS";
    this.projects.push(codeProject);
  }

  renderTo(htmlElement) {
    this.initializeMenu();
    this.initializecodeTextBox();
    this.initializeCodeMirror();

    this.viewBtnsContainer.appendChild(this.htmlBtn);
    this.viewBtnsContainer.appendChild(this.cssBtn);
    this.viewBtnsContainer.appendChild(this.jsBtn);

    htmlElement.appendChild(this.menu);
    htmlElement.appendChild(this.viewBtnsContainer);
    htmlElement.appendChild(this.codeTextBox);

    // Define class names
    this.menu.classList.add('cv-menu');
    this.viewBtnsContainer.classList.add('cv-view-btns-container');
    this.htmlBtn.classList.add('cv-view-btn');
    this.cssBtn.classList.add('cv-view-btn');
    this.jsBtn.classList.add('cv-view-btn');
    this.codeTextBox.classList.add('cv-code-text-box');

    this.refreshMenuBtns();
    this.refreshViewBtns();
    this.refreshCodeText();
  }

  initializeMenu() {
    // Create a button for each project and set its attributes
    // Append each button to this.menu
    this.projects.forEach((project, index) => {
      let button = document.createElement("button");

      button.innerText = project.name;
      button.classList.add('cv-menu-unselected');
      button.onclick = () => {
        this.currentProjectIndex = index;
        this.refreshMenuBtns();
        this.refreshViewBtns();
        this.refreshCodeText();
      };

      this.menu.appendChild(button);
    });
  }

  initializecodeTextBox() {
    // Set button attributes for codeTextBox views
    this.htmlBtn.innerText = "HTML";
    this.htmlBtn.classList.add('cv-view-unselected');
    this.htmlBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];

      if (currentProject.html) {
        currentProject.view = "HTML";
        this.refreshCodeText();
        this.refreshViewBtns();
      }
    };

    this.cssBtn.innerText = "CSS";
    this.cssBtn.classList.add('cv-view-unselected');
    this.cssBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];

      if (currentProject.css) {
        currentProject.view = "CSS";
        this.refreshCodeText();
        this.refreshViewBtns();
      }
    };

    this.jsBtn.innerText = "JS";
    this.jsBtn.classList.add('cv-view-unselected');
    this.jsBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];

      if (currentProject.js) {
        currentProject.view = "JS";
        this.refreshCodeText();
        this.refreshViewBtns();
      }
    };
  }

  initializeCodeMirror() {
    this.codeMirror = CodeMirror(this.codeTextBox, {
      readOnly: true,
      lineWrapping: false,
      lineNumbers: true,
      showCursorWhenSelecting: false
    });

    if (this.projects[0].html) {
      this.codeMirror.setValue(this.projects[0].html);
      this.codeMirror.setOption('mode', 'xml');
      this.codeMirror.setOption('htmlMode', true);
    } else if (this.projects[0].css) {
      this.codeMirror.setValue(this.projects[0].css);
      this.codeMirror.setOption('mode', 'css');
    } else if (this.projects[0].js) {
      this.codeMirror.setValue(this.projects[0].js);
      this.codeMirror.setOption('mode', 'javascript');
    }
  }

  refreshCodeText() {
    let currentProject = this.projects[this.currentProjectIndex];

    switch (currentProject.view) {
      case "HTML":
        this.codeMirror.setOption('mode', 'xml');
        this.codeMirror.setOption('htmlMode', true);
        this.codeMirror.setValue(html_beautify(currentProject.html));
        break;
      case "CSS":
        this.codeMirror.setOption('mode', 'css');
        this.codeMirror.setValue(css_beautify(currentProject.css));
        break;
      case "JS":
        this.codeMirror.setOption('mode', 'javascript');
        this.codeMirror.setValue(js_beautify(currentProject.js));
        break;
    }
  }

  refreshMenuBtns() {
    let menuBtns = Array.from(this.menu.children);

    menuBtns.forEach((menuBtn, index) => {
      menuBtn.classList.replace('cv-menu-selected', 'cv-menu-unselected');

      if (index === this.currentProjectIndex) {
        menuBtn.classList.replace('cv-menu-unselected', 'cv-menu-selected');
      }
    });
  }

  refreshViewBtns() {
    let currentProject = this.projects[this.currentProjectIndex];
    let viewBtns = [this.htmlBtn, this.cssBtn, this.jsBtn];

    viewBtns.forEach(viewBtn => {
      viewBtn.classList.replace('cv-view-selected', 'cv-view-unselected');

      if (viewBtn.innerText === currentProject.view) {
        viewBtn.classList.replace('cv-view-unselected', 'cv-view-selected');
      }
    });
  }
}
