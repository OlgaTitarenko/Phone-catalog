import PhoneCatalog from './catalog/phones-catalog.js';
import PhoneViewer from './catalog/phone-viewe.js';
import PhoneServise from './servises/phone-servises.js';

export default class PhonePage {
    constructor ({elem}) {
        this._element = elem;
        this._render();

        this.catalog = new PhoneCatalog({
            elem: document.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneServise.getAll(),
            onPhoneSelected : (phoneId) => {
                const phoneDetails = PhoneServise.getById(phoneId);
                this.catalog.hide();
                this.viewer.show(phoneDetails);
            }
        });
        this.viewer = new PhoneViewer({
            elem: document.querySelector('[data-component="phone-viewer"]'),
            onBack: () =>{
                this.catalog.show();
                this.viewer.hide();
            }
        });
    }
    _render() {
        this._element.innerHTML = `
      <div class="row">

        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <p>
              Search:
              <input>
            </p>
    
            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>
    
          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
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
