function passwordGenerator() {
  const password = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPasswordSplit = password.split('').sort(() => Math.random() - 0.5).join('');
  console.log(newPasswordSplit)
}
passwordGenerator()