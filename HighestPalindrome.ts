const highestPalindrome = (str, k) => {
    const len = str.length;
  
    const replaceChar = (s, i, j) => {
      const arr = s.split('');

      arr[i] = arr[j];
      
      return arr.join('');
    };
  
    const isPalindrome = (s, start, end) => {
      while (start < end) {
        if (s[start] !== s[end]) return false;
        
        start++;
        end--;
      }

      return true;
    };
  
    const findHighestPalindrome = (s, replacementsLeft, start, end) => {
      if (replacementsLeft < 0) return '-1';
      
      if (isPalindrome(s, start, end)) return s;
  
      if (start >= end) return '-1';
  
      if (s[start] !== s[end]) {
        const firstReplacement = findHighestPalindrome(replaceChar(s, end, start), replacementsLeft - 1, start, end);
        const secondReplacement = findHighestPalindrome(replaceChar(s, start, end), replacementsLeft - 1, start, end);
        
        if (firstReplacement === '-1' && secondReplacement === '-1') return '-1';
        else if (firstReplacement === '-1') return secondReplacement;
        else if (secondReplacement === '-1') return firstReplacement;
  
        return BigInt(firstReplacement) > BigInt(secondReplacement) ? firstReplacement : secondReplacement;
      } else {
        return findHighestPalindrome(s, replacementsLeft, start + 1, end - 1);
      }
    };
  
    return findHighestPalindrome(str, k, 0, len - 1);
  };
  
  const inputString = '3943';
  const k = 1;
  const result = highestPalindrome(inputString, k);
  
  console.log("Output:", result);