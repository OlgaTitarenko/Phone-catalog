import Component from '../../component.js'

export default class ShoppingCard extends Component{
   constructor ({elem}) {
       super({elem});
       this._render();
   }
   _render(){
    this._element.innerHTML = `
             <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
    `;
   }
}