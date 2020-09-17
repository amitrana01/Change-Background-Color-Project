document.querySelector('.btn').addEventListener('click', function (e) {
  console.log('clicked');

  let red = randomColorNumber();
  console.log(`red is ${red}`);
  let blue = randomColorNumber();
  console.log(`blue is ${blue}`);
  let green = randomColorNumber();
  console.log(`blue is ${green}`);

  // document.body.style.backgroundColor =
  //   'rgb(' + red + ',' + green + ',' + blue + ')';

  document.body.style.backgroundColor = 'green';
  e.preventDefault();
});

function randomColorNumber() {
  return Math.floor(Math.random() * Math.floor(255));
}

let a = randomColorNumber();
