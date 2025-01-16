<script setup>
import '../style/style.css'

defineProps({
    tag: {
        type: String,
        default: 'p'
    },
    text: String,
    class: {
        type: String,
        default: 'default'
    }
})

</script>

<template>
    <tag :class="class">{{ text }}</tag>
</template>

<style scoped>
*{
    font-size: 16px;
    color: #1E1E1E;
    line-height: 24px;
    text-decoration: none;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    text-overflow: ellipsis;
    text-rendering: auto;
}
.body-strong {
    font-weight: 600;
}
.body-strong2 {
    font-weight: bold;
}
.body-base {
    font-weight: 500;
    color: #1E1E1E;
}

.body-small {
    font-weight: 100;
    color: #757575;
    font-size: 14px;
}
.body-medium {
    font-size: 21px;
}
.body-larger {
    font-size: 48px;

}

.light{
    color: #F5F5F5 !important;
}

</style>