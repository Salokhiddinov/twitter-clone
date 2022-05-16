<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
    .card{
        background-color: white;
        border-radius: 25px;
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.01), 0 10px 10px rgba(0, 0, 0, 0.01);
        padding: 12px 20px ;
        
    }
</style>