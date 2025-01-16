<script setup>
// import '@fortawesome/fontawesome-free/css/all.css'
defineProps({
    text: String,
    onClick: Function,
    class: {
        type: String,
        default: 'btn'
    },
    type: {
        type: String,
        default: 'button'
    }
})

</script>

<template>
    <button :class="class" :type="type" @click="onClick">{{ text }}</button>
</template>

<style scoped>
.btn{
    
    border-radius: 8px;
    font-size: 16px;
}
.btn:hover{
    cursor: pointer;
}
.btn-primary{
    background-color: #2C2C2C;
    color: #F5F5F5;
}
.btn-neutral{
    background-color: #E3E3E3;
    color: #1E1E1E;
    border: #767676 1px solid;
}
.btn-subtle{
    color: #1E1E1E;
    border: none;
    background-color: #e3e3e300;
}
.btn--small{
    padding: 8px;
}

.btn--medium{
    padding: 12px;
}

</style>