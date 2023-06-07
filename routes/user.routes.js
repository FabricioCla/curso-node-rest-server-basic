

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, usuarioExisteInDB } = require('../helpers/db-validators');

const { getUsuarios, postUsuarios, putUsuarios, patchUsuarios, deleteUsuarios } = require('../controllers/users.controller');

const router = Router();


router.get('/', getUsuarios);

router.post('/', [
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('password', 'El campo password debe de ser mayor a 6 caracteres').isLength({ min: 6 }),
    check('correo', 'Ingresa un correo electrónico válido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', "USER_ROLE"]),
    check('rol').custom(esRolValido),
    validarCampos
], postUsuarios);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(usuarioExisteInDB),
    check('rol').custom(esRolValido),
    validarCampos
], putUsuarios);

router.patch('/', patchUsuarios);

router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(usuarioExisteInDB),
    validarCampos
], deleteUsuarios);


module.exports = router;