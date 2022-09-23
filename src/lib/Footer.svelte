<script>
    import Facebook from "../assets/images/icon-facebook.svg";
    import Instagram from "../assets/images/icon-instagram.svg";
    import Twitter from "../assets/images/icon-twitter.svg";
    import Pinterest from "../assets/images/icon-pinterest.svg";
</script>


<footer>
    <div class="footer-container">
        <div class="footer-logo">
            Shortly
        </div>
        <div class="footer-menus">
            <div class="footer-menu">
                <div class="footer-menu-title">
                    Features
                </div>
                <div class="footer-menu-items">
                    <div class="footer-menu-item">Link Shortening</div>
                    <div class="footer-menu-item">Branded Links</div>
                    <div class="footer-menu-item">Analytics</div>
                </div>
            </div>
            <div class="footer-menu">
                <div class="footer-menu-title">
                    Resources
                </div>
                <div class="footer-menu-items">
                    <div class="footer-menu-item">Blog</div>
                    <div class="footer-menu-item">Developers</div>
                    <div class="footer-menu-item">Support</div>
                </div>
            </div>
            <div class="footer-menu">
                <div class="footer-menu-title">
                    Company
                </div>
                <div class="footer-menu-items">
                    <div class="footer-menu-item">About</div>
                    <div class="footer-menu-item">Our Team</div>
                    <div class="footer-menu-item">Careers</div>
                    <div class="footer-menu-item">Contact</div>
                </div>
            </div>
        </div>
        <div class="footer-links">
            <div class="footer-link">
                <img src={Facebook} alt="Facebook">
            </div>
            <div class="footer-link">
                <img src={Twitter} alt="Twitter">
            </div>
            <div class="footer-link">
                <img src={Pinterest} alt="Instagram">
            </div>
            <div class="footer-link">
                <img src={Instagram} alt="Instagram">
            </div>
        </div>
    </div>
</footer>

<style>
    footer{
        width: 100%;
        height: 400px;
        background-color: #232027;
        color: white !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .footer-container{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .footer-menus{
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
    }
    .footer-logo{
        color: white;
        font-size: 1.6rem;
        font-weight: bold;
    }
    .footer-links{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 200px;
    }
    .footer-link{
        cursor: pointer;
    }
    .footer-menu-item{
        color: white;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
    .footer-menu-item:hover{
        color: hsl(180, 66%, 49%);
        transition: 0.3s ease-in-out;
    }   

    .footer-menu{
        display: flex;
        flex-direction: column;
        margin: 0rem 3rem;
    }
    .footer-menu-title{
        margin-bottom: 1rem;
        color: white;
        font-weight: bold;
    }
    .footer-menu-item{
        margin-bottom: .4rem;
    }
</style>