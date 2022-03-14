const { faker } = require("@faker-js/faker");

const categories = [
    "music",
    "movie",
    "games",
    "news",
    "sport",
    "learn"
]

module.exports = () => {

    const data = {
        users: [{
            id: 'f93462a9-792b-40ec-b192-81ddc4cd8253',
            userName: faker.name.findName(),
            email: faker.internet.email(),
            avatarUrl: faker.internet.avatar()
        }],
        videos: [],
        comments: [],
        explore: [],
        tags: []
    };

    Array.from({ length: 500 }, () => {
        const videoId = faker.datatype.uuid()

        data.videos.push({
            id: videoId,
            thumbnailUrl: faker.image.city(),
            title: faker.lorem.paragraphs(20),
            views: faker.datatype.number(),
            canalName: faker.lorem.words(25),
            category: categories[faker.datatype.number({ min: 0, max: 5 })],
            description: faker.lorem.paragraphs(10),
            postedAt: faker.date.past(),
            avatarUrl: faker.internet.avatar(),
            tags: Array.from({
                length: 5
            }, () => ({
                id: faker.datatype.uuid(),
                tagName: faker.lorem.words(3)
            }))
        })

        data.explore.push({
            id: faker.datatype.uuid(),
            thumbnailUrl: faker.image.city(),
            title: faker.lorem.words(1),
            views: faker.datatype.number(),
            canalName: faker.lorem.words(25),
            category: categories[faker.datatype.number({ min: 0, max: 5 })],
            description: faker.lorem.words(1),
            postedAt: faker.date.past(),
            avatarUrl: faker.internet.avatar(),
        })

        Array.from({ length: 50 }, () => {
            data.comments.push({
                id: faker.datatype.uuid(),
                videoId,
                userName: faker.name.findName(),
                likes: faker.datatype.number(),
                isDisliked: faker.datatype.boolean(),
                comment: faker.lorem.paragraph(15),
                commentedAt: faker.date.past(),
            })
        })
    })

    Array.from({ length: 15 }, () => {
        data.tags.push({
            id: faker.datatype.uuid(),
            tagName: faker.lorem.words(3),
        })
    });

    return data
};
