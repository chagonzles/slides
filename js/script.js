var myFullpage = new fullpage('#fullpage', {
    anchors: ['home-page', 'pricing-page', 'about-page'],
    autoScrolling: true,
    navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    menu: '#menus',
    easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
});

document.querySelector('#up-btn').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(1);
})
document.querySelector('#down-btn').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(3);
});