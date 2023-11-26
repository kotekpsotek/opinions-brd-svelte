interface RatingCount {
    count: number
}

type Rating1 = {
    label: '1 star'
} & RatingCount;

type Rating2 = {
    label: '2 stars'
} & RatingCount;

type Rating3 = {
    label: '3 stars'
} & RatingCount;

type Rating4 = {
    label: '4 stars'
} & RatingCount;

type Rating5 = {
    label: '5 stars'
} & RatingCount;

type RatingSetType = [Rating1, Rating2, Rating3, Rating4, Rating5];
type OneFromRatings = Rating1 | Rating2 | Rating3 | Rating4 | Rating5;
