
import Menu from "../components/Menu.vue"


export default {
    title: 'Components/MyMenu',
    components: Menu,
    argTypes: {
        headingTitle: {
            control: {
                type: "text",
                description: "Header menu"
            }
        },
        headingSubTitle:{
            control: {
                type: "text",
                description: "Sub header"
            }
        },
        hasIcon: {
            control: 'boolean',
            description: 'Display icon of line',
        },
        menuItem: {
            control: {
                type: 'object',
                defaultValue:  {
                    'Menu label': 'Menu decription.',
                    'Menu label 2': 'Menu decription 2.',
                    'Menu label 3': 'Menu decription 3.',
                    'hr': '',
                    'Menu label 4': 'Menu decription 4.',
                    'Menu label 5': 'Menu decription 5.'
                    }
            }
        }
    }
}


const Template = (args) => ({
    components: { Menu },
    setup(){
        return { args };
    },
    template: '<Menu v-bind="args" />'
})


export const Default = Template.bind({});
Default.args = {
    headingTitle: "Title",
    headingSubTitle: "Subtitle",
    hasIcon: true,
    menuItem:{
        'Menu label': 'Menu decription.',
        'Menu label 2': 'Menu decription 2.',
        'Menu label 3': 'Menu decription 3.',
        'hr': '',
        'Menu label 4': 'Menu decription 4.',
        'Menu label 5': 'Menu decription 5.'
        }
}

