import React from 'react';
import { ScrollView } from 'react-native';

import { Container,Content, Image, Title, Fundation } from './styles';

import Time from '../../images/Chelsea.png'
import Arsenal from '../../images/Arsenal.png'
import United from '../../images/Manchester_United.png'
import City from '../../images/City.png'

export function Card(){
  return (
    <>
    <ScrollView horizontal={true}>
    <Container>
      <Content>  
          <Image 
            source={Time} 
            resizeMode="contain"
            animation="pulse"
            delay={100}
            iterationCount="infinite"
          />
          <Title>
            Chelsea
          </Title>
          <Fundation>
            1905
          </Fundation>
        </Content>  
    </Container>

    <Container>
      <Content> 
        <Image 
          source={Arsenal} 
          resizeMode="contain"
          animation="pulse"
          delay={100}
          iterationCount="infinite"
        />
        <Title>
          Arsenal
        </Title>
        <Fundation>
          1886
        </Fundation>
    </Content>   
</Container>

<Container>
      <Content> 
        <Image 
          source={United} 
          resizeMode="contain"
          animation="pulse"
          delay={100}
          iterationCount="infinite"
        />
        <Title>
          United
        </Title>
        <Fundation>
          1878
        </Fundation>
    </Content>   
</Container>
</ScrollView>
</>
  );
}