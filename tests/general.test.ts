import { it, expect, describe } from "vitest";
import Utils, { Pagination } from "../src/lib/lib.js"

it("Calculate Rating", () => {
    // Initialize test property
    const ratings: RatingSetType = [{ label: '1 star', count: 34 }, { label: '2 stars', count: 520 }, { label: '3 stars', count: 1700 }, { label: '4 stars', count: 2499 }, { label: '5 stars', count: 5305 }]
    const test = Utils.calculateStarsRating(ratings);

    // Check in
    expect(test, "Is not number").toBeTypeOf("number");
    expect(Number.isInteger(test), "Isn't float").toBe(false);
})

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
