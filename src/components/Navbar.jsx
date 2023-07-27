import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({tittle,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={tittle}
   position='ButtonCenter'>
    <button type='button' onClick={customFunc}
    style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>

      <span style={{background:dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
      
    </button>

  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(()=>{
    if(screenSize<=900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize]);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton 
        tittle="Menu" 
        customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
        color='blue'
        icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
        <NavButton 
          tittle="Cart" 
          customFunc={() => handleClick('cart')}
          color='blue'
          icon={<FiShoppingCart/>}
        />
        <NavButton 
          tittle="Chat" 
          customFunc={() => handleClick('chat')}
          color='blue'
          icon={<BsChatLeft/>}
        />
        <NavButton 
          tittle="Notification" 
          customFunc={() => handleClick('notification')}
          color='blue'
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent
          content="Profile"
          position='BottomCenter'
        >
          <div className=''
            onClick={()=>handleClick('userProfile')}          
          >
            <img className='rounded-full w-8 h-8'
              src={avatar} />
              <p>
                <span className='text-gray-400 text-14'>Hi,</span> {' '}
                <span className='text-gray-400 ml-1 text-14'>Bijeet</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar