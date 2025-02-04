import DefaultLayout from '../components/DefaultLayout.vue'

export default {
    title: "Components/DefaultLayout",
    components: DefaultLayout,
    argTypes:{
        hasAside:{
            control: 'boolean',
            
        }
    }
}


const Template = (args) => ({
    components: { DefaultLayout },
    setup(){
        return { args }
    },
    template: "<DefaultLayout v-bind='args'/>"
})


export const Default = Template.bind({})

Default.args = {
    hasAside: true
}
