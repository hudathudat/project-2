/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const navBar = document.getElementById('navbar__list');

// Create ID name for link

function createID (section){
    section = section.split(' ').join('').toLowerCase();
    return section;
};

// Add sections with anchor link to navbar

function createNav (h2s) { 
    for (h2 of h2s) {
        let text = h2.innerHTML;
        let listTag = document.createElement('li');
        let idAnchor = createID(text);
        let text1 = document.createTextNode(text);
        let aTag = document.createElement('a');
        aTag.href = '#' + idAnchor;
        aTag.append(text1);
        listTag.append(aTag);
        listTag.classList.add('box', idAnchor);
        navBar.appendChild(listTag); 
    }
};

// Build menu 

let sections = document.getElementsByTagName('h2');
createNav(sections);

const allSections = document.querySelectorAll('.landing__container');

let previousActiveElement = null;

// Set sections to active and inactive

function check () {
    document.addEventListener('scroll', function() {  
        let currentPosition = window.pageYOffset - Math.abs(0 - allSections[0].getBoundingClientRect().top);
        // i is the index of active section
        for (i = 0; i < allSections.length; i++) {
            // Set section to active
            if (currentPosition >=allSections[i].getBoundingClientRect().top && currentPosition < allSections[i].getBoundingClientRect().bottom) {
                let sectionNumber = i + 1;
                console.log('Section ' + sectionNumber + ' is active');
                className = 'section' + sectionNumber;
                let activeElement = document.getElementsByClassName(className)[0];
                activeElement.classList.add('your-active-class');
                let inactiveSections = document.getElementsByClassName('box');
                console.log(inactiveSections[0])
                for (j = 0; j < allSections.length; j ++) {
                    if (j !== i) {
                        inactiveSections[j].classList.remove('your-active-class');
                    }
                }
                let activeMainElement = document.getElementById(className);
                activeMainElement.classList.add('your-active-class');
                let allMainSections = document.getElementsByTagName('section');
                for (j = 0; j < allMainSections.length; j ++) {
                    if (j !== i) {
                        allMainSections[j].classList.remove('your-active-class');
                    }
                }
            }
            // Set sections to inactive
            if (window.pageYOffset >= 0 && window.pageYOffset < allSections[0].getBoundingClientRect().top) {
                let inactiveSections = document.getElementsByClassName('box');
                console.log(inactiveSections[0])
                for (j = 0; j < allSections.length; j ++) {
                    inactiveSections[j].classList.remove('your-active-class');
                    
                }
            }
        }
    })
}

check();

