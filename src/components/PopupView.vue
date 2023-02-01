<script setup>
import { ref } from 'vue';
import { useStore } from '../stores';
import Cancel from '../assets/cancel.svg'
import CustomButton from './CustomButton.vue';

const store = useStore()
const email = ref('')
const password = ref('')

function onSubmit(e) {
    e.preventDefault()
    store.register(email.value, password.value)
        .then(() => {
            email.value = ''
            password.value = ''
        })
}
</script>

<template>
    <div class="container">
        <div @click="store.closePopup" class="cancel_wrapper">
            <img :src="Cancel" alt="cancel">
        </div>
        <form @submit="onSubmit" class="form">
            <h4 class="title">
                To register, enter the mail to which our news is sent and set your password
            </h4>
            <input v-model="email" class="input" placeholder="Email"
                type="text">
            <input v-model="password" class="input" placeholder="Password"
                type="text">
            <div class="btnWrapper">
                <CustomButton text="submit" :action="onSubmit"/>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    top: 50%;
    transform: translateY(-50%);
    z-index: 40;
    border-radius: 50px;
    width: 70%;
    max-height: 70%;
}
.title {
  text-align: center;
}
.cancel_wrapper {
    position: absolute;
    right: 5%;
    top: 10%;
    cursor: pointer;
    width: 28px;
    height: 28px;
}
.form {
    display: flex;
    flex-direction: column;
    width: 50%;
}
.btnWrapper {
    padding-top: 46px;
    width: 70%;
    margin: auto;
}
.input {
    padding: 5px 25px;
    width: 100%;
    color: #3A3A3A;
    all: unset;
    border-bottom: 1px solid #3A3A3A;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 46px;
}

@media(max-width: 768px) {
    .container {
        width: 90%;
    }
    .btnWrapper {
        margin-top: 31px;
    }
    .form {
        width: 80%;
    }

    .input {
        margin-top: 31px;
    }

    .cancel_wrapper {
        width: 20px;
        height: 20px;
    }
}
</style>