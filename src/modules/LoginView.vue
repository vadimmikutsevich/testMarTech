<script setup>
import { useStore } from '../stores';
import Title from '../components/CustomTitle.vue';
import CustomButton from '../components/CustomButton.vue';

const store = useStore()
</script>

<template>
    <div class="container">
        <ul class="list">
            <Title text="How to Participate" />
            <li>
                <span class="list_marker">1.</span>
                <span class="list_text">Subscribe to our News</span>
            </li>
            <li>
                <span class="list_marker">2.</span>
                <span class="list_text">Check your email inbox</span>
            </li>
            <li>
                <span class="list_marker">3.</span>
                <CustomButton :action="store.openPopup" text="Sign Up"/>
            </li>
            <li>
                <span class="list_marker">4.</span>
                <span class="list_text">Wait till September 22</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    margin: auto;
    padding-right: 5%;
}
.list {
    padding-top: 52px;
    list-style: none;
}
.list li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 30px;
}
.list_marker {
    background: linear-gradient(145.08deg, #E61726 12.35%, #D4208C 83.63%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 2.2rem;
    padding-right: 20px;
}
.list_text {
    font-weight: 600;
    font-size: 1.2rem;
    color: #3A3A3A;
    letter-spacing: -0.05em;
}

@media(max-width: 375px) {
    .container {
        padding-right: 15%;
    }
}
</style>
