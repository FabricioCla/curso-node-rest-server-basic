const { response, request } = require('express')


const getUsuarios = (req = request, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
            ok: true,
            msg: "get API - Controller",
            q,
            nombre,
            apikey
        });
}

const postUsuarios = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: "post API- Controller",
        nombre, 
        edad
    });
}

const putUsuarios = (req, res = response) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: "put API- Controller",
        id
    });
}

const patchUsuarios = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch API- Controller",
    });
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete API- Controller",
    });
}



module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
    deleteUsuarios
}