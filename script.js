const web = document.getElementById('web');

function onloading() {
  web.innerHTML = 'Arya';
}

const btn = document.getElementById('btn-click');
btn.addEventListener('click', function onclick(event) {
  btn.style.backgroundColor = 'lightblue';
});

const btn3 = document.getElementById('build-button');

function makeSentence() {
  const noun = document.getElementById('noun');
  const verb = document.getElementById('verb');
  const adverb = document.getElementById('adverb');
  const result = document.getElementById('statement');

  a = noun.value;
  b = verb.value;
  c = adverb.value;

  d = a + ' ' + b + ' ' + c;
  console.log(d);
  result.innerHTML = d;
}

btn3.addEventListener('click', makeSentence);

const grandparent1 = document.getElementById('grandparent');
const parent2 = document.getElementById('parent');
const child1 = document.getElementById('child');

grandparent1.addEventListener(
  'click',
  function () {
    console.log('GrandParent clicked');
  },
  true
);

parent2.addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true
);

child1.addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true
);

const category = document.getElementById('category');

category.addEventListener('click', (e) => {
  if (e.target.id == 'blazers') {
    console.log('blazers');
  }
});
