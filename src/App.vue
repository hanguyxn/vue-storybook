<script setup>
import { defineComponent, reactive, ref } from 'vue';
import Menu from './components/Menu.vue';
import Notification from './components/Notification.vue';
import Text from './components/Text.vue';
import Button from './components/Button.vue';

import Card from './components/Card.vue';
const notiType = ref(false)
const changeNotiType = () => {
  notiType.value = !notiType.value
}

const hasIcon = ref(true)
const changeHasIcon = () => {
  hasIcon.value = !hasIcon.value
}

const hasDissmis = ref(true)
const changeHasDissmis = () => {
  hasDissmis.value = !hasDissmis.value
}


//menu json dạng key, value
//hr là đường kẻ ở menu
const menuItem = {
  'Menu label': 'Menu decription.',
  'Menu label 2': 'Menu decription 2.',
  'Menu label 3': 'Menu decription 3.',
  'hr': '',
  'Menu label 4': 'Menu decription 4.',
  'Menu label 5': 'Menu decription 5.'
}

const cardItemList = {
  'List item': "#",
  'List item 2': "#",
  'List item 3': "#",
  'List item 4': "#",
  'List item 5': "#",
}
</script>


<template>
  <div class="card-section">
    <Card class="" btnClass="btn btn-primary btn--small" cardTitle="Changed title" :itemList="cardItemList"/>
    <Card class="dark" textStyle="light" btnClass="btn btn-neutral btn--small" cardTitle="Changed title" :itemList="cardItemList"/>
    <Card class="" btnClass="btn btn-primary btn--small" cardTitle="Changed title" :itemList="cardItemList"/>
  </div>

  <div>
    <h3>Menu</h3>
    <Menu headingTitle="Heading title" headingSubTitle="Heading sub title" :menuItem="menuItem"/>
  </div>

  <div>
    <h3>Noti</h3>
    <Notification buttonLabel="Click me!" :class="{'alert': notiType}" title="Title" body="Body text." :hasIcon="hasIcon" :hasDissmis="hasDissmis"/>
    <br>
    <button @click="changeNotiType">Change noti type</button>
    <button @click="changeHasIcon">hasIcon: {{ hasIcon }}</button>
    <button @click="changeHasDissmis">hasDissmis: {{ hasDissmis }}</button>
  </div>
  <!-- <Button text="Hello world" class="btn btn-subtle btn--medium"/> -->
  <!-- <Text tag="h1" class="body-base" text="Hello World"/> -->
  
</template>

<style scoped>
*{
  padding: 10px;
  /* display: flex; */
}
.card-section{
  max-width: 1200px;
  box-sizing: border-box;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  padding: 64px;
  box-shadow: 0 0 5px #ccc;
  flex-wrap: wrap;
}

</style>