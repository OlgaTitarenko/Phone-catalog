class Component {
    constructor({elem}) {
        this._element = elem;
    }
    hide() {
        this._element.hidden = true;
    }
    show() {
        this._element.hidden = false;
    }
}