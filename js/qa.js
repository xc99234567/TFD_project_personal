$(document).ready(function () {

    AOS.init();

    $('.qa_item').click(function(){
        $(this).children().children('.qa_content').toggleClass('-on').slideToggle(400);
    });
});