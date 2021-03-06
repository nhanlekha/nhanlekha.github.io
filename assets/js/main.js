$(window).on('load',function(event){
    $('body').removeClass('preloading');
    $('.load').delay(500).fadeOut('fast'); /* fade fast/400/slow */
  });

$(document).ready(function(){ 
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.navbar').addClass('sticky');
            $('.navbar-item-link').addClass('sticky-color');
        }else{
            $('.navbar').removeClass('sticky');
            $('.navbar-item-link').removeClass('sticky-color');
        }
    });   
});



// $( "#dangnhap" ).click(function() {
//     // $('.fromlogin').css('display', 'block'); 
//     // $('.fromsignup').css('display', 'none'); 
//     // // $('.fromlogin').show();
//     // // $('.fromsignup').hide();
//     alert( "Nhan Test Code" );
//   });
//   $( ".fromlogin-close" ).click(function() {
//     $('.fromlogin').hide();
//   });
// //   $( "#dangky" ).click(function() {
// //     alert( "Nhan Test Code" );
// //   });

$(document).ready(function(){
    $('.slider-js').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:2500,
        smartSpeed:1200,
        responsive:{
            0:{
                items:1
            },
            739:{
                items:2
            },
            1050:{
                items:3
            }
        }
    })
  });



  $(document).ready(function(){
    $('.recentlyviewed_boxcontent').owlCarousel({
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
                items:4
            },
            1000:{
                items:6
            }
        }
    })
  });







  $(document).ready(function(){
    $(window).scroll(function(event){
        var pos_body = $('html,body').scrollTop();
        // console.log(pos_body);
        // if(pos_body ==  500){
        //     TweenMax.staggerFrom(
        //         $('.flashsalehotel .flashsalehotel_boxcontent'), /* Ph???n t??? ???????c ch???n */
        //         1, //Th???i gian chuy???n ?????ng
        //         { top:100,opacity:0},
        //         0.2 // Th???i gian c??ch nhau m???i hi???u ???ng
        //       );
        // };
        // return;
    });
  });


    var mockData = [
    {
        name : 'Le Boutique Danang',
        place: 'Qu???n H???i Ch??u',
        img: 'assets/img/trangchu/sale/1.jpg',
    },
    {
        name : 'InterContinental Resort',
        place: 'Qu???n Li??n Chi???u',
        img: 'assets/img/trangchu/sale/2.jpg',
    },
    {
        name : 'Furama Resort Danang',
        place: ' Qu???n Ng?? H??nh S??n',
        img: 'assets/img/trangchu/sale/3.jpg',
    },
    {
        name : ' Kh??ch S???n Crowne Plaza',
        place: ' Qu???n Thanh Kh??',
        img: 'assets/img/trangchu/sale/4.jpg',
    },
    {
        name : ' Melia Danang Beach Resort',
        place: 'Qu???n C???m L???',
        img: 'assets/img/trangchu/sale/5.jpg',
    },
    {
        name : ' Kh??ch s???n M?????ng Thanh Grand',
        place: 'Qu???n S??n Tr??',
        img: 'assets/img/trangchu/sale/6.png',
    },
    {
    name : ' Kh??ch S???n ???? N???ng',
    place: ' Qu???n H???i Ch??u',
    img: 'assets/img/trangchu/sale/7.jpg',
    }
]

    var inputsearchhotel  = document.querySelector('.inputsearchhotel')

    mockData.forEach(item =>{
        var newInfosearchhotel = document.createElement('div')
        newInfosearchhotel.classList.add('infosearchhotel')
        newInfosearchhotel.innerHTML = `
        <div class="infosearchhotel-img">
        <img width="100px" height="70px" style="border-radius: 8px;object-fit: cover;" src="${item.img}" alt="">
    </div>
    <div class="infosearchhotel-text">
        <div class="infosearchhotel-name">
            ${item.name}
        </div>
        <div class="infosearchhotel-place">
        <i class="fa-solid fa-location-dot"></i>
            ${item.place}
        </div>
    </div>`
    inputsearchhotel.appendChild(newInfosearchhotel)
    })
    
    var sreachInput = document.querySelector('.BoxSearch-Bottom-One-input-size')
    sreachInput.addEventListener('input',function(e){
        let txtSreach = e.target.value.trim().toLowerCase()
        let listHotelDOM = document.querySelectorAll('.infosearchhotel')
        listHotelDOM.forEach(item => {
            console.log(item.innerText.includes(txtSreach));
            if(item.innerText.toLowerCase().includes(txtSreach)){
                item.classList.remove('hide')
            }else{
                item.classList.add('hide')
            }
        })
    })







    
    function Validator(options){

        var selectorRules = {

        };
        // H??m th???c hi???n validate
        function validate(inputElement , rule){
            
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            var errorMessage;
            // L???y ra c??c rules c???a selector
            var rules = selectorRules[rule.selector];
            // L???p qua t??? rule v?? ki???m tra
            // c?? l???i th?? d???ng vi???c ki???m tra
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
       // L???y element c???a form c???n validate
        var formElement = document.querySelector(options.form);

        if(formElement){

            options.rules.forEach(function(rule){
                // L??u l???i c??c rules cho m???i input
                 if(Array.isArray(selectorRules[rule.selector])){
                    selectorRules[rule.selector].push(rule.test);
                 }else{
                    selectorRules[rule.selector] = [rule.test];
                }

                var inputElement = formElement.querySelector(rule.selector);

               
                
                if(inputElement){
                    // X??? l?? tr?????ng h???p blur kh???i input
                    inputElement.onblur = function(){
                        validate(inputElement,rule);
                   
                    }

                     // X??? l?? tr?????ng h???p khi ng?????i d??ng v??o input
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
                return value.trim() ? undefined : message || 'Vui l??ng nh???p tr?????ng n??y'
            }
        };

    }

    Validator.isEmail = function(selector, message){
        return{
            selector: selector,
            test: function(value){
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : message || 'Tr?????ng n??y ph???i l?? email'
            }
        };

    }

    Validator.minLength = function(selector , min, message){
        return{
            selector: selector,
            test: function(value) {
                return value.length >= min ? undefined : message || `Vui l??ng nh???p t???i thi???u ${min} k?? t???`
            }
        };

    }

    Validator.isConfirmed = function(selector , getCofirmValue , message){
        return{
            selector: selector,
            test: function(value){
                return value === getCofirmValue() ? undefined : message || 'Gi?? tr??? nh???p v??o kh??ng ch??nh x??c'
            }
        };
    }

   