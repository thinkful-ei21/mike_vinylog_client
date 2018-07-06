export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    console.log("save auth")
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    console.log("clear auth")
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};
