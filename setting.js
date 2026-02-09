const partA = "ghp_IT1QPDL55d47Uzb";
const partB = "hecCt9plJzG4DL50RaiMe";

const CONFIG = {
    TOKEN: partA + partB,
    USER: "Xynoz-Xnoz",
    REPO: "DB-IMAGINATION-TRASHER",
    DB_FILE: "db.json",
    USER_FILE: "user.json"
};

function getApiUrl(filename) {
    return `https://api.github.com/repos/${CONFIG.USER}/${CONFIG.REPO}/contents/${filename}`;
}
