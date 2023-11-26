<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import RatingBars from "./RatingBars.svelte"

    interface Styling {
        starsSizePx: number
    }
    type StarsCount = 5 | 6;

    /** Styling */
    export let styling: Styling = {
        /** Stars section size in PX */
        starsSizePx: 65
    }
    /** Stars count */
    export let starsCount: StarsCount = 5;
    /** Ratings */
    export let ratings: RatingSetType = [{ label: "1 star", count: 2 }, { label: '2 stars', count: 20 }, { label: '3 stars', count: 200 }, { label: '4 stars', count: 2000 }, { label: '5 stars', count: 2222 }];
</script>

<div id="rating-board" class="flex flex-col w-full p-2 gap-2">
    <div class="flex justify-center w-full">
        <Rating total={starsCount} size={styling.starsSizePx} rating={2.0}/>
    </div>
    <RatingBars {ratings}/>
</div>