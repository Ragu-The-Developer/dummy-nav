import logo from './logo.svg';
import './App.css';
import Head from './assets/head.jpg'
function App() {
  return (
    <nav className='p-2 bg-white shadow md: flex items-center md: flex justify-between'>
     
     <div>
      <span className='text-2xl font-serif cursor-pointer flex items-center gap-2'>
      <img src={ Head } width={50} height={50}></img><h2 className='space-x-2'>CodingTheWeb</h2>
      </span>
   
      
     </div>

     <ul className='flex inline gap-5 sm: block'>

      <li className='mx-4 my-6 md: my-0'>
        <a href='#' className='text-xl hover: text-cyan-500 duration-500'>Home</a>
      </li>

      <li className='mx-4 my-6 md: my-0'>
        <a href='#' className='text-xl hover: text-cyan-500 duration-500'>About</a>
      </li>

      <li className='mx-4 my-6 md: my-0'>
        <a href='#' className='text-xl hover: text-cyan-500 duration-500'>Contact</a>
      </li>

      <li className='mx-4 my-6 md: my-0'>
        <a href='#' className='text-xl hover: text-cyan-500 duration-500'>Gallery</a>
      </li>

      
     </ul>
    </nav>
  );
}

export default App;
