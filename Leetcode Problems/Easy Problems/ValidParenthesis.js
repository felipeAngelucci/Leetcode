function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            // If the character is an opening bracket, then push its corresponding closing bracket to the stack.
            stack.push(map[char]);
        } else {
            // If the character is a closing bracket, then check if it matches the top of the stack.
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    // If the stack is empty, then all the brackets were matched correctly.
    return stack.length === 0;
}
// Example usage
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
