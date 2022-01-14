var holiday = document.querySelectorAll('li.color1');

for (var i = 0; i <=holiday.length; i++) {
    if (i%2 === 0) {
        holiday[i].className = 'even';
    }
    else if (i%2 === 1) {
        holiday[i].className = 'odd';
    }
}