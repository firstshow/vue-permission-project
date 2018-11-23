import Vue from 'vue'
import {
  Autocomplete,
  CheckboxGroup,
  Checkbox,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Radio,
  RadioGroup,
  RadioButton,
  Dialog,
  Button,
  Steps,
  Step,
  Select,
  Option,
  Pagination,
  Input,
  Table,
  TableColumn,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col, Message,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  DatePicker,
  Tooltip,
  Popover,
  Upload,
  Tabs,
  Cascader,
  TabPane,
  MessageBox,
  Notification,
  Carousel,
  CarouselItem,
  Transfer,
  Collapse,
  CollapseItem,
  Tag,
  Scrollbar
} from 'element-ui'

Vue.use(Autocomplete)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.use(DatePicker)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Select)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Cascader)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Transfer)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tag)
Vue.use(Scrollbar)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$notify = Notification
Vue.prototype.$prompt = MessageBox.prompt
