<script lang="ts">
    import { Rating, Hr } from 'flowbite-svelte';
    
    export let userName: string;
    export let rating: number;
    export let content: string;
</script>

<div class="flex gap-x-5 py-5 w-full">
    <div id="name-rating" class="flex flex-col w-44">
        <h3 id="name" class="text-lg font-semibold">{userName}</h3>
        <div id="rating" class="flex gap-x-2">
            <p class="text-md font-bold">{rating.toFixed(1)}</p>
            <Rating id="user-stars-rating" total={rating} size={25} {rating}/>
        </div>
    </div>
    <div id="content-box" >
        <p class="break-words">{content}</p>
    </div>
</div>
<Hr classHr="mb-2"/>
