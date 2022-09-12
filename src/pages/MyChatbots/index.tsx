import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container';
import { ActionsContainer, GridCards, PageHeader, Title } from './styles';
import { Button } from 'components/Button';
import { BlocksIcon, ListIcon } from 'assets/icons';
import { Input } from 'components/Input';
import instance from 'services/index';
import { IChatBot } from 'interfaces';
import { ChatBotCard } from 'components/ChatBotCard';
import { Divider } from 'components/Divider';
import { LocalStorageData } from 'types';

const MyChatbots = () => {
  const [organizeType, setOrganizeType] = useState<'list' | 'block'>('block');
  const [chatBots, setChatBots] = useState<IChatBot[] | null>(null);
  const [filteredChatBots, setFilteredChatBots] = useState<IChatBot[] | null>(
    chatBots
  );
  const [orderBy, setOrderBy] = useState<'name' | 'creation'>('name');
  const favoriteList = localStorage.getItem(LocalStorageData.SCL_FAVORITE_LIST);
  useEffect(() => {
    const handleFetch = async () => {
      const response = await instance.get(`bots?Filters[orderBy]=${orderBy}`);
      setChatBots(response.data);
      setFilteredChatBots(response.data);
    };
    handleFetch();
  }, [orderBy]);

  return (
    <Container>
      <PageHeader>
        <Title>My chatbots</Title>
        <ActionsContainer>
          <Input
            placeholder="Search"
            onChange={e =>
              chatBots &&
              setFilteredChatBots(
                chatBots.filter(item =>
                  item.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }
          />
          <Button onClick={() => setOrderBy('name')}>Order by name</Button>
          <Button onClick={() => setOrderBy('creation')}>
            Order by creation
          </Button>
          <Button
            isButtonIcon
            isActive={organizeType === 'block'}
            onClick={() => setOrganizeType('block')}
          >
            <BlocksIcon />
          </Button>
          <Button
            isButtonIcon
            isActive={organizeType === 'list'}
            onClick={() => setOrganizeType('list')}
          >
            <ListIcon />
          </Button>
        </ActionsContainer>
      </PageHeader>
      {favoriteList && (
        <>
          <Title>Favorites</Title>
          <GridCards type={organizeType}>
            {filteredChatBots
              ?.filter(item =>
                [...JSON.parse(favoriteList)].includes(item.name)
              )
              .map(item => (
                <ChatBotCard
                  key={item.name}
                  isFavorite={true}
                  data={item}
                  type={organizeType}
                  randomColor={`#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`}
                />
              ))}
          </GridCards>
        </>
      )}
      <Divider />
      <GridCards type={organizeType}>
        {filteredChatBots
          ?.filter(
            item =>
              ![...(favoriteList && JSON.parse(favoriteList))].includes(
                item.name
              )
          )
          .map(item => (
            <ChatBotCard
              key={item.name}
              data={item}
              type={organizeType}
              randomColor={`#${Math.floor(Math.random() * 16777215).toString(
                16
              )}`}
            />
          ))}
      </GridCards>
    </Container>
  );
};

export default MyChatbots;
