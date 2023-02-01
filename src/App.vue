<script setup>
import {useStore} from './stores'
import PreviewPhotos from './modules/PreviewPhotos.vue';
import LoginView from './modules/LoginView.vue';
import PopupView from './components/PopupView.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const store = useStore()
</script>

<template>
  <div class="container" @keydown.esc="store.closePopup" tabindex="0">
    <PreviewPhotos />
    <LoginView />
    <PopupView v-if="store.isPopup" />
    <LoadingSpinner v-if="store.isLoading"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
}
</style>
