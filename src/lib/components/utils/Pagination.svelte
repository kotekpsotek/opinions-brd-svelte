<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dsp = createEventDispatcher();
</script>

<div id="set-buttons" class="w-44 flex border border-gray-500 rounded-md h-10 overflow-hidden font-semibold text-zinc-50">
    <button id="previous" class="w-1/2 text-center bg-zinc-700" on:click={() => dsp("previous")}>
        Previous
    </button>
    <button id="next" class="w-1/2 text-center bg-zinc-700" on:click={() => dsp("next")}>
        Next
    </button>
</div>
