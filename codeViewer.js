export default class CodeViewer {
  menu = document.createElement("div");
  codeTextBox = document.createElement("script");
  viewBtnsContainer = document.createElement("div");
  htmlBtn = document.createElement("button");
  cssBtn = document.createElement("button");
  jsBtn = document.createElement("button");

  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.projects = [];
    this.currentProjectIndex = 0;
  }

  addCodeProject(codeProject) {
    /*
        projects will follow this model:
        {
            name: name as string,
            html: github gist link,
            css: github gist link,
            js: github gist link,
            view: view
        }
    */

    // Initialize view and push to this.projects
    codeProject.view = codeProject.html ? "HTML" : codeProject.css ? "CSS" : "JS";
    this.projects.push(codeProject);
  }

  render() {
    this.initializeMenu();
    this.initializecodeTextBox();
    this.viewBtnsContainer.appendChild(this.htmlBtn);
    this.viewBtnsContainer.appendChild(this.cssBtn);
    this.viewBtnsContainer.appendChild(this.jsBtn);

    this.htmlElement.appendChild(this.menu);
    this.htmlElement.appendChild(this.viewBtnsContainer);
    this.htmlElement.appendChild(this.codeTextBox);
    this.refreshCodeText();
  }

  initializeMenu() {
    // Create a button for each project and set its attributes
    // Append each button to this.menu
    this.projects.forEach((project, index) => {
      let button = document.createElement("button");
      button.innerText = project.name;
      button.onclick = () => {
        console.log(project.name, index);
        this.currentProjectIndex = index;
        this.refreshCodeText();
      };
      this.menu.appendChild(button);
    });
  }

  initializecodeTextBox() {
    // Set button attributes for codeTextBox views
    this.htmlBtn.innerText = "HTML";
    this.htmlBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];
      if (currentProject.html) {
        currentProject.view = "HTML";
        this.refreshCodeText();
      }
    };

    this.cssBtn.innerText = "CSS";
    this.cssBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];
      if (currentProject.css) {
        currentProject.view = "CSS";
        this.refreshCodeText();
      }
    };

    this.jsBtn.innerText = "JS";
    this.jsBtn.onclick = () => {
      let currentProject = this.projects[this.currentProjectIndex];
      if (currentProject.js) {
        currentProject.view = "JS";
        this.refreshCodeText();
      }
    };
  }

  refreshCodeText() {
    let currentProject = this.projects[this.currentProjectIndex];

    switch (currentProject.view) {
      case "HTML":
        this.codeTextBox.src = currentProject.html;
        break;
      case "CSS":
        this.codeTextBox.src = currentProject.css;
        break;
      case "JS":
        this.codeTextBox.src = currentProject.js;
        break;
    }
  }
}
