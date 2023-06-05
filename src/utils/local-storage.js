export const setItem = (name, value) => localStorage.setItem(name, value);

export const getItem = (name) => localStorage.getItem(name);

export const removeItem = (name) => localStorage.removeItem(name);

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  IS_AUTHENTICATED: "isAuthenticated",
};
