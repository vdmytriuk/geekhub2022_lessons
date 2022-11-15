const isBalanced = str => {
    const initialState = {
        allBrackets: [],
        diff: 0,
    };

    for (let i = 0; i < str.length; i++) {
        if ( str[i] === '{' || str[i] === '}' ) {
            initialState.allBrackets.push(str[i]);
        }

        switch (str[i]) {
            case '{':
                initialState.diff += 1;
                break;

            case '}':
                initialState.diff -= 1;
                break;
        }
    }

    if (initialState.diff !== 0) return false;

    if (initialState.allBrackets[0] === '}') return false;

    return !initialState.allBrackets.reduce((accum, current) => accum !== '}' && current !== '{' ? current : false, '');

}

console.log(isBalanced('}{'));                      // false
console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // false
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false