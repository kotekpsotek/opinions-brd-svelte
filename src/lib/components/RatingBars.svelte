<script lang="ts">
    type Label = '1 star' | '2 stars' | '3 stars' | '4 stars' | '5 stars';
    interface Rating {
        label: Label,
        count: number
    }
    
    export let ratings: Rating[] = [{ label: "1 star", count: 22 }, { label: "5 stars", count: 222 }];

    function totalOpinionsCount() {
        return ratings.reduce((p, c) => {
            return { ...c, count: p.count + c.count }
        }).count;
    }

    function getPercentage(forRating: Rating) {
        const total = totalOpinionsCount();
        const actual = (forRating.count / total * 100).toFixed(0);
        return actual;
    }

    function getPercentageFillment(node: HTMLDivElement, forRating: Rating) {
        function callBody() {
            const percentage = getPercentage(forRating);
            node.style.width = percentage + '%';
        }

        callBody()

        return {
            update(newParam: Rating) {
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