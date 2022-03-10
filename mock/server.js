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
        "related-videos": []
    };

    Array.from({ length: 500 }, () => {
        const videoId = faker.datatype.uuid()
        const userId = faker.datatype.uuid()

        data.users.push({
            id: userId,
            userName: faker.name.findName(),
            email: faker.internet.email(),
            avatarUrl: faker.internet.avatar()
        })

        data.videos.push({
            id: videoId,
            thumbnailUrl: faker.image.city(),
            title: faker.lorem.sentences(10),
            views: faker.datatype.number(),
            canalName: faker.lorem.words(25),
            category: categories[faker.datatype.number({min: 0, max: 5})],
            postedAt: faker.date.past(),
            avatarUrl: faker.internet.avatar(),
        })

        Array.from({ length: 50 }, () => {
            data.comments.push({
                userId,
                videoId,
                likes: faker.datatype.number(),
                isDisliked: faker.datatype.boolean(),
                comment: faker.lorem.paragraph(15),
                commentedAt: faker.date.past(),
            })
        })
    })

    return data
};
