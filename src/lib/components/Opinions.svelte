<script lang="ts">
    import { Input, Label, Rating } from "flowbite-svelte";
    // import InputIcon from "./utils/InputIcon.svelte"

    export let starsCount: StarsCount;

    let email = "";
    let userName = "";
    let title = "";
    let content = "";

    let rating: number = 1
</script>

<section id="opinions-layout">
    <div id="existsing" class="flex gap-x-2">
        
    </div>
    <div id="write-new" class="flex flex-col gap-y-4">
        <div id="one-schema">
            <h2 class="h2">Your estimmate</h2>
            <div class="flex justify-center gap-x-5">
                <input type="number" class="input" min=1 max={starsCount} step=0.1 bind:value={rating} placeholder="Your evaluation">
                {#key rating}
                    <Rating size={40} rating={rating}/>
                {/key}
            </div>
        </div>
        <div id="inputs" class="flex flex-col gap-y-2 w-full">
            <div id="one-schema">
                <h2 class="h2">How other see you</h2>
                <div class="flex gap-x-2 w-full">
                    <input type="text" class="input w-1/2" placeholder="Email">
                    <input type="text" class="input w-1/2" placeholder="Your Name" bind:value={userName}>
                </div>
                <!-- <InputIcon bind:value={email} placeholder="Email"/> -->
            </div>
            <div id="one-schema">
                <h2 class="h2">Your Opinion</h2>
                <div class="flex flex-col gap-y-2">
                    <input class="input" type="text" placeholder="Title" bind:value={title}>
                    <textarea class="input" placeholder="Content" id="" cols="30" rows="10" bind:value={content}></textarea>
                </div>
            </div>
        </div>
    </div>
</section>