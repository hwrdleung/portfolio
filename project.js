export default class Project {

    name;
    pages = [];
    github;
    codepen;
    projectLink;
    currentPage = 0;

    projectContainer = document.createElement('div');
    imageContainer = document.createElement('div');
    descriptionContainer = document.createElement('div');
    pageIndicatorContainer = document.createElement('div');
    linksContainer = document.createElement('div');
    navContainer = document.createElement('div');

    projectTitle = document.createElement('h3');
    image = document.createElement('img');
    descriptionText = document.createElement('div');
    prevPageBtn = document.createElement('i');
    nextPageBtn = document.createElement('i');
    circle = document.createElement('i');
    circleFilled = document.createElement('i');

    constructor(name) {
        this.name = name;
    }

    addPage(imageUrl, descriptionHTML) {
        let page = {
            imageUrl: imageUrl,
            descriptionText: descriptionHTML
        }

        this.pages.push(page);
    }

    nextPage() {
        if (this.currentPage < this.pages.length-1) {
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

    setGithub(url) {
        this.github = url;
    }

    setCodepen(url) {
        this.codepen = url;
    }

    setHeroku(url) {
        this.heroku = url;
    }

    setProjectLink(url) {
        this.projectLink = url;
    }

    // This function changes the innerHTML for dynamic content
    refresh() {
        // Set image.src
        this.image.src = this.pages[this.currentPage].imageUrl;

        // Set descriptionText
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

    render(htmlElement) {
        // This function handles the initial render to the DOM
        // Add content for static elements
        this.projectTitle.innerText = this.name;
        this.prevPageBtn.classList.add("far", "fa-2x", "fa-arrow-alt-circle-left");
        this.nextPageBtn.classList.add("far", "fa-2x", "fa-arrow-alt-circle-right");
        this.prevPageBtn.addEventListener('click', () => {this.prevPage();});
        this.nextPageBtn.addEventListener('click', () => {this.nextPage();});
        this.circle.classList.add("far", "fa-xs", "fa-circle");
        this.circleFilled.classList.add("fas", "fa-xs", "fa-circle");

        if(this.github) {
            let linkElement = document.createElement('a');
            linkElement.href = this.github;
            linkElement.target = '__blank';
            linkElement.innerText = 'Github';
            this.linksContainer.appendChild(linkElement);
        }

        if(this.codepen) {
            let linkElement = document.createElement('a');
            linkElement.href = this.codepen;
            linkElement.target = '__blank';
            linkElement.innerText = 'Codepen';
            this.linksContainer.appendChild(linkElement);
        }

        if(this.projectLink) {
            let linkElement = document.createElement('a');
            linkElement.href = this.projectLink;
            linkElement.target = '__blank';
            linkElement.innerText = 'View Project';
            this.linksContainer.appendChild(linkElement);
        }

        // Put the pieces together
        this.imageContainer.appendChild(this.image);
        this.descriptionContainer.appendChild(this.projectTitle);
        this.navContainer.appendChild(this.prevPageBtn);
        this.navContainer.appendChild(this.nextPageBtn);
        this.descriptionContainer.appendChild(this.navContainer);
        this.descriptionContainer.appendChild(this.pageIndicatorContainer);
        this.descriptionContainer.appendChild(this.descriptionText);
        this.descriptionContainer.appendChild(this.linksContainer);

        this.projectContainer.appendChild(this.imageContainer);
        this.projectContainer.appendChild(this.descriptionContainer);

        // Define class names
        this.descriptionText.classList.add('description-text');
        this.projectTitle.classList.add('project-title');
        this.projectContainer.classList.add('project-container');
        this.descriptionContainer.classList.add('description-container');
        this.imageContainer.classList.add('image-container');
        this.linksContainer.classList.add('links-container');
        this.pageIndicatorContainer.classList.add('page-indicator-container');
        this.navContainer.classList.add('nav-container');

        // Refresh dynamic content
        this.refresh();

        // Add to htmlElement.innerHTML
        htmlElement.appendChild(this.projectContainer);
    }

}