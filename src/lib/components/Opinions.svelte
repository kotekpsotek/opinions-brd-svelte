<script lang="ts">
    import OpinionsMakeNew from "./OpinionsMakeNew.svelte"
    import OpinionsLayout from "./OpinionsLayout.svelte";
    import SingleOpinion from "./SingleOpinion.svelte";

    // FIXME: In simply way this should be change to context in main file order to obtain more clear code
    export let starsCount: StarsCount = 5;
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
    export let opinions: {
        userName: string,
        rating: number,
        content: string
    }[] = [{
        userName: "Marcin",
        rating: 5.0,
        content: "This product is great. I recomend it for everybody"
    }];
</script>

<section id="opinions-layout">
    <OpinionsLayout>
        {#each opinions as opinion}
            <SingleOpinion {...opinion}/>
        {/each}
    </OpinionsLayout>
    <!-- Open write new opinion menu -->
    <OpinionsMakeNew {starsCount} {shareOpinionIconSize} {requirementsToSendOpinion}/>
</section>