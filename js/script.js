var myFullpage = new fullpage('#fullpage', {
    anchors: ['home-page', 'pricing-page', 'about-page'],
    autoScrolling: true,
    navigation: true,
    scrollOverflow: true,
    navigationPosition: 'right',
    menu: '#menus',
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    keyboardScrolling: true,
    animateAnchor: true,
    paddingBottom: '10px'
});

document.querySelector('#up-btn').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(1);
})
document.querySelector('#down-btn').addEventListener('click', function(e){
    e.preventDefault();
    fullpage_api.moveTo(3);
});