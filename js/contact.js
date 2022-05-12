//Hoang Cong Hieu B1910376
// 5/10
// kiểm tra username  phải lớn hơn 5 ký tự
function checkUsername() {                             // Declare function
    var elMsg = document.getElementById('feedback__user');     // Get feedback element
    var elUsername = document.getElementById('username');// Get username input
    if (elUsername.value.length < 5) {                   // neu <5 ky tu thi thong bao loi
        elMsg.textContent='Tên liên hệ phải lớn hơn 5 ký tự!';
        elMsg.classList.add('error__text');
        elMsg.classList.remove('success__text');
        elUsername.classList.add('error__border');
        elUsername.classList.remove('success__border');
        return 0;
    } else {                                              // Otherwise
        elMsg.textContent = '';   
        elMsg.classList.remove('error__text');
        elMsg.classList.add('success__text');
        elUsername.classList.remove('error__border');
        elUsername.classList.add('success__border');
        return 1;                          // nguoc lai thi ok
    }
  }
// kiem tra email theo form theo mau Example@gmail.com
  function checkEmail() { 
    var email = document.getElementById('mail'); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
             alert('Vui long nhap dia chi email hop le.\nExample@gmail.com');
             email.focus; 
             email.classList.add('error__border');
             email.classList.remove('success__border');
             return 0; 
    }
    else{ 
             alert.textContent='Email hop le.'; 
             email.classList.remove('error__border');
             email.classList.add('success__border');
             return 1;
    } 
}
// click send thi thong bao ra man hinh
function Send(){
    checkUsername();
    checkEmail();
    if( checkUsername()==1 && checkEmail()==1){
        alert('Cảm ơn quý khách đã gửi liên hệ cho chúng tôi!');
    }
    else{
        alert('Vui lòng kiểm tra lại Tên hoặc Email!');
    }
    
}