import PhoneCatalog from './catalog/phones-catalog.js';
import PhoneViewer from './catalog/phone-viewe.js';
import Filter from './catalog/filter.js';
import ShoppingCart from './catalog/shopping-card.js';
import PhoneService from './servises/phone-servises.js';

export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._render();

        this._initCatalog();
        this._initViewer();
        this._initShoppingCart();
        this._initFilter();

        this._showPhones();
    }

    _initCatalog() {
        this._catalog = new PhoneCatalog({
            element: document.querySelector('[data-component="phone-catalog"]'),
        });

        this._catalog.subscribe('phone-selected', (phoneId) => {

            PhoneService.getById(phoneId, (phoneDetails) => {

                this._catalog.hide();
                this._viewer.show(phoneDetails);
            });
        });

        this._catalog.subscribe('phone-added', (phoneId) => {
            this._cart.add(phoneId);
        });
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: document.querySelector('[data-component="phone-viewer"]'),
        });

        this._viewer.subscribe('back', () => {
            this._viewer.hide();
            this._showPhones();
        });

        this._viewer.subscribe('add', (phoneId) => {
            this._cart.add(phoneId);
        });
    }

    _initShoppingCart() {
        this._cart = new ShoppingCart({
            element: document.querySelector('[data-component="shopping-cart"]'),
        });
    }

    _initFilter() {
        this._filter = new Filter({
            element: document.querySelector('[data-component="filter"]'),
        });

        this._filter.subscribe('order-changed', () => {
            this._showPhones()
        });

        this._filter.subscribe('query-changed', () => {
            this._showPhones();
        });
    }

    _showPhones() {
        let currentFiltering = this._filter.getCurrentData();

        PhoneService.getAll(currentFiltering, (phones) => {
            this._catalog.show(phones);
        });
    }

    _render() {
        this._element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2" data-element="sidebar" ref="(element) => { this._thumb = element }">
          <section>
            <div data-component="filter"></div>
          </section>
    
          <section>
            <div data-component="shopping-cart"></div>
          </section>
        </div>
    
        <!--Main content-->
        <div class="col-md-10">
          <div data-component="phone-catalog"></div>
          <div data-component="phone-viewer" hidden></div>
        </div>
      </div>
    `;
    }
}