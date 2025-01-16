<script setup>
import '../style/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Text from './Text.vue';

defineProps({
    headingTitle:{
        type: String,
        default: 'Heading'
    },
    headingSubTitle:{
        type: String,
        default: 'Heading'
    },
    hasIcon: {
        type: Boolean,
        default: true
    },
    menuItem:{
        type: Object,
        default: ()=>({
        'Menu label': 'Menu decription.',
        'Menu label 2': 'Menu decription 2.',
        'Menu label 3': 'Menu decription 3.',
        'hr': '',
        'Menu label 4': 'Menu decription 4.',
        'Menu label 5': 'Menu decription 5.'
        })
    }
    
})

</script>

<template>
    <div class="container">
        <div class="menu-header">
            <Text tag="h1" class="body-small" :text="headingTitle"/>
            <Text tag="h1" class="body-strong" :text="headingSubTitle"/>
        </div>
        <div class="separator">
            <hr>
        </div>
        <template v-for="(value, key, index) in menuItem" :key="index">
            <div class="separator" v-if="key == 'hr' || value == 'hr'">
                <hr>
            </div>
            <div class="menu-item flex"  v-else>

                <div class="menu-icon" :class="{'none': !hasIcon}">
                    <i class="fa-regular fa-star icon "></i>
                </div>
                <div class="menu-content">
                    <div class="content-header flex">
                        <Text tag="h1" class="body-base" :text="key"/>
                        <Text tag="h1" class="body-base short-cut" text="⇧A"/>
                    </div>
                    <Text tag="h1" class="body-small" :text="value"/>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
.container{
    width: 301px;
    min-width: 301px;
    background-color: #fff;
    border: #D9D9D9 1px solid;
    border-radius: 8px;
    box-shadow: 0 1px 2px #D9D9D9;
    padding: 8px;
}
.separator{
    padding: 8px 16px;
    color: #D9D9D9;
}

.flex{
    display: flex;
}
.icon{
    font-size: 20px;
}
.menu-header{
    padding: 8px 16px 4px 16px;
}
.content-header{
    justify-content: space-between;
}
.menu-item{
    padding: 12px 16px;
    gap: 12px; 
    
}
.menu-content{
    flex-direction: column;
    gap: 4px;
    width: 100%;
}

.none{
    display:  none;
}

</style>