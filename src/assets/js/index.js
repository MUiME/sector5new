$(document).ready(function(){
    $(".navbar-default .nav > li > a.init-hide").removeClass("init-hide");
});

$(document).click(function (event) {
    collapseNavbar(event);
});

function collapseNavbar(event){
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }
}
