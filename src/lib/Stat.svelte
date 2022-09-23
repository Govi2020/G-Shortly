<script>

    import Brand from "../assets/images/icon-brand-recognition.svg";
    import Record from "../assets/images/icon-detailed-records.svg";
    import Customizable from "../assets/images/icon-fully-customizable.svg";


</script>


<div class="stat">
    <div class="stat-container">
        <div class="stat-info">
            <div class="stat-title">Advanced Statistics</div>
            <div class="stat-desc">
                Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </div>
        </div>
        <div class="stat-content">
            <div class="stat-card">
                <div class="stat-card-img-container">
                    <img src={Brand} alt="" class="stat-card-img">
                </div>
                <div class="before"></div>
                <div class="stat-card-title">
                    Brand Recognition
                </div>
                <div class="stat-card-desc">
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-img-container">
                    <img src={Record} alt="" class="stat-card-img">
                </div>
                <div class="before"></div>
                <div class="stat-card-title">
                    Detailed Records
                </div>
                <div class="stat-card-desc">
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-card-img-container">
                    <img src={Customizable} alt="" class="stat-card-img">
                </div>
                <div class="stat-card-title">
                    Fully Customizable
                </div>
                <div class="stat-card-desc">
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .stat{
        background: #f0f1f6;
        padding-top: 10rem;
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        margin-bottom: 10rem;
    }
    .stat-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .stat-info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 4rem;
    }
    .stat-title{
        font-size: 3rem;
        font-weight: bold;
        width: 650px;
        line-height: 85px;
    }

    .stat-desc{
        width: 520px;
        color: hsl(0, 0%, 58.8%);
        text-align: center;
    }

    .stat-card-desc{
        width: 300px;
    }
    .stat-content{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .stat-card{
        background-color: white;
        margin-left: 65px;
        border-radius: 7px;
        position: relative;
        padding: 10px;
        height: 270px;
        box-shadow: #0000005c 0px 0px 29px;
    }
    .stat-card-img-container{
        position: absolute;
        width: 80px;
        background: hsl(257, 27%, 26%);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        border-radius: 524px;
        padding: 20px;
        padding: 20px;
        top: -40px;
        left: 25px;
    }
    .stat-card-title{
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        margin-left: 1.5rem;
    }
    .stat-card-desc{
        margin-left: 1.5rem;
        font-size: .9rem;
        color: hsl(0, 0%, 58.8%);
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 1.5rem;
    }
    .before{
        background: hsl(180, 66%, 49%);
        position: absolute;
        height: 10px;
        width: 67px;
        content: "";
        top: 129px;
        right: -67px;
    }
    .stat-card:nth-child(2){
        margin-top: 2.5rem;
    }
    .stat-card:nth-child(3){
        margin-top: 5rem;
    }
</style>