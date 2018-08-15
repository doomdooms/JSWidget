function calendar(new_year, new_month) {
    var date = new Date(new_year,new_month);
    var currYear = date.getFullYear(),
        currMonth = date.getMonth(),
        currDate = date.getDate(),
        currDay = date.getDay(),
        d_length = 32 - new Date(currYear, currMonth - 1, 32).getDate();

var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');
caption_year.innerHTML = String(currYear);
caption_month.innerHTML = String(currMonth + 1);


var start_day = document.querySelectorAll('tr td');

for (var i = 0; i < start_day.length; i++) {
    start_day[i].innerHTML = '&nbsp';
}

for (var i = currDay; i < currDay + d_length; i++) {
    start_day[i].innerHTML = currDate;
    currDate++
}
}

(function(){
    var prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        year = new Date().getFullYear(),
        month = new Date().getMonth()+1;
    calendar(year,month);
    prev.onclick = function() {
        calendar(year, --month);
    };

    next.onclick = function() {
        calendar(year, ++month);
    };
})();