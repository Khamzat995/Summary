function passwordGenerator(num) {
  const password = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPasswordSplit = password.split('').sort(() => Math.random() - 0.5).join('');
  console.log(newPasswordSplit)

  if (num < 5 || typeof num != 'number') {
    console.log('Недопустимый пароль');
  }
}
passwordGenerator(5)