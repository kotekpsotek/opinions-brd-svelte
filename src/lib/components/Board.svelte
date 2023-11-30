<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import { Rating as RatingUtils } from "$lib/lib.js";
    import RatingBars from "$lib/components/RatingBars.svelte";
    import OpinionsCmp from "$lib/components/Opinions.svelte";
    import { setContext } from "svelte";

    /** Styling */
    export let styling: Styling = {
        /** Stars section size in PX */
        starsSizePx: 65
    }
    /** Stars count */
    export let starsCount: StarsCount = 5;
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
    export let opinions: Opinions;
    /** Ratings - set manually otherwise will be determined from opinions */
    export let ratings: RatingSetType | undefined = RatingUtils.getRatingsLabelFromOpinions(opinions);
    export let targetSendOpinion: URLTarget | URL;
    export let opinionsCountPerPage = 20;

    // Set app context for each other component
    setContext("board", {
        shareOpinionIconSize,
        requirementsToSendOpinion,
        starsCount,
        targetSendOpinion,
        opinionsCountPerPage
    });
</script>

<div id="rating-board" class="flex flex-col w-full p-2 gap-2">
    <div class="flex justify-center w-full">
        <Rating total={starsCount} size={styling.starsSizePx} rating={RatingUtils.avgCalculateFromOpinions(opinions)}/>
    </div>
    <RatingBars {ratings}/>
    <OpinionsCmp {opinions}/>
</div>