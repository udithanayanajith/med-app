import {
  LOCAL_STORAGE_KEYS,
  getItem,
  removeItem,
  setItem,
} from "./local-storage";

export const storeAccessToken = (accessToken) =>
  setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);

export const getAccessToken = () => getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

export const clearTokens = () => {
  removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
};

export const storeAccessBool = (bool) =>
  setItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED, bool);

export const getAccessBool = () => getItem(LOCAL_STORAGE_KEYS.IS_AUTHENTICATED);
