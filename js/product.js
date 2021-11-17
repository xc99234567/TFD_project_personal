$(document).ready(function () {

    // 大圖改為所點的小圖
    $('.small_img img').click(function () {
        $('.big_img img').attr('src', $(this).attr('src'))
        $(this).addClass('act');
        $('.small_img img').not($(this)).removeClass('act');
    })
    
    // 左箭頭點擊
    $('.big_img .fa-chevron-left').click(function(){
        // 把其他的邊框變回透明
        $('.small_img img').removeClass('act');
        // 透過迴圈找是哪一個img
        for (let i = 0; i < $('.small_img img').length; i++) {
            // 若大圖的src == 小圖的src
            if($('.big_img img').attr('src') == $('.small_img img').eq(i).attr('src')){
                // 若i不為0 (讓從第一個點能跳到最後一個)
                if(i != 0){
                    // 大圖src改為上張小圖(也就是i-1)
                    $('.big_img img').attr('src', `./imgs/product1-${i - 1}.jpg`);
                    // 將該小圖邊框變色
                    $('.small_img img').eq(i - 1).addClass('act');
                    // 找到後離開迴圈
                    break;
                }else if(i == 0){
                    // 從第一個跳到最後一個
                    $('.big_img img').attr('src', `./imgs/product1-${$('.small_img img').length - 1}.jpg`);
                    // 邊框變色
                    $('.small_img img').eq($('.small_img img').length - 1).addClass('act');
                    // 跳出迴圈
                    break;
                }
            }
        }
    });

    // 右箭頭點擊
    $('.big_img .fa-chevron-right').click(function(){
        // 把其他的邊框變回透明
        $('.small_img img').removeClass('act');
        // 透過迴圈找是哪一個img
        for (let i = 0; i < $('.small_img img').length; i++) {
            // 若大圖的src == 小圖的src
            if($('.big_img img').attr('src') == $('.small_img img').eq(i).attr('src')){
                // 若i不為陣列長度-1 (讓從最後一個點能跳到第一個)
                if(i != $('.small_img img').length - 1){
                    // 大圖src改為下張小圖(也就是i+1)
                    $('.big_img img').attr('src', `./imgs/product1-${i + 1}.jpg`);
                    // 將該小圖邊框變色
                    $('.small_img img').eq(i + 1).addClass('act');
                    // 找到後離開迴圈
                    break;
                }else if(i == $('.small_img img').length - 1){
                    // 從第一個跳到最後一個
                    $('.big_img img').attr('src', `./imgs/product1-0.jpg`);
                    // 邊框變色
                    $('.small_img img').eq(0).addClass('act');
                    // 跳出迴圈
                    break;
                }
            }
        }
    });
});