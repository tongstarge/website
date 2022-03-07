import Input from './Input.vue'
import Textarea from './Textarea.vue'

Input.install = function(Vue) {
    Vue.component('s-input', Input);
    Vue.component('s-textarea', Textarea);
}

export default Input