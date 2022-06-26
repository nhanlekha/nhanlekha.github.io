$(window).on('load',function(event){
  $('body').removeClass('preloading');
  $('.load').delay(500).fadeOut('fast'); /* fade fast/400/slow */
});

$( ".Input-TheATM-Bank-CheckBox-Icon-Tron1" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron1').css('display', 'none');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check1').css('display', 'block');  
  });
$( ".Input-TheATM-Bank-CheckBox-Icon-Check1" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron1').css('display', 'block');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check1').css('display', 'none'); 
  });

  $( ".Input-TheATM-Bank-CheckBox-Icon-Tron2" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron2').css('display', 'none');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check2').css('display', 'block');  
  });
$( ".Input-TheATM-Bank-CheckBox-Icon-Check2" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron2').css('display', 'block');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check2').css('display', 'none'); 
  });

$( ".Input-TheATM-Bank-CheckBox-Icon-Tron3" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron3').css('display', 'none');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check3').css('display', 'block');
  });
$( ".Input-TheATM-Bank-CheckBox-Icon-Check3" ).click(function() {
    $('.Input-TheATM-Bank-CheckBox-Icon-Tron3').css('display', 'block');
    $('.Input-TheATM-Bank-CheckBox-Icon-Check3').css('display', 'none'); 
  });

//   document.getElementById('Input-TheATM-Bank-CheckBox-Icon-Tron4').onclick = function(){
//     alert('Bạn đã click vào nút này!');
// };
//   $( '.Input-TheATM-Bank-CheckBox-Icon-Tron4' ).click(function() {
      
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Tron4').css('display', 'none');
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Check4').css('display', 'block');  
//   });
// $( ".Input-TheATM-Bank-CheckBox-Icon-Check4" ).click(function() {
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Tron4').css('display', 'block');
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Check4').css('display', 'none'); 
//   }); 


//   $( ".Input-TheATM-Bank-CheckBox-Icon-Tron5" ).click(function() {
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Tron5').css('display', 'none');
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Check5').css('display', 'block');  
    
//   });
// $( ".Input-TheATM-Bank-CheckBox-Icon-Check5" ).click(function() {
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Tron5').css('display', 'block');
//     // $('.Input-TheATM-Bank-CheckBox-Icon-Check5').css('display', 'none'); 
//   });

$(document).ready(function(){
  $('.trendinghotel-js').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:15000,
      smartSpeed:1200,
      dots:false,
      touchDrag:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  })
});
    
function Validator(options){

  var selectorRules = {

  };
  // Hàm thực hiện validate
  function validate(inputElement , rule){
      
      var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
      var errorMessage;
      // Lấy ra các rules của selector
      var rules = selectorRules[rule.selector];
      // Lặp qua từ rule và kiểm tra
      // có lỗi thì dừng việc kiểm tra
      for ( var i = 0 ; i < rules.length ; ++i){
          errorMessage = rules[i](inputElement.value);
          if (errorMessage) break;
      }

      if(errorMessage){
          errorElement.innerText = errorMessage;
          inputElement.parentElement.classList.add('invalid');
      }
      else{
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
      }
  }
 // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);

  if(formElement){

      options.rules.forEach(function(rule){
          // Lưu lại các rules cho mỗi input
           if(Array.isArray(selectorRules[rule.selector])){
              selectorRules[rule.selector].push(rule.test);
           }else{
              selectorRules[rule.selector] = [rule.test];
          }

          var inputElement = formElement.querySelector(rule.selector);

         
          
          if(inputElement){
              // Xử lý trường hợp blur khỏi input
              inputElement.onblur = function(){
                  validate(inputElement,rule);
             
              }

               // Xử lý trường hợp khi người dùng vào input
               inputElement.oninput = function(){
                  var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                  errorElement.innerText = '';
                  inputElement.parentElement.classList.remove('invalid');
             
              }
          }
      });

  }
}

Validator.isRequired = function(selector, message){
  return{
      selector: selector,
      test: function(value){
          return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
      }
  };

}

Validator.isEmail = function(selector, message){
  return{
      selector: selector,
      test: function(value){
          var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return regex.test(value) ? undefined : message || 'Trường này phải là email'
      }
  };

}

Validator.minLength = function(selector , min, message){
  return{
      selector: selector,
      test: function(value) {
          return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
      }
  };

}

Validator.isConfirmed = function(selector , getCofirmValue , message){
  return{
      selector: selector,
      test: function(value){
          return value === getCofirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
      }
  };
}
