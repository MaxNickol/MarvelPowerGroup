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

    let tab_menu = document.querySelectorAll('.tabs');
    let sections = document.querySelectorAll('.sections');
    let tabs = document.querySelectorAll('.tabs-items');
    let tab_text = document.querySelectorAll('.tab-text');

    mobile_item_about.addEventListener('click', () => {
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
        if (input1.value == '' && input2.value == '') {
            event.preventDefault();
            alert('You should input both name and email!');
        } else if (input1.value == '' || input1.value == null) {
            event.preventDefault();
            alert('You should input your name!');
        } else if (input2.value == '' || input1.value == null) {
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


    console.log(tab_menu);


    window.addEventListener('scroll', () => {

        console.log(sections);
        tabs.forEach(item => item.classList.remove('is-active'));

        if (window.pageYOffset >= getCoords(sections[0]) && window.pageYOffset < getCoords(sections[1])) {
            tabs[0].classList.add('is-active');
            colorChange(1)

        } else if (window.pageYOffset >= getCoords(sections[1]) && window.pageYOffset < getCoords(sections[2])) {
            tabs[1].classList.add('is-active');
            colorChange(2)

        } else if (window.pageYOffset >= getCoords(sections[2]) && window.pageYOffset < getCoords(sections[3])) {
            tabs[2].classList.add('is-active');
            colorChange(3)

        } else if (window.pageYOffset >= getCoords(sections[3])) {
            tabs[3].classList.add('is-active');
            colorChange(4);
        }

    })

    tabs.forEach((item, i) => item.addEventListener('click', () => {

        sections[i].scrollIntoView({
            'behavior': 'smooth',
            'block': 'center'
        });

    }))


    // function getExtendedText(elem, i) { 

    //     section_id = elem.getAttribute('id');
    //     tabs[i].textContent = `0${i} ${section_id}`;

    // }

    function colorChange(num) {

        if (num == 4 || num == 1) {
            tab_menu.forEach(item => {
                item.style.color = 'white';
            })
        } else {
            tab_menu.forEach(item => {
                item.style.color = 'black';
            })
        }

    }

    function getCoords(elem) {
        box = elem.getBoundingClientRect()

        return (box.top - 550) + pageYOffset
    }

    function activateScroll() {
        document.body.style.overflow = 'initial';
    }
})