<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import RatingBars from "./RatingBars.svelte"

</script>

<div id="rating-board" class="flex flex-col w-full p-2">
    <div class="flex">
        <Rating total={5} size={35} rating={2.0}/>
    </div>
    <RatingBars/>
</div>