<script setup>

const props = defineProps({
    hasAside: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="container">
        <header class="header">
            <slot name="header">Default layout header</slot>
        </header>
        <div class="main">
            <aside class="sidebar" :class="{'block': hasAside}">
                <slot name="sider">Default layout sidebar</slot>
            </aside>
            <main class="content">
                <slot name="content">Default layout content</slot>
            </main>
        </div>
        
        <footer class="footer">
            <slot name="footer">Default layout footer</slot>
        </footer>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header,
.footer{
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}


.sidebar{
    width: 250px;
    background-color: #f4f4f4;
    padding: 1rem;
    display: none;
}

.block{
    display: block;
}

.content{
    flex: 1;
    padding: 1rem;
}

.main{
    display: flex;
}
</style>