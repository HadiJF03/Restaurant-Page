import createHome from "./HomePage";

const createHeader = () =>{
    const header = document.createElement('div'); // div header
    const title = document.createElement('div'); // div  header text

    

    title.textContent = 'RoseWater';
    header.appendChild(title);
    header.classList.add('header'); //class: header

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    //
    homeButton.addEventListener('click', createHome);

    //
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    
    const div = document.querySelector('#content')
    div.innerHTML = " ";
    div.appendChild(header);
}
export default createHeader;