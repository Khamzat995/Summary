function passwordGenerator(num, string) {
  const password = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPasswordSplit = password.split('', num).sort(() => Math.random() - 0.5).join('');

  if (num < 5 || typeof num != 'number') {
    return 'Ошибка, попробуйте снова';
  }

  const number1 = '0123456789';
  const symbol1 = '!#$%&()*+,-./:;<=>?@[\\]^_{|}~';

  if (string === 'easy') {
    let easyPassword = password
    easyPassword = easyPassword.split('')
    shuffle(easyPassword)
    easyPassword = easyPassword.join('');
    console.log(easyPassword.substr(0, num))
  }
  if (string === 'medium') {
    let mediumPassword = password + number1
    mediumPassword = mediumPassword.split('')
    shuffle(mediumPassword)
    mediumPassword = mediumPassword.join('');
    console.log(mediumPassword.substr(0, num))
  }
  if (string === 'hard') {
    let hardPassword = password + number1 + symbol1
    hardPassword = hardPassword.split('')
    shuffle(hardPassword)
    hardPassword = hardPassword.join('');
    console.log(hardPassword.substr(0, num))
  }
}

passwordGenerator(10, 'hard')

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

