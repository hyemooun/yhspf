/*-----------------------------------------------------------------------------*/
/* 1-1. 풀스크린 메뉴 */
/*-----------------------------------------------------------------------------*/
$("header .menu_btn>a").click(function(){
//    console.log(111);
    $(".full_menu").fadeIn();
});

$(".full_menu .close_btn>a").click(function(){
    $(".full_menu").fadeOut();
});


