'use client';
import Service from '../service/Service';
import HomeService from '../HomeService';
import * as S from './styles';

const Main = ({
  title = 'ATUAÇÃO · DESIGN & WEB',
  description = 'MAIS QUE IDEIAS',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Service />
    <HomeService />
  </S.Wrapper>
);

export default Main;
