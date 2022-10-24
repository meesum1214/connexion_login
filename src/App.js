import './App.css';
import { Input } from '@mantine/core';
import Btn from './components/Btn';
import Icons, { Lock } from './components/Icons';
import { useState } from 'react';

function App() {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  return (
    <div className='bg-primary min-h-screen flex justify-center items-center'>
      <div className='bg-white w-96 h-[60vh] shadow-3xl flex flex-col items-center'>
        <div className='w-full flex justify-between items-center mt-4 px-2'>
          <img src='logo.png' width={80} />
          <img src='logo2.png' width={80} />
        </div>
        <div className='w-full flex justify-center text-xl font-semibold my-10'>Connexion</div>
        <div className='w-4/5'>
          <Input
            icon={<Icons />}
            placeholder="abc@email.com"
            radius="md"
            className='mb-4'
            size='md'
            type={'email'}
            value={loginData.email}
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
          />
          <Input
            icon={<Lock />}
            placeholder="Password"
            radius="md"
            size='md'
            type={'password'}
            value={loginData.password}
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
          />
        </div>
        <div className='mt-10'>
          <Btn onClick={() => {
            if (loginData.email === '' || loginData.password === '') {
              alert('Please fill all fields')
            }
            else {
              console.log(loginData)
            }
          }}>CONNEXION</Btn>
        </div>
      </div>
    </div>
  );
}

export default App;
