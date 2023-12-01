<script lang=ts>
    import { createEventDispatcher, getContext } from "svelte";
    import { Pagination as PaginationTx } from "$lib/lib.js";
    import Pagination from "$lib/components/utils/Pagination.svelte"
    
    export let opinions: Opinions;
    export let actualPage: undefined | number = undefined

    const { opinionsCountPerPage } = getContext<{ opinionsCountPerPage: number }>("board");
    const dsp = createEventDispatcher();
    const pg = new PaginationTx();
    const pages = pg.getPaginationPages(opinions);
</script>

<div id="layout" class="flex flex-col gap-x-2 w-full mt-2">
    <h2 class="text-2xl font-bold">Opinions</h2>
    <div id="spot-opinions">
        <slot/>
    </div>
    {#if opinions?.length > opinionsCountPerPage}
        <div id="pagination" class="flex flex-col gap-y-1.5 w-full justify-center items-center mt-8 mb-8">
            <p>
                Page
                <span class="font-semibold">{actualPage}</span>
                of
                <span class="font-semibold">{pages?.length || 1}</span>
            </p>
            <Pagination on:next on:previous/>
        </div>
    {/if}
</div>