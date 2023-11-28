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
    $: opinionsForPage = new Pagination().getOpinionsForPage(opinions, actualPage);
</script>

<section id="opinions-layout">
    <OpinionsLayout {opinions} {actualPage} on:next={() => actualPage+=1} on:previous={_ => actualPage -= 1}>
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