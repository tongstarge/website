import Button from './Button'
import Input from './Input'
import Dialog from './Dialog'
import Line from './Line'

const components = [
    Button,
    Input,
    Dialog,
    Line
]
const install = function(Vue) {
    components.forEach(component => {
        Vue.use(component);
    });
}
export default {
    install,
    Button,
    Input,
    Dialog
}