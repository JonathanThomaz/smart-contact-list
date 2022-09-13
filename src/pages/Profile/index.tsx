import React, { useEffect, useState } from 'react';
import {
  MessageIcon,
  ReceivedMessageIcon,
  SentMessage,
  UserIcon
} from 'assets/icons';
import { Container } from 'components/Container';
import { useParams } from 'react-router-dom';
import instance from 'services';
import { IProfileData } from 'interfaces/profile';
import {
  BotInfo,
  CreatedAt,
  GridContainer,
  GridItem,
  GridItemTrasnparent,
  Id,
  ImgContainer,
  Name,
  NotFound,
  PageHeader,
  TextContainer,
  Typography,
  UserCultureContainer
} from './styles';
import { Divider } from 'components/Divider';
import { format } from 'date-fns';
import { InfoCard } from 'components/InfoCard';
import free from 'assets/png/free.png';

const Profile = () => {
  const params = useParams();
  const [profile, setProfile] = useState<IProfileData | null>(null);
  useEffect(() => {
    const handleFetch = async () => {
      const response = await instance.get(`${params.shortName}/details`);
      setProfile(response.data);
    };
    handleFetch();
  }, []);
  if (!profile)
    return (
      <NotFound>
        <h1>Profile not found</h1>
      </NotFound>
    );

  return (
    <Container>
      <PageHeader>
        <BotInfo>
          <ImgContainer>
            <MessageIcon />
          </ImgContainer>
          <TextContainer>
            <Name>{profile.name}</Name>
            <Id>id: {profile.shortName}</Id>
          </TextContainer>
        </BotInfo>
        <CreatedAt>
          Created at {format(new Date(profile.created), 'dd/MM/yyyy')}
        </CreatedAt>
      </PageHeader>
      <Divider />
      <GridContainer>
        <GridItem collumSpan={1}>
          <UserCultureContainer>
            <Typography fontSize="12px" fontWeight={400}>
              Region and idiom
            </Typography>
            <Typography fontSize="12px" fontWeight={600}>
              {profile.culture}
            </Typography>
            <Typography fontSize="12px" fontWeight={400}>
              Timezone
            </Typography>
            <Typography fontSize="12px" fontWeight={600}>
              (UTC - {new Date(profile.created).getTimezoneOffset()}) -{' '}
              {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </Typography>
          </UserCultureContainer>
        </GridItem>
        <GridItem collumSpan={2}>
          <InfoCard
            icon={<UserIcon />}
            number={profile.analytics.user.actived}
            message="Usuarios ativos"
          />
        </GridItem>
        <GridItemTrasnparent collumSpan={1} rowSpan={2}>
          <img src={free} />
        </GridItemTrasnparent>
        <GridItem collumSpan={2}>
          <InfoCard
            icon={<ReceivedMessageIcon />}
            number={profile.analytics.message.received}
            message="Mensagens recebidas"
          />
        </GridItem>
        <GridItem collumSpan={1}>
          <InfoCard
            icon={<SentMessage />}
            number={profile.analytics.message.sent}
            message="Mensagens enviadas"
          />
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Profile;
