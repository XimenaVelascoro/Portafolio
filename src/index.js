//aqui vamos a renderizar
import {createRoot}  from 'react-dom/client';

import App from './App';
import './index.css' ;
//llamamos la variable, aqui conectamos el index js con el html 
//esto era antes createRoot (<App/>, document.querySelector ("#root"));

const root = createRoot( document.querySelector ("#root"));
root.render(<App/>)