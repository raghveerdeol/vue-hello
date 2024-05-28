
    const { createApp } = Vue

    createApp({
        data() {
        return {
        message: 'Ciao Mondo!',
        image: "https://content.imageresizer.com/images/memes/Batman-Gasp-meme-8.jpg"
    }
    },
    methods: {
        rosso: function () {
        const h1El = document.querySelector("h1");
        h1El.classList.add("red");
        }
    }
    
    }).mount('#app')