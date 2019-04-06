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
}