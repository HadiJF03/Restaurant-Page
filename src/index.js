import './styles.css';
import createHeader from './header';
import createHome from './HomePage';
import createMenu from './MenuPage';
function updateScreen(){
    createHeader();
    createMenu();
}
updateScreen();