<script>
    import PatternDesktop from "../assets/images/bg-boost-desktop.svg";
</script>


<div class="boost">
    <div class="boost-container">
        <img src={PatternDesktop} class="boost-background" alt="Pattern"/>
        <div class="boost-title">
            Boost your links today
        </div>
        <div class="hero-btn">Get Started</div>
    </div>
</div>

<style>
    .boost{
        width: 100%;
        height: 250px;;
    }
    .boost-container{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .boost-background{
        position: absolute;
        background-color: hsl(257, 27%, 26%);
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .boost-title{
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1.2rem;
    }
</style>