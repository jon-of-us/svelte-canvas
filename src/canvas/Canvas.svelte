<script lang="ts">
    import { Canvas, t, Layer, type Render } from "svelte-canvas";
    let render: Render;
    $: render = ({ context, width, height }) => {
        context.fillStyle = `red`;
        context.fillRect(0, 0, width, height);
    };
    export let width: number;
    export let height: number;
    $: width = window.innerWidth - 50;
    $: height = window.innerHeight - 50;
</script>

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
