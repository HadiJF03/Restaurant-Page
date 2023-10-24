import './styles.css';
import createHeader from './header';
import createHome from './HomePage';
function updateScreen(){
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createHome());
}
updateScreen();