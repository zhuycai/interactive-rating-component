let submitBtn = document.getElementById('submit-btn');
let inputs = document.querySelectorAll('.rating input');
let ratingStateCon = document.querySelector('.rating-state-container');
let thankYouStateCon = document.querySelector('.thank-you-state-container');
let displayResult = document.getElementById('result');
let result;

inputs.forEach(ele => {
    ele.addEventListener('click', function() {
        result = Number(this.value);
    });
});

submitBtn.addEventListener('click', function() {
    if (!result) return;

    displayResult.innerHTML = result + '';

    ratingStateCon.style.display = 'none';

    thankYouStateCon.style.display = 'flex';
});

