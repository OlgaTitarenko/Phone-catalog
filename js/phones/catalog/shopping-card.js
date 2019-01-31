import Component from '../../component.js'

export default class ShoppingCard extends Component{
   constructor ({elem}) {
       super({elem});
       this._items = [];

       this._render();
   }
    add(itemId) {
        this._items.push(itemId);
        this._render();
    }

    remove(itemId){
        if (!this._items.hasOwnProperty(itemId)){
            return;
        }
        this._items[itemId]--;
        if (this._items[itemId]===0){
            delete this._items[itemId];
        }
        this._render();
    }
   _render(){
    this._element.innerHTML = `
             <p>Shopping Cart</p>
            <ul>
              ${ Object.entries(this._items).map(([itemId,quantity]) => `
              <li>${itemId} (${quantity}) </li>
              `).join('')}
            </ul>
    `;
   }
}