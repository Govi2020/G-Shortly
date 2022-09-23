<script>
    import ShortenLinkBox from "./Components/ShortenLinkBox.svelte";
    import ShortenLink from "./Components/ShortenLink.svelte";

</script>


<div class="shorten-box">
    <div class="shorten-container">
        <ShortenLinkBox/>
        <ShortenLink/>
    </div>
</div>

<style>
    .shorten-box{
        padding : 5rem;
    }
    .shorten-container{
        width: 100%;
    }
</style>