import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// login (user)
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/users/login`, user, "");
};

// register (user)
export const registerAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/user/register`, user, "");
};

// login (restaurant)
export const restaurantLogin = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/restaurants/login`, user, "");
};

//register (restaurant)
export const restaurantRegister = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/restaurants/register`, user, "");
};