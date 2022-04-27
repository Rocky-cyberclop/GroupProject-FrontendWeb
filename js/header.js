

window.addEventListener('scroll', function(){
    var header = document.getElementsByTagName('header');
    if(this.window.scrollY>0){
        header[0].classList.replace('container', 'sticky');
    }
    else{
        header[0].classList.replace('sticky', 'container');
    }
});

