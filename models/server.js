const express = require("express");
const cors = require('cors');

const { dbConnection } = require("../database/config");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a Base de Datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi Aplicación
        this.routes();
    }

    async conectarDB () {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor ejecutandose en puerto", this.port);
        });
    }
}

module.exports = Server;
