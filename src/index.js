import './styles.css';
import createHeader from './header';
import createHome from './HomePage';
import createMenu from './MenuPage';
import createContact from './ContactPage';
function updateScreen(){
    createHeader();
    createHome();
}
updateScreen();