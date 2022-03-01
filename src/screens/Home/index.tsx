import React from 'react';

import {Container, Header, Content} from './styles';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';

import capaImg from '../../images/capa.jpg'


// import { styles } from './styles';

export function Home(){
  return (
    <Container>
        <Header source={capaImg}>
            <Input placeholder='Search team' />
        </Header>
        <Content>
          <Card/>
        </Content>
    </Container>
  );
}