import Component from '../../component.js';

export default class PhoneViewer extends Component{
    constructor({ elem, onBack }) {
        super({elem});
        this._onBack = onBack;
        this.on('click','[data-element="backButton"]',this._onBack() );

    }
    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        super.show();
        this._render();
    }
    _render() {
        const phone = this._phoneDetails;
        this._element.innerHTML = `
        <img class="phone" src="${ phone.images[0] }">

    <button data-element="backButton" >Back</button>
    <button>Add to basket</button>


    <h1>${ phone.name }</h1>

    <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>

    <ul class="phone-thumbs">
      <li>
        <img src="${ phone.images[0] }">
      </li>
      <li>
        <img src="${ phone.images[1] }">
      </li>
      <li>
        <img src="${ phone.images[2] }">
      </li>
      <li>
        <img src="${ phone.images[3] }">
      </li>
     
    </ul>
    `;
    }
}