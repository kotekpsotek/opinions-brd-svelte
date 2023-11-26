<script lang="ts">
    import { EnvelopeSolid } from "flowbite-svelte-icons";

    export let width: string = ""
    export let value = ""
    export let placeholder = ""
</script>

<div class="input-ico flex radius" id="input-icons" style="width: {width}">
    <EnvelopeSolid size="md"/>
    <input type="text" {placeholder} bind:value>
</div>
