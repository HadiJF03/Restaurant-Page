import createHeader from "./header";

const createMenu = ()=>{
    const container =  document.createElement('div');
    const title = document.createElement('div');
    const itemsDiv = document.createElement('div');
    title.textContent='Menu';

    container.classList.add('menu');
    container.classList.add('common-container');
    title.classList.add('menu-title');
    itemsDiv.classList.add('menu-content');



    container.appendChild(title);
    container.appendChild(itemsDiv);

    const createList = ()=>{
        class createItem {
            constructor(dish, desc) {
                this.dish = dish;
                this.desc = desc;
                this.element = () => {
                    const div = document.createElement('div');
                    div.classList.add('item-container');
                    const name = document.createElement('div');
                    name.classList.add('dish');
                    const info = document.createElement('div');
                    info.classList.add('desc');
                    name.textContent = this.dish;
                    info.textContent = this.desc;
                    div.appendChild(name);
                    div.appendChild(info);
                    return div;
                }
            }
        }
        let list1 = []; let list2 = [];
        list1.push(new createItem('Fattoush','Lettuce, Tomatoes, Cucumbers,Radish, and Fried Bread.'));
        list1.push(new createItem('Tabbouleh','Parsley, Totmatoes, Bulgur Wheat, Green Onions, Olive Oil, and Lemon Juice.'));
        list1.push(new createItem('Hummos','Chickpeas, Tahini, Garlic, and Olive Oil.'))
    
        list2.push(new createItem('Kibbeh','Spiced Ground Meat, onions, and Grain.'));
        list2.push(new createItem('Kafta','Ground Beef, Parsley, Onions, and spices.'));
        list2.push(new createItem('Beef Shawrma', 'Split layers of Beef, Garlic, Pickles, and Tomato.'));
        return[list1,list2];
    }
   
    let [list1,list2] = createList();  
    for(let i = 0; i<3;i++) {
        itemsDiv.appendChild(list1[i].element());
        itemsDiv.appendChild(list2[i].element());
    }
    const div = document.querySelector('#content')
    div.innerHTML = "";
    createHeader();
    div.appendChild(container);

}
export default createMenu;