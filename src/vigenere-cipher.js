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
  constructor(typeOfMachine) {
    if (typeOfMachine === false) {
      this.type = typeOfMachine
    } else if (typeOfMachine === true || typeOfMachine === undefined) {
      this.type = true
    }
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      const coefficient = Math.ceil(message.length / key.length);
      key = key.repeat(coefficient).toUpperCase();
      message = message.toUpperCase();

      const codeA = 'A'.charCodeAt(0);
      const alphabetLength = 26;
      const result = [];

      for (let i = 0, j = 0; i < message.length; i++) {
        if (/[a-z]/i.test(message[i])) {
          const charIdx = message.charCodeAt(i) - codeA;
          const shift = key.charCodeAt(j) - codeA;

          result.push(String.fromCharCode(codeA + (charIdx + shift) % alphabetLength));
          j++;
        } else {
          result.push(message[i]);
        }
      }
      return this.type ? result.join('') : result.reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      const coefficient = Math.ceil(encryptedMessage.length / key.length);
      key = key.repeat(coefficient).toUpperCase();
      encryptedMessage = encryptedMessage.toUpperCase();

      const codeA = 'A'.charCodeAt(0);
      const alphabetLength = 26;
      const result = [];

      for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        if (/[a-z]/i.test(encryptedMessage[i])) {
          const charIdx = encryptedMessage.charCodeAt(i) - codeA;
          const shift = key.charCodeAt(j) - codeA;

          result.push(String.fromCharCode(codeA + (charIdx - shift + alphabetLength) % alphabetLength));
          j++;
        } else {
          result.push(encryptedMessage[i]);
        }
      }
      
      return this.type ? result.join('') : result.reverse().join('');
    }  
  }
}

module.exports = {
  VigenereCipheringMachine
};
