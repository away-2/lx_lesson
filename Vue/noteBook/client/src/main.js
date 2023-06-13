import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import 'amfe-flexible'

import { 
  Button,
  Form, 
  Field, 
  CellGroup,
  Icon,
  Uploader,
  ActionSheet
} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);
app.use(Uploader);
app.use(ActionSheet);

app.use(router).mount('#app')
