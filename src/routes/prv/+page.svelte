<script lang=ts>
    import Board from "$lib/components/Board.svelte";
    import { UserAvatarFilledAlt } from "carbon-icons-svelte"

    const opinions = [] as Opinions;
    for (let i = 0; i < 1000; i++) {
        opinions.push({
            userName: "Jan Kowalski " + i,
            rating: 5.0,
            content: "ABC " + i
        })
    }
</script>

<div id="profile" class="w-screen h-screen flex flex-col gap-y-5 px-5 py-2">
    <div id="prf" class="flex flex-col justify-center items-center gap-y-5">
        <div class="w-28 h-28 rounded-full bg-rose-700 flex justify-center items-center">
            <UserAvatarFilledAlt size={32} fill="white"/>
        </div>
        <p class="font-bold text-2xl">John Smith</p>
    </div>
    <div id="opinions">
        <Board {opinions} targetSendOpinion={"http://localhost:5173"}/>
    </div>
</div>


