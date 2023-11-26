<script lang="ts">
    import OpinionsMakeNew from "./OpinionsMakeNew.svelte"

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
</script>

<section id="opinions-layout">
    <div id="existsing" class="flex gap-x-2">
        
    </div>
    <!-- Open write new opinion menu -->
    <OpinionsMakeNew {starsCount} {shareOpinionIconSize} {requirementsToSendOpinion}/>
</section>