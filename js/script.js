//  Dropdown functionality
var accordion = document.getElementsByClassName('sidebar__link--dropdown');



for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(event) {
        var elem = event.target.parentNode;
        elem.classList.toggle('sidebar__item--active');

        var panel = elem.nextElementSibling;

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}