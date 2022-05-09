
const accounts = [
    {username: 'rocky', password: '992002'}
]


// make password to text signin
window.addEventListener('load', ()=>{
    var eye = document.querySelector('.eye');
    eye.addEventListener('click',()=>{
        eye.classList.toggle('fa-eye-slash')
        var type_pass = document.querySelector('.password');
        if(type_pass.attributes.type.value==='password'){
            type_pass.attributes.type.value = 'text'
        }
        else{
            type_pass.attributes.type.value = 'password'
        }
    });
});

// pseudo signin
window.addEventListener('load', ()=>{
    var submit = document.querySelector('.submit');
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        var user = document.querySelector('.user');
        var pass = document.querySelector('.password');
        for(let i=0; i<accounts.length; i++){
            if(user.value===accounts[i].username&&pass.value===accounts[i].password){
                alert('Đăng nhập thành công!')
                location.replace('index.html')
            }
            else{
                alert('Đăng nhập thất bại xin vui lòng nhập lại tài khoản hoặc mật khẩu !')
            }
        }


    });
});

// make password to text signup
window.addEventListener('load',()=>{
    var user_signup = document.querySelector('.user_signup')
    var email_signup = document.querySelector('.email_signup')
    var password_signup = document.querySelectorAll('.password_signup')
    var eye = document.querySelectorAll('.form-signup .eye')
    for(let i=0; i<eye.length; i++){
        eye[i].addEventListener('click',()=>{
            eye[i].classList.toggle('fa-eye-slash');
            if(password_signup[i].attributes.type.value==='password'){
                password_signup[i].attributes.type.value = 'text';
            }
            else{
                password_signup[i].attributes.type.value = 'password';
            }
        })
    }
});

// make modal sign-up
window.addEventListener('load',()=>{
    var sign_up = document.querySelector('.sign-up')
    var modal_signup = document.querySelector('.signup-modal')
    sign_up.addEventListener('click',()=>{
        modal_signup.classList.add('signup--open')
    });

    var sign_up_close = document.querySelector('.modal__close');
    sign_up_close.addEventListener('click',()=>{
        modal_signup.classList.remove('signup--open')
    });

    window.addEventListener('keydown',(e)=>{
        if(e.key=='Escape'){
            modal_signup.classList.remove('signup--open')
        }
    });

    var background_modal = document.querySelector('.modal__background');
    background_modal.addEventListener('click',()=>{
        modal_signup.classList.remove('signup--open')
    });

    var form_signup = document.querySelector('.form-signup');
    form_signup.addEventListener('click',(e)=>{
        e.stopPropagation()
    })


});


// pseudo ajax signup
window.addEventListener('load',()=>{
    var user_signup = document.querySelector('.user_signup')
    var email_signup = document.querySelector('.email_signup')
    var password_signup = document.querySelectorAll('.password_signup')[0]
    var confirm_password_signup = document.querySelectorAll('.password_signup')[1]
    var submit = document.querySelector('.submit_signup')
    var messages = document.querySelectorAll('.message_signup')
    

    var successes = [false,false,false,false]
    
    
    
    user_signup.addEventListener('blur',()=>{
        var success = 'All in success !'
        var error = 'Name must have more than 5 chars !'
        if(user_signup.value.length<5){
            user_signup.parentElement.classList.add('error__border')
            user_signup.parentElement.classList.remove('success__border')
            messages[0].classList.add('error')
            messages[0].classList.remove('success')
            messages[0].childNodes[1].textContent = error
            messages[0].childNodes[0].classList.add('fa-xmark')
            messages[0].childNodes[0].classList.remove('fa-check')
            successes[0] = false

        }
        else{
            user_signup.parentElement.classList.add('success__border')
            user_signup.parentElement.classList.remove('error__border')
            messages[0].classList.remove('error')
            messages[0].classList.add('success')
            messages[0].childNodes[1].textContent = success
            messages[0].childNodes[0].classList.remove('fa-xmark')
            messages[0].childNodes[0].classList.add('fa-check')
            successes[0] = true

        }
    });

    email_signup.addEventListener('blur',()=>{
        var success = 'All in success !'
        var error = 'Email is like 123@gmail.com !'
        const re = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
        

        if(!re.test(email_signup.value)){
            email_signup.parentElement.classList.add('error__border')
            email_signup.parentElement.classList.remove('success__border')
            messages[1].classList.add('error')
            messages[1].classList.remove('success')
            messages[1].childNodes[1].textContent = error
            messages[1].childNodes[0].classList.add('fa-xmark')
            messages[1].childNodes[0].classList.remove('fa-check')
            successes[1] = false

        }
        else{
            email_signup.parentElement.classList.add('success__border')
            email_signup.parentElement.classList.remove('error__border')
            messages[1].classList.remove('error')
            messages[1].classList.add('success')
            messages[1].childNodes[1].textContent = success
            messages[1].childNodes[0].classList.remove('fa-xmark')
            messages[1].childNodes[0].classList.add('fa-check')

            successes[1] = true

        }
    });

    password_signup.addEventListener('blur',()=>{
        var success = 'All in success !'
        var error = 'Pass must have more than 5 chars !'
        if(password_signup.value.length<5){
            password_signup.parentElement.classList.add('error__border')
            password_signup.parentElement.classList.remove('success__border')
            messages[2].classList.add('error')
            messages[2].classList.remove('success')
            messages[2].childNodes[1].textContent = error
            messages[2].childNodes[0].classList.add('fa-xmark')
            messages[2].childNodes[0].classList.remove('fa-check')

            successes[2] = false

        }
        else{
            password_signup.parentElement.classList.add('success__border')
            password_signup.parentElement.classList.remove('error__border')
            messages[2].classList.remove('error')
            messages[2].classList.add('success')
            messages[2].childNodes[1].textContent = success
            messages[2].childNodes[0].classList.remove('fa-xmark')
            messages[2].childNodes[0].classList.add('fa-check')

            successes[2] = true
            
            if(!(confirm_password_signup.value===password_signup.value)){
                confirm_password_signup.parentElement.classList.add('error__border')
                confirm_password_signup.parentElement.classList.remove('success__border')
                messages[3].classList.add('error')
                messages[3].classList.remove('success')
                messages[3].childNodes[1].textContent = 'Cofirm must equal password !'
                messages[3].childNodes[0].classList.add('fa-xmark')
                messages[3].childNodes[0].classList.remove('fa-check')
    
                successes[3] = false
    
            }
            else{
                confirm_password_signup.parentElement.classList.add('success__border')
                confirm_password_signup.parentElement.classList.remove('error__border')
                messages[3].classList.remove('error')
                messages[3].classList.add('success')
                messages[3].childNodes[1].textContent = success
                messages[3].childNodes[0].classList.remove('fa-xmark')
                messages[3].childNodes[0].classList.add('fa-check')
    
                successes[3] = true
            }    

        }
    });

    confirm_password_signup.addEventListener('blur',()=>{
        var success = 'All in success !'
        var error = 'Cofirm must equal password !'

    
        if(!(confirm_password_signup.value===password_signup.value)){
            confirm_password_signup.parentElement.classList.add('error__border')
            confirm_password_signup.parentElement.classList.remove('success__border')
            messages[3].classList.add('error')
            messages[3].classList.remove('success')
            messages[3].childNodes[1].textContent = error
            messages[3].childNodes[0].classList.add('fa-xmark')
            messages[3].childNodes[0].classList.remove('fa-check')

            successes[3] = false

        }
        else{
            confirm_password_signup.parentElement.classList.add('success__border')
            confirm_password_signup.parentElement.classList.remove('error__border')
            messages[3].classList.remove('error')
            messages[3].classList.add('success')
            messages[3].childNodes[1].textContent = success
            messages[3].childNodes[0].classList.remove('fa-xmark')
            messages[3].childNodes[0].classList.add('fa-check')

            successes[3] = true

        }
        
    });

    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        for(let i=0; i<successes.length; i++){
            if(!successes[i]){
                alert('Hãy hoàn thành tất cả ràng buộc !')
                return
            }
        }
        alert('Đăng kí thành công nhưng vì đây là web tĩnh nên tôi sẽ chuyển bạn về trang đăng nhập nhé !')
        location.replace(location.href)
    })

});