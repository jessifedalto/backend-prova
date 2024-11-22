import PersonService from "../services/PersonService.js";

export default class PersonController {
    
    static async create(req, res) {
        const { name, lastname, salary } = req.body;
        if (!name || !lastname || !salary)
            return res.status(400).send({ message: "Dados inválidos" })
        const person = {
            name: name,
            lastname: lastname,
            salary: salary
        }
        try {
            const p = await PersonService.create(person);
            return res.status(201).send({ message: "Pessoa inserida com sucesso", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    };

    static async getAllPeople(req, res) {
        try {
            const people = await PersonService.getAllPeople();
            return res.status(200).send( people );
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async deleteById(req, res) {
        const { id } = req.params;

        if (!id) return res.status(400).send({ message: "No id provider." });

        try {
            await PersonService.deletePerson(id);
            return res.status(200).send({ message: "Person deleted successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    }

}