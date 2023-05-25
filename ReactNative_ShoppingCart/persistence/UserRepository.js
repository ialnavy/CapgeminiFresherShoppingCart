import { query, where, getDocs, setDoc, doc } from "firebase/firestore";
import fbDB from './firebase';

const UserRepository = {
    create: async (user) => {
        await setDoc(doc(fbDB.collections.users()), user);
    }, readByUsername: async (username) => {
        let users = [];
        try {
            (await getDocs(
                query(fbDB.collections.users(),
                where("username", "==", username)))).forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    users.push({ ...doc.data(), id: doc.id });
            });
        } catch (error) {
            console.log(error);
        }
        if (users.length === 0)
            return null;
        return users[0];
    }
};

export default UserRepository;
