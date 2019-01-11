$(document).ready(function(){

    $("ul li a").click(function(){
        $("body, html").animate({
            scrollTop : $($(this).attr('href')).offset.top
        })

        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    })
})


// $(document).click(function(){
//     $('body').animate({
//         scrollTop: $('#about').offset().top
//     })
// })