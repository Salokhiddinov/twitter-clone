<template>
    <header>
        <h2><router-link to='/'><span><i class="fa-brands fa-twitter logo"></i></span>Twitter-Clone</router-link></h2>
    </header>
</template>

<style scoped>
    h2{
        font-family: var(--logo-font);
        color: white;
        font-size: 1.5rem;
        margin:0;
        padding: 10px;
        text-align: center;
        letter-spacing: 0.05rem;
    }
    header{
        background-color: var(--blue);
    }
    .logo{
        padding-right: 10px;
    }
    a{
        color: white;
        text-decoration: none;
    }
</style>