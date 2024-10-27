export const isPalindrome = (str: string): boolean => {
  const invertedText = str.split("").reverse().join("");
  return str == invertedText;
};
