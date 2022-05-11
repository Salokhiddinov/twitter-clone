<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
    .card{
        background-color: var(--light-grey);
        border-radius: 10px;
        padding: 10px 25px ;
        margin-bottom: 10px;
    }
</style>