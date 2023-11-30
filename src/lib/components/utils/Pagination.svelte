<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { UpToTop } from "carbon-icons-svelte";

    const dsp = createEventDispatcher();

    /** Go to opinions section when click captured in go atop button */
    function goToOpinion() {
        document.getElementById("opinions-layout")!.scrollIntoView({
            behavior: "smooth"
        })
    }
</script>

<div class="flex justify-center items-center relative w-full">
    <div id="set-buttons" class="w-44 flex border border-gray-500 rounded-md h-10 overflow-hidden font-semibold text-zinc-50">
        <button id="previous" class="w-1/2 text-center bg-zinc-700" on:click={() => dsp("previous")}>
            Previous
        </button>
        <button id="next" class="w-1/2 text-center bg-zinc-700" on:click={() => dsp("next")}>
            Next
        </button>
    </div>
    <button class="w-12 h-12 rounded-full flex items-center justify-center absolute right-0 bg-black border border-rose-700 hover:scale-90 scroll-smooth" title="Go atop opinions" on:click={goToOpinion}>
        <UpToTop size={32} fill="white"/>
    </button>
</div>
