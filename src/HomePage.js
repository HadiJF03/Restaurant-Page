
import imgURL from './assets/home-page-dish.jpg';
const createHome = ()=>{
    const container = document.createElement('div');
    const title = document.createElement('div');
    const imgDiv = document.createElement('div');
    title.textContent = "Authentic Lebanese Food";
    const img = new Image();
    img.src = imgURL;

    container.classList.add('container');     // class = container.
    title.classList.add('title');             //class = title.
    imgDiv.classList.add('image-container');  //class = image-container.

    imgDiv.appendChild(img);
    container.appendChild(title);
    container.appendChild(imgDiv);

    return container;
}
export default createHome;