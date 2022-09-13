import { StarIcon } from 'assets/icons';
import { Button } from 'components/Button';
import { format } from 'date-fns';
import { IChatBot } from 'interfaces';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LocalStorageData } from 'types';
import {
  Card,
  Content,
  Name,
  Type,
  RandomColor,
  FavoriteContainer,
  CreatedAt
} from './styles';

interface IChatBotCard {
  type: 'list' | 'block';
  data: IChatBot;
  isFavorite?: boolean;
  randomColor: string;
  handleFavoriteClique: (name: string) => void;
}

export const ChatBotCard = ({
  type,
  data,
  isFavorite = false,
  randomColor,
  handleFavoriteClique
}: IChatBotCard) => {
  const navigate = useNavigate();
  return (
    <Card
      key={data.name}
      cardType={type}
      onClick={event => {
        event.stopPropagation();
        navigate(`profile/${data.name.trim().toLowerCase()}`);
      }}
    >
      <FavoriteContainer type={type}>
        <Button
          isButtonIcon
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            const favoriteList = localStorage.getItem(
              LocalStorageData.SCL_FAVORITE_LIST
            );
            let newList;

            if (favoriteList) {
              const list = [...JSON.parse(favoriteList)];
              if (list.includes(data.name)) {
                newList = list.filter(item => item !== data.name);
              } else {
                newList = [...list, data.name];
              }
            } else {
              newList = [data.name];
            }
            localStorage.setItem(
              LocalStorageData.SCL_FAVORITE_LIST,
              JSON.stringify([...newList])
            );
            handleFavoriteClique(data.name);
          }}
        >
          <StarIcon isFavorite={isFavorite} />
        </Button>
      </FavoriteContainer>
      <Content type={type}>
        <RandomColor color={randomColor} type={type} />
        <div>
          <Name>{data.name}</Name>
          {type === 'block' && <Type>{data.type}</Type>}
        </div>
      </Content>
      {type === 'list' && (
        <CreatedAt>
          Created at {format(new Date(data.created), 'dd/MM/yyyy')}
        </CreatedAt>
      )}
    </Card>
  );
};
