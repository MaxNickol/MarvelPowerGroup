document.addEventListener('DOMContentLoaded', (event) => {

    const about_btn = document.querySelector('.about');
    const contact_btn = document.querySelector('.contact');
    const service_btn = document.querySelector('.service');
    const connect_us = document.querySelector('.contacts');

    // Sections
    const section_main = document.querySelector('.container');
    const section_about = document.querySelector('.container2');
    const section_services = document.querySelector('.container3');
    const section_connect = document.querySelector('.container4');

    // Inputs from form
    const form = document.querySelector('.connect-form');
    const input1 = form.querySelector('input');
    const input2 = form.querySelector('input:last-of-type');


    // Mobile menu
    const mobile_menu = document.querySelector('.menu_btn');
    const mobile_section = document.querySelector('.mobile-menu');
    const close_btn = document.querySelector('.close_btn');

    const mobile_item_about = document.querySelector('.mobile-items-about');
    const mobile_item_services = document.querySelector('.mobile-items-service');
    const mobile_item_contact = document.querySelector('.mobile-items-contact');


    mobile_item_about.addEventListener('click', ()=> {
        section_about.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        activateScroll()
    })

    mobile_item_services.addEventListener('click', () => {
        section_services.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        activateScroll()
    })
    
    mobile_item_contact.addEventListener('click', () => {
        section_connect.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        activateScroll()
    })

    mobile_menu.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            mobile_section.style.display = 'flex';
            mobile_menu.hidden = true;
            section_main.style.display = 'none';        
        
    })

    close_btn.addEventListener('click', () => {
        activateScroll();
        mobile_section.style.display = 'none';
        section_main.style.display = 'grid';
    })
    
    form.addEventListener('submit', (event) => {
        if(input1.value == '' && input2.value == '') {
            event.preventDefault();
            alert('You should input both name and email!');
        }

        else if(input1.value == '' || input1.value == null) {
            event.preventDefault();
            alert('You should input your name!');
        }

        else if(input2.value == '' || input1.value == null) {
            event.preventDefault();
            alert('You should input your email!');
        }
    })

    about_btn.addEventListener('click', () => {
        section_about.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })

    contact_btn.addEventListener('click', () => {
        section_connect.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })

    service_btn.addEventListener('click', () => {
        section_services.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })

    connect_us.addEventListener('click', () => {
        section_connect.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })



    function activateScroll() {
        document.body.style.overflow = 'initial';
    }
})