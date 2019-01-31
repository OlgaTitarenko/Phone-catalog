import PhoneCatalog from './catalog/phones-catalog.js';
import PhoneViewer from './catalog/phone-viewe.js';
import ShoppingCard from './catalog/shopping-card.js';
import Filter from './catalog/filter.js';
import PhoneServise from './servises/phone-servises.js';

console.log('work with smile =^_^=');

export default class PhonePage {
    constructor ({elem}) {
        this._element = elem;
        this._render();
        this._initcatalog();
        this._initViewer();
        this._initShoppingCard();
        this._initFilter();

    }
    _initcatalog() {
        this.catalog = new PhoneCatalog({
            elem: document.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneServise.getAll(),
            onPhoneSelected : (phoneId) => {
                const phoneDetails = PhoneServise.getById(phoneId);
                this.catalog.hide();
                this.viewer.show(phoneDetails);
            }
        });
    };
    _initViewer(){
        this.viewer = new PhoneViewer({
            elem: document.querySelector('[data-component="phone-viewer"]'),
            onBack: () =>{
                this.catalog.show();
                this.viewer.hide();
            }
        });
    };
    _initShoppingCard(){
        this.shoppingCard = new ShoppingCard({
            elem: document.querySelector('[data-component="shopping-card"]')
        });
    };
    _initFilter(){
        this.filter = new Filter({
            elem: document.querySelector('[data-component="filter"]')
        });
    };

    _render() {
        this._element.innerHTML = `
      <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <div data-component="filter"></div>
          </section>
    
          <section>
            <div data-component="shopping-card"></div>
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


