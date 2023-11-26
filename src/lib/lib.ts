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