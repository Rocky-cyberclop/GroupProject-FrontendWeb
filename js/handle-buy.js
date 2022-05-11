//Tran Anh Hao B2014653
//11/5
const products = {
    "sp001":{ "name":"Giày đỏ nike",
    "price":1000,
    "photo":"product/product1.png"},
    "sp002":{ "name":"Giày xanh dương hàng 1 nike",
    "price":2000,
    "photo":"product/product2.png"},
    "sp003":{ "name":"Giày trắng nike",
    "price":3000,
    "photo":"product/product3.png"},
    "sp004":{ "name":"Giày trắng hàng 2",
    "price":4000,
    "photo":"product/product4.png"},
    "sp005":{ "name":"Giày đen hàng 2",
    "price":5000,
    "photo":"product/product5.png"},
    "sp006":{ "name":"Giày xanh dương hàng 2",
    "price":6000,
    "photo":"product/product6.png"},
    "sp007":{ "name":"Giày vàng hàng 3",
    "price":7000,
    "photo":"product/product7.png"},
    "sp008":{ "name":"Giày hồng hàng 3",
    "price":8000,
    "photo":"product/product8.png"},
    "sp009":{ "name":"Giày xanh đỏ hàng 3",
    "price":9000,
    "photo":"product/product9.png"},
    "sp0010":{ "name":"Giày xanh dương hàng 4",
    "price":9000,
    "photo":"product/product10.png"},
    "sp0011":{ "name":"Giày hồng hàng 4",
    "price":9000,
    "photo":"product/product11.png"},
    "sp0012":{ "name":"Giày cuối cùng",
    "price":9000,
    "photo":"product/product12.png"}
    };


    // Add a product to shopping-cart
    const buyBtn = document.getElementsByClassName('btn--buy');
    for(let i=0; i<buyBtn.length; i++){
        buyBtn[i].onclick = function(){add_cart(buyBtn[i].value)};
    }

    function add_cart(code){
        if(typeof window.localStorage[code] === 'undefined'){
            window.localStorage.setItem(code,1);
        }
        else{
            const quantity = parseInt(window.localStorage.getItem(code));
            if(quantity === 100){
                alert('Vược quá giới hạn đặt hàng!');
                return;
            }
            window.localStorage.setItem(code,quantity+1);
        }
        alert('Đã thêm vào đơn hàng!');
    }


    var product_hover = document.querySelectorAll('.list > .container');
    for(let i=0; i<product_hover.length; i++){
        product_hover[i].addEventListener('mouseover', ()=>{
            product_hover[i].classList.add('list--hover');
        });
        product_hover[i].addEventListener('click', ()=>{
            product_hover[i].classList.add('list--hover');
        });
        product_hover[i].addEventListener('mouseout', ()=>{
            product_hover[i].classList.remove('list--hover');
        });
        window.addEventListener('scroll', ()=>{
            product_hover[i].classList.remove('list--hover');
        })
    }




