const express = require('express')

const router = express.Router()

const persona = require('../usecases/personas')

router.get('/', async(req,res) =>{
    const personas = await persona.get()

    res.json({
        success:true,
        massage:'Done',
        payload:{
            personas
        }
    })
})

router.post('/', async(req,res) =>{
    try {
        const personaData = req.body
        const newPersona = await persona.create(personaData)

        res.json({
            success:true,
            message:'Nuevo persona Creada',
            // nueva persona como json
            payload:{ persona: newPersona}
        })
    } catch(error){
        res.status(400)
        res.json({
            success:false,
            message:'Persona no fue creada',
            error:[
                error
            ]
        })
    }
})

//borrar persona

router.delete('/:id', async(req,res) =>{
    try{
        const {id} = req.params
        const personaDelete = persona.del(id)

        res.json({
            success: true,
            message:'Persona Borrado',
            payload:{persona:personaDelete}
        })
    }catch(error){
        res.status(400)
        res.json({
            succes:false,
            message:'persona no pudo ser borrado',
            error:[
                error
            ]
        })
    }
})
//actualizar persona
router.put('/', async(req,res) => {

    try{
    const putPersona = req.body;
    const personaUpdate = await persona.updatepersona(putPersona)

    res.json({
        success:true,
        message:'persona actualizada',
        payload:{
             personaUpdate
        }
    });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"persona no actualizada",
            error:[
                error
            ]
        });
    }
});



module.exports = router