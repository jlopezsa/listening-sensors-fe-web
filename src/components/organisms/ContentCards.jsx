/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';
import InformationCard from '../molecules/InformationCard';
import figGyroscope from '../../figures/gyroscope.jpg'
import figAccelerometer from '../../figures/accelerometer.png'
import figMagnetometer from '../../figures/magnetometer.jpg'


const ContainerContentCards = styled.div`
background-color: ${colors.backgroundDarkGray};
padding: 20px;
padding-top: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
margin-top: 0px;
`;


const TitleBigCard = styled.h3`
background-color: ${colors.backgroundDarkGray};
font-size: 40px;
color: ${colors.mainTextHover};
text-align: center;
margin-bottom: 0px;
padding-top: 100px;
`;

function ContentCards() {
  return (
    <>
      <TitleBigCard>Los sensores utilizados</TitleBigCard>
      <ContainerContentCards>
        <InformationCard title="Acelerometro" content={'Se denomina acelerómetro a cualquier instrumento destinado a medir aceleraciones. Esto no es necesariamente la misma que la aceleración de coordenadas, sino que es el tipo de aceleración asociada con el fenómeno de peso experimentado por una masa de prueba que se encuentra en el marco de referencia del dispositivo [Wikipedia]'} figure={figAccelerometer}/>
        <InformationCard title="Giroscópio" content='El giróscopo o giroscopio es un dispositivo mecánico que sirve para medir, mantener o cambiar la orientación en el espacio de algún aparato o vehículo [Wikipedia]' figure={figGyroscope}/>
        <InformationCard title="Magnetómetro" content='Se les dice magnetómetros a los dispositivos que sirven para cuantificar en fuerza o dirección la señal magnética de una muestra. El magnetismo varía de lugar en lugar y a las diferencias en el campo magnético terrestre (la magnetósfera) [Wikipedia]' figure={figMagnetometer}/>
      </ContainerContentCards>
    </>
  )
}

export default ContentCards
