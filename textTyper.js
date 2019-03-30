export default class TextTyper {

    typer;
    htmlElement;
    speed;

    constructor(htmlElement, speed) {
        this.htmlElement = htmlElement;
        this.speed = speed;
    }

    type(str) {
        // Clear htmlElement and previous setIntervals
        this.clear();
        let i = 0;

        // Append each letter of str to htmlElement in 50ms intervals
        this.typer = setInterval(() => {
            let textNode = document.createTextNode(str.charAt(i));
            this.htmlElement.appendChild(textNode);
            i++;

            if (i === str.length) clearInterval(this.typer);
        }, this.speed);
    }

    clear() {
        this.htmlElement.innerText = '';
        clearInterval(this.typer);
    }
}