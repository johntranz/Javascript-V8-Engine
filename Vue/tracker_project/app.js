const app = Vue.createApp({
    data() {
        return {
            firstName: 'Huy',
            lastName: 'Tran',
            email: 'quanghuy2621998@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/34.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    },
})

app.mount("#app")