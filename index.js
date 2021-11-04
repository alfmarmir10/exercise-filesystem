//Imports de los módulos
//fs y path
const fs = require('fs/promises');
const path = require('path');

const getUsers = async() => {
    //Leer el archivo

    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
    try {
        const pathUser = path.resolve("users.json");
        const users = await fs.readFile(pathUser, {encoding:'utf8'});
        console.log(JSON.parse(users));
        return JSON.parse(users);
    } catch (error) {
        console.error(error);
    }
};

const addUser = async (userObj) => {
    //leer el archivo 

    //convertir el contenido en formato JSON en un objeto JS

    //agregar el usuario en el arreglo

    //sobreescribir el arreglo en el archivo

    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
    try {
        const users = await getUsers();
        users.push(userObj);
        const pathUsers = path.resolve("users.json");
        await fs.writeFile(pathUsers, JSON.stringify(users));
        return userObj;
    } catch (error) {
        console.error(error);
    }
};

const clearUsers = async () => {
    //Vaciar el arreglo y sobreescribir el archivo
    
    //Si el proceso se realizó correctamente tendrás que regresar true
    try {
        const pathUsers = path.resolve("users.json");
        await fs.writeFile(pathUsers, JSON.stringify([]));
        return true;
    } catch (error) {
        console.error(error);
    }
}

getUsers();

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
