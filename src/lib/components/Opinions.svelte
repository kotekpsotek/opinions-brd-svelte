<script lang="ts">
    import OpinionsMakeNew from "./OpinionsMakeNew.svelte"
    import OpinionsLayout from "./OpinionsLayout.svelte";
    import SingleOpinion from "./SingleOpinion.svelte";
    import NoOpinionsLeft from "./NoOpinionsLeft.svelte";
    import { Pagination } from "$lib/lib.js"

    // Should be such because context is not reactive by the way
    export let opinions: Opinions;

    // Get opinions batch for specific page
    let actualPage = 1;
    $: pagesList = new Pagination().getPaginationPages(opinions);
    $: opinionsForPage = new Pagination().getOpinionsForPage(opinions, actualPage);

    function next() {
        if (actualPage != pagesList!.length) {
            actualPage += 1
        }
    }

    function previous() {
        if (actualPage != 1) actualPage -= 1;
    }
</script>

<section id="opinions-layout">
    <OpinionsLayout {opinions} {actualPage} on:next={next} on:previous={previous}>
        {#if opinions?.length && opinionsForPage?.length}
            {#each opinionsForPage as opinion}
                <SingleOpinion {...opinion}/>
            {/each}
        {:else}
            <NoOpinionsLeft/>
        {/if}
    </OpinionsLayout>
    <!-- Open write new opinion menu -->
    <OpinionsMakeNew on:opinion-add={({ detail: newOpinion }) => opinions = [newOpinion, ...opinions]}/>
</section>