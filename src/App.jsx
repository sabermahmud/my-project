import axios from 'axios'
import './App.css'
import NavBar from './components/navbar/NavBar'
import { Suspense } from 'react';
import Banner from './components/banner/banner';

const navDataPromise = axios.get('https://raw.githubusercontent.com/sabermahmud/public-apis/refs/heads/main/online-class/datas/navData.json');

function App() {

  return (
    <>
      <div>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <NavBar navDataPromise ={navDataPromise}></NavBar>
        </Suspense>
      </div>
      {/* Banner */}
      <Banner></Banner>
    </>
  )
}

export default App
