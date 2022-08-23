// BUTTONS

const submitBtn = document.getElementById('submit-btn');
const thanksBtn = document.getElementById('thanks-btn');

// MAIN CONTAINER

const container = document.querySelector('.container');
const complete = document.querySelector('.complete');

// CARDHOLDER NAME 

const cardholderName = document.getElementById('card-holder-name');

const newName = document.getElementById('new-name');

// CARDHOLDER NUMBER 

const cardNumber = document.getElementById('card-number');

const newCardNumber = document.getElementById('new-card-number');

// DATE 

const exp_date_month = document.getElementById('exp-date-month');
const exp_date_year = document.getElementById('exp-date-year');

const newDate = document.getElementById('new-date');

const newMonth = document.getElementById('new-month');

// INVALID ERROR 

const num_err = document.getElementById('num-err1');

const num_err16 = document.getElementById('num-err16');

const alpha_err = document.getElementById('alpha-err');
const date_err1 = document.getElementById('date-err1');
const date_err2 = document.getElementById('date-err2');

const num_err20 = document.getElementById('num-err20')

const num_err30 = document.getElementById('num-err30')

// CVC 

const cvc = document.getElementById('cvc')

const new_cvc = document.querySelector('.new-cvc');

// CARDHOLDER NAME

cardholderName.addEventListener('input', (e) => {
    let numbers = /[0-9]/
    if (e.target.value.match(numbers)) {
        cardholderName.classList.add('change')
        alpha_err.classList.remove('none')
        newName.innerHTML = e.target.value.toUpperCase()

    } else if (e.target.value === "") {
        newName.innerHTML = "JANE APPLESEED"
        cardholderName.classList.remove('change')
        alpha_err.classList.add('none')


    } else {

        newName.innerHTML = e.target.value.toUpperCase()
        cardholderName.classList.remove('change')
        alpha_err.classList.add('none')

    }
})

// CARD NUMBER


cardNumber.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    var letters = /[A-Za-z]/;
    
    if (e.target.value.match(letters)) {
        cardNumber.classList.add('change')
        num_err.classList.remove('none')

        num_err16.classList.add('none')
        newCardNumber.innerHTML = e.target.value

    } else if (e.target.value === "") {

        newCardNumber.innerHTML = "0000 0000 0000 0000"
        cardNumber.classList.remove('change')
        num_err.classList.add('none')
        num_err16.classList.add('none')


    }else if (e.target.value === "0000 0000 0000 0000") {
        
        newCardNumber.innerHTML = e.target.value
        cardNumber.classList.add('change')
        num_err.classList.remove('none')

        num_err16.classList.add('none')

    } else if (e.target.value.length < 19) {

        newCardNumber.innerHTML = e.target.value
        cardNumber.classList.add('change')
        num_err16.classList.remove('none')

    } else {

        newCardNumber.innerHTML = e.target.value
        cardNumber.classList.remove('change')
        num_err.classList.add('none')
        num_err16.classList.add('none')

    }


})

// EXP-DATE-MONTH

exp_date_month.addEventListener('input', (e) => {

    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();

    let letters = /[A-Za-z]/;
    if (e.target.value.match(letters)) {
        newDate.innerHTML = e.target.value
        num_err20.classList.remove('none')
        date_err1.classList.add('none')
        exp_date_month.classList.add('change')

    } else if (e.target.value === "") {

        num_err20.classList.add('none')
        newDate.innerHTML = "00"
        exp_date_month.classList.add('change')
        date_err1.classList.remove('none')

    } else if (e.target.value === "0" || e.target.value === "00" || e.target.value.length < 2) {

        newDate.innerHTML = "00"
        exp_date_month.classList.add('change')
        date_err1.classList.remove('none')

    } else if (e.target.value > 12) {

        newDate.innerHTML = e.target.value = "12"
        exp_date_month.classList.remove('change')
        date_err1.classList.add('none')

    } else {

        newDate.innerHTML = e.target.value
        exp_date_month.classList.remove('change')
        date_err1.classList.add('none')

    }

})

// EXP-DATE-YEAR

exp_date_year.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();

    let letters = /[A-Za-z]/;
    if (e.target.value.match(letters)) {
        newMonth.innerHTML = e.target.value
        num_err20.classList.remove('none')
        date_err1.classList.add('none')
        exp_date_year.classList.add('change')

    } else if (e.target.value === "") {

        num_err20.classList.add('none')
        newMonth.innerHTML = "00"
        exp_date_year.classList.add('change')
        date_err1.classList.remove('none')

    } else if (e.target.value === "0" || e.target.value === "00" || e.target.value.length < 2) {

        newMonth.innerHTML = "00"
        exp_date_year.classList.add('change')
        date_err1.classList.remove('none')

    } else {

        newMonth.innerHTML = e.target.value
        exp_date_year.classList.remove('change')
        date_err1.classList.add('none')

    }
})

// CVC 

cvc.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();

    let letters = /[A-Za-z]/;
    if (e.target.value.match(letters)) {
        new_cvc.innerHTML = e.target.value
        num_err30.classList.remove('none')
        date_err2.classList.add('none')
        cvc.classList.add('change')

    } else if (e.target.value === "") {

        num_err30.classList.add('none')
        new_cvc.innerHTML = "000"
        cvc.classList.add('change')
        date_err2.classList.remove('none')

    } else if (e.target.value === "0" || e.target.value === "00" || e.target.value === "000" || e.target.value.length < 3) {

        new_cvc.innerHTML = "00"
        cvc.classList.add('change')
        date_err2.classList.remove('none')

    } else {

        new_cvc.innerHTML = e.target.value
        cvc.classList.remove('change')
        date_err2.classList.add('none')

    }
})

// SUBMIT BUTTON
submitBtn.addEventListener('click', () => {
    const main_err = document.getElementById('main-err')
    let all = num_err.classList.contains('none') && num_err16.classList.contains('none') && num_err20.classList.contains('none')
        && num_err30.classList.contains('none') && date_err1.classList.contains('none') && date_err2.classList.contains('none')
        && alpha_err.classList.contains('none')

    let empty = cardholderName.value !== '' && cardNumber.value !== '' && exp_date_month.value !== ''
        && exp_date_year.value !== '' && cvc.value !== ''

    if (all && empty) {
        container.classList.add('none')
        complete.classList.add('show')


    } else if (!empty) {

        setTimeout(() => {
            main_err.classList.remove('none')
        }, 100);

        setTimeout(() => {
            main_err.classList.add('none')
        }, 2000);

    }

})

// THANKS BUTTON

thanksBtn.addEventListener('click', () => {

    container.classList.remove('none')
    complete.classList.remove('show')
    history.go(0)

})



