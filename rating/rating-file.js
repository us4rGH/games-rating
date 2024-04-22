const fs = require("fs").promises;

async function makeRatingFile(path, array) {
    const ratingFile = await fs.readFile(path, "utf-8");
    const ratingArray = JSON.parse(ratingFile);
    let hasNewGames = false;

    array.forEach((item) => {
        if (!ratingArray.find((element) => element.id === item.id)) {
            hasNewGames = true;
            let obj = {
                id: item.id,
                title: item.title,
                image: item.image,
                link: item.link,
                description: item.description,
                rating: 0,
            };
            ratingArray.push(obj);
        }
    });

    if (hasNewGames) {
        await fs.writeFile(path, JSON.stringify(ratingArray));
        console.log("Файл записан!");
    }
}

module.exports = makeRatingFile;