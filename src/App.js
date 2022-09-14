
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './todoreact/todo';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>

      <Todo />

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

      
    </div>
  );
}

export default App;
