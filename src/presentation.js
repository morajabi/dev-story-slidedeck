// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  S,
} from 'spectacle';
import styled from 'styled-components';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#f2f2f2',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    red: '#CA2C68',
    purpule: '#5E147D',
    dark: '#5C6A79',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  meNight: require('./assets/me/me-night.jpg'),
  mag: require('./assets/me/tarino-on-magazine.jpg'),
  baby: require('./assets/me/baby.jpg'),

  bazaar1: require('./assets/bazaar-life-01.jpg'),
  bazaar2: require('./assets/bazaar-life-02.jpg'),
  bazaar3: require('./assets/bazaar-life-03.jpg'),
  bazaar4: require('./assets/bazaar-life-04.jpg'),
  bazaar5: require('./assets/bazaar-life-05.jpg'),
  bazaarPeople: require('./assets/bazaar-people.jpg'),

  careerGuide: require('./assets/career-guide-book.png'),

  gifs: {
    highschool: require('./assets/gifs/highschool.gif'),
    schoolWrong: require('./assets/gifs/school-wrong.gif'),
    iwilldo: require('./assets/gifs/I-will-do-everything-i-can.gif'),
    yeahbuddy: require('./assets/gifs/yeah-buddy.gif'),
    cats1: require('./assets/gifs/cats1.gif'),
    cats2: require('./assets/gifs/cats2.gif'),
    dogs: require('./assets/gifs/dogs.gif'),
    money: require('./assets/gifs/take-my-money.gif'),
    emoji: require('./assets/gifs/emoji.gif'),
  },

  bgs: {
    meetupScene: require('./assets/bgs/meetup-scene.jpg'),
    tehran: require('./assets/bgs/tehran.jpg'),
    tallinn: require('./assets/bgs/tallinn.jpg'),
  },

  meetups: {
    1: require('./assets/meetups/1-min.jpg'),
    2: require('./assets/meetups/2-min.jpg'),
    3: require('./assets/meetups/3-min.jpg'),
    4: require('./assets/meetups/4-min.png'),
    5: require('./assets/meetups/5-min.jpg'),
  },

  peeps: {
    sara: require('./assets/avatars/sara.jpg'),
    phil: require('./assets/avatars/phil.jpg'),
    oliver: require('./assets/avatars/oliver.jpg'),
    nilan: require('./assets/avatars/nilan.jpg'),
    max: require('./assets/avatars/max.jpg'),
    kent: require('./assets/avatars/kent.jpg'),
    josh: require('./assets/avatars/josh.jpg'),
    schickling: require('./assets/avatars/j.jpg'),
    behnam: require('./assets/avatars/behnam.jpg'),
    andreas: require('./assets/avatars/andreas.jpg'),
  },

  tweets: {
    andrew: require('./assets/tweets/andrew-oss.png')
  },

  graph: require('./assets/me/github.png'),
  scInvite: require('./assets/me/styled-components-invite.jpg'),
}

const StyledListItem = styled(ListItem)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

const SlideShowContainer = styled.div`
  flex: 1 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 5vh;

  img {
    display: block;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;

  display: flex;
  justify-content: center;
  align-items: center;
`

const WhiteImageWrapper = ImageWrapper.extend`
  background: #f2f2f2;
`

const Peeps = styled.div`
  padding: 50px 0;
  text-align: center;
`

const Person = styled.div`
  width: 120px;
  display: inline-block;
  margin-right: 40px;
  text-align: center;
`

const PersonAvatar = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 30%;
  display: block;
  margin-bottom: 10px;
`

const PersonName = styled(Text)`
  && {
    font-size: 20px;
    color: white;
    font-weight: bold;
    font-family: Helvetica;
    line-height: 1.2 !important;
  }
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgImage={images.meNight} bgDarken={0.1} align="flex-end flex-end">
          <Text margin="10px 0 0" textColor="tertiary" size={4} bold>
            @morajabi on Twitter and Github
          </Text>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            I'm Mohammad.
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="red">
            Featured in
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="dark">
            Iran Startup Magazine
          </Heading>
          <Image src={images.mag} />
        </Slide>

        <Slide transition={['slide']} bgColor="primary" align="center flex-start">
          <Heading size={3} lineHeight={1.1} textColor="dark">
            Me kissing my brother
          </Heading>
          <Image src={images.baby} />
        </Slide>

        <Slide transition={['slide']} bgColor="secondary" align="center center">
          <Heading size={3} lineHeight={1.1} textColor="primary" margin="0 0 10vh 0">
            Goals
          </Heading>
          <List ordered start={1} textColor="primary">
            <Appear>
              <StyledListItem>An understanding of Iran tech scene</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>How to eliminate your limitations</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Fastest way to boost your career</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" align="center center">
          <Heading size={4} fit lineHeight={1.1} margin="0 0 10vh 0">
            Problems I tried to solve
          </Heading>
          <Appear>
            <Text textColor="dark" margin="0 0 10vh 0">
              Question! Problems of <S type="bold">a 16 y/o developer in Iran living with his parents.</S>
            </Text>
          </Appear>
          <List textColor="dark">
            <Appear>
              <StyledListItem>School</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Parents</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Limitations in Iran</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary" align="center center">
          <Heading size={3} caps fit lineHeight={1.1} textColor="primary">
            Do what you 💖,
          </Heading>
          <Heading size={3} caps fit lineHeight={1.1} textColor="primary">
            Don't live for others.
          </Heading>

          <Heading size={3} lineHeight={1.1} margin="10vh 0 0 0">
            🤔😬
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary" align="center center">
          <Heading size={3} lineHeight={1.1} textColor="secondary" margin="0 0 10vh 0">
            School and parents
          </Heading>

          <Image src={images.gifs.schoolWrong} height="40vh" />

          <Appear>
            <Heading size={5} caps lineHeight={1} textColor="purple" margin="5vh 0 0 0">
              ✅ Eliminated!
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} fit textColor="primary" caps style={{ letterSpacing: 2 }}>
            Let's talk about
          </Heading>
          <Heading size={5} fit textColor="primary" caps>
            Iran
          </Heading>
          <Heading size={1} textColor="primary">
            🇮🇷
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgImage={images.bgs.tehran} bgDarken="0.5" align="center center">
          <Heading size={6} caps lineHeight={1.1} textColor="primary" style={{ letterSpacing: 10 }}>
            Iran
          </Heading>
          <Heading size={5} lineHeight={1.1} textColor="primary">
            Limited from outside and inside 😞
          </Heading>

          <List textColor="primary" margin="10vh 0 0 0">
            <Appear>
              <StyledListItem>No global payments 💳</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>No access to Amazon and alike 📦</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Banned services for Iranians 🚧</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Visa problems ✈️</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Filtered internet ❌</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgImage={images.bgs.meetupScene} bgDarken="0.5" align="center center">
          <Heading size={6} caps lineHeight={1.1} textColor="primary" style={{ letterSpacing: 10 }}>
            Iran
          </Heading>
          <Heading size={3} lineHeight={1.1} textColor="primary">
            A promising tech scene ☺️
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgImage={images.bgs.meetupScene} bgDarken="0.5" align="center center">
          <Heading size={6} lineHeight={1} textColor="primary">
            Cafe Bazaar Startup
          </Heading>

          <SlideShowContainer>
            <ImageWrapper>
              <Image src={images.bazaarPeople} />
            </ImageWrapper>

            <Appear>
              <ImageWrapper><Image height="100%" src={images.bazaar5} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.bazaar1} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.bazaar2} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.bazaar3} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.bazaar4} /></ImageWrapper>
            </Appear>
          </SlideShowContainer>
        </Slide>


        <Slide transition={['fade']} bgImage={images.bgs.meetupScene} bgDarken="0.5" align="center center">
          <Heading size={6} lineHeight={1} textColor="primary">
            Meetups & Confs
          </Heading>

          <SlideShowContainer>
            <ImageWrapper>
              <Image src={images.meetups[1]} />
            </ImageWrapper>

            <Appear>
              <ImageWrapper><Image height="100%" src={images.meetups[2]} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.meetups[3]} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.meetups[4]} /></ImageWrapper>
            </Appear>
            <Appear>
              <ImageWrapper><Image height="100%" src={images.meetups[5]} /></ImageWrapper>
            </Appear>
          </SlideShowContainer>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Get a job in {'<'}6 months
          </Heading>

          <Text textColor="dark" margin="10vh 0 0 0">
            Important things to do:
          </Text>

          <List textColor="secondary" margin="5vh 0 0 0">
            <Appear>
              <StyledListItem><S type="bold">Learn</S> as much as you can</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem><S type="bold">Meet</S> lots of people</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem><S type="bold">Put your name</S> out there</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem><S type="bold">Github</S>'s the new resume</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            What would you do?
          </Heading>

          <Image height="50vh" src={images.gifs.iwilldo} margin="10vh auto 0 auto" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            My story on Github
          </Heading>

          <SlideShowContainer>
            <WhiteImageWrapper>
              <Image width="100%" src={images.graph} />
            </WhiteImageWrapper>

            <Appear>
              <WhiteImageWrapper><Image width="100%" src={images.scInvite} /></WhiteImageWrapper>
            </Appear>
            <Appear>
              <WhiteImageWrapper><Image height="80%" src={images.gifs.emoji} /></WhiteImageWrapper>
            </Appear>
            <Appear>
              <WhiteImageWrapper><Image width="100%" src={images.tweets.andrew} /></WhiteImageWrapper>
            </Appear>
          </SlideShowContainer>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Phil?
          </Heading>

          <Appear>
            <Image height="50vh" src={images.gifs.yeahbuddy} margin="10vh auto 0 auto" />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary">
            What's special about this for ME?
          </Heading>

          <Heading size={1} lineHeight="2" textColor="primary">
            👨🏻‍💻
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={5} textColor="secondary">
            No one would know on Github
          </Heading>

          <SlideShowContainer>
            <Appear>
              <Image height="50vh" src={images.gifs.cats2} style={{ position: 'absolute' }} />
            </Appear>
            <Appear>
              <Image height="50vh" src={images.gifs.dogs} style={{ position: 'absolute' }} />
            </Appear>
            <Appear>
              <Image height="50vh" src={images.gifs.cats1} style={{ position: 'absolute' }} />
            </Appear>
          </SlideShowContainer>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Alright, how to contribute to open source?
          </Heading>

          <Heading size={4} lineHeight="2" textColor="primary">
            🤔
          </Heading>

          <List textColor="primary" margin="5vh 0 0 0">
            <Appear>
              <StyledListItem>Solve your own damn problems 👀</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>No downside 🤠</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="secondary" margin="0 0 10vh 0">
            A book that helped me a lot
          </Heading>

          <Image height="40vh" src={images.careerGuide} margin="0 auto 5vw auto" />

          <Appear>
            <Text textSize={24} textAlign="left">
              1️⃣ Getting Started as a Developer {'  '}
              2️⃣ Getting a job {' '}<br />
              3️⃣ What You Need to Know About Software Development {' '} <br />
              4️⃣ Working as a Developer {' '}
              5️⃣ Advancing Your Career
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgImage={images.bgs.tallinn}>
          <Heading size={5} lineHeight={1.1} textColor="secondary">
            Future
          </Heading>

          <List textColor="secondary" margin="10vh 0 0 0">
            <Appear>
              <StyledListItem>Move to Europe! ✈️</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>More open source 📬</StyledListItem>
            </Appear>
            <Appear>
              <StyledListItem>Make my company 💎</StyledListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            First thing you'll do in Europe?
          </Heading>

          <Appear>
            <Image height="50vh" src={images.gifs.money} margin="10vh auto 0 auto" />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="purple">
          <Heading size={1} textColor="primary">
            💛
          </Heading>
          <br />
          <Heading size={3} textColor="primary">
            You are my new friends
          </Heading>
          <br />
          <Text textColor="primary">
            @morajabi
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="purple">
          <Heading size={3} caps fit textColor="primary">
            Thank you
          </Heading>

          <Peeps>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.josh} />
                <PersonName>Josh Comeau</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.sara} />
                <PersonName>Sara<br />Vieira</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.max} />
                <PersonName>Max<br />Stoiber</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.andreas} />
                <PersonName>Andreas Klinger</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.nilan} />
                <PersonName>Nilan Marktanner</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.schickling} />
                <PersonName>Johannes Schickling</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.kent} />
                <PersonName>Kent C. Dodds</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.oliver} />
                <PersonName>Oliver Turner</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.phil} />
                <PersonName>Phil Pluckthun</PersonName>
              </Person>
            </Appear>
            <Appear>
              <Person>
                <PersonAvatar src={images.peeps.behnam} />
                <PersonName>Behnam (My Brother)</PersonName>
              </Person>
            </Appear>
          </Peeps>
        </Slide>

      </Deck>
    );
  }
}
