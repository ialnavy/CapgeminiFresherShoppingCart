import UserRepository from '../persistence/UserRepository';

const UserService = {
    checkLogin: async (username, password) => {
        if (username === undefined || password === undefined
            || username === null || password === null
            || username === '' || password === '')
            return false;

        let user = (await UserRepository.readByUsername(username));
        if (user === null || user.password !== password)
            return false;
        return true;
    }, doRegister: async (user) => {
        if (user.username === undefined || user.password === undefined || user.email === undefined
            || user.username === null || user.password === null || user.email === null
            || user.username === '' || user.password === '' || user.email === '')
            return false;
        if ((await UserRepository.readByUsername(user.username)) !== null)
            return false;
        await UserRepository.create(user);
        return true;
    }, readByUsername: async (username) => {
        if (username === undefined || username === null || username === '')
            return null;

        return (await UserRepository.readByUsername(username));
    }
};

export default UserService;
