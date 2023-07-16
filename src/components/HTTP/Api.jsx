import axios from "axios";
const baseURL = "http://35.78.201.111:4001";
const api = axios.create({
  baseURL: "http://35.78.201.111:4001",
  headers: {
    "Content-Type": "application/json",
    Accept: "application.json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM4MTBiZjZiOTBjYzFlZWE5ZTRhYjY4IiwidXNlcm5hbWUiOiI5ODk4OTg5ODk4IiwiaWF0IjoxNjY5NDU5NDI0LCJleHAiOjE3MDA5OTU0MjR9.O6a5yo6ivs7xdx6sp07oQtieLpMdb0LiSBMPLrHWiwg`,
  },
});

export const adminLogin = async (payload) => {
  console.log("payload ==>", payload);
  try {
    const response = await api.post("/user/login", payload);
    console.log("session response -->",response);
    return response.data;
  } catch (error) {
    return "API FAILURE";
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/user/get-allUsers");
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/user/get-allUsers this api`);
    return "API FAILURE";
  }
};

export const logOut = async () => {
  try {
    const response = await api.post("/user/logout");
    console.log("response ===>", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/user/get-allUsers this api`);
    return "API FAILURE";
  }
};


export const getClasses = async () => {
  try {
    const response = await api.get("/class/get-all-class");
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-all-class`);
    return "API FAILURE";
  }
};

export const addClass = async (payload) => {
  console.log("payload ==>", payload);
  try {
    const response = await api.post("/class/add-class", payload);
    return response.data;
  } catch (error) {
    return "API FAILURE";
  }
};

export const deleteClass = async (payload) => {
  console.log("PAYLOAD ==>", payload);
  try {
    const response = await api.delete("/class/delete-class", { data: payload });
    return response.data;
  } catch (error) {
    return "API FAILURE";
  }
};

export const getSubjects = async (payload) => {
  try {
    const response = await api.post("/class/get-subject-byClass", payload);
    console.log("response == >", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const addSubject = async (payload) => {
  try {
    const response = await api.post("/class/add-subject", payload);
    console.log("response == >", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const deleteSubject = async (payload) => {
  console.log(payload);
  try {
    const response = await api.delete("/class/delete-subject", {
      data: payload,
    });
    console.log("response == >", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const getChapters = async (payload) => {
  console.log(payload);
  try {
    const response = await api.post("/class/get-chapter-bySubject", {
      subject_id: payload.subject_id,
    });
    console.log("response == >", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const addChapters = async (payload) => {
  try {
    const response = await api.post("/class/add-chapter", payload);
    console.log("response == >", response);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const deleteChapters = async (payload) => {
  try {
    const response = await api.delete("/class/delete-chapter", {
      data: payload,
    });
    console.log("response == >", payload);
    return response.data;
  } catch (error) {
    console.log(`error in ${baseURL}/class/get-subject-byClass`);
    return "API FAILURE";
  }
};

export const login = async (payload) => {
  console.log("payload ==>", payload);
  try {
    const response = await api.post("/user/login", payload);
    return response.data;
  } catch (error) {
    return "API FAILURE";
  }
};
