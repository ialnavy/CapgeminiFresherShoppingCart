import { query, where, getDocs, setDoc, doc } from "firebase/firestore";
import fbDB from './firebase';

const UserRepository = {
    readByUsername: async (username) => {
        let users = [];
        try {
            (await getDocs(
                query(fbDB.collections.users(),
                where("username", "==", username)))).forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    users.push(doc.data());
            });
        } catch (error) {
            console.log(error);
        }
        if (users.length === 0)
            return null;
        return users[0];
    }, create: async (user) => {
        await setDoc(doc(fbDB.collections.users()), user);
    }
};

export default UserRepository;
