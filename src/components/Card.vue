<script setup>
import '../style/style.css'
import Button from './Button.vue';
import Text from './Text.vue';

defineProps({
    cardClassType:{
      type: String,
      default: "light"  
    },
    textStyle:{
        type: String
    },
    cardTitle:{
        type: String,
        default: "Title"
    },
    currency:{
        type: String,
        default: "$"
    },
    label:{
        type: String,
        default: "/mo"
    },
    itemList:{
        type: Object,
        default: () => ({
            'List item': '#',
            'List item 2': '#',
        })
    },
    // btnFn:{
    //         type: Function
    //     },
    textBtn: {
        type: String,
        default: "Click me!"
    },
    btnClass: {
        type: String,
        default: "btn"
    }
})
</script>


<template>
    <div class="card" :class="cardClassType">
        <div class="card-item">
            <div class="item-header">
                <Text :class="textStyle" class="body-strong body-medium" :text="cardTitle"/>    
                <div class="card-price">
                    <Text :class="textStyle" class="currency body-strong body-medium" text="$"/>
                    <Text :class="textStyle" class="price body-strong2 body-larger" text="50"/>
                    <Text :class="textStyle" class="label body-small" text="/mo"/>
                </div>
            </div>
            <div class="item-content">
                <ul v-for="(value, key, index) in itemList" :key="index">
                    <li :class="textStyle"><a :class="textStyle" :href="value">{{ key }}</a></li>
                </ul>
            </div>
        </div>
        <Button :text="textBtn" :class="btnClass"/> 
        <!-- <Button :onClick="btnFn" :text="textBtn" :class="btnClass"/>  -->
    </div>

</template>


<style scoped>
.card{
    /* width: 314px; */
    max-width: 314px;
    min-width: 312px;
    padding: 32px;
    border-radius: 8px;
    border: #D9D9D9 1px solid;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
    box-shadow: 0 0 1px #D9D9D9;
}
.card.light{
    background-color: #FFFFFF;
}
.card.dark{
    background-color: #2C2C2C;
    
}
.light{
    color: #F5F5F5 !important;
}


.card-item{
    display: flex;
    flex-direction: column;
    gap: 16px;
}


.item-header{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
}
.card-price{
    justify-content: center;
    display: flex;
}


li{
    padding-left: 10px;
    list-style-position: inside;
    
}

.item-content ul li,
.item-content ul li a{
    font-size: 16px;
    color: #757575;
    margin-left: -5px;
}

.item-content ul{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 6px;
}
.btn{
    width: 100%;
}

</style>