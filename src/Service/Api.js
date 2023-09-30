import axios from "axios";

const baseURL = "http://localhost:5000";

const api = axios.create({
  baseURL: baseURL,
});

// Function to store the token and user data in local storage
const setTokenAndUser = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// Function to get the token from local storage
const getToken = () => {
  return localStorage.getItem("token");
};

// Function to get the user data from local storage
const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Function to remove the token and user data from local storage
const removeTokenAndUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = getToken();
  return token !== null;
};

export const LoginApplicant = async (userLoginData) => {
  try {
    const response = await api.post("/login", {
      action: userLoginData.action,
      email: userLoginData.email,
      password: userLoginData.password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CreateAccountApplicant = async (registerData) => {
  try {
    const response = await api.post("/CreateAccount", registerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Ring_Data = async (ringData) => {
  try {
    const token = getToken();
    const response = await api.post("/RingData", ringData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Gold_Data = async (goldData) => {
  try {
    const token = getToken();
    const response = await api.post("/GoldData", goldData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Diamond_Data = async (diamondData) => {
  try {
    const token = getToken();
    const response = await api.post("/DiamondData", diamondData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRingData = async () => {
  try {
    const token = getToken();
    const response = await api.get("/Ring", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getgolddata = async () => {
  try {
    const token = getToken();
    const response = await api.get("/Gold", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getdiamonddata = async () => {
  try {
    const token = getToken();
    const response = await api.get("/Diamond", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDiamondData = async (id) => {
  try {
    const token = getToken();
    await api.delete(`/Diamond/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteGoldData = async (id) => {
  try {
    const token = getToken();
    await api.delete(`/Gold/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteRingData = async (id) => {
  try {
    const token = getToken();
    await api.delete(`/Ring/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

//Update Operation
//Gold Update
export const updateGoldData = async (id, updatedData) => {
  try {
    const token = getToken();
    const response = await api.put(`/Gold/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Ring Update
export const updateRingData = async (id, updatedData) => {
  try {
    const token = getToken();
    const response = await api.put(`/Ring/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Diamond Update
export const updateDiamondData = async (id, updatedData) => {
  try {
    const token = getToken();
    const response = await api.put(`/Diamond/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const logout = () => {
  removeTokenAndUser();
};

export const checkAuthentication = () => {
  return isAuthenticated();
};
