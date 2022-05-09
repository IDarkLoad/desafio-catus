$('.carousel').slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

$(document).ready(function () {
    $('.navegation-responsive').mouseleave(function() {
        $(this).find('.ulsec').css({'display':'none'});
    });
});

const ActiveMenu = () => {
    let menu = document.querySelector(".navegation-responsive")
    menu.setAttribute("style", "display:block;");
}