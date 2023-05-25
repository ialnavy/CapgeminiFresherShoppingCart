import ProductRepository from '../persistence/ProductRepository';

const ProductService = {
    addProduct: async (product) => {
        if (product.name === undefined || product.price === undefined
            || product.name === null || product.price === null
            || product.name === '' || product.price === '')
            return false;
        await ProductRepository.create(product);
        return true;
    }, readAllProducts: async () => {
        return (await ProductRepository.readAll());
    }, initialiseDefaultProducts: async () => {
        const products = [
            { name: 'Producto 1', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 1', price: '100' },
            { name: 'Producto 2', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 2', price: '200' },
            { name: 'Producto 3', image: 'url-de-la-imagen', description: 'Esta es una descripción', category: 'Categoría 3', price: '300' }];
        for (iProduct in products)
            await ProductRepository.create(products[iProduct]);
    }
};

export default ProductService;
