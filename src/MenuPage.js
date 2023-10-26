import createHeader from "./header";

const createMenu = ()=>{
    const container =  document.createElement('div');
    const title = document.createElement('div');
    const itemsDiv = document.createElement('div');
    title.textContent='Menu';

    container.classList.add('menu');
    title.classList.add('menu-title');



    container.appendChild(title);

    const div = document.querySelector('#content')
    div.innerHTML = "";
    createHeader();
    div.appendChild(container);

}
function createList(){
    function createItem(dish, desc) {
            this.dish = dish;
            this.desc = desc;
        };
    
    let list1 = []; let list2 = [];
    list2.push(createItem('Kibbeh','Spiced ground meat, onions, and grain.'));
    list2.push(createItem('Kafta','Ground beef, parsley, onions, and spices.'));
    list2.push(createItem('Beef Shawrma', 'Split layers of beef, garlic'));
}