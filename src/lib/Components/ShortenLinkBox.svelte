<script>
    import Data from "../Data/Data.js"
    import BackgroundImage from "../../assets/images/bg-shorten-desktop.svg"

    let url = "";
    let error;

    async function shortenLink(e) {
        if (url == ""){
            error = "Please add a link"
        }
        e.preventDefault()
        $Data.url = url;
        console.log("Hel")
        try{
            let res = await fetch("https://api.shrtco.de/v2/shorten?url="+ $Data.url)
            let data = await res.json();
            data = data.result
            $Data.output = [data.full_short_link,data.full_short_link2,data.full_short_link3]
            console.log(data)
            console.log($Data.output)
        }catch(error){
            console.log("The Error: " + error)
            error = "Invalid link"
        }
    }
</script>

<div class="box">
    <img src={BackgroundImage} class="shorten-background" alt="Background" />
    <form class="box-form" on:submit={shortenLink}>
        <div class="shorten-input-container">
            <input type="text" class="shorten-input" placeholder="Shorten a link here:" class:error={error != undefined} bind:value={url}>
            <div class="error-text">{error != undefined ? error : ""}</div>
        </div>
        <button class="shorten-btn">Shorten It</button>
    </form>
</div>


<style>
    .shorten-btn{
        /* margin-left: .1rem; */
        background-color: hsl(180, 66%, 49%);
        padding: 0.6rem 2rem;
        border-radius: 6px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        border: none;
    }
    .shorten-btn:hover{
        transition: 0.3s ease-in-out;
        background-color: hsl(180, 100%, 65%);
    }
    .box{
        width: 100%;
        height: 168px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 10px;
        box-shadow: #00000078 0 9px 27px;
        overflow: hidden;
    }
    .box-form{ 
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .shorten-input-container{
        width: 65%;
    }
    .shorten-input{
        width: 100%;
        border-radius: 6px;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        position: relative;
        height: 44.8667px;
    }
    .error-text{
        position: absolute;
        top: 67%;
        left: 100px;
        color: hsl(0, 87%, 67%);
        font-style: italic;
    }
    .shorten-input:hover{
        border-color: hsl(180, 66%, 49%);
        transition: 0.3s ease-in-out;
        border-width: -5px;
    }
    .error{
        border-color: hsl(0, 87%, 67%);
        transition: 0.3s ease-in-out;
        border-width: -5px;
    }
    .shorten-background{
        position: absolute;
        background-color: hsl(257, 27%, 26%);
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>