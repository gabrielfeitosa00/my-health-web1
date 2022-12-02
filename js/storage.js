import { getDownloadURL, ref, storage, uploadBytes } from "./firebase.js";

const upload = async (file) => {
  try {
    const fileRef = "images/" + uid();
    await uploadBytes(ref(storage, fileRef), file);
    const url = await getDownloadURL(ref(storage, fileRef));
    return { url, fileRef };
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

const deleteFile = async (path) => {
  await deleteObject(ref(storage, path));
};

export { upload, deleteFile };

