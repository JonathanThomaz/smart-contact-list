import React from 'react';
import { Container, InfoContent, Message, Number } from './styles';

interface IInfoCard {
  icon: React.ReactNode;
  number: number;
  message: string;
}

export const InfoCard = ({ icon, number, message }: IInfoCard) => (
  <Container>
    {icon}
    <InfoContent>
      <Number>{number}</Number>
      <Message>{message}</Message>
    </InfoContent>
  </Container>
);
