import createContact from "./ContactPage";
import createHome from "./HomePage";
import createMenu from "./MenuPage";

const createHeader = () =>{
    const header = document.createElement('div'); // div header
    const title = document.createElement('div'); // div  header text
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');
    

    title.textContent = 'RoseWater';
    header.appendChild(title);
    header.classList.add('header'); //class: header

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    //
    homeButton.addEventListener('click', createHome);
    menuButton.addEventListener('click', createMenu);
    contactButton.addEventListener('click',createContact);
  
    //
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    header.appendChild(buttonContainer);
    
    const div = document.querySelector('#content')
    div.appendChild(header);
}
export default createHeader;