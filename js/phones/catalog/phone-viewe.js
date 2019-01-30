import Component from '../../component.js';

export default class PhoneViewer extends Component{
    constructor({ elem, onBack }) {
        super({elem});
        this._onBack = onBack;
        this._element.addEventListener('click',(event) => {
           const backButton = event.target.closest('[data-element="backButton"]');
           if (!backButton){
               return;
           }
           this._onBack();
        });
    }

    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        super.show();
        this._render();
    }

    _getItemHtml(item) {
        return `
      <li>
        <img src="${ item }">
      </li>
    `;
    }

    _render() {
        const phone = this._phoneDetails;

        this._element.innerHTML = `
        <img class="phone" src="${ phone.images[0] }">

    <button data-element="backButton" >Back</button>
    <button>Add to basket</button>


    <h1>${ phone.name }</h1>

    <p>${ phone.description }</p>

    <ul class="phone-thumbs">
       ${ phone.images.map(item =>

            this._getItemHtml(item)

        ).join('') }
     
    </ul>
    `;
    }
}