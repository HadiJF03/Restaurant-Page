
import fattoush from './assets/home-page-dish.jpg';
import kibbeh from './assets/kibbeh-dish.jpeg';
import hummus from './assets/hummus.jpeg';
import createHeader from './header';
const createHome = ()=>{
    const container = document.createElement('div');
    const title = document.createElement('div');
    const imgDiv1 = document.createElement('div');
    const imgDiv2 = document.createElement('div');
    const imgDiv3 = document.createElement('div');
    title.textContent = "Authentic Lebanese Food";

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = fattoush;
    img2.src = kibbeh;
    img3.src = hummus;


    container.classList.add('home-container');     // class = container.
    title.classList.add('title');             //class = title.

    imgDiv1.classList.add('home-image-container');  //class = image-container.
    imgDiv2.classList.add('home-image-container');
    imgDiv3.classList.add('home-image-container');

    imgDiv1.appendChild(img1);
    imgDiv2.appendChild(img2);
    imgDiv3.appendChild(img3);

    container.appendChild(title);

    container.appendChild(imgDiv1);
    container.appendChild(imgDiv2);
    container.appendChild(imgDiv3);
    
    const div = document.querySelector('#content')
    div.innerHTML = " ";
    createHeader();
    div.appendChild(container);
}
export default createHome;