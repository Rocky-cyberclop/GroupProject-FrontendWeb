//Tran Anh Hao B2014653
//11/5

const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
    loader.classList.add('fade');
    this.setTimeout(function(){loader.style.display = 'none';},1000);
});