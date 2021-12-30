<template>

    <header-comp :navSelected="navSelected" data-aos="custom-animation" />

    <div id='first_screen'>

        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :speed="option.speed"
            :autoplay="option.autoplay"
            :pagination="{'clickable': true}"
        >
            <swiper-slide v-for="item in 3" :key="item">
                <!-- <img src="./assets/images/ff1633e5e791ed9a6849d346b32e6222.jpeg"> -->
                <div class="slider_bg"></div>
                <div class='slider_title' data-aos="fade-down" data-aos-duration="800" data-aos-once="true" data-aos-delay="400">
                    Commercail builders with pride - workmanship that values quality.<span>Acclaim Contractors are a highly specialised local business with over 20 years buildingand civil industry expereince with many accolades, commendations and awards recognising the building.</span>
                </div>
                <!-- <div class="text_area" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="400">
                    <p>Acclaim Contractors are a highly specialised local business with over 20 years buildingand civil industry expereince with many accolades, commendations and awards recognising the building. </p>
                </div> -->
            </swiper-slide>
        </swiper>

        <div id="side_copyright" data-aos="fade-right" data-aos-duration="800" data-aos-once="true" data-aos-delay="800">Block Studio&#169; Copyright. All Rights Reserved.</div>

        <div class="social_links" data-aos="fade-up" data-aos-offset="-100" data-aos-duration="800" data-aos-once="true" data-aos-delay="800">
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

        <div id="home_block">HOME</div>

    </div>
    
    <main>

        <div class="blue_parallax big_circle"></div>
        <div class="blue_parallax small_circle"></div>
        <div class="blue_parallax medium_circle"></div>
        <div class="blue_parallax long_1"></div>
        <div class="blue_parallax long_2"></div>

        <div id="main_para" data-aos="fade-down" data-aos-duration="800" data-aos-once="true">


            <p>Acclaim Contractors Pty Ltd were engaged by the ACT Government to complete the Woden Public Realm Improvements (Works Package 1 Including Lift &amp; Stairs) project under Contract No. 21646.340. The project was initiated to improve the user experience at the existing Woden Bus Interchange and provide a connection to the Woden Town Square. The works provided an improvement to public safety, pedestrian and cyclist movements, lighting and provide improved user access.Acclaim Contractors Pty Ltd were engaged by the ACT Government to complete the Woden Public Realm Improvements (Works Package 1 Including Lift &amp; Stairs) project under Contract No. 21646.340. The project was initiated to improve the user experience at the existing Woden </p>

            <p>Bus Interchange and provide a connection to the Woden Town Square. The works provided an improvement to public safety, pedestrian and cyclist movements, lighting and provide improved user access.Acclaim Contractors Pty Ltd were engaged by the ACT Government to complete the Woden Public Realm Improvements (Works Package 1 Including Lift &amp; Stairs) project under Contract No. 21646.340. The project was initiated to improve the user experience at the existing Woden Bus Interchange and provide a connection to the Woden Town Square. The works provided an improvement to public safety, pedestrian and cyclist movements, lighting and provide improved user access.nts (Works Package 1 Including Lift &amp; Stairs) project under Contract No. 21646.340. The project was initiated to improve the user experience at the existing Woden Bus Interchange and provide a connection to the Woden Town Square. The works provided an improvement to public safety, pedestrian and cyclist movements, lighting and provide improved user access.</p>

        </div>

        <div id="video_area">
            <div id="video_container" v-show="showVideo" @click.self="closeVideo">
                <iframe src="https://www.youtube.com/embed/9gXOBEgHaUM" frameborder="0"  allowfullscreen></iframe>
            </div>
            <img src="./assets/images/video_cover.png" data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
            <div id="play_button" @click="playVideo" data-aos="zoom-in" data-aos-duration="600" data-aos-once="true"><span></span></div>
        </div>

        <div id="card_area">

            <div class="card" v-for="item in cardData" :key="item">

                <div class="text_card" v-if="item.textCard" data-aos="fade-down" data-aos-duration="800" data-aos-once="true" data-aos-offset="150">
                    <div class="text_card_title">{{item.cardTitle}}</div>
                    <span class="small_cube"></span>
                    <div class="text_card_context">{{item.context}}</div>
                    <a href=""><span class="arrow"></span></a>
                </div>

                <div class="image_card" v-else data-aos="fade-down" data-aos-duration="800" data-aos-once="true" data-aos-offset="150">
                    <div class="image_outline">
                        <img :src="item.imagePath">
                    </div>
                    <div class="text_area">
                        <div class="image_card_kind">{{item.cardKind}}</div>
                        <div class="image_card_title">{{item.cardTitle}}</div>
                        <div class="image_card_context">{{item.context}}</div>
                        <div class="image_card_clent">CLENT
                            <span>{{item.clent}}</span>
                        </div>
                        <div class="image_card_status">STATUS
                            <span>{{item.status}}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </main>

    <footer-comp />

</template>

<script>
import headerComp from './components/headerComp.vue';
import footerComp from './components/footerComp.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';
SwiperCore.use([Pagination, Autoplay]);

export default {
    name: "App",
    components: {
        headerComp,
        footerComp,
        Swiper,
        SwiperSlide,
    },
    setup(){
        return {
            modules: [Pagination],
        };
    },
    data(){
        return{
            navSelected: "home",
            showVideo: false,
            parallaxTop: [50, 400, 2100, 1700, 1750],
            loadingCount: 6,
            option: {
                speed: 800,
                autoplay: {
                    delay: 5000,
                },
            },
            cardData: [
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/88adad24ee126dea613d810a3d0915ca.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/a12e4d1bbb3595a3106f6e63003af04e.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/8f52df8242c07fbc2582d7ff32f45c0a.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
            ],
            cardDataForLoading: [
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/88adad24ee126dea613d810a3d0915ca.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/a12e4d1bbb3595a3106f6e63003af04e.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/8f52df8242c07fbc2582d7ff32f45c0a.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/88adad24ee126dea613d810a3d0915ca.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/a12e4d1bbb3595a3106f6e63003af04e.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/8f52df8242c07fbc2582d7ff32f45c0a.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: true,
                    cardTitle: "Award wining civil contractors that government.",
                    context: "The Australian Treasury Building & King Edward TCE Barton Canberra City."
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/88adad24ee126dea613d810a3d0915ca.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/a12e4d1bbb3595a3106f6e63003af04e.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
                {
                    textCard: false,
                    imagePath: require("./assets/images/8f52df8242c07fbc2582d7ff32f45c0a.jpeg"),
                    cardKind: "Award",
                    cardTitle: "Woden Public Realm Improvements Works Package Lift & Stairs",
                    context: "Urban Public Realm Refurbishment.",
                    clent: "ACT Government",
                    status: "Completed 2017",
                },
            ],
        }
    },
    methods: {
        playVideo(){
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            this.showVideo = true;
        },
        closeVideo(){
            document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            this.showVideo = false;
        }
    },
    mounted(){
        let parallax = document.getElementsByClassName('blue_parallax');
        for(let i = 0; i < parallax.length; i++){
            parallax[i].style.top = `${this.parallaxTop[i]}px`;
        }
        let vm = this;

        window.addEventListener('scroll', function(){
            for(let i = 0; i < parallax.length; i++){
                parallax[i].style.top = `${vm.parallaxTop[i] + window.scrollY / 8}px`;
            }
        });

        window.addEventListener('scroll', function(){
            let body = document.getElementsByTagName('body')[0];
            if(window.scrollY + window.innerHeight >= body.scrollHeight - 450 && vm.loadingCount < 24){
                let add;
                if(window.innerWidth > 1399.98){
                    add = 3;
                }else if(window.innerWidth > 991.98){
                    add = 2;
                }else{
                    add = 1;
                }
                vm.cardData = vm.cardData.concat(vm.cardDataForLoading.splice(0, add));
                vm.loadingCount += add;
            }
            
        });
    },
};
</script>

<style lang="scss" scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    z-index: 100;
    transform: translateY(-100%);
}
[data-aos="custom-animation"].aos-animate{
    animation-name: headerSlideDown;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes headerSlideDown{
    0%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(0%);
    }
}
#first_screen{
    height: 100vh;
    position: relative;
    z-index: 10;

    #side_copyright{
        writing-mode: vertical-rl;
        font-size: 12px;
        position: absolute;
        top: 30%;
        left: 50px;
        z-index: 10;

        @media (max-width: 991.98px){
            display: none;
        }
    }

    .social_links{
        display: flex;
        width: 14%;
        justify-content: space-between;
        position: absolute;
        bottom: 30px;
        left: 50px;
        z-index: 10;

        @media (max-width: 991.98px){
            display: none;
        }

        a{
            color: black;
            text-decoration: none;
        }
    }

    #home_block{
        font-size: 48px;
        line-height: 1em;
        font-weight: 900;
        width: 50%;
        margin: 0 auto;
        border: 1px solid #aaa;
        text-align: center;
        padding: 35px 0;
        background-color: white;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(50%) translateX(-50%);
        z-index: 10;
        min-width: 240px;

        @media (max-width: 767.98px){
            width: 65%;
            padding: 16px 0;
            font-size: 28px;
            line-height: 1em;
        }

        &:before{
            content: "";
            display: block;
            background-color: white;
            position: absolute;
            bottom: -2.5px;
            right: -2.5px;
            width: 42.5px;
            height: 42.5px;

            @media (max-width: 767.98px){
                width: 24.5px;
                height: 24.5px;
            }
        }

        &:after{
            content: "";
            display: block;
            border-left: 1px solid #aaa;
            position: absolute;
            bottom: -1px;
            right: -1px;
            width: 59px;
            height: 58px;
            transform: translateX(50%) translateY(50%) rotate(45deg);

            @media (max-width: 767.98px){
                width: 33px;
                height: 33px;
            }
        }
    }
}
main{
    padding-top: 140px;
    max-width: 1200px;
    min-width: 360px;
    width: 84%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 767.98px){
        width: 100%;
        padding: 140px 7% 0;
    }

    .blue_parallax{
        background-color: blue;
        position: absolute;
        display: inline-block;
        box-shadow: 10px 10px 50px rgba(0, 0, 255, .35);
        z-index: 99;
    }
    .big_circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        top: 110px;
        left: -30px;
    }
    .small_circle{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 450px;
        right: -3.5%;

        @media (max-width: 767.98px){
            right: 1%;
        }
    }
    .medium_circle{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        top: 2400px;
        right: 350px;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, .8);

        @media (max-width: 767.98px){
            display: none;
        }
    }
    .long_1{
        width: 30px;
        height: 110px;
        top: 2000px;
        left: -70px;

        @media (max-width: 767.98px){
            display: none;
        }

        &:before{
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            transform: translateY(-50%);
            background-color: blue;
        }
        &:after{
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: blue;
            position: absolute;
            bottom: 0;
            transform: translateY(50%);
        }
    }
    .long_2{
        width: 30px;
        height: 110px;
        top: 2050px;
        left: 400px;

        @media (max-width: 767.98px){
            display: none;
        }

        &:before{
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            transform: translateY(-50%);
            background-color: blue;
        }
        &:after{
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: blue;
            position: absolute;
            bottom: 0;
            transform: translateY(50%);
        }
    }
}
#main_para{
    width: 800px;
    margin: 0 auto 210px;

    @media (max-width: 991.98px){
        width: 600px;
    }
    @media (max-width: 767.98px){
        display: none;
    }

    p{
        font-size: 14px;
        line-height: 1.8em;
    }
}
#video_area{
    position: relative;
    margin-bottom: 120px;

    #video_container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .8);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;

        iframe{
            width: 90vw;
            height: 85vh;
        }
    }

    img{
        width: 100%;
    }

    #play_button{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #555;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        cursor: pointer;
        transition: background-color .5s;

        @media (max-width: 767.98px){
            width: 40px;
            height: 40px;
        }

        &:hover{
            background-color: white;

            span{
                border-left: 35px solid #555;

                @media (max-width: 767.98px){
                    border-left: 12px solid #555;
                }
            }
        }

        span{
            border-left: 35px solid white;
            border-top: 17.5px solid transparent;
            border-bottom: 17.5px solid transparent;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-38%) translateY(-50%);
            transition: background-color .5s;

            @media (max-width: 767.98px){
                border-left: 12px solid white;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
            }
        }
    }
}

#card_area{
    display: grid;
    grid-template-columns: 380px 380px 380px;
    grid-gap: 20px;
    margin: 0 auto 350px;
    width: 1180px;

    @media (max-width: 1399.98px){
        grid-template-columns: 380px 380px;
        width: 780px;
        margin: 0 auto 200px;
    }
    @media (max-width: 991.98px){
        grid-template-columns: 1fr;
        width: 100%;
        margin: 0 auto 100px;
    }
    
    .text_card{
        width: 380px;
        height: 390px;
        border: 1px solid #555;
        padding: 35px 25px;
        position: relative;

        @media (max-width: 1399.98px){
            height: 630px;
        }
        @media (max-width: 991.98px){
            width: 100%;
            padding: 15px 20px;
            height: 105px;
        }

        .text_card_title{
            font-size: 36px;
            font-weight: 900;
            line-height: 1.2em;
            margin-bottom: 100px;

            @media (max-width: 1399.98px){
                margin-bottom: 340px;
            }
            @media (max-width: 991.98px){
                font-size: 20px;
                margin-bottom: 0px;
            }
            @media (max-width: 575.98px){
                font-size: 16px;
                -webkit-line-clamp: 2;
            }
        }

        .small_cube{
            display: block;
            width: 20px;
            height: 5px;
            background-color: black;
            margin-bottom: 15px;

            @media (max-width: 991.98px){
                position: absolute;
                bottom: 0px;
                left: 20px;
            }
        }

        .text_card_context{
            font-size: 14px;
            margin-bottom: 15px;

            @media (max-width: 991.98px){
                display: none;
            }
        }

        a{
            display: block;
            width: 100%;
            text-align: right;

            @media (max-width: 991.98px){
                position: absolute;
                bottom: 0px;
                right: 20px;
            }

            .arrow{
                display: inline-block;
                width: 30px;
                height: 1px;
                background-color: black;
                vertical-align: top;
                position: relative;

                &:before{
                    content: "";
                    display: inline-block;
                    background-color: black;
                    width: 10px;
                    height: 1px;
                    position: absolute;
                    transform-origin: right center;
                    transform: translateX(-100%) rotate(60deg);
                }
            }
        }
    }

    .image_card{
        width: 380px;
        height: 630px;
        border: 1px solid #555;
        overflow: hidden;

        @media (max-width: 991.98px){
            width: 100%;
            height: 105px;
            display: flex;
        }

        .image_outline{
            width: 100%;
            height: 360px;
            overflow: hidden;

            @media (max-width: 991.98px){
                width: 105px;
                height: 105px;
                display: inline-block;
                flex-shrink: 0;
            }

            img{
                width: 100%;

                @media (max-width: 991.98px){
                    width: auto;
                    height: 100%;
                }
            }
        }

        .text_area{
            padding: 20px 20px 0 20px;

            @media (max-width: 991.98px){
                padding: 15px 20px 0 20px;
            }

            .image_card_kind{
                width: 70px;
                height: 30px;
                background-color: black;
                color: white;
                text-align: center;
                padding: 10px 0;
                line-height: 10px;
                border-radius: 2px;
                margin-bottom: 10px;

                @media (max-width: 991.98px){
                    display: none;
                }
            }

            .image_card_title{
                font-size: 20px;
                font-weight: 900;
                line-height: 24px;
                margin-bottom: 30px;

                @media (max-width: 575.98px){
                    font-size: 16px;
                    -webkit-line-clamp: 3;
                }
            }

            .image_card_context{
                font-size: 14px;
                line-height: 1em;
                margin-bottom: 20px;

                @media (max-width: 991.98px){
                    display: none;
                }
            }

            .image_card_clent, .image_card_status{
                display: inline-flex;
                width: 50%;
                font-size: 14px;
                flex-direction: column;
                color: #999;

                @media (max-width: 991.98px){
                    display: none;
                }

                span{
                    color: black;
                    line-height: 1em;
                    margin-top: 10px;
                }
            }
        }
    }
}

@media (min-width: 1400px){
    .card:nth-child(3n+2){
        position: relative;
        top: 60px;
    }
    .card:nth-child(3n+3){
            position: relative;
            top: 120px;
    }
}
@media (max-width: 1399.98px) and (min-width: 992px){
    .card:nth-child(2n+2){
        position: relative;
        top: 60px;
    }
}
</style>

<style lang="scss">
.swiper-wrapper{
    position: relative;

    .swiper-slide{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;

        // img{
        //     min-width: 100vw;
        //     min-height: 100vh;
        //     position: absolute;
        //     bottom: 0px;
        //     left: 50%;
        //     transform: translateX(-50%);
        // }

        .slider_bg{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            min-width: 360px;
            width: 100vw;
            height: 100vh;
            background: url('./assets/images/ff1633e5e791ed9a6849d346b32e6222.jpeg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center bottom;
        }

        .slider_title{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            min-width: 360px;
            width: 100vw;
            height: 100vh;
            background: url('./assets/images/ff1633e5e791ed9a6849d346b32e6222.jpeg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center bottom;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 60px;
            font-weight: 900;
            filter: invert(1);
            padding: 27vh 15vw 0;

            @media (max-width: 1199.98px){
                padding: 25vh 15vw 0;
                font-size: 50px;
            }
            @media (max-width: 991.98px){
                padding: 25vh 10vw 0;
            }
            @media (max-width: 767.98px){
                font-size: 42px;
                text-align: center;
            }
            @media (max-width: 575.98px){
                font-size: 28px;
            }

            > span{
                display: block;
                width: 75%;
                margin: 25px auto 0;
                text-align: center;
                font-size: 16px;

                @media (max-width: 991.98px){
                    width: 85%;
                }
            }
        }

        // .text_area{
        //     position: absolute;
        //     bottom: 300px;
        //     width: 80%;
        //     margin: 0 10%;

        //     p{
        //         width: 70%;
        //         margin: 0 auto;
        //         text-align: center;
        //         font-size: 16px;
        //     }
        // }
    }

    .swiper-pagination{
        position: relative;
        top: 100px;


        .swiper-pagination-bullet{
            display: inline-block;
            width: 8px;
            height: 8px;
            border: .5px solid #000;
            background: transparent !important;
        }
        .swiper-pagination-bullet-active{

        }
    }
}
</style>
