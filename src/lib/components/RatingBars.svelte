<script lang="ts">
    export let ratings: [Rating1, Rating2, Rating3, Rating4, Rating5] = [{ label: "1 star", count: 2 }, { label: '2 stars', count: 20 }, { label: '3 stars', count: 200 }, { label: '4 stars', count: 2000 }, { label: '5 stars', count: 2222 }];

    function totalOpinionsCount() {
        return ratings.reduce((p, c) => {
            return { ...c, count: p.count + c.count }
        }).count;
    }

    function getPercentage(forRating: OneFromRatings) {
        const total = totalOpinionsCount();
        const actual = (forRating.count / total * 100);

        const lessThen10 = actual < 10 ? actual.toFixed(1) : actual.toFixed(0);
        const smallerThen1 = actual < 1 ? actual.toFixed(2) : lessThen10;
        const condition = smallerThen1;
        
        return condition;
    }

    function getPercentageFillment(node: HTMLDivElement, forRating: OneFromRatings) {
        function callBody() {
            const percentage = getPercentage(forRating);
            node.style.width = percentage + '%';
        }

        callBody()

        return {
            update(newParam: OneFromRatings) {
                forRating = newParam;
                callBody()
            }
        }
    }
</script>

<section class="flex flex-col gap-y-2">
    {#each ratings as { label, count }}
        <div class="flex justify-between text-md">
            <span id="label" class="font-semibold flex justify-center items-center">{label}</span>
            <div id="stripe" class="w-2/3 md:w-4/6 lg:w-10/12 border border-amber-400 rounded-xl overflow-hidden">
                <div id="fillment-percentage" class="bg-amber-400 h-full" use:getPercentageFillment={{ label, count }}></div>
            </div>
            <div id="rating-banner" class="flex flex-col justify-center items-center sm:w-fit">
                <span id="percentage" class="font-semibold text-sm">{getPercentage({ count, label })}%</span>
                <p class="text-xs text-slate-500 hidden sm:flex sm:flex gap-1">
                    <span class="font-semibold">{count}</span> 
                    <span>opinions</span>
                </p>
            </div>
        </div>
    {/each}
</section>