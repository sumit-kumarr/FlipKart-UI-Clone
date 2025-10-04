import React from 'react';
import StatusBar from '../Components/StatusBar';
import Banner from '../Components/Banner';
import TopDeals from '../Components/TopDeals';

const Home = () => {
  return (
    <div className='mt-30 gap-3 m-4 justify-center'>
      <StatusBar/>
      <Banner/>
      <TopDeals/>
      
    </div>
  );
}

export default Home;
