import {
  addDoc,
  collection,
  db, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc
} from "./firebase.js";
import { generateId } from "./utils.js";
const createVaccine = async ({ name, dose, data, proxData, url, filePath }) => {
  try {
    const userId = window.localStorage.getItem("userId");
    await addDoc(collection(db, "user", userId, "vaccine"), {
      id: generateId(),
      name,
      dose,
      data,
      proxData,
      url,
      filePath,
    });
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const getVaccineById = async (id) => {
  try {
    const userId = window.localStorage.getItem("userId");
    const vaccine = await getDoc(doc(db, "user", userId, "vaccine", id));
    return vaccine;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const getAllVaccines = async (callback) => {
  try {
    const userId = window.localStorage.getItem("userId");
    const q = query(collection(db, "user", userId, "vaccine"));
    onSnapshot(q, callback);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const updateVaccine = async (
  id,
  { name, dose, data, proxData, url, filePath }
) => {
  try {
    const userId = window.localStorage.getItem("userId");
    await updateDoc(doc(db, "user", userId, "vaccine", id), {
      name,
      dose,
      data,
      proxData,
      url,
      filePath,
    });
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const deleteVaccine = async (id) => {
  try {
    const userId = window.localStorage.getItem("userId");
    await deleteDoc(doc(db, "user", userId, "vaccine", id));
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

export {
  createVaccine,
  getVaccineById,
  getAllVaccines,
  deleteVaccine,
  updateVaccine,
};

