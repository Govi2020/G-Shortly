<script>
    import Data from "../Data/Data.js"
	
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';


    function copy(e) {
        navigator.clipboard.writeText(e.target.value);
        console.log(e.target)
        e.target.className = e.target.className + " clicked"
        e.target.innerHTML = "Copied!"
    }
    let hidden = true;
    let data;
    $: hidden = ($Data.output[0] != "");
    $: data = $Data;
</script>

{#if hidden}
<div class="result" transition:fly="{{delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut}}" >
    <div class="results">
        <div class="result-input-section">
            <div class="resultInput">{data.url}</div>
        </div>
        <div class="result-output-setion">
            <a href={data.output[0]} class="result-output">{data.output[0]}/</a>
            <div class="result-copy" on:click={copy} data={data.output[0]}>Copy</div>
        </div>
    </div>
    <div class="results">
        <div class="result-input-section">
            <div class="resultInput">{data.url}</div>
        </div>
        <div class="result-output-setion">
            <a href={data.output[1]} class="result-output">{data.output[1]}/</a>
            <div class="result-copy" on:click={copy} data={data.output[1]}>Copy</div>
        </div>
    </div>
    <div class="results">
        <div class="result-input-section">
            <div class="resultInput">{data.url}</div>
        </div>
        <div class="result-output-setion">
            <a href={data.output[2]} class="result-output">{data.output[2]}/</a>
            <div class="result-copy" on:click={copy} value={data.output[2]}>Copy</div>
        </div>
    </div>
</div>
{/if}

<style>
    .result{
        width: 100%;
        margin-top: 2rem;
    }
    .results{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding: 1rem;
        box-shadow: #b3b2b24f 0px 0px 20px;
        border-radius: 10px;
    }
    .result-output-setion{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .result-copy{
        margin-left: 30px;
        padding: .5rem 2rem;
        background-color: hsl(180, 66%, 49%);
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
    .result-copy:hover{
        transition: 0.3s ease-in-out;
        background-color: hsla(180, 66%, 49%, 0.774);
    }
</style>