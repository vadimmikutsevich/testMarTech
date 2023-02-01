import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return { 
        isLoading: false,
        isPopup: false
    }
  },
  actions: {
    async login() {
     
    },
    async register(email, password) {
      this.isLoading = true

      try {
        const response = await fetch('https://api.dating.com/identity', {
          method: 'PUT',
          body: {
            email: email,
            password: password
          },
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log(response)
        this.isLoading = false
      } catch(e) {
        this.isLoading = false
        console.log(e.message)
        return false
      }
    },
    openPopup() {
      this.isPopup = true
    },
    closePopup() {
      this.isPopup = false
    }
  },
})