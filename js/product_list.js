$(document).ready(function () {

    AOS.init();

    $('.filter_title').click(function () {
        $(this).next('form').slideToggle(400);
        $(this).children('i').toggleClass('-close');
    });

    $('.sort_mode').click(function(){
        $('.sort_down').addClass("-down_on");
        $(this).children('i').addClass("-i_on");
    });

    $(document).click(function(){
        if($('.sort_down').css('height') != '0px'){
            $('.sort_down').removeClass("-down_on");
            $('.sort_down').prev().removeClass("-i_on");
        }
    })


    $('.filter-btn').click(function(){
        $('.product_category_wrapper').addClass('-wrapper-on')

    });

    $('.fa-times').click(function(){
        $('.product_category_wrapper').removeClass('-wrapper-on')
    })
});