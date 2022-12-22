// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Car Information App',
            meta: [
                { name: 'charset', content: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                { src: 'https://kit.fontawesome.com/b026c11a83.js', crossorigin: 'anonymous' }
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap' }
            ]
        },
        pageTransition: { name: 'page', mode: 'in-out' }
    },
    modules: ['@nuxtjs/tailwindcss']
})
