<script>
  import LogoImage from "../assets/images/logo.svg"

  function togglehamberger(){
    isactive = !isactive;
  }
  
  let isactive = true; 

</script>


<header>
    <div class="nav-logo">
      <img src={LogoImage} alt="Logo">
    </div>
    <div class="hamberger" on:click={togglehamberger}>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav class:hamactive={!isactive}>
      <div class="nav-left">
        <ul class="nav-items">
          <li class="nav-item">Features</li>
          <li class="nav-item">Pricing</li>
          <li class="nav-item">Resources</li>
        </ul>
      </div>
      <div class="nav-right">
        <span class="nav-login">Login</span>
        <span class="nav-btn">Sign Up</span>
      </div>
    </nav>
</header>

<style>
  .hamberger{
    height: fit-content;
    width: fit-content;
    cursor: pointer;
    display: none;
  }
  .line{
    width: 25px;
    height: 3px;
    background-color: hsl(0, 0%, 75%);
    margin-top: 0.2rem;
  }
</style>