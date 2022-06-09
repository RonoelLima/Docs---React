//ANTES
import OtherComponent from './OtherComponent';
//DEPOIS
const OtherComponent = React.lazy(() => import('./OtherComponent'));