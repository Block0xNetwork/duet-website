import styled from 'styled-components'
import logo from './assets/svg/logo.svg';
import logoMobile from './assets/svg/logo-mobile.svg';
import brand from './assets/svg/brand.svg';
import icon1 from './assets/svg/icon-1.svg';
import icon2 from './assets/svg/icon-2.svg';
import icon3 from './assets/svg/icon-3.svg';

import omni from './assets/images/omni.png';
import bitcoin from './assets/images/bitcoin.png';
import dao from './assets/images/dao.png';
import matrix from './assets/images/matrix.png';
import ibm from './assets/images/ibm.png';
import binance from './assets/images/binance.png';
import microsoft from './assets/images/microsoft.png';
import ifinance from './assets/images/ifinance.png';

import news1 from './assets/images/news1.png';
import news2 from './assets/images/news2.png';
import news3 from './assets/images/news3.png';
import news4 from './assets/images/news4.png';

import keyfeature from './assets/images/keyfeature.png';
import fb from './assets/images/fb.png';
import twitter from './assets/images/twitter.png';
import medium from './assets/images/medium.png';
import telegram from './assets/images/telegram.png';
import weibo from './assets/images/weibo.png';
import React, {useState} from 'react';
import howIcon from './assets/images/how-it-work.png';

import Wave from './Wave/Wave';

const Body = styled.div`
  text-align: center;
  /* background-color: #616857; */
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 750px) {
    padding-left: .4rem;
    padding-right: .4rem;
  }
`

const HeaderView = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 0;

  @media (max-width: 750px) {
    justify-content: center;
    height: auto;
    padding-top: 1.43rem;
  }
`

const DuetLogo = styled.img`
  height: 32px;
  cursor: pointer;

  @media (max-width: 750px) {
    display: none;
  }
`

const DuetLogoMobile = styled.img`
  display: none;

  @media (max-width: 750px) {
    display: inline-block;
    height: 1.8rem;
  }
`

const MenuList = styled.nav`
  margin-left: auto;

  @media (max-width: 750px) {
    display: none;
  }
`

const Menu = styled.div<{ left?: number }>`
  display: inline-block;
  margin-left: ${({left}) => (left ? left + 'px' : '40px')};
  line-height: 30px;
  font-size: 14px;
  font-family: poppinsMedium;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
`

const WebApp = styled.div`
  position: relative;
  display: inline-block;
`

const AppList = styled.div`
  position: absolute;
  z-index: 2;
  display: none;

  ${WebApp}:hover & {
    display: block;
  }
`

const AppItem = styled.div`
  /* margin-left: 40px; */
  width: 70px;
  line-height: 30px;
  /* background-color: #4ac212; */
  font-size: 14px;
  font-family: poppinsMedium;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;

  /* :hover {
    transform: scale(1.05);
  } */

  @media (max-width: 950px) {
  }
`

const DuetIntro = styled.div`
  position: relative;
  font-size: 0;

  @media (max-width: 750px) {
    box-sizing: border-box;
  }

`

// const Mesh = styled.div`
//   position: absolute;
//   z-index: 1;
//   width: 100%;

//   @media (max-width: 950px) {
//     transform: scale(3);
//     padding-left: 10px;
//     padding-top: 80px;
//   }
// `

const Brand = styled.div`
  img {
    height: 80px;

    @media (max-width: 750px) {
      height: .76rem;
    }
  }
`

const SubTitle = styled.div`
  margin-top: 20px;
  color: #FFFFFF;
  opacity: 0.6;
  font-size: 32px;
  line-height: 48px;
  font-family: tekoLight;
  font-weight: 300;
  letter-spacing: 1.45px;

  @media (max-width: 750px) {
    margin-top: .3rem;
    font-size: .36rem;
    line-height: .48rem;
    letter-spacing: 0;
  }
`

const WhitePaper = styled.button`
  margin-top: 40px;
  box-sizing: border-box;
  padding: 0 62px;
  height: 60px;
  background-color: transparent;
  border: 2px solid #FFFFFF;
  color: white;
  font-size: 18px;
  font-family: poppinsMedium;
  transition: background-color .3s, transform .3s;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: #fff;
    color: #0E1124;
  }

  @media (max-width: 750px) {
    margin-top: .6rem;
    height: .8rem;
    padding: 0 .6rem;
    font-size: .3rem;
  }
`

const FlexLayout = styled.div<{ justify?: any }>`
  display: flex;
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  flex-wrap: wrap;
  font-size: 0;

  @media (max-width: 950px) {
    flex-flow: column;
  }
`

const PcPartners = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 0;

  @media (max-width: 950px) {
    display: none;
  }
`

const MobilePartners = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: .3rem;

    img {
      height: 1.66rem;
    }
  }
`

const SplitView = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: block;
  }
`
// const Icon = styled.div`
//   /* background-color: white; */
//   /* padding-left: 250px; */
//   /* width: 320px;
//   height: 166px; */
// `

const OverviewItem = styled.div`
  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    line-height: 1.6rem;

    img {
      height: 1.6rem;
      vertical-align: middle;
    }

    & + & {
      margin-top: 1rem;
    }
  }
`

const IconTitle = styled.div`
  color: #FFFFFF;
  font-size: 28px;
  font-family: poppinsRegular;
  padding-top: 20px;

  @media (max-width: 950px) {
    text-align: left;
    padding-top: 0;
    margin-left: .6rem;
    font-size: .4rem;
    flex: 1;
  }
`

// const IntroBox = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   padding-top: 100px;

//   @media (max-width: 950px) {
//     padding-top: 60px;
//     padding-bottom: 60px;
//     margin-left: -5px;
//   }
// `

const BoxBorder = styled.div`
`

const ContentTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-family: poppinsMedium;
  background: linear-gradient(to right, #5574FF, #AF0BD9);
  -webkit-background-clip: text;
  color: transparent;

  /* background: green; */
  /* color: #FFFFFF; */
  text-align: left;
  max-width: 273px;
  min-height: 116px;

  @media (max-width: 750px) {
    font-size: .48rem;
    line-height: .72rem;
    min-height: 2rem;
  }
`

const ContentTitleForRU = styled(ContentTitle)`
  /* font-size: 40px;
  font-weight: 600;
  font-family: poppinsMedium;
  background: linear-gradient(to right, #5574FF, #AF0BD9);
  -webkit-background-clip: text;
  color: transparent; */
  max-width: initial;
  text-align: center;

  @media (max-width: 750px) {
    text-align: left;
  }
`

const WhatIsDuet = styled.div`
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  font-family: poppinsRegular;
  /* background: green; */
  max-width: 640px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 20px;

  @media (max-width: 750px) {
    margin-left: 0;
    font-size: .3rem;
    line-height: .48rem;
    width: auto;
  }
`

const BoxTitle = styled.div`
  text-align: left;
  width: 500px;
  height: 45px;
  font-size: 32px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #FFFFFF;
  /* line-height: 48px; */

  @media (max-width: 750px) {
    width: auto;
    height: auto;
    font-size: .4rem;
    line-height: .6rem;
  }
`

const BoxContent = styled.div`
  margin-top: 16px;
  width: 500px;
  //height: 48px;
  font-size: 16px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #FFFFFF;
  opacity: 0.4;
  text-align: left;
  @media (max-width: 750px) {
    margin-top: .2rem;
    width: auto;
    height: auto;
    font-size: .32rem;
    line-height: .48rem;
  }
`

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 27px;

  @media (max-width: 750px) {
    display: block;
    white-space: nowrap;
    overflow: auto;
  }
`

const NewsItem = styled.div`

  img  {
    width: 300px;
    height: 180px;
  }
  @media (max-width: 750px) {
    display: inline-block;
    width: 4rem;

    img  {
      width: 4rem;
      height: 2.4rem;
    }

    & + & {
      margin-left: .8rem;
    }
  }
`

const News = styled.div`
  /* background: green; */
  text-align: left;
  width: 300px;
  height: 72px;
  font-size: 16px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #FFFFFF;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    margin-top: .36rem;
    margin-bottom: .29rem;
    width: auto;
    height: auto;
    font-size: .28rem;
    line-height: .42rem;
    white-space: initial;
  }
`

const NewsDate = styled.div`
  /* background: green; */
  text-align: left;
  opacity: 0.59;
  width: 300px;
  height: 17px;
  font-size: 12px;
  font-family: poppinsRegular;
  font-weight: 400;
  color: #FFFFFF;

  @media (max-width: 750px) {
    font-size: .22rem;
    line-height: .33rem;
  }
`

const KeyFeatureTitle = styled(ContentTitle)`
  min-height: 0;
`

const KeyFeature = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const PcOnly = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`

const KFimage = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`

const TxtCircle = styled.div`
  display: flex;
  margin-top: 20px;
`

const KFTxtBorder = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`

const KFContent = styled.div<{ align?: string, width?: number }>`
  color: #FFFFFF;
  font-size: 18px;
  font-family: poppinsRegular;
  font-weight: bold;
  text-align: ${({align}) => (align ? align : 'right')};
  width: ${({width}) => (width ? width + 'px' : '335px')};
  /* text-align: right;
  width: 335px; */

  @media (max-width: 950px) {
    margin-top: .8rem;
    text-align: left;
    width: auto;
    font-size: .4rem;
    line-height: .6rem;
  }
`

const KFContentSmall = styled.div<{ align?: string, left?: number }>`
  color: #FFFFFF;
  font-size: 14px;
  font-family: poppinsLight;
  opacity: 0.5;
  /* text-align: right; */
  text-align: ${({align}) => (align ? align : 'right')};
  width: 280px;
  margin-left: ${({left}) => (left ? left + 'px' : '55px')};
  /* margin-left: 55px; */

  @media (max-width: 950px) {
    margin-left: 0;
    margin-top: .2rem;
    text-align: left;
    width: auto;
    font-size: .32rem;
    line-height: .48rem;
  }
`

const RoadMap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-flow: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  @media (max-width: 750px) {
    display: block;
  }
`

const RMDiv1 = styled.div`
  padding-left: 20px;
  padding-top: 210px;

  @media (max-width: 950px) {
    padding-left: 0;
    padding-top: 0;
  }
`

const RMDiv2 = styled.div`
  padding-left: 20px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }

  @media (max-width: 750px) {
    padding-top: .8rem ;
  }
`

const RMDiv3 = styled.div`
  padding-left: 20px;
  padding-top: 70px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }
  @media (max-width: 750px) {
    padding-top: .8rem;
  }
`

const RMDiv4 = styled.div`
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }

  @media (max-width: 750px) {
    padding-top: .8rem;
  }
`

const RMDiv5 = styled.div`
  padding-left: 20px;

  @media (max-width: 950px) {
    padding-left: 0px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`

const RMDiv6 = styled.div`
  padding-left: 20px;
  padding-top: 190px;

  @media (max-width: 950px) {
    display: none;
  }

  @media (max-width: 750px) {
    padding-top: .8rem;
  }
`

const ForMobile = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
    padding-top: 50px;
  }

  @media (max-width: 750px) {
    display: block;
    padding-top: .8rem;
  }
`

const Line = styled.div`
  opacity: 0.6;
  background: linear-gradient(to right, black, #9A24E2, #675FF7, black);
  // background: linear-gradient(to right, #AF0BD9, #9A24E2, #675FF7, #5574FF);
  height: 1px;

  @media (max-width: 950px) {
    /* opacity: 0; */
    display: none;
  }
`

const Circle = styled.div`
  opacity: 0.6;
  width: 15px;
  height: 15px;
  background-color: #8C0AB2;
  border-radius: 50%;

  @media (max-width: 950px) {
    display: none;
  }
`

const SmallCircle = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);

  @media (max-width: 950px) {
    display: none;
  }
`

const VerticalLine = styled.div<{ height?: number, color?: string }>`
  opacity: 0.6;
  background: ${({color}) => (color === 'yes' ? 'linear-gradient(#5574FF, #AF0BD9)'
    : 'linear-gradient(#AF0BD9, #5574FF)')};

  height: ${({height}) => (height ? height + 'px' : '200px')};
  width: 1px;
  margin-left: 7px;

  @media (max-width: 950px) {
    display: none;
  }
`

const RoadMapTitle = styled.div`
  font-size: 24px;
  font-family: poppinsRegular;
  /* background: linear-gradient(to right, #5574FF, #AF0BD9); */
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);
  -webkit-background-clip: text;
  color: transparent;
  padding-bottom: 20px;
  text-align: left;

  @media (max-width: 950px) {
    padding-left: 25px;
  }

  @media (max-width: 750px) {
    font-size: .32rem;
    line-height: .4rem;
    padding-left: 0;
    padding-bottom: .2rem;
  }
`

const RoadMapContent = styled.div`
  color: #FFFFFF;
  font-size: 16px;
  font-family: poppinsLight;
  opacity: 0.59;
  text-align: left;
  width: 220px;

  @media (max-width: 950px) {
    width: 260px;
    padding-left: 25px;
  }

  @media (max-width: 950px) {
    max-width: initial;
    padding-left: 0;
    width: auto;
    font-size: .28rem;
    line-height: .42rem;
  }
`

const Submit = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    align-items: center;
  }
`

const SubmitInput = styled.input`
  background-color: #0E1124;
  width: 640px;
  height: 60px;
  outline-style: none;
  font-size: 16px;
  font-family: poppinsRegular;
  font-weight: 400;
  color: #FFFFFF;
  /* line-height: 25px; */
  /* border-radius: 4px; */
  border: 1px solid #FFFFFF;
  text-indent: 20px;

  @media (max-width: 950px) {
    box-sizing: border-box;
    width: auto;
    flex: 1;
    height: .8rem;
    font-size: .26rem;
  }
`

const SubmitButton = styled.button`
  width: 180px;
  height: 64px;
  background-color: #FFFFFF;
  /* margin-left: 20px; */
  /* background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%); */
  /* border-radius: 4px; */
  border: none;
  /* border: 1px solid #FFFFFF; */
  font-size: 18px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #0E1124;

  :hover {
    cursor: pointer;
    /* transform: scale(1.05); */
  }

  @media (max-width: 950px) {
    box-sizing: border-box;
    width: 2rem;
    height: .8rem;
    font-size: .26rem;
  }
`

const Media = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (max-width: 950px) {
    margin-bottom: 0;
  }
`

const MediaIcon = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  opacity: 0.6;

  :hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.2);
  }
`

const Copyright = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  opacity: 0.29;
  font-weight: 400;
  margin-top: 165px;
  margin-bottom: 40px;

  @media (max-width: 950px) {
    margin-top: .4rem;
    padding-bottom: .4rem;
  }
`

const Space = styled.div<{ width?: number, height?: number, mWidth?: number, mHeight?: number }>`
  width: ${({width}) => (width ? width + 'px' : '0px')};
  height: ${({height}) => (height ? height + 'px' : '0px')};

  @media (max-width: 750px) {
    width: ${({mWidth}) => (mWidth ? mWidth + 'rem' : '0px')};
    height: ${({mHeight}) => (mHeight ? mHeight + 'rem' : '0px')};
  }
`

export default function App() {

  const [email, setEmail] = useState('');

  return (
    <Body>
      <Wave/>
      <HeaderView>
        <DuetLogo src={logo} alt="logo"/>
        <DuetLogoMobile src={logoMobile} alt="logo"/>
        <MenuList>
          <Menu>DOC</Menu>

          <WebApp>
            <Menu>WEBAPP</Menu>
            <AppList>
              <ul>
                <AppItem>ETH</AppItem>
                <AppItem>BSC</AppItem>
              </ul>
            </AppList>
          </WebApp>
        </MenuList>
      </HeaderView>

      <Space height={212} mHeight={1.6}/>
      <DuetIntro>
        {/* <Mesh><img width="90%" src={mesh} alt="mesh" /></Mesh> */}
        <Brand><img src={brand} alt="brand"/></Brand>
        {/* <Brand>A Multi-chain Synthetic Asset Protocol</Brand> */}
        <SubTitle>A Parallel Universe Which Turns Flat Assets Into Sharp Assets</SubTitle>
        <WhitePaper onClick={() => submit(email)}>Prelude Mining</WhitePaper>
      </DuetIntro>

      <Space height={460} mHeight={3.06}/>
      <SplitView>
        <ContentTitle>What is Duet Protocol</ContentTitle>
        <WhatIsDuet>Duet protocol (Duet) is a Multi-chain synthetic asset protocol
          that sharpens all assets for use in the blockchain world. A duet in music
          refers to a piece of music where two people play different parts or melodies.
          Similarly, Duet protocol allows traders to replicate the real-world tradable
          assets in a decentralised finance ecosystem. </WhatIsDuet>
      </SplitView>

      <PcOnly>
        <Space height={200} mHeight={1.8}/>
        <div>
          <ContentTitle>How It Works</ContentTitle>
          <KFimage><img src={howIcon} alt="keyfeature"/></KFimage>
        </div>
      </PcOnly>

      <Space height={200} mHeight={1.8}/>
      <ContentTitle>Overview</ContentTitle>
      <FlexLayout justify='space-around'>
        <OverviewItem><img src={icon1} alt=""/><IconTitle>Reliability</IconTitle></OverviewItem>
        <OverviewItem><img src={icon2} alt=""/><IconTitle>Availability</IconTitle></OverviewItem>
        <OverviewItem><img src={icon3} alt=""/><IconTitle>Scalability</IconTitle></OverviewItem>
      </FlexLayout>
      <Space height={80} mHeight={1.6} />
      <FlexLayout>
        <BoxBorder>
          <BoxTitle>Seamless Integration</BoxTitle>
          <BoxContent>from BTC to Tesla, Moutai, and VIX, allocate capital to
            ANY asset with only one crypto wallet</BoxContent>
        </BoxBorder>

        <Space width={140}/>
        <Space mHeight={1}/>
        <BoxBorder>
          <BoxTitle>Hybrid-collateralization Model</BoxTitle>
          <BoxContent>algo based hyper-collateralization model to generate
            on-chain synthetic assets</BoxContent>
        </BoxBorder>
      </FlexLayout>

      <Space height={200} mHeight={1.8}/>
      <KeyFeatureTitle>Key Features</KeyFeatureTitle>
      <KeyFeature>
        <KFTxtBorder>
          <TxtCircle>
            <KFContent>Algo based hyper-collateralization model</KFContent>
            <SmallCircle/>
          </TxtCircle>

          <KFContentSmall>boosting capital utilization while
            enhancing system robustness</KFContentSmall>

          <TxtCircle>
            <KFContent>Any asset class</KFContent>
            <SmallCircle/>
          </TxtCircle>

          <KFContentSmall>can be minted on-chain</KFContentSmall>

          <TxtCircle>
            <KFContent>Collateral earning multiplier</KFContent>
            <SmallCircle/>
          </TxtCircle>

          <KFContentSmall>reduce the opportunity cost of user migration</KFContentSmall>

          <TxtCircle>
            <KFContent>DeFi coupling modules</KFContent>
            <SmallCircle/>
          </TxtCircle>

          <KFContentSmall>empowering various on-chain protocol combinations</KFContentSmall>
        </KFTxtBorder>

        <KFimage><img src={keyfeature} alt="keyfeature"/></KFimage>

        <KFTxtBorder>
          <TxtCircle>
            <SmallCircle/>
            <KFContent align="left" width={280}>Music theme NFT</KFContent>
          </TxtCircle>

          <KFContentSmall align="left" left={50}>offering entertaining
            gamification schemes</KFContentSmall>

          <TxtCircle>
            <SmallCircle/>
            <KFContent align="left" width={280}>Unique token releasing scheme</KFContent>
          </TxtCircle>

          <KFContentSmall align="left" left={50}>to ensure project sustainability</KFContentSmall>

          <TxtCircle>
            <SmallCircle/>
            <KFContent align="left" width={280}>Broader collateral acceptance</KFContent>
          </TxtCircle>

          <KFContentSmall align="left" left={50}>including yield-bearing assets
            (yToken, cToken, LPToken, etc.)</KFContentSmall>

          <TxtCircle>
            <SmallCircle/>
            <KFContent align="left" width={280}>Governed by DAO</KFContent>
          </TxtCircle>

          <KFContentSmall align="left" left={50}>delegate power to the users in a
            transparent & censorship-resistance way</KFContentSmall>
        </KFTxtBorder>
      </KeyFeature>

      <Space height={200} mHeight={1.8}/>
      <ContentTitle>Road Map</ContentTitle>
      <RoadMap>
        <RMDiv1>
          <Circle/><VerticalLine/>
        </RMDiv1>
        <RMDiv1>
          <RoadMapTitle>April 2021</RoadMapTitle>
          <RoadMapContent>Prelude-mining launch and get the code audited</RoadMapContent>
        </RMDiv1>

        <ForMobile>
          <RoadMapTitle>Q2 2021</RoadMapTitle>
          <RoadMapContent>Launch Ethereum and BSC airdrop and asset
            minting module</RoadMapContent>
        </ForMobile>

        <RMDiv2>
          <Circle/><VerticalLine height={410}/>
        </RMDiv2>
        <RMDiv2>
          <RoadMapTitle>Q3 2021</RoadMapTitle>
          <RoadMapContent>Launch on NEO. Expanding synthetic asset list to 50+,
            launch reverse assets, VIX tracker, inflation hedger, etc. </RoadMapContent>
        </RMDiv2>

        <ForMobile>
          <RoadMapTitle>Q4 2021</RoadMapTitle>
          <RoadMapContent>Launch DUET’s own swap and lending modules;
            dock dAssets with major global lending and trading protocol;
            expand the issuance to more permissionless chains.</RoadMapContent>
        </ForMobile>

        <RMDiv3>
          <Circle/><VerticalLine height={340}/>
        </RMDiv3>
        <RMDiv3>
          <RoadMapTitle>Q1 2022</RoadMapTitle>
          <RoadMapContent>Atomic cross-chain transactions of dAssets based
            on ZK solution;community-based asset management platform based
            on d asset development</RoadMapContent>
        </RMDiv3>

        <ForMobile>
          <RoadMapTitle>Q2 2022</RoadMapTitle>
          <RoadMapContent>Covering more than 500 core assets achieving
            the goal of ‘global coverage in-one-wallet’</RoadMapContent>
        </ForMobile>

        <RMDiv4>
          <Circle/><VerticalLine height={400}/>
        </RMDiv4>
        <RMDiv4>
          <RoadMapTitle>Q3 2022</RoadMapTitle>
          <RoadMapContent>First "Chord Chapter"-accept off-chain assets as
            collateral. Migrate data server from traditional IDC to IPFS
            network to realize fully decentralization.</RoadMapContent>
        </RMDiv4>
      </RoadMap>

      <Line></Line>

      <RoadMap>
        <RMDiv5>
          <VerticalLine color="yes"/><Circle/>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q2 2021</RoadMapTitle>
          <RoadMapContent>Launch Ethereum and BSC airdrop and asset
            minting module</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine color="yes"/><Circle/>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q4 2021</RoadMapTitle>
          <RoadMapContent>Launch DUET’s own swap and lending modules;
            dock dAssets with major global lending and trading protocol;
            expand the issuance to more permissionless chains.</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine color="yes"/><Circle/>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q2 2022</RoadMapTitle>
          <RoadMapContent>Covering more than 500 core assets achieving
            the goal of ‘global coverage in-one-wallet’</RoadMapContent>
        </RMDiv6>
      </RoadMap>
      <Space height={200} mHeight={1.8}/>
      <ContentTitle>Partner</ContentTitle>

      <PcPartners>
        <img width="320px" height="166px" src={omni} alt=""/>
        <img width="320px" height="166px" src={bitcoin} alt=""/>
        <img width="320px" height="166px" src={dao} alt=""/>
        <img width="320px" height="166px" src={matrix} alt=""/>
        <img width="320px" height="166px" src={ibm} alt=""/>
        <img width="320px" height="166px" src={binance} alt=""/>
        <img width="320px" height="166px" src={microsoft} alt=""/>
        <img width="320px" height="166px" src={ifinance} alt=""/>
      </PcPartners>

      <MobilePartners>
        <img src={omni} alt=""/>
        <img src={bitcoin} alt=""/>
        <img src={dao} alt=""/>
        <img src={matrix} alt=""/>
        <img src={ibm} alt=""/>
        <img src={binance} alt=""/>
        <img src={microsoft} alt=""/>
        <img src={ifinance} alt=""/>
      </MobilePartners>

      <Space height={160} mHeight={1.8}/>
      <ContentTitle>News</ContentTitle>

      <NewsContainer>
        <NewsItem>
          <img src={news1} alt=""/>
          <News>Duet protocol is a synthetic asset protocol that
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </NewsItem>
        <NewsItem>
          <img src={news2} alt=""/>
          <News>Duet protocol is a synthetic asset protocol that
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </NewsItem>
        <NewsItem>
          <img src={news3} alt=""/>
          <News>Duet protocol is a synthetic asset protocol that
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </NewsItem>
        <NewsItem>
          <img src={news4} alt=""/>
          <News>Duet protocol is a synthetic asset protocol that
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </NewsItem>
      </NewsContainer>

      <Space height={200} mHeight={1.8}/>
      <ContentTitleForRU>Receive updates</ContentTitleForRU>

      <Submit>
        <SubmitInput onChange={event => setEmail(event.target.value)}
                     placeholder="Enter Your Email" type="text"/>
        <SubmitButton onClick={() => submit(email)}>Submit</SubmitButton>
      </Submit>

      <Space height={200} mHeight={1.8}/>
      <FlexLayout justify="space-between">
        <Media>
          <MediaIcon><img width="32" src={fb} alt="fb" onClick={goFacebook}/></MediaIcon>
          <MediaIcon><img width="32" src={twitter} alt="twitter" onClick={goTwitter}/></MediaIcon>
          <MediaIcon><img width="32" src={medium} alt="medium" onClick={goMedium}/></MediaIcon>
          <MediaIcon><img width="32" src={telegram} alt="telegram"
                          onClick={goTelegram}/></MediaIcon>
          <MediaIcon><img width="32" src={weibo} alt="weibo" onClick={goWeibo}/></MediaIcon>
        </Media>

        <Copyright>@2021 Copyrights by Duet All Rights Reserved.</Copyright>
      </FlexLayout>
    </Body>
  );
}

function submit(email: string) {
  console.log('email = ' + email);
  if (checkEmail(email)) {
    // Save email.
    console.log('Save email -> ' + email);
    saveEmail(email);
  }
}

function goFacebook() {
  window.open('https://www.facebook.com/duetprotocol');
}

function goTwitter() {
  window.open('https://twitter.com/duetprotocol');
}

function goMedium() {
  window.open('https://duetprotocol.medium.com');
}

function goTelegram() {
  window.open('https://t.me/duetprotocol');
}

function goWeibo() {
  window.open('https://weibo.com/u/7582624963');
}

function checkEmail(email: string) {

  var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

  // Call the regular verification test() function
  const isok = reg.test(email);

  if (!isok) {
    alert("Please enter a valid email.");
    // document.getElementById("emailname").focus();
    return false;
  } else {
    return true;
  }
}

//----------------------------------------------------------------
// TEMP SOLUTION
let baseUrl = 'https://api.nftbazaar.org'

async function saveEmail(email: string) {
  let batch = {email: email}
  let response: Response
  let url = baseUrl + '/dSubscribe'
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {'content-type': 'application/json', accept: 'application/json'},
      body: JSON.stringify(batch)
    })

    console.log('RETURN = ' + JSON.stringify(response))
    alert('Thank You!')
    return response
  } catch (error) {
    console.error(error)
    return
  }
}

//----------------------------------------------------------------
