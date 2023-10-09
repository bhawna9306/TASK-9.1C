import { faker } from "@faker-js/faker";

const CustomerList = [
    {
        "key": 0,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "Star": `⭐${Math.floor(Math.random() * 5) + 1}   ${faker.person.firstName()}`,
    },
    {
        "key": 1,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "Star": `⭐${Math.floor(Math.random() * 5) + 1}   ${faker.person.firstName()}`,
    },
    {
        "key": 2,
        "avatar": faker.image.avatar(),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "Star": `⭐${Math.floor(Math.random() * 5) + 1}   ${faker.person.firstName()}`,
    },
];

export default CustomerList;
