const Personas = require('../../models/persona').model

async function get(){
    const allPersonas = await Personas.find({}).exect()
    return allPersonas

}

    async function create(personaData){
        const existingPersonas = await Personas.find({...personaData}).exec()

        const personaExist = existingPersonas.Length > 0

        if(personaExist) throw new Error('LA persona ya existe')
        //nuevo modelo
        const persona = new Personas(personaData)

        //forzando una promesa
        const personaCreate = await persona.save()
        return personaCreate

    }

    //Eliminar persona

    async function del(id){
        return Personas.findByAndDelete(id).exec();
    }

    const updatePersona=(PersonaData) => {

        return PersonaData.findByIdAndUpdate(PersonaData._id,dataPersona).exec();
    }


    module.exports = {
        get,
        create,
        del,
        updatePersona
    }