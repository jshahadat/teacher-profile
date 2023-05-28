import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes'

function App() {

  return (

    <div>
      <div className='bg' >
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>

  );
}

export default App;
