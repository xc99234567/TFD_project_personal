$(document).ready(function () {

    // hamburger 選單切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $(`.menu_wrapper`).toggleClass(`menu-on`);
        $(`.mask`).toggleClass(`mask-on`);
    });

    // 商品下拉選單切換
    $(`.product>a`).on(`click`, function (e) {
        e.preventDefault();
        console.log($(window).width());
        if ($(window).width() <= 768) {
            $(`.product_popover`).toggleClass(`ham-on`);
            $(`.product a i`).toggleClass(`i-turn`);
        }
    });

});