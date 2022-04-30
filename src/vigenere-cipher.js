const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type ?? true;
    this.charCodeA = 65;
    this.charCodeZ = 90;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = (message.length > key.length) ? key.repeat(Math.ceil(message.length / key.length)) : key;
    let encryptedMessage = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)) {
        encryptedMessage += message[i];
        j -= 1;
      } else {
        encryptedMessage += String.fromCharCode(this.charCodeA + ((message.charCodeAt(i) + key.charCodeAt(i + j)) % 26));
      }
    }
    return (this.type) ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    key = (message.length > key.length) ? key.repeat(Math.ceil(message.length / key.length)) : key;
    let encryptedMessage = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if ((message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90)) {
        encryptedMessage += message[i];
        j -= 1;
      } else {
        encryptedMessage +=
          (((message.charCodeAt(i) - key.charCodeAt(i + j)) % 26) < 0)
            ? String.fromCharCode(this.charCodeA + (26 - Math.abs(message.charCodeAt(i) - key.charCodeAt(i + j)) % 26))
            : String.fromCharCode(this.charCodeA + Math.abs((message.charCodeAt(i) - key.charCodeAt(i + j)) % 26));
      }
    }
    return (this.type) ? encryptedMessage : encryptedMessage.split('').reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
