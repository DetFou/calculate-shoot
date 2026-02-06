function showContentHandler(event) {     // Переключить вкладки
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    event.target.classList.add('active');
    // Переключить контент
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add('hide');
    }
    document.getElementById(event.target.dataset.contentId).classList.remove('hide')
}

function initTabs() {
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', showContentHandler)
    }
}