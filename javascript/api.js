const API_URL = "http://localhost:3000/productos";

export const consumeApi = async () => {
  try {
    let peticion = await fetch(API_URL);
    let parset = await peticion.json();
    return parset;
  } catch (error) {
    console.log(error);
  }
};

export const getPropietyById = async (id) => {
  try {
    let response = await fetch(API_URL + "/" + id);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const buscar = async (casa) => {
  try {
    let response = await fetch(API_URL + casa);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
