export default class ProjectViewer {
    constructor(name) {
        this.name = name;
        this.github;
        this.codepen;
        this.projectLink;
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