export const wordsToTitleCase = (text) => {
    return text.replace(/\w\S*/g, (word) => (word.length > 2 ? capitalizeFirstLetter(word) : word.toLowerCase()));
};

export const pascalCaseToTitleCase = (text) => {
    return text
        .match(/[A-Z][a-z]*/g)
        .map(capitalizeFirstLetter)
        .join(' ');
};

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};
