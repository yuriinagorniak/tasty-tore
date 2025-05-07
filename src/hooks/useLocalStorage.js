export const useLocalStorage = (key = null, initialCtx = []) => {
    const getFromStorage = () => {
        const storageData = JSON.parse(localStorage.getItem(key)) ?? initialCtx;
        return storageData;
    };
    const setToStorage = (value = null) => localStorage.setItem(key, JSON.stringify(value));
    
    
    return { getFromStorage, setToStorage };
};
