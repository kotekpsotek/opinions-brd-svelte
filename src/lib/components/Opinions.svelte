<script lang="ts">
    import OpinionsMakeNew from "./OpinionsMakeNew.svelte"
    import OpinionsLayout from "./OpinionsLayout.svelte";
    import SingleOpinion from "./SingleOpinion.svelte";
    import NoOpinionsLeft from "./NoOpinionsLeft.svelte";

    // Should be such because context is not reactive by the way
    export let opinions: Opinions;
    console.log(opinions)
</script>

<section id="opinions-layout">
    <OpinionsLayout>
        {#if opinions?.length}
            {#each opinions as opinion}
                <SingleOpinion {...opinion}/>
            {/each}
        {:else}
            <NoOpinionsLeft/>
        {/if}
    </OpinionsLayout>
    <!-- Open write new opinion menu -->
    <OpinionsMakeNew/>
</section>