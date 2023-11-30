<script lang=ts>
    import Board from "../lib/components/Board.svelte"

    const opinions = [] as Opinions;
    for (let i = 0; i < 1000; i++) {
        opinions.push({
            userName: "Jan Kowalski " + i,
            rating: 5.0,
            content: "ABC " + i
        })
    }
</script>

<Board {opinions} targetSendOpinion={"http://localhost:5173"}/>