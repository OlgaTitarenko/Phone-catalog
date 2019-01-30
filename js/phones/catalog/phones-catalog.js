import Component from '../../component.js'

export default class PhoneCatalog extends Component{
    constructor({
                    elem,
                    phones = [],
                    onPhoneSelected = () => {}
                }) {
        super({ elem });
        this._phones = phones;
        this._onPhoneSelected = onPhoneSelected;

        this._render();

        this._element.addEventListener( 'click', (event) =>{
            let detailsLink = event.target.closest('[ data-element="detailsLink"]');

            if (!detailsLink){
                return;
            }
            let phoneElement = event.target.closest('[ data-element="phone"]');

            this._onPhoneSelected(phoneElement.dataset.phoneId);
        });
    }


    _render()
    {
        this._element.innerHTML = `
            <ul class="phones">
            ${ this._phones.map(phone => `
             <li class="thumbnail" data-element="phone" data-phone-id="${phone.id}">
            <a 
                data-element="detailsLink" 
                href="#!/phones/${ phone.id}" 
                class="thumb"
            >
              <img alt="${ phone.name }" src="${ phone.imageUrl}">
            </a>

            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>

            <a 
                href="#!/phones/${phone.id}" 
                data-element="detailsLink">
                    ${phone.name}
            </a>
            <p>${phone.snippet}</p>
          </li>
            `).join('')}
            </ul>
        `;
    }
}