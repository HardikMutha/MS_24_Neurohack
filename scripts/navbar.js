// JavaScript to prevent body scrolling when navbar is open
document.getElementById('navi-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});