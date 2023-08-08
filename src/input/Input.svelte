<script lang="ts">
    import Slider from "./Slider.svelte";
    import { input } from "./input_store";

    $input.slider1 = 20;
    $input.slider2 = 80;
</script>

<div>
    <Slider text="Slider 1" value={$input.slider1} />
    <Slider text="Slider 2" value={$input.slider2} />
</div>
