const tabs = document.getElementById('tabs');
const sub_tabs = document.getElementById('sub-tabs');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

const changeClassSub = el => {
    for(let i = 0; i < sub_tabs.children.length; i++) {
        sub_tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    extra_div = document.getElementsByClassName('extra');
    if (extra_div.length !== 0){
      extra_div[0].remove()
    }
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
});

sub_tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClassSub(e.target);
    extra_div = document.getElementsByClassName('extra');
    if (extra_div.length !== 0){
      extra_div[0].remove()
    }
    for (let i = 0; i < content.length; i++) {
        if(content[i].dataset.content === currTab) {
            div = document.createElement('span')
            div.className = 'extra';
            div.innerHTML = content[i].innerHTML;
            document.getElementsByClassName('content active')[0].append(div)

        }
    }
});