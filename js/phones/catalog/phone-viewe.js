export default class PhoneViewer  {
    constructor ({elem}) {
        this._element = elem;


    }
    show(phoneDetails) {
        this._phoneDetails = phoneDetails;
        this._element.hidden = false;
        this._render();
    }
    _render() {
        const phone = this._phoneDetails;
        this._element.innerHTML = `
        <img class="phone" src="${ phone.images[0] }">

    <button>Back</button>
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