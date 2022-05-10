<template>
    <section>
        <WelcomeText></WelcomeText>
        <TheNavigation></TheNavigation>
        <!-- <TheFooter></TheFooter> -->
    </section>
</template>

<script>
import WelcomeText from '@/components/home/WelcomeText.vue'
export default {
    components: {
        WelcomeText,
        }
}
</script>

<style scoped>

    @media screen and (min-width: 1200px){
        section{
            display: grid;
            width: 1200px;
            margin: auto;
        }
    }

</style>