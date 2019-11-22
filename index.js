var container = document.querySelector("#calendarList");
var currentHour = parseInt(moment().format('H'));


for (var i=9; i <= 17; i++) {
    var className;
    var lsVal = localStorage.getItem(`userInput-${i}`);
    if (i === currentHour) {
        className = 'present';
    } else if (i < currentHour) {
        className = 'past';
    } else {
        className = 'future';
    }
    container.innerHTML += `
        <li class="row ${className}">
          <span class="time col-md-1">${i}</span>
          <input id="input-${i}" type="text" class="col-md-10 userInput" value="${lsVal || ''}" />
          <button data-hour="${i}" class="save col-md-1">Save</button>
        </li>
    `;
}
document.querySelector('.save').addEventListener('click', function(event) {
    var hour = $(event.target).data('hour');
    var userInput = $('#input-' + hour).val();
    localStorage.setItem('userInput-' + hour, userInput);
})