import { it, expect, describe } from "vitest";
import Utils, { Pagination, Rating } from "../src/lib/lib.js"

it("Calculate Rating", () => {
    // Initialize test property
    const ratings: RatingSetType = [{ label: '1 star', count: 34 }, { label: '2 stars', count: 520 }, { label: '3 stars', count: 1700 }, { label: '4 stars', count: 2499 }, { label: '5 stars', count: 5305 }]
    const test = Utils.calculateStarsRating(ratings);

    // Check in
    expect(test, "Is not number").toBeTypeOf("number");
    expect(Number.isInteger(test), "Isn't float").toBe(false);
})

it("Calculate AVG Rating", () => {
    // Initialize datas for rating
    const ops: Opinions = [
        { userName: "Michał", content: "", rating: 4.5 },
        { userName: "Michał", content: "", rating: 4.8 },
        { userName: "Michał", content: "", rating: 2.3 },
        { userName: "Michał", content: "", rating: 2.8 },
        { userName: "Michał", content: "", rating: 5.0 },
        { userName: "Michał", content: "", rating: 4.9 },
        { userName: "Michał", content: "", rating: 4.5 },
    ];

    // AVG Test
    const avgRatingIs = Rating.avgCalculateFromOpinions(ops);
    expect(avgRatingIs, "Is not number").toBeTypeOf("number");

    // Log rating
    console.log(avgRatingIs)
});

it("Obtain Ratings List", () => {
    // Initialize datas for rating
    const ops: Opinions = [
        { userName: "Michał", content: "", rating: 4.5 },
        { userName: "Michał", content: "", rating: 4.8 },
        { userName: "Michał", content: "", rating: 2.3 },
        { userName: "Michał", content: "", rating: 2.8 },
        { userName: "Michał", content: "", rating: 5.0 },
        { userName: "Michał", content: "", rating: 4.9 },
        { userName: "Michał", content: "", rating: 4.5 },
    ];

    // List Obtain
    const ratingListIs = Rating.getRatingsLabelFromOpinions(ops);
    expect(ratingListIs, "Is not number").toBeTypeOf("object");

    console.log(ratingListIs)
});

describe("Pagination Utilities", () => {
    // Opinions list with fillment
    const pag = new Pagination();
    const opinions: Opinions = [];
    for (let i = 0; i < 41; i++) {
        opinions.push({
            userName: "Wacek",
            rating: 4.0,
            content: "ABC"+i
        })
    }

    it("Get pages", () => {
        const pages = pag.getPaginationPages(opinions, true);

        console.log(pages)
    });

    it("Get opinions per page", () => {
        const page1 = pag.getOpinionsForPage(opinions, 1, true);
        const page2 = pag.getOpinionsForPage(opinions, 2, true);
        const page3 = pag.getOpinionsForPage(opinions, 3, true);
        console.log(`page 1: ${JSON.stringify(page1)}\n\npage 2: ${JSON.stringify(page2)}\n\npage 3: ${JSON.stringify(page3)}`)
    });
})
