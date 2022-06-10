import React from 'react';
import Snorkel from '../../images/snorkel.jpg';
import Swimming from '../../images/pool.jpg';
import Salmon from '../../images/salmon.jpg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Fun In The Sun!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Snorkel} />
          <ServicesH2>Snorkeling</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Swimming} />
          <ServicesH2>Swimming</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Salmon} />
          <ServicesH2>Food</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

// rafce