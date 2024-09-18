let typeList = document.querySelector('.doctor-types-js');
let typeInput = document.querySelector('.doctor-type-input-js');

let typesArray = [
  'Alergolog',
  'Anestezjolog',
  'Angiolog',
  'Audiolog',
  'Balneolog',
  'Chirurg klatki piersiowej',
  'Chirurg naczyniowy',
  'Chirurg ogólny',
  'Chirurg onkologiczny',
  'Chirurg plastyczny',
  'Chirurg stomatologiczny',
  'Chirurg szczękowo-twarzowy',
  'Chirurg szczękowo-twarzowy',
  'Dermatolog i wenerolog',
  'Diabetolog',
  'Endokrynolog',
  'Epidemiolog',
  'Farmakolog',
  'Foniatra',
  'Gastroenterolog',
  'Genetyk kliniczny',
  'Geriatra',
  'Ginekolog',
  'Hematolog',
  'Hipertensjolog',
  'Immunolog',
  'Kardiochirurg',
  'Kardiolog',
  'Lekarz medycyny pracy',
  'Nefrolog',
  'Neonatolog',
  'Neurochirurg',
  'Neurolog',
  'Neuropatolog',
  'Okulista',
  'Onkolog kliniczny',
  'Ortodonta',
  'Ortopeda i traumatolog narządu ruchu',
  'Otorynolaryngolog',
  'Patomorfolog',
  'Pediatra',
  'Perinatolog',
  'Psychiatra',
  'Reumatolog',
  'Toksykolog kliniczny',
  'Transfuzjolog kliniczny',
  'Transplantolog kliniczny',
  'Urolog',
]

function showTypes(){
  typeList.classList.toggle('doctor-types-css-visible');
  showTypeList();
}

typeInput.addEventListener('click', showTypes );

function showTypeList(){
  typeInput.value = '';
  
  for(let i = 0; i < typesArray.length; i++){
    let type = typesArray[i];

    let htmlElement = `
    <div onclick="
    let butt = document.querySelector('.typeElement');
    typeInput.value = '${type}';
    typeList.className = 'doctor-types-css';"
    class="typeElement">
    ${type},
    </div>
    `   
    typeList.innerHTML += htmlElement;
  }
}

function xoxo(){
  let buttonText = document.querySelector('.typeElement');
    typeInput.innerHTML = buttonText.innerHTML;
  }

let buttonBum = document.querySelector('.btn-bom');

function changeText(){
  if(buttonBum.innerText ==='click'){
    buttonBum.innerHTML = 'clicked';
  }else {
    buttonBum.innerHTML = 'click';
  }
}

buttonBum.addEventListener('click', changeText);
