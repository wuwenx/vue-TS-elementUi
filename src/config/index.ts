import Vue from 'vue'
import {
    Input, Select, Checkbox, Radio, Switch, DatePicker, TimePicker,
    Form, OptionGroup, Button, ButtonGroup, FormItem, RadioGroup, RadioButton, CheckboxButton, CheckboxGroup, Col, Option, Message,
    Row,Table,TableColumn,Upload,pagination
} from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Input)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(FormItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Col)
Vue.use(Option)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(pagination)


Vue.prototype.$message = Message;