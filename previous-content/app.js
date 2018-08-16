//Sandwhiching navigation bar
let sandwhichNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let scroller = (button, sectionId) => {
    $(`${button}`).click(() =>
        $('html,body').animate({
            scrollTop: $(`${sectionId}`).offset().top
        }, 'slow')
    )
}

scroller('#aboutNav', '#aboutMe');
scroller('#projectsNav', '#projects');
scroller('#SkillsNav', '#skills');
scroller('#recommendationsNav', '#recommendations');
scroller('.scroll-contact', 'footer');

//Slick carousel
$(document).ready(function () {
    $('.slick-carousel').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1600,
        dots: true
    });
});
