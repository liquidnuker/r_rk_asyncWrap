// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./Component1.jsx')
});