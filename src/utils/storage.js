const KEY = "bugs";

export const getBugs = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];

};

export const saveBugs = (bugs) => {
    localStorage.setItem(KEY, JSON.stringify(bugs));
};

