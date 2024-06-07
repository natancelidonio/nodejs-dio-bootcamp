const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataName) {
    // lógica de conexão
    console.log(`conectado ao banco ${dataName}`);
};

async function disconnectDatabase() {
    console.log("desconectando do banco de dados");
};

export default connectToDatabase;

export {
    connectToDatabase,
    disconnectDatabase,
    databaseType,
};
