import Component from '../../component.js'

export default class ShoppingCard extends Component{
   constructor ({elem}) {
       super({elem});
       this._items = {};


       this.on('click', 'remove', (event) => {
           let itemElement = event.target.closest('[data-element="item"]');
           this.remove(itemElement.dataset.itemId);

       });

       this.on('click', 'delete', (event) => {
           let itemElement = event.target.closest('[data-element="item"]');
           this.delete(itemElement.dataset.itemId);
       });
   }

    add(itemId) {
       if (!this._items.hasOwnProperty(itemId)) {
           this._items[itemId] = 0;
       }
       this._items[itemId]++;
       console.log(itemId);
       this._render();
    }

    remove(itemId){
        this._items[itemId]--;
        if (this._items[itemId] === 0){
            delete this._items[itemId];
        }
        this._render();
    }
    delete(itemId){
        delete this._items[itemId];
        this._render();
    }

   _render(){
    this._element.innerHTML = `
             <p>Shopping Cart</p>
            <ul>
              ${ Object.keys(this._items).map((itemId) => `
               <li data-element="item" data-item-id="${ itemId }">
                ${itemId} (${this._items[itemId]}) 
                <button data-element="remove">-</button>
                <button data-element="delete">x</button>
              </li>
              `).join('')}
            </ul>
    `;
   }
}