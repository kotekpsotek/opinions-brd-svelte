<script lang="ts">
    import { Input, Label, Rating } from "flowbite-svelte";
    import { EnvelopeSolid } from "flowbite-svelte-icons";

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
    <div id="write-new" class="flex flex-col">
        <div id="rate" class="flex justify-center gap-x-5">
            <input type="number" min=1 max={starsCount} step=0.1 bind:value={rating} placeholder="Your evaluation">
            {#key rating}
                <Rating size={50} rating={rating}/>
            {/key}
        </div>
        <div id="inputs">
            <div id="one-shema" class="flex gap-x-2">
                <div>
                    <Label for="input-group-1" class="block mb-2">Your Email</Label>
                    <Input id="email" type="email" placeholder="name@youemail.com" bind:value={email}>
                      <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </Input>
                </div>
                <input type="text" placeholder="Your Name" bind:value={userName}>
            </div>
            <input type="text" placeholder="Title" bind:value={title}>
            <textarea placeholder="Content" id="" cols="30" rows="10" bind:value={content}></textarea>
        </div>
    </div>
</section>