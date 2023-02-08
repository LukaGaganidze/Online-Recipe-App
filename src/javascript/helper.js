import { async } from "regenerator-runtime";

import { API_URL } from "./config.js";
import { TIMOUT_10_SECS } from "./config.js";

const fetchRaceTimer = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(`request took more the ${sec} seconds. please try again`)
      );
    }, sec * 1000);
  });
};

export const getJson = async function (url) {
  try {
    // fetch response from API (dinamic)
    const response = await Promise.race([
      fetchRaceTimer(TIMOUT_10_SECS),
      fetch(url),
    ]);
    const data = await response.json();

    if (!response.ok)
      throw new Error(`error: ${data.message} / (${response.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
