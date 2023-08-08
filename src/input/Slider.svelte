<script lang="ts">
    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let value = 50;
    export let text = "Slider";
    // export let color = "red";
</script>

<div class="slidercontainer">
    <input type="range" {min} {max} {step} bind:value />
    <span>{text}: {value}</span>
</div>

<style>
    .slidercontainer {
        width: 200px;
        height: 50px;
        z-index: 5;
    }

    input {
        width: 100%;
        height: 10px;
        cursor: pointer;
        background-color: transparent;
        opacity: 0.4;
        appearance: none;
    }

    input::-webkit-slider-thumb {
        appearance: none;
        width: 10px;
        height: 10px;
        background-color: rgb(248, 248, 248);
        border-radius: 50%;
        cursor: pointer;
    }

    input::-moz-range-thumb {
        appearance: none;
        width: 10px;
        height: 10px;
        background-color: rgb(248, 248, 248);
        border-radius: 50%;
        cursor: pointer;
    }

    input::-webkit-slider-runnable-track {
        height: 0.5rem;
        background-color: grey;
        border-radius: 0.25rem;
    }

    input::-moz-range-track {
        height: 0.5rem;
        background-color: grey;
        border-radius: 0.25rem;
    }

    span {
        color: #dcdcdc;
        position: relative;
        left: 0.5rem;
    }
</style>
