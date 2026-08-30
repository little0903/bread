$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });

    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    });

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    $(".header-nav-sp a").on("click", function () {
        $("header").removeClass("open");
    });

}); 
