function caesar(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return string.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13])
}
module.exports = caesar;
