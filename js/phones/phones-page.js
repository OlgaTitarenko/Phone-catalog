'use strict';

class PhonePage {
    constructor ({elem}) {
        this._element = elem;
        this.catalog = new PhoneCatalog({
            elem: document.querySelector('[data-component="phone-catalog]')
        });
        this._render();
    }
    _render() {
        this._element.innerHTML = '<div class="row">\n' +
            '            <!--Sidebar-->\n' +
            '                    <div class="col-md-2">\n' +
            '                        <section>\n' +
            '                            <p>\n' +
            '                                Search:\n' +
            '                                <input>\n' +
            '                            </p>\n' +
            '            \n' +
            '                            <p>\n' +
            '                                Sort by:\n' +
            '                                <select>\n' +
            '                                    <option value="name">Alphabetical</option>\n' +
            '                                    <option value="age">Newest</option>\n' +
            '                                </select>\n' +
            '                            </p>\n' +
            '                        </section>\n' +
            '            \n' +
            '                        <section>\n' +
            '                            <p>Shopping Cart</p>\n' +
            '                            <ul>\n' +
            '                                <li>Phone 1</li>\n' +
            '                                <li>Phone 2</li>\n' +
            '                                <li>Phone 3</li>\n' +
            '                            </ul>\n' +
            '                        </section>\n' +
            '                    </div>\n' +
            '            \n' +
            '                    <!--Main content-->\n' +
            '                    <div class="col-md-10">\n' +
            '                 '<div data-component="phone-catalog"></div>'+
            '                    </div>';
    }
}