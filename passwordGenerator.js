function passwordGenerator(num, string, count = 1) {
  if (num < 5 || typeof num != 'number') {
    return 'Ошибка, пожалуйста попробуйте снова';
  }
  if (typeof count !== 'number' || count < 1) {
    return 'Ошибка третьего уровня';
  }

  const password = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number1 = '0123456789';
  const symbol1 = '!#$%&()*+,-./:;<=>?@[]^_{|}~';

  let passwordsArray = [];

  for (let i = 0; i < count; i++) {
    if (string === 'easy') {
      let easyPassword = password
      easyPassword = easyPassword.split('')
      shuffle(easyPassword)
      easyPassword = easyPassword.join('');
      passwordsArray.push(easyPassword.substr(0, num))
    }
    if (string === 'medium') {
      let mediumPassword = password + number1
      mediumPassword = mediumPassword.split('')
      shuffle(mediumPassword)
      mediumPassword = mediumPassword.join('');
      passwordsArray.push(mediumPassword.substr(0, num))
    }
    if (string === 'hard') {
      let hardPassword = password + number1 + symbol1
      hardPassword = hardPassword.split('')
      shuffle(hardPassword)
      hardPassword = hardPassword.join('');
      passwordsArray.push(hardPassword.substr(0, num))
    }
  }
  console.log(passwordsArray);
  }

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

