<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import RatingBars from "./RatingBars.svelte"

</script>

<div id="rating-board" class="flex flex-col w-full p-2 gap-2">
    <div class="flex justify-center">
        <Rating total={5} size={50} rating={2.0}/>
    </div>
    <RatingBars/>
</div>