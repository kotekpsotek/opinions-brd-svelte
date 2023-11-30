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
    /** Get pagination number named pages */
    getPaginationPages(ops?: Opinions, test?: boolean): PaginationProps["pages"] | undefined {
        if (ops?.length) {
            // Chasis
            const { opinionsCountPerPage } = test ? { opinionsCountPerPage: 20 }: getContext<{ opinionsCountPerPage: number }>("board");
            const pagesAmount = Math.ceil(ops.length / opinionsCountPerPage)
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

    /** Get opinions batch for determined page */
    getOpinionsForPage(ops?: Opinions, pageNum?: number, test?: boolean) {
        if (ops && pageNum) {
            const { opinionsCountPerPage } = test ? { opinionsCountPerPage: 20 }: getContext<{ opinionsCountPerPage: number }>("board");
            return ops.slice(pageNum * opinionsCountPerPage - opinionsCountPerPage, pageNum * opinionsCountPerPage);
        }

        return;
    }
}

export class Rating {
    static avgCalculateFromOpinions(ops: Opinions): undefined | number {
        const amount = ops.length;
        if (amount) {
            const rateNumSteps = ops.reduce((p, c) => {
                return {
                    ...c,
                    rating: p.rating + c.rating
                }
            }).rating;
            const avgRating = Number((rateNumSteps / amount).toFixed(2)); 

            // Return rating
            return avgRating;
        }

        // Return void
        return;
    }
}
