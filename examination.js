let inputExamination = document.querySelector('.examination-js');
let testContainer = document.querySelector('.examination-types-js');

function showTest(){
  testContainer.classList.toggle('examination-types-css-visible');
  renderTestType();
}

inputExamination.addEventListener('click', showTest);

let testsListArray = [
  'abdominoplastyka',
  'adenotomia',
  'adenomektomia',
  'adrenalektomia',
  'amputacja',
  'angioplastyka',
  'antromastoidektomia',
  'appendektomia',
  'artroskopia',
  'astragalektomia',
  'bronchotomia',
  'cholecystektomia',
  'chemioterapia neoadiuwantowa',
  'chemioterapia adiuwantowa',
  'cystogastrostomia',
  'dekortykacja płuca',
  'diwertikulotomia',
  'fundoplastyka',
  'gastrektomia',
  'hemikorporektomia',
  'heminefrektomia',
  'hemisferektomia',
  'hepatektomia',
  'hipofizektomia',
  'histerektomia',
  'irydektomia',
  'kalozotomia',
  'kolektomia',
  'kraniektomia',
  'kraniotomia',
  'laminektomia',
  'laryngektomia',
  'laryngofisura',
  'ligacja jajowodu',
  'litotrypsja',
  'lobektomia',
  'lobotomia',
  'mastektomia',
  'metastazektomia',
  'mukosektomia',
  'nacięcie krocza',
  'nefrektomia',
  'nefrotomia',
  'obrzezanie',
  'ooforektomia',
  'operacja Bassiniego',
  'operacja Billrotha',
  'operacja Brickera',
  'operacja Drapanasa',
  'operacja Girarda',
  'operacja Halstedta',
  'operacja Hartmanna',
  'operacja Jurasza',
  'operacja Lichtensteina',
  'operacja Milesa',
  'operacja Mogga',
  'operacja Norwooda',
  'operacja Nussa',
  'operacja Puestowa',
  'operacja Rutkowa',
  'operacja Rydygiera',
  'operacja Shouldice a',
  'operacja Strassmana',
  'operacja Traverso-Longmirea', 
  'operacja Warrena',
  'operacja Whipple a',
  'operacje korekty płci',
  'orbitotomia',
  'orchidektomia',
  'owarektomia',
  'owariektomia',
  'papilotomia',
  'paracenteza',
  'pankreatoduodenektomia',
  'penektomia',
  'perikardiektomia',
  'plastyka Heinekego-Mikulicza',
  'prostatektomia',
  'rynotomia',
  'segmentektomia',
  'sfinkterotomia',
  'splenektomia',
  'trachelektomia',
  'tyreoidektomia',
  'ureterosigmoidostomia',
  'uwuloplastyka',
  'uwulopalatofaryngoplastyka',
  'waginektomia',
  'wagotomia',
  'wazektomia',
  'wulwektomia',
  'wyłuszczenie kończyny',
  'zabieg Bentalla',
  'zabieg Crile a',
  'zabieg Halsteda',
  'zabieg Pateya',
  'zabieg Urbana'
];

function renderTestType(){

  let inputTestValidation = '';

  for(let i = 0; i < testsListArray.length; i++ ){
    let testType = testsListArray[i];

    let html = `
    <div onclick="
    let testElement = document.querySelector('.testElement');
    inputExamination.value = '${testType}';
    testContainer.className = 'examination-types-css';
    " class="testElement">
    ${testType}
    </div>
    `
    inputTestValidation  += html;
  }

   testContainer.innerHTML = inputTestValidation; 
}

