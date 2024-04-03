const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show")
    document.body.classList.toggle("overflowhidden")
    document.querySelector(".menuicon").classList.toggle("cross");
})
const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 815,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 778,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.responsive2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 815,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 778,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});