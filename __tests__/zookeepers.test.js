const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require('../lib/zookeepers.js');
const { zookeepers } = require('../data/zookeepers');

jest.mock('fs');

test('create new zookeepers', () => {
    const zookeeper = createNewZookeeper(
        { name: 'Jacob', id: "2112" },
        zookeepers
    );

    expect(zookeeper.name).toBe('Jacob');
    expect(zookeeper.id).toBe('2112');
});

test('filter by query', () => {
    const startingZooKeepers = [
        {
            id: "1",
            name: "Jacoboy",
            age: " 20",
            favoriteAnimal = "dog",
        },
        {
            id: "2",
            name: "Grant",
            age: "120",
            favoriteAnimal = "hotdog",
        },
    ];

    const updatedZooKeepers = filterByQuery({ age: "20" }, startingZooKeepers);

    expect(updatedZooKeepers.length).toEqual(1);
});

test('finds by id', () => {
    const startingZooKeepers = [
        {
            id: "1",
            name: "Jacoboy",
            age: " 20",
            favoriteAnimal = "dog",
        },
        {
            id: "2",
            name: "Grant",
            age: "120",
            favoriteAnimal = "hotdog",
        },
    ];

    const result = findById("1", startingZooKeepers);

    expect(result.name).toBe("Jacoboy");
});

test('validates age', () => {
    const zookeeper = {
        id: "1",
        name: "Jacoboy",
        age: "20",
        favoriteAnimal = "dog",
    };

    const invalidZookeeper = {
        id: "1",
        name: "Jacoboy",
        age: " 20",
        favoriteAnimal = "dog",
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});