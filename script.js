let totalNumber = 0;

document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    const convertName = document.querySelector('.guess').value;
    checkLetters(convertName);
    document.querySelector('.number').textContent = totalNumber;
    document.querySelector('.guess').value = '';
    totalNumber = 0;
  }
});

function checkLetters(convertName) {
  const letterValues = {
    א: 1,
    ב: 2,
    ג: 3,
    ד: 4,
    ה: 5,
    ו: 6,
    ז: 7,
    ח: 8,
    ט: 9,
    י: 10,
    כ: 20,
    ך: 20,
    ל: 30,
    מ: 40,
    ם: 40,
    נ: 50,
    ן: 50,
    ס: 60,
    ע: 70,
    פ: 80,
    ף: 80,
    צ: 90,
    ץ: 90,
    ק: 100,
    ר: 200,
    ש: 300,
    ת: 400,
  };

  for (let i = 0; i < convertName.length; i++) {
    console.log('test');
    const letter = convertName[i];
    const convertNumber = letterValues[letter] || 0;
    totalNumber += convertNumber;
  }
}
