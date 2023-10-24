const createHeader = () =>{
    const header = document.createElement('div'); // div header
    const title = document.createElement('div'); // div  header text
    title.textContent = 'RoseWater';
    header.appendChild(title);
    header.classList.add('header'); //class: header
    return header;
}
export default createHeader;