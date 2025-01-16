<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import Button from './Button.vue';
defineProps({
    notiType:{
        type: String,
        default: ['message', 'alert']
    },
    hasIcon: {
        type: Boolean,
        default: false
    },
    hasDissmis: {
        type: Boolean,
        default: true
    },
    title:{
        type: String,
        default: 'Title'
    },
    body:{
        type: String,
        default: 'Body text.'
    },
    hasButton:{
        type: Boolean,
        default: true
    },
    buttonType:{
        type: String,
        default: 'primary'
    },
    buttonLabel:{
        type: String,
        default: 'Button'
    }
})
</script>


<template>
    <div class="notification" :class="notiType">
        <div class="container row">
            <div :class="{ icon: true, none: !hasIcon }">
                <i class="fa-regular fa-bell"></i>
            </div>
            <div class="content">
                <div class="content-title">
                    <div class="title-header row">
                        <p class="col col-2">{{ title }}</p>
                        <i class="fa-solid fa-xmark" :class="{ none: !hasDissmis  }"></i>
                    </div>
                    <p>{{ body }}</p>
                </div>
                <div class="content-bottom">
                    <button class="">{{ buttonLabel }}</button>
                    <!-- <Button text="Click me!"/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.none{
    display: none !important;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
i{
    font-size: 20px;
}

.notification {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 128px;
    border-radius: 8px;
    padding: 16px;
    border:solid 1px;
}
.message{
    border-color: #000;
    background-color: #fff;
}
.alert{
    border-color: #EC221F;
    background-color: #FEE9E7;
}

.primary{
    border-color: #000;
    background-color: #fff;
}

.neutral{
    border-color: #767676;
    background-color: #E3E3E3;
}

.container {
    width: 268px;
    height: 100%;
}
.icon{
    width: 32px;
}
.row{
    display: flex;
}
.col{
    flex: 1;
}
.col-1{
    width: 100% !important;
}

.col-2{
    width: 50% !important;
}
.col-3{
    width: 33.3333% !important;
}

.content{
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    margin-left: 3.5px;
    position: relative;
}
.content-title {
    display: flex;
    flex-direction: column;
    height: 50%;
    line-height: 1.4;
}
.title-header p{
    font-weight: bold;
}
.content-title i{
    margin-left: auto;
    padding: 8px;
    position: absolute;
    right: 0px;
}
.content-bottom{
    position: relative;
    height: 50%;
}

.content-bottom button{
    position: absolute;
    font-size: 16px;
    bottom: 0;
    padding: 0 8px;
    /* line-height: 1.2; */
    border-radius: 8px;
    font-weight: 100;
    height: 32px;
}
button:hover{
    cursor: pointer;
}
.notification.message button{
    background-color: #2C2C2C;
    color: #fff;
    border: #2C2C2C solid 1px;
}
.notification.message button:hover{
    background-color: #2C2C2C;
    color: #fff;
    border: #2C2C2C solid 1px;
}
.notification.alert button{
    background-color: #EC221F;
    color: #FEE9E7;
    border: #C00F0C solid 1px;
}
.notification.alert .container{
    color: #900B09;
}

.center{
    text-align: center;
    align-items: center;
    justify-content: center;
}

</style>
