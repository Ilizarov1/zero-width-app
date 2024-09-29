// 反向转义
const zeroWidthToBinary = (zeroWidthStr: string) =>
  zeroWidthStr
    .split('\ufeff') // 分割的零宽无断字符
    .map(char => {
      if (char === '\u200B') {
        return '1';
      } else if (char === '\u2060') {
        return '0';
      }
      return ' ';
    })
    .join('');

const binaryToText = (binaryStr: string) =>
  binaryStr
    .split(' ')
    .map(num => String.fromCharCode(parseInt(num, 2)))
    .join('');

export const zeroWidthToUsername = (zeroWidthUsername: string) => {
  const binaryUsername = zeroWidthToBinary(zeroWidthUsername);
  const textUsername = binaryToText(binaryUsername);
  return textUsername;
};