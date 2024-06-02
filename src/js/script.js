const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
});
document.querySelector('.next').addEventListener('click', function (){
    slider.goTo('next');
})
document.querySelector('.prev').addEventListener('click', function (){
    slider.goTo('prev');
})

$(document).ready(function(){
    $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function() {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal #consultation, #order, #thanks, .overlay
    $('[data-modal="consultation"]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('#consultation, #order, #thanks, .overlay').fadeOut('slow');
    })
    // $('.button_mini').on('click', function(){
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    })

    // form validate
    function valideForms(form){
        $(form).validate({
            rules:{
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            }
        });
    }

    valideForms('#consultation form');
    valideForms('#order form');
    valideForms('#consultation-form');
    
    // $('input[name=phone]'){
    //     $("#phone").mask("(999) 999-9999");
    // };

    // smooth scroll adn pageup
    // $(window).scroll(function(){
    //     if($(this).scrollTop() < 800){
    //         $(',pageup').fadeIn();
    //     } else{
    //         $('.pageup').fadeOut();
    //     }
    // })

    $("a[href^='#"),click(function(){
        let _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    })
})
