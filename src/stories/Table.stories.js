

import Table from "../components/Table.vue";

export default {
    title: "Components/MyTable",
    component: Table,
    argTypes:{
        columns:{
            control: 'object',
            description: "This is column title"
        },
        data: {
            control: 'object',
            description: "This is column data"
        }
    }
}

const Template = (args) => ({
    components: { Table },
    setup() {
        return { args }
    },
    template: '<Table v-bind="args"/>'
})

export const Default = Template.bind({});

Default.args = {
    columns: [
        {key: 'name', label: 'Tên'},
        {key: 'age', label: 'Tuổi'},
        // {key: 'address', label: 'Địa chỉ'}
    ]
    ,
    data: [
        {name: 'Nguyễn Văn A', age: 12},
        {name: 'Nguyễn Văn B', age: 18},
        {name: "Nguyễn Văn C", age: 21}
    ]
}