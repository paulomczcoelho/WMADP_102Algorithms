    function checkAnagram(a, b) {
        var array = {};
        if (a === b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            let res = a.charCodeAt(i) - 97;
            array[res] = (array[res] || 0) + 1;
        }
  
        for (let j = 0; j < b.length; j++) {
            let res = b.charCodeAt(j) - 97;
            if (!array[res]) {
                return false;
            }
            array[res]--;
        }
        return true;
    }
    console.log(checkAnagram('hello', 'olleh'));
    console.log(checkAnagram('a gentleman', 'elegant man'));
    console.log(checkAnagram('bad credit', 'debit card'));
    console.log(checkAnagram('dog', 'monkey'));
    console.log(checkAnagram('eleven plus two', 'twelve plus one'));
    console.log(checkAnagram('Tom marvolo riddle', 'i am lord valdemort'));
