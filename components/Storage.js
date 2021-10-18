import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreData = async (key, value) => {
  try {
    const jsonvalue = json.stringify(value);
    await AsyncStorage.setItem(key, jsonvalue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async (key) => {
  try {
    const jsonvalue = await AsyncStorage.getItem(key);
    return jsonvalue !== null ? JSON.parse(jsonvalue) : null;
  } catch (e) {
    return null;
  }
};

const Storage = {
  key: "@USER_KEY",
};

export default Storage;
