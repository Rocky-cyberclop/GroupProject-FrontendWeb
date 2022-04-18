
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


//Handle buy
const main = document.getElementsByClassName('des__product');
    
function makeListProducts(item){
    // create single product cart
    let singleProduct = document.createElement('div');
    singleProduct.className = 'single-product display--flex justify-content--space-between';
    
    // create description of product
    let productDes = document.createElement('div');
    productDes.className = 'product__des display--flex';
    
    // create img tag
    let img = document.createElement('img');
    img.src = item.photo;
    img.width = 200;
    // create info div
    let productInfo = document.createElement('div');
    productInfo.className = 'product__info display--flex justify-content--space-between';
    
    // create name and price
    let productInfoName = document.createElement('h6');
    let productInfoPrice = document.createElement('h6');
    productInfoName.innerHTML = item.name;
    productInfoPrice.innerHTML = item.price + '$';

    // append name and price to info div
    productInfo.appendChild(productInfoName);
    productInfo.appendChild(productInfoPrice);
    
    // append img and info to description div
    productDes.appendChild(img);
    productDes.appendChild(productInfo);
    
    // create buy div
    let productBuy = document.createElement('div');
    productBuy.className = 'product__buy display--flex justify-content--space-around';

    // create handle quantity buy
    let productBuyQuantity = document.createElement('div');
    productBuyQuantity.className = 'display--flex justify-content--center align-item--center';
    
    // create wrap btn input btn of quantity buy
    let buy__handleQuantity = document.createElement('div');
    buy__handleQuantity.className = 'btn-group buy__handle-quantity';
    buy__handleQuantity.role = 'group';
    buy__handleQuantity.ariaLabel = 'Basic outlined example';

    // create minus btn
    let buy__handleQuantityBtnMinus = document.createElement('button');
    // create plus btn
    let buy__handleQuantityBtnPlus = document.createElement('button');
    buy__handleQuantityBtnMinus.className = 'btn btn-outline-main-color';
    buy__handleQuantityBtnPlus.className = 'btn btn-outline-main-color';
    buy__handleQuantityBtnMinus.innerHTML = '-';
    buy__handleQuantityBtnPlus.innerHTML = '+';
    // create input field
    let buy__handleQuantityInput = document.createElement('input');
    buy__handleQuantityInput.className = 'btn btn-outline-main-color';
    buy__handleQuantityInput.type = 'number';
    buy__handleQuantityInput.value = item.quantity;
    buy__handleQuantityInput.max = 100;
    buy__handleQuantityInput.min = 0;
    buy__handleQuantityInput.required = true;

    // append btn input btn of wrap of quantity buy
    buy__handleQuantity.appendChild(buy__handleQuantityBtnMinus);
    buy__handleQuantity.appendChild(buy__handleQuantityInput);
    buy__handleQuantity.appendChild(buy__handleQuantityBtnPlus);
    // append wrap of quantity buy
    productBuyQuantity.appendChild(buy__handleQuantity);
    

    // create h6 of price
    let productBuyPrice = document.createElement('h6');
    productBuyPrice.className = 'display--flex align-item--center';
    productBuyPrice.innerHTML = (item.quantity * item.price) + '$';
    // create wrap del product button
    let wrapProductDel = document.createElement('div');
    wrapProductDel.className = 'display--flex justify-content--center align-item--center';
    // create del product button
    let productDel = document.createElement('button');
    productDel.className = 'product__buy__del display--flex justify-content--center align-item--center';
    productDel.value = item.code;
    // create icon del product button
    let productDelIcon = document.createElement('i');
    productDelIcon.className = 'fa-solid fa-trash';

    // append icon of del product btn
    productDel.appendChild(productDelIcon);
    // append del product btn of wrap
    wrapProductDel.appendChild(productDel);

    // append child of product buy 
    productBuy.appendChild(productBuyQuantity);
    productBuy.appendChild(productBuyPrice);
    productBuy.appendChild(wrapProductDel);

    // append all part of single product
    singleProduct.appendChild(productDes);
    singleProduct.appendChild(productBuy);
    // append every single product of main
    main[0].appendChild(singleProduct);
}

if(window.localStorage.length !== 0){
    for(let i=0; i<window.localStorage.length; i++){
        let code = window.localStorage.key(i)
        let quantity = window.localStorage.getItem(code);
        let item = {
            name: products[code].name,
            photo: products[code].photo,
            price: products[code].price,
            quantity: quantity,
            code: code
        }
        makeListProducts(item);
    }
}


//Del product from cart
if(window.localStorage.length !== 0){
    let dels = document.getElementsByClassName('product__buy__del');
    for(let i=0; i<dels.length; i++){
        dels[i].onclick = function(){ 
            window.localStorage.removeItem(dels[i].value);
            location.reload();
        };
    }
}


//Change quantity of product
if(window.localStorage.length !== 0){
    let wrapQuantity = document.getElementsByClassName('buy__handle-quantity');
    for(let i=0; i<wrapQuantity.length; i++){
        wrapQuantity[i].children[0].onclick = function(){
            let code = window.localStorage.key(i);
            let quatity = parseInt(wrapQuantity[i].children[1].value);
            if(quatity-1===0){
                window.localStorage.removeItem(code);
            }
            else{
                window.localStorage.setItem(code, quatity-1);
            }
            location.reload();
        };
        wrapQuantity[i].children[2].onclick = function(){
            let code = window.localStorage.key(i);
            let quatity = parseInt(wrapQuantity[i].children[1].value);
            if(quatity+1<100){
                window.localStorage.setItem(code, quatity+1);
                location.reload();
            }
            else{
                alert('Thêm tối đa 100 sản phẩm!');
            }
        };
    }
}

//change quantity by input
if(window.localStorage.length !== 0){
    let wrapQuantity = document.getElementsByClassName('buy__handle-quantity');
    for(let i=0; i<wrapQuantity.length; i++){
        wrapQuantity[i].children[1].onkeypress = function(){
            let e = window.event;
            var keyCode = e.key;
            if (keyCode == 'Enter' && wrapQuantity[i].children[1].value != null){
                wrapQuantity[i].children[1].value;

                let code = window.localStorage.key(i);
                let quantity = parseInt(wrapQuantity[i].children[1].value);
                
                if(quantity<100){
                    if(quantity<=0){
                        window.localStorage.removeItem(code);
                        location.reload();
                        return;
                    }
                    window.localStorage.setItem(code, quantity);
                    location.reload();
                }
                else{
                    alert('Thêm tối đa 100 sản phẩm!');
                }
            }
        }   
    }
}







if(window.localStorage.length !== 0){
    let sum = 0;
    for(let i=0; i<window.localStorage.length; i++){
        let code = window.localStorage.key(i);
        let quantity = window.localStorage.getItem(code);
        sum += products[code].price*quantity;
    }
    document.getElementsByClassName('account')[0].innerHTML = sum + '$';
    
    // get time to make discount
    // Get current time
    sum*=1.1;
    const now = new Date();

    if((now.getHours()>=7 && now.getHours()<=11)||(now.getHours()>=13 && now.getHours()<=17)){
        document.getElementsByClassName('account')[1].innerHTML = parseInt(sum - (sum * (now.getHours()/100))) + '$';
    }
    else{
        document.getElementsByClassName('account')[1].innerHTML = parseInt(sum) + '$';
    }
    
    const interval = setInterval(() => {
        const now = new Date();
        hours = now.getHours();
        if((hours>=7 && hours<=11)||(hours>=13 && hours<=17)){
            let finalSum = sum - (sum * (now.getHours()/100));
            document.getElementsByClassName('account')[1].innerHTML = parseInt(finalSum) + '$';
        }
        else{
            document.getElementsByClassName('account')[1].innerHTML = parseInt(sum) + '$';
        }
    }, 1000);    
    
}
