<script lang="ts">
    import { Rating } from 'flowbite-svelte';
    
    export let userName: string;
    export let rating: number;
    export let content: string;
</script>

<div class="flex flex-col">
    <div id="name-rating" class="flex flex-col">
        <h3 id="name">{userName}</h3>
        <div id="rating" class="flex">
            <p>{rating}</p>
            <Rating id="user-stars-rating" total={5} size={25} {rating}/>
        </div>
    </div>
    <div id="content-box">
        <p>{content}</p>
    </div>
</div>
