import Person from "../models/Person.js"
import { Op } from 'sequelize';

export default class PersonService {
    static async create(personData) {
        return await Person.create(personData);
    }

    static async getAllPeople() {
        return await Person.findAll();
    }

    static async deletePerson(id) {
        const person = await Person.findByPk(id);

        if (!person) throw Error('Person não existe.')

        return await person.destroy();
    }
}