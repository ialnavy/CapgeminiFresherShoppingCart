import { query, where, getDocs, setDoc, doc } from "firebase/firestore";
import fbDB from './firebase';

const ProductRepository = {
    create: async (product) => {
        await setDoc(doc(fbDB.collections.products()), product);
    }, readAll: async () => {
        let products = [];
        try {
            (await getDocs(query(fbDB.collections.products()))).forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    products.push({ ...doc.data(), id: doc.id });
            });
        } catch (error) {
            console.log(error);
        }
        return products;
    }, readByName: async (name) => {
        let products = [];
        try {
            (await getDocs(query(fbDB.collections.products()))).forEach((doc) => {
                    if ((new String(doc.data().name)).includes(new String(name)))
                        products.push({ ...doc.data(), id: doc.id });
            });
        } catch (error) {
            console.log(error);
        }
        return products;
    }
};

export default ProductRepository;
