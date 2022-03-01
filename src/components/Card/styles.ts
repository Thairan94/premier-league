import styled from 'styled-components/native'; 
import * as Animatable from 'react-native-animatable';


export const Container = styled.View`
   align-items: center;
   top: 50px;
   flex-direction: row;
   
   width: 180px;
   height: 250px;
   background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
   margin: 0 10px;
   border-radius: 10px;

`;
export const Content = styled.View`
   flex: 1;
   flex-direction: column;
   align-items: center;
   
`;

export const Image = styled(Animatable.Image)`
   margin-top: -50px;
   width: 150px;
   height: 150px;
   
`
export const Title = styled.Text`
   font-size: 18px;
   font-family: ${({theme}) => theme.FONTS.MEDIUM};
   color: ${({theme}) => theme.COLORS.BACKGROUND};
   margin-top: 24px;
`;
export const Fundation = styled.Text`
   font-size: 14px;
   font-family: ${({theme}) => theme.FONTS.REGULAR};
   color: ${({theme}) => theme.COLORS.BACKGROUND};
   margin-top: 24px;
   text-align: center;
`;