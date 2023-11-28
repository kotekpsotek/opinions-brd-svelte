<script lang="ts">
    import OpinionsMakeNew from "./OpinionsMakeNew.svelte"
    import OpinionsLayout from "./OpinionsLayout.svelte";
    import SingleOpinion from "./SingleOpinion.svelte";

    // Should be such because context is not reactive by the way
    export let opinions: Opinions;
</script>

<section id="opinions-layout">
    <OpinionsLayout>
        {#each opinions as opinion}
            <SingleOpinion {...opinion}/>
        {/each}
    </OpinionsLayout>
    <!-- Open write new opinion menu -->
    <OpinionsMakeNew/>
</section>