import createHeader from "./header";
const createContact = () =>{
    const container =  document.createElement('div');
    const title = document.createElement('div');
    const info = document.createElement('div');

    title.textContent= 'Contact Us!';
    
    const phoneContainer = document.createElement('div');
    const hoursContainer = document.createElement('div');
    const locationContainer = document.createElement('div');

    phoneContainer.classList.add('container');
    hoursContainer.classList.add('container');
    locationContainer.classList.add('container');

    const pTitle = document.createElement('div');
    const hTitle = document.createElement('div');
    const lTitle = document.createElement('div');
    pTitle.textContent = 'Phone';
    hTitle.textContent = 'Hours';
    lTitle.textContent = 'Location';

    const phone = document.createElement('div')
    phone.textContent = 'Phone: +961 1 234 567';
    const hours = document.createElement('div');
    hours.textContent = 'Open from Monday to Saturday from 10am to 11 am';
    const location = document.createElement('div');
    location.textContent = 'Beirut, Hamra, Fake St.';

    phoneContainer.appendChild(pTitle);
    phoneContainer.appendChild(phone);

    hoursContainer.appendChild(hTitle);
    hoursContainer.appendChild(hours);

    locationContainer.appendChild(lTitle);
    locationContainer.appendChild(location);

    info.appendChild(phoneContainer);
    info.appendChild(hoursContainer);
    info.appendChild(locationContainer);

    container.classList.add('common-container');
    container.classList.add('contact')
    title.classList.add('contact-title');
    info.classList.add('info');


    container.appendChild(title);
    container.appendChild(info);






    const div = document.querySelector('#content')
    div.innerHTML = " ";
    createHeader();
    div.appendChild(container);
}
export default createContact;