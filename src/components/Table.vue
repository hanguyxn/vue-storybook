<script setup>
const props = defineProps({
    columns: Array,
    data: Array
})

</script>

<template>
    <table>
        <thead>
            <tr>
               <th v-for="column in columns" :key="column.key">
                    {{ column.label }}
               </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row, index in data" :key="index">
                <!-- {{ console.log(row) }} -->
                <td v-for="value, key, index in row" :key="key">
                    {{ value }}
                </td>
            </tr>
            <!-- <tr>
                <td>dòng 1 cột 1</td>
                <td>dòng 1 cột 2</td>
                <td>dòng 1 cột 3</td>
            </tr>
            <tr>
                <td>dòng 2 cột 1</td>
                <td>dòng 2 cột 2</td>
                <td>dòng 2 cột 3</td>
            </tr>
            <tr>
                <td>dòng 3 cột 1</td>
                <td>dòng 3 cột 2</td>
                <td>dòng 3 cột 3</td>
            </tr> -->
        </tbody>
    </table>
</template>


<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td{
    padding: 8px;
    text-align: center;
}
th {
  background-color: #f4f4f4;
  cursor: pointer;
}
</style>