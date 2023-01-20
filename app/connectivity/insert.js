import MSSQL from 'react-native-mssql';

const config = {
    
        server: '127.0.0.1', //ip address of the mssql database
        username: 'root', //username to login to the database
        password: '', //password to login to the database
        database: 'test1', //the name of the database to connect to
        // port: 1234, //OPTIONAL, port of the database on the server
        // timeout: 5, //OPTIONAL, login timeout for the server
    }
    const connected = await MSSQL.connect(config);


const query = 'SELECT * FROM "om" where "ID"'
    const result = await MSSQL.executeQuery(query);


// const closed = await MSSQL.close();