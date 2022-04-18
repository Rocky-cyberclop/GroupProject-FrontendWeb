const loader = document.querySelector('.loader');
window.addEventListener('load', function(){
    loader.classList.add('fade');
    this.setTimeout(function(){loader.style.display = 'none';},1000);
});