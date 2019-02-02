import Component from '../../component.js';

export default class PhoneViewer extends Component{
    constructor({ elem }) {
        super({elem});
        this._phoneDetails = null;

        this.on('click', "backButton", () => {
            this.emit('back');
        });

        this.on('click', "small-image", (event)  => {
            const smallImage = event.target;
            this._element.querySelector('[ data-element="bigImage"]').src = smallImage.src;
        });

        this.on('click', "addButton", () => {
            this.emit('add', this._phoneDetails.id);

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
          <button 
              data-element="addButton" >
          Add to basket
          </button>
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