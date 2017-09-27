var $dropdown;

$('.menu-item-has-children ul.sub-menu').hide();
$('.menu-item-has-children').hover(function() {
    $dropdown = $(this).find('ul');
    $dropdown.stop().slideDown(500);
}, function() {
    $dropdown.stop().slideUp(200);
});