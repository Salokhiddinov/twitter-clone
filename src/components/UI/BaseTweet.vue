<template>
    <div class="tweet">
        <slot></slot>
    </div>
</template>

<style scoped>
    .tweet{
        width: 100%;
        border-radius: 10px;
        background-color: var(--light-grey);
        margin: 0 auto;
        margin-bottom: 10px;
    }
    

</style>