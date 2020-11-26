const removeDuplicate = (array) => {
    var seen = {};
    return array.filter(function ({ name }) {
        return seen.hasOwnProperty(name) ? false : (seen[name] = true);
    });
}

export default removeDuplicate