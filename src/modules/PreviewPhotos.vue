<script setup>
import PhotoContainer from '../components/PhotoContainer.vue'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import heart from '../assets/heart.png'

</script>

<template>
    <div class="wrapper">
        <div style="--total: 6" class="container">
            <PhotoContainer style="--i: 1; --grow: 280" class="img" :image="image1" />
            <PhotoContainer style="--i: 2; --grow: 186" class="img" :image="image2" />
            <PhotoContainer style="--i: 3; --grow: 180" class="img" :image="image3" />
            <PhotoContainer style="--i: 4; --grow: 206" class="img" :image="image4" />
            <PhotoContainer style="--i: 5; --grow: 230" class="img" :image="image5" />
            <PhotoContainer style="--i: 6; --grow: 160" class="img" :image="image6" />

            <div class="heart_wrapper">
                <img class="heart" :src="heart" alt="heart">
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 5%;
    padding-bottom: 5%;
}
.container {
display: grid;
grid-template-areas: "layer";
place-items: center;
border-radius: 50%;
--radius: 30vmin;
width: calc(2 * var(--radius));
height: calc(2 * var(--radius));
}
.img {
grid-area: layer;
display: grid;
width: calc(var(--grow) * 0.1205vmin);
height: calc(var(--grow) * 0.1205vmin);
place-items: center;
--d: calc(var(--i) / var(--total));
--r-offset: -0.37turn;
--r-amount: 1turn;
--r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
--transform: rotate(var(--r)) translate(var(--radius)) rotate(calc(-1 * var(--r)));
transform: var(--transform);
}
.heart {
max-width: 180px;
max-height: 180px;
width: calc(180 * 0.1205vmin);
height: calc(180 * 0.1205vmin);
object-fit: fill;
}
.heart_wrapper {
display: flex;
justify-content: center;
align-items: center;
width: calc(357 * 0.1205vmin);
height: calc(357 * 0.1205vmin);
background: rgba(255, 255, 255, 0.8);
border-radius: 50%;
position: absolute;
z-index: 18;
}

@media(max-width: 1024px) {
 .wrapper {
    padding-top: 15%;
 }
}
</style>