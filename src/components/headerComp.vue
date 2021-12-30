<template>
    <header>
        <div id="logo_link"><a>B</a></div>
        <div id="nav_link_area">
            <div id="nav_links">
                <a href="" :class="{'-on': navSelected === 'home'}">Home</a>
                <a href="" :class="{'-on': navSelected === 'website'}">Website</a>
                <a href="" :class="{'-on': navSelected === 'branding'}">Branding</a>
            </div>
            <div id="mobile_nav_link_switch">
                <div @click="showMobileNav = true"><span></span></div>
            </div>
        </div>

        <div id="mobile_nav_link_area" :class="{'-show': showMobileNav}">
            <div id="link_area">
                <div id="close_button_container">
                    <font-awesome-icon :icon="['fas', 'x']" @click="showMobileNav = false" />
                </div>
                <div id="mobile_nav_link">
                    <a href="">About</a>
                    <a href="">Website</a>
                    <a href="">Branding</a>
                </div>
            </div>
            <div id="info_area">
                <p>
                    T. 02-2885-8586<br>
                    E.info@blockstudio.com<br>
                    3F., N02, Ln.80, Sec 4, Chende Rd. Shilin<br>
                    Dist., Taipei City 111, Taiwan
                </p>
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
        </div>
        
    </header>
</template>

<script>
export default {
    props: ['navSelected'],
    data(){
        return{
            showMobileNav: false,
        }
    },
    mounted(){
        window.addEventListener('scroll', function(){
            if(window.scrollY > 0){
                document.getElementsByTagName('header')[0].classList.add('scroll_down');
            }else{
                document.getElementsByTagName('header')[0].classList.remove('scroll_down');
            }
        })
    },
}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 120px;
    transition: all .3s;

    @media (max-width: 575.98px){
        height: 100px;
    }
}
header.scroll_down{
    background-color: rgba(255, 255, 255, .9);
    box-shadow: 0 3px 10px rgba(0, 0, 0, .5);
}

#logo_link{
    display: block;
    padding: 25px 40px;
    font-size: 42px;
    font-weight: 900;
    line-height: 55px;

    a{
        cursor: pointer;
    }

    &:before{
        content: "";
        display: block;
        background-color: black;
        width: 22px;
        height: 4px;
        margin: 0 auto;
    }
}

#nav_link_area{
    display: inline-flex;

    #nav_links{
        display: inline-flex;
        justify-content: space-between;
        padding: 0 20px;
        width: 400px;
        align-items: center;

        @media (max-width: 767.98px){
            display: none;
        }

        a{
            width: 100px;
            text-align: center;
            overflow: hidden;
            padding: 2px 0;
            text-decoration: none;
            color: black;
            cursor: pointer;

            &:hover{
                color: blue;
            }
        }
        a.-on{
            color: blue;
            border: 2px solid blue;
        }
    }

    #mobile_nav_link_switch{
        width: 120px;
        height: 120px;
        background-color: black;
        position: relative;

        @media (max-width: 575.98px){
            width: 100px;
            height: 100px;
        }

        div{
            cursor: pointer;
            margin: 0 auto;
            display: block;
            width: 20px;
            height: 23px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);

            span{
                display: block;
                width: 20px;
                height: 1px;
                background-color: white;
                margin: 0 auto;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%);

                &:before{
                    content: "";
                    display: block;
                    width: 100%;
                    height: 1px;
                    position: relative;
                    bottom: 10px;
                    background-color: white;
                }

                &:after{
                    content: "";
                    display: block;
                    width: 100%;
                    height: 1px;
                    position: relative;
                    top: 10px;
                    background-color: white;
                }
            }
        }
    }
}

#mobile_nav_link_area{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    right: 0px;
    top: 0px;
    bottom: 0px;
    height: 100vh;
    width: 360px;
    background-color: #252525;
    color: white;
    z-index: 500;
    transition: transform .5s;
    transform: translateX(100%);
    overflow: scroll;

    #link_area{
        padding: 40px 40px 0px 40px;

        #close_button_container{
            display: flex;
            justify-content: flex-end;

            svg{
                cursor: pointer;
            }
        }

        #mobile_nav_link{
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 200px;
            // margin-bottom: 200px;

            a{
                text-decoration: none;
                color: white;
                font-size: 20px;
            }
        }
    }

    #info_area{
        margin-top: 70px;
        background-color: black;
        width: 100%;
        padding: 25px 40px;
        font-size: 12px;
        line-height: 28px;
        
        p{
            margin-bottom: 5px;
        }

        .social_link{
            display: flex;
            justify-content: space-between;
            width: 120px;
            
            a{
                color: white;
                text-decoration: none;
            }
        }

    }
}
#mobile_nav_link_area.-show{
    transform: translateX(0);
}
</style>
