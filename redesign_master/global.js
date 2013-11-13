// JavaScript Document

$(function () {


    $('#main-trigger').sidr({
        source: '#sidr-menu'
    });


    $(".sidr-class-has-sub").click(function () {

        if ($(this).siblings('li').hasClass('open-menu')) {
            $(this).siblings('li').children('ul').slideUp().removeClass('open-menu');
        }
        $(this).children('ul').slideToggle();
        $(this).addClass("open-menu");
    });

    if ($("#subnav").length) {
        $("#subnav").css("margin-bottom", "20px");
    }
    else {
        $("#logo-social-header").css("margin-bottom", "20px");
    }


    $("#search-btn").hide();

    $("#search-box").focus(function () {
        $(this).attr("placeholder", "Search");
        $("#search").append("<i class='search-tip white'>Press 'Enter' to search</i>");
    });

    $("#search-box").blur(function () {
        $(this).removeAttr("placeholder");
        $(".search-tip").hide();
    });

    $("#search").mouseout(function () {
        $("#search-btn").hide();
    });

    $('a[href^="http://"], a[href^="https://"]').not('[href*="cco.purdue.edu"]').attr('target', '_blank');

    $('img:not([alt][title])').each(function () {
        var text = $(this).attr("src");
        $(this).attr("title", text);
        $(this).attr("alt", text);
    });

    $('img:not([title])').each(function () {
        var text = $(this).attr("src");
        $(this).attr("title", text);
    });

    $('img:not([alt])').each(function () {
        var text = $(this).attr("src");
        $(this).attr("alt", text);
    });

    $("a:not([title])").each(function () {
        var text = $(this).text();
        $(this).attr("title", text);
    });

    $(".dec").click(function () {
        $("body").css("fontSize", "100%");
    });

    $(".reset").click(function () {
        $("body").css("fontSize", "125%");
    });

    $(".inc").click(function () {
        $("body").css("fontSize", "175%");
    });

});