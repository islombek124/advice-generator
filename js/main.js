const generateBtn = document.querySelector('.generate__btn'),
  counter = document.querySelector('.counter'),
  wordsDisplay = document.getElementById('wordsDisplay');

generateBtn.addEventListener('click', function(){
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      counter.innerHTML = `ADVICE #${data.slip.id}`;
      wordsDisplay.innerHTML = `"${data.slip.advice}"`;
  });
});