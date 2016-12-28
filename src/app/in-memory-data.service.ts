import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {
                id: 11,
                name: 'Mr. Nice',
                categories: ["Social"],
                gender: "Male"
            },
            {
                id: 12,
                name: 'Narco',
                categories: ["Social"],
                gender: "Male"
            },
            {
                id: 13,
                name: 'Bombasto',
                categories: ["Chemical", "Fire"],
                gender: "Male",
            },
            {
                id: 14,
                name: 'Celeritas',
                categories: ["Other"],
                gender: "Female"
            },
            {
                id: 15,
                name: 'Magneta',
                categories: ["Electric"],
                gender: "Female"
            },
            {
                id: 16,
                name: 'RubberMan',
                categories: ["Chemical", "Other"],
                gender: "Male"
            },
            {
                id: 17,
                name: 'Dynama',
                categories: ["Other", "Mechanical"],
                gender: "Female"
            },
            {
                id: 18,
                name: 'Dr IQ',
                categories: ["Social", "Psychic"],
                gender: "Male"
            },
            {
                id: 19,
                name: 'Magma',
                categories: ["Fire", "Ground"],
                gender: "Male"
            },
            {
                id: 20,
                name: 'Tornadomento',
                categories: ["Wind", "Electric"],
                gender: "Male"
            },
            {
                id: 21,
                name: 'Batman',
                categories: ["Classic", "Animal"],
                gender: "Male"
            },
            {
                id: 22,
                name: 'Superman',
                categories: ["Classic"],
                gender: "Male"
            },
            {
                id: 23,
                name: 'Wonder Woman',
                categories: ["Classic"],
                gender: "Female"
            },
            {
                id: 24,
                name: 'Sand Stormer',
                categories: ["Ground"],
                gender: "Male"
            },
            {
                id: 25,
                name: 'Ultranova',
                categories: ["Fire", "Electric"],
                gender: "Female"
            },
            {
                id: 26,
                name: 'Zorri',
                categories: ["Animal", "Social"],
                gender: "Female"
            },
            {
                id: 27,
                name: 'Macho',
                categories: ["Animal", "Social"],
                gender: "Male"
            }
        ];
        return {heroes};
    }
}