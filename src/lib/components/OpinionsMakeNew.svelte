<!-- Open and write new opinion -->
<script lang="ts">
    import { Rating } from "flowbite-svelte";
    import { Forum, CloseOutline, Send } from "carbon-icons-svelte";
    import { scale } from "svelte/transition";
    import { getContext } from "svelte";
    import { createEventDispatcher } from "svelte";

    const dsp = createEventDispatcher();
     
    // Assigned elements
    let buttonShareNew: HTMLButtonElement;

    // Get all required stuff from context API
    const { shareOpinionIconSize, requirementsToSendOpinion, starsCount, targetSendOpinion } = getContext("board") as any;
    
    let email = "";
    let userName = "";
    let title = "";
    let content = "";

    let rating: number = 1
    let expandWriteOpinion = false;

    function fnExpandCloseWriteOpinion() {
        expandWriteOpinion = !expandWriteOpinion;
    }

    /** Send opinion to externnal property server */
    async function acceptOpinion() {
        // Send opinion as POST REST method
        const sendOpinion = await fetch(targetSendOpinion, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                userName,
                title,
                content
            })
        });

        // Listen answer
        if (sendOpinion.status == 200) {
            alert("Opinion has been sent");

            // Dispatch new opinion attop opinions list
            dsp("opinion-add", {
                userName, title, content, rating
            })

            // Clear all data fields in send form
            title = "";
            content = "";
            rating = 1;
           
            // Close make new opinion bar
            expandWriteOpinion = false;
        }
        else alert("Cannot send opinion!")
    }

    /**
     * When user would like to send his opinion must meet firstly some sophisticated conditions
    */
    function spawnSendOpinion() {
        const emailCond = email.includes("@") && email.length >= requirementsToSendOpinion.minSizes.email && email.length <= requirementsToSendOpinion.maxMaxSizes.email;
        const userCond = userName.length >= requirementsToSendOpinion.minSizes.userName && userName.length <= requirementsToSendOpinion.maxMaxSizes.userName;
        const titleCond = title.length >= requirementsToSendOpinion.minSizes.title && title.length <= requirementsToSendOpinion.maxMaxSizes.title;
        const contentCond = content.length >= requirementsToSendOpinion.minSizes.content && content.length <= requirementsToSendOpinion.maxMaxSizes.content;
        
        return emailCond && userCond && titleCond && contentCond ? true : false;
    }
</script>

{#if expandWriteOpinion}
    <div class="wrapper" in:scale={{ duration: 200 }} out:scale={{ duration: 100 }}>
        <h1 class="text-2xl font-bold mb-5 mt-2 text-slate-900">Share opinion</h1>
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
                    <h2 class="h2">How others see you</h2>
                    <div class="flex gap-x-2 w-full">
                        <input type="text" class="input w-1/2" placeholder="Email" bind:value={email}>
                        <input type="text" class="input w-1/2" placeholder="Your Name" bind:value={userName}>
                    </div>
                    <!-- <InputIcon bind:value={email} placeholder="Email"/> -->
                </div>
                <div id="one-schema">
                    <h2 class="h2">Your Opinion</h2>
                    <div class="flex flex-col gap-y-2">
                        <input class="input" type="text" placeholder="Title" bind:value={title}>
                        <div class="flex flex-col justify-end gap-y-1">
                            <textarea class="input resize-y" placeholder="Content" id="" cols="30" rows="10" bind:value={content}></textarea>
                            <p id="id-info" class="text-rose-950">* Content should have at least <span class="font-semibold">{requirementsToSendOpinion.minSizes.content}</span> letters and no more then <span class="font-semibold">{requirementsToSendOpinion.maxMaxSizes.content}</span> letters</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="actions" class="flex justify-end mt-2 gap-x-2">
            <button id="close" class="button bg-slate-500 hover:shadow-slate-500" on:click={fnExpandCloseWriteOpinion}>
                <CloseOutline size={24} fill="white"/>
            </button>
            {#if (email && userName && title && content) && spawnSendOpinion()}
                <button id="send" class="button bg-emerald-600 hover:shadow-emerald-600" on:click={acceptOpinion} in:scale={{ duration: 150 }} out:scale={{ duration: 100 }}>
                    <Send size={24} fill="white"/>
                </button>
            {/if}
        </div>
    </div>
{:else}
    <button id="write-new-ex" class="w-full pl-2 flex justify-start items-center gap-x-5 border-solid border input border-slate-500 cursor-pointer transition-all hover:scale-95 hover:shadow-lg hover:shadow-slate-950" title="Close Share Opinion Section" on:click={fnExpandCloseWriteOpinion} bind:this={buttonShareNew}>
        <Forum size={shareOpinionIconSize} fill="rgb(105, 109, 113)"/>
        <input type="text" class="border-none p-none m-none cursor-pointer" placeholder="Share your opinion..." on:click={fnExpandCloseWriteOpinion}>
    </button>
{/if}