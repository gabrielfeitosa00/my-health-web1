import { getDownloadURL, ref, storage, uploadBytes } from "./firebase.js";
import { generateId } from "./utils.js";
const upload = async (file) => {
  try {
    const filePath = "images/" + generateId();
    await uploadBytes(ref(storage, filePath), file);
    const url = await getDownloadURL(ref(storage, filePath));
    return { url, filePath };
  } catch (error) {
    throw error;
  }
};

const deleteFile = async (path) => {
  await deleteObject(ref(storage, path));
};

export { upload, deleteFile };

