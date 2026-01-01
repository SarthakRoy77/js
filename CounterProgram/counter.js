// Project1 !!!!!!!
// Counter Program

number = 0;

decreaseBtn = document.getElementById('decreaseBtn').onclick = function() {
    document.getElementById('countLabel').textContent = number -= 1;
}
increaseBtn = document.getElementById('increaseBtn').onclick = function() {
    document.getElementById('countLabel').textContent = number += 1;
}
resetBtn = document.getElementById('resetBtn').onclick = function() {
    document.getElementById('countLabel').textContent = number = 0;
}
