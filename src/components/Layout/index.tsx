import React, { useState, useEffect } from 'react';

import MobileHeader from '../MobileHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import Desktopheader from '../Desktopheader';
import AdBanner from '../AdBanner';

import { Container } from './styles';


const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  },[])

  return (
    <Container>

      <MobileHeader />
      <Desktopheader />

      <span>
        {!isLoading && <AdBanner />}
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading}/>
      </main>
    </Container>
  );
};


export default Layout;