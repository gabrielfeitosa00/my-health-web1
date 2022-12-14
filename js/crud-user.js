import { collection, db, doc, getDoc, query, setDoc } from "./firebase.js";

const createUserDB = async ({ name, sex, birthday, email, id }) => {
  try {
    await setDoc(doc(db, "user", id ), {
      id,
      name,
      sex,
      birthday,
      email,
    });
  } catch (error) {
    alert(error.message);
    throw error
  }
};
const getByMail = async (mail) => {
  const q = query(collection(db, "user"), where("email", "==", mail));

  const user = await getDoc(q);

  if (user.exists()) {
    const userData = user.data();

    console.log(userData.toString());
  } else {
    alert("No such user!");
  }
};
export { createUserDB, getByMail };

