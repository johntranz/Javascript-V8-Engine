<template>
 <header>
    <h1>{{title}}</h1>
    <Button></Button>
 </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Hello World'
        },
    },
    components: {
        Button
    },
}
        Button   
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
</style>