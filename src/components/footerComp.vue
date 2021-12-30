<template>
    <footer>

        <div id="footer_main">
            <a id="logo_link">B</a>

            <div id="info_area">
                <div id="footer_nav_link">
                    <a href="">About</a>
                    <a href="">Website</a>
                    <a href="">Branding</a>
                </div>
                <p>
                    T. 02-2885-8586<br>
                    E.info@blockstudio.com<br>
                    3F., N02, Ln.80, Sec 4, Chende Rd. Shilin Dist., Taipei City 111, Taiwan
                </p>
            </div>

            <div class="social_link">
                <a href="">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
                <a href="">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
                <a href="">
                    <font-awesome-icon :icon="['fab', 'youtube']" />
                </a>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
footer{
    height: 250px;
    width: 100vw;
    background-color: black;
    padding-top: 40px;
    color: white;
    font-size: 12px;

    #footer_main{
        max-width: 1200px;
        min-width: 360px;
        width: 83%;
        margin: 0 auto;
        display: flex;
        align-items: start;

        @media (max-width: 767.98px){
            width: 86%;
            flex-direction: column;
            align-items: center;
        }
    }
}

#logo_link{
    margin-right: 50px;
    font-size: 28px;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 767.98px){
        display: none;
    }

    &:before{
        content: "";
        display: block;
        background-color: white;
        width: 18px;
        height: 3px;
        margin: 0 auto;
    }
}

#info_area{
    width: 400px;

    @media (max-width: 991.98px){
        width: 300px;
    }

    @media (max-width: 767.98px){
        width: 70%;
    }

    #footer_nav_link{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        a{
            font-size: 16px;
            text-decoration: none;
            color: white;
        }
    }

    p{
        line-height: 25px;

        @media (max-width: 767.98px){
            text-align: center;
        }
    }
}

.social_link{
    flex-grow: 1;
    text-align: right;

    @media (max-width: 767.98px){
        display: flex;
        width: 200px;
        justify-content: space-between;
    }

    a{
        margin-left: 50px;
        color: white;
        font-size: 16px;

        @media (max-width: 767.98px){
            margin: 0;
        }
    }
}
</style>
