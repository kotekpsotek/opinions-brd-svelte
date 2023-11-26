import { it, expect } from "vitest";
import Utils from "../src/lib/lib.js"

it("Calculate Rating", () => {
    // Initialize test property
    const ratings: RatingSetType = [{ label: '1 star', count: 34 }, { label: '2 stars', count: 520 }, { label: '3 stars', count: 1700 }, { label: '4 stars', count: 2499 }, { label: '5 stars', count: 5305 }]
    const test = Utils.calculateStarsRating(ratings);

    // Check in
    expect(test, "Is not number").toBeTypeOf("number");
    expect(Number.isInteger(test), "Isn't float").toBe(false);
})
