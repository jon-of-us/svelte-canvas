<script lang="ts">
    import { Canvas, t, Layer, type Render } from "svelte-canvas";
    let render: Render;
    $: render = ({ context, width, height }) => {
        context.fillStyle = `red`;
        context.fillRect(0, 0, width, height);
    };
    export let width = 0;
    export let height = 0;
    let innerWidth: number;
    let innerHeight: number;
    $: width = innerWidth - 17;
    $: height = innerHeight - 17;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div>
    <Canvas {width} {height}>
        <Layer {render} />
    </Canvas>
</div>

<style>
    div {
        z-index: -1;
        position: absolute;
    }
</style>
