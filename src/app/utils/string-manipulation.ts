export const toTitleCase = (text) => {
    return text.replace(/\w\S*/g, (word) =>
        word.length > 2 ? word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() : word.toLowerCase()
    );
};
