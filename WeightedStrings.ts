const calculateWeights = (s: string): Array<number> => {
    const weights: Array<number> = [];

    let currentWeight = 0;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            currentWeight += s.charCodeAt(i) - 96;
        } else {
            currentWeight = s.charCodeAt(i) - 96;
        }
        weights.push(currentWeight);
    }

    return weights;
}

const checkQueries = (s: string, queries: number[]): Array<string> {
    const weights = calculateWeights(s);
    const results: Array<string> = [];

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        
        let found = false;

        for (let j = 0; j < weights.length; j++) {
            if (query === weights[j]) {
                results.push('Yes');
                found = true;
                break;
            }
        }

        if (!found) {
            results.push('No');
        }
    }

    return results;
}

const inputString = 'abbcccd';
const inputQueries = [1, 3, 9, 8];
const output = checkQueries(inputString, inputQueries);

console.log(output);
