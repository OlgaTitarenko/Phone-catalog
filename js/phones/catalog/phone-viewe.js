import Component from '../../component.js';

export default class PhoneViewer extends Component{
    constructor({ elem, onBack }) {
        super({elem});
        this._onBack = onBack;
     //   this.on('click','[data-element="backButton"]',onBack());
        this._element.addEventListener('click',(event) => {
            const backButton = event.target.closest('[data-element="backButton"]');
            if (!backButton){
                return;
            }
            this._onBack();
        });
        this._element.addEventListener('click',(event) => {
            const smallImage = event.target.closest('[data-element="small-image"]');
            if (!smallImage){
                return;
            }
            this._element.querySelector('[ data-element="bigImage"]').src = smallImage.src;
        });
    }

    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        super.show();
        this._render();
    }

     _render() {
        const phone = this._phoneDetails;

        this._element.innerHTML = `
          <img 
            data-element="bigImage"
            class="phone" 
            src="${ phone.images[0] }"
           >
          <button data-element="backButton" >Back</button>
          <button>Add to basket</button>
          <h1>${ phone.name }</h1>
          <p>${ phone.description }</p>
          <ul class="phone-thumbs">
          ${ phone.images.map(item => 
           `  <li >
                 <img 
                 data-element="small-image"
                 src="${ item }">
               </li>
           ` ).join('') }     
          </ul>
         `;
    }
}