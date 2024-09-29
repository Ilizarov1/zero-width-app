// 文本转二进制
const textToBinary = (username: string) =>
  username
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');

// 二进制转零宽字符
const binaryToZeroWidth = (binary: string) =>
  binary
    .split('')
    .map(binaryNum => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return '\u200B'; // 零宽空格
      } else if (num === 0) {
        return '\u2060'; // 零宽无断空格
      }
    })
    .join('\ufeff'); // 零宽无断空格（另一种）, 用作分割每一个字符

export const usernameToZeroWidth = (username: string) => {
  const binaryUsername = textToBinary(username);
  const zeroWidthUsername = binaryToZeroWidth(binaryUsername);
  return zeroWidthUsername;
};