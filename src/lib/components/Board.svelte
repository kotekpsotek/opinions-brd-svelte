<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import RatingUtils from "$lib/lib.js";
    import RatingBars from "$lib/components/RatingBars.svelte";
    import Opinions from "$lib/components/Opinions.svelte";
    import { setContext } from "svelte";

    /** Styling */
    export let styling: Styling = {
        /** Stars section size in PX */
        starsSizePx: 65
    }
    /** Stars count */
    export let starsCount: StarsCount = 5;
    /** Ratings */
    export let ratings: RatingSetType = [{ label: "1 star", count: 2 }, { label: '2 stars', count: 20 }, { label: '3 stars', count: 200 }, { label: '4 stars', count: 2000 }, { label: '5 stars', count: 2222 }];
    // All required for 'OpinionsMakeNew.svelte' Component
    export let shareOpinionIconSize = 25 as 32;
    export let requirementsToSendOpinion = {
        minSizes: {
            title: 5,
            userName: 1,
            email: 2,
            content: 20
        },
        maxMaxSizes: {
            content: 20000,
            userName: 30,
            title: 40,
            email: 200
        }
    }
    export let opinions: Opinions = [{
        userName: "Marcin",
        rating: 5.0,
        content: "This product is great. I recomend it for everybody"
    }];
    export let targetSendOpinion: URLTarget | URL;

    // Set app context for each other component
    setContext("board", {
        shareOpinionIconSize,
        requirementsToSendOpinion,
        starsCount,
        targetSendOpinion
    });
</script>

<div id="rating-board" class="flex flex-col w-full p-2 gap-2">
    <div class="flex justify-center w-full">
        <Rating total={starsCount} size={styling.starsSizePx} rating={RatingUtils.calculateStarsRating(ratings)}/>
    </div>
    <RatingBars {ratings}/>
    <Opinions {opinions} targetSendOpinion={""}/>
</div>