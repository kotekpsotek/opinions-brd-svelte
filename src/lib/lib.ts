import { getContext } from 'svelte';
import type { PaginationProps } from 'flowbite-svelte/Pagination.svelte';

/** General utilites */
export default class Utils {
    /**
     * @param ratings - Ratings set e.g: 1 star from 200 user but 5 stars from 200_000 users
     * @returns Rating from all optinions
     */
    static calculateStarsRating(ratings: RatingSetType) {
        // Obtain
        const ft = ratings[4].count;
        const four = ratings[3].count;
        const three = ratings[2].count;
        const two = ratings[1].count;
        const one = ratings[0].count;

        // Calc
        const totalResponses = ft + four + three + two + one;
        const sumWeight = (ft * 5 + four * 4 + three * 3 + two * 2 + one);
        const rating = sumWeight / totalResponses;

        // Throw back
        return Number(rating.toFixed(2));
    }
}

/** Schema for pagination */
interface PaginationSchema {
    getPaginationPages(ops?: Opinions): PaginationProps["pages"] | undefined
}

/** Everything about pagination */
export class Pagination implements PaginationSchema {
    /** Get pagination pages */
    getPaginationPages(ops?: Opinions, test?: boolean): PaginationProps["pages"] | undefined {
        if (ops?.length) {
            // Chasis
            const { opinionsCountPerPage } = test ? { opinionsCountPerPage: 20 }: getContext<{ opinionsCountPerPage: number }>("board");
            const pagesAmount = Math.ceil(ops.length / opinionsCountPerPage)
            console.log(pagesAmount)
            const set = [] as NonNullable<PaginationProps["pages"]>;

            // Get pages
            for (let i = 0; i < (pagesAmount >= 1 ? pagesAmount : 1); i++) {
                set.push({
                    name: i + 1
                })
            }

            return set;
        }

        return;
    }
}
