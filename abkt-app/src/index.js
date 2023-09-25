import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from "./App";

/*const root = React.DOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);