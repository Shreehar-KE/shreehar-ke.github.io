// SHOW MENU


// MENU
// VALIDATE IF CONSTANT EXISTS


// MENU HIDDEN
// VALIDATE IF CONSTANT EXISTS


// REMOVE MENU MOBILE


// SCROLL SECTIONS ACTIVE LINK


// CHANGE BACKGROUND HEADER


// SHOW SCROLL UP


// ABOUT TABS
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click',()=> {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

// CONTACT FORM
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        // show message
        errorMessage.textContent = 'Write all the input fields'
    } 
    else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_8hh0s46', 
            'template_uer5rdp', 
            '#contact-form', 
            'dNGPgenuXyHnG_sM9'
        ).then(() => {
            // show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message Sent ✔'

            // remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            
            }, 5000);
        }, (error) => {
            alert('OOPs!, SOMETHING WENT WRONG...', error);
        });

        //clear input fields
        contactName.value = ''
        contactEmail.value = ''
        contactSubject.value = ''
        contactMessage.value = ''
    }
};

contactForm.addEventListener('submit',  sendEmail);

