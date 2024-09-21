let doctorTypeInput = document.querySelector('.doctor-type-input-js');
let examinationType = document.querySelector('.examination-js');
let addressInput = document.querySelector('.examination-address-js');
let dateInput = document.querySelector('.examination-date-js');
let timeInput = document.querySelector('.examination-time-js');
const addBtn = document.querySelector('.add-examination-js');
let testsList = document.querySelector('.examination-list-js');
let date = document.querySelector('.date-js');

let test = JSON.parse(localStorage.getItem('testArray'))  || [
  {
    type: '',
    examination: '',
    address: '',
    date: '',
    time: '',
  }
];

renderTest();

function renderTest(){
  let testListHTML = '';

  test.forEach((testObject, index) => {
    const type = testObject.type;
    const examination = testObject.examination;
    const address = testObject.address;
    const date = testObject.date;
    const time = testObject.time;

    let html = `
    <div class='examination-line'>
      <div> ${type}, </div>
      <div class="examination-line"> ${examination}, </div>
      <div> ${address}, </div>
      <div> ${date}, </div>
      <div> ${time}, </div>
      <button class="reset-button js-reset-button">
        usuń
      </button>
    </div>

    `
    localStorage.setItem('testArray', JSON.stringify(test));
    testListHTML += html;
  });

   testsList.innerHTML = testListHTML;
   console.log(test);
   document.querySelectorAll('.js-reset-button')
    .forEach((resetButton, index) => {
      resetButton.addEventListener('click', () => {
        test.splice(index, 1);
        renderTest();
      });
    });
};

function addTest(){
  let type = doctorTypeInput.value;
  let examination = examinationType.value;
  let address = addressInput.value;
  let date = dateInput.value;
  let time = timeInput.value;

  if(!type || !examination || !address || !date || !time){
    alert('Uzupełnij poprawnie wszystkie pola tekstowe');
    return
  }

  test.push(
    {
      type,
      examination,
      address,
      date,
      time,
    }
  );

  doctorTypeInput.value = '';
  examinationType.value = '';
  addressInput.value = '';
  dateInput.value = '';
  timeInput.value = '';

  localStorage.setItem('testArray', JSON.stringify(test));
  console.log(test);
  renderTest();
}

addBtn.addEventListener('click', addTest );

function sortDate(){
  let comparative = [];

  for(let i = 0; i < test.length; i++){
    let compare = test[i].date
      
      if(compare < test[i].date){
        comparative.push(test[i].date);
      }

      let setDATA = Number(test[i].date);

    console.log(typeof test[i].date);
    console.log(setDATA);
  }
}

/* Date */

const today = new Date();

function dayOfTheWeek(){
  let dayName = '';
  let day = today.getDay();
  if(day === 1){
    dayName = 'Poniedziałek';
  }else if(day === 2){
    dayName = 'Wtorek';
  }else if(day === 3){
    dayName = 'Środa';
  }else if( day === 4){
    dayName = 'Czwartek';
  }else if(day === 5){
    dayName = 'Piatek';
  }else if(day === 6){
    dayName = 'Sobota';
  }else if(day === 7){
    dayName = "Niedziela"
  }

  return dayName;
}

function monthOfTheYear(){
  let monthName = '';
  let month = today.getMonth();

  if(month === 0){
    monthName = 'Styczeń';
  }else if(month === 1){
    monthName = 'Luty';
  }else if(month === 2){
    monthName = 'Marzec';
  }else if(month === 3){
    monthName = 'Kwiecień';
  }else if(month === 4){
    monthName = 'Maj';
  }else if(month === 5){
    monthName = 'Czerwiec';
  }else if(month === 6){
    monthName = 'Lipiec';
  }else if(month === 7){
    monthName = 'Sierpień';
  }else if(month === 8){
    monthName = 'Wrzesień';
  }else if(month === 9){
    monthName = 'Październik';
  }else if(month === 10){
    monthName = 'Listopad';
  }else if(month === 11){
    monthName = 'Grudzień'
  }

  return monthName;
}

htmlElement = `
Dzisiaj jest: ${dayOfTheWeek()}, ${today.getDate()} ${monthOfTheYear()} ${today.getFullYear()} roku`

date.innerHTML += htmlElement;

