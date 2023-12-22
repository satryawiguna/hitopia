const isBalanced = (str: string): string => {
    const stack: Array<string> = [];
    const pairs: { [key: string]: string } = { '{': '}', '[': ']', '(': ')' };

    for (const char of str) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            const lastBracket = stack.pop();
            
            if (!lastBracket || pairs[lastBracket] !== char) {
                return 'NO';
            }
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}


const input1 = "{[()]}";
const input2 = "{[(])}";
const input3 = "{(([])[])[]}";

console.log("Output 1:", isBalanced(input1));
console.log("Output 2:", isBalanced(input2));
console.log("Output 3:", isBalanced(input3));