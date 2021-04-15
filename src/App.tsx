import styled from 'styled-components'
import logo from './assets/svg/logo.svg';
import brand from './assets/svg/brand.svg';
import mesh from './assets/images/mesh-png.png';
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
import React, { useState } from 'react';


const BG = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0E1124;
  `

const Body = styled.div`
  text-align: center;
  background-color: #616857;
  width: 1280px;
`

const DuetLogo = styled.div`
  margin-top: 24px;
  text-align: left;

  @media (max-width: 950px) {
    padding-right: 0px;
    padding-bottom: 30px;
    transform: scale(0.85);
  }
`

const DuetIntro = styled.div`
  position: relative;
  height: 570px;

  @media (max-width: 950px) {
    height: 510px;
    overflow: hidden;
    /* background-color: #87da3a; */
  }
`

const Mesh = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;

  @media (max-width: 950px) {
    transform: scale(3);
    padding-left: 10px;
    padding-top: 80px;
  }
`

const Brand = styled.div`
  /* color: #FFFFFF;
  font-size: 50px;
  font-family: samsung; */
  position: absolute;
  padding-top: 11%;
  z-index: 2;
  width: 100%;

  @media (max-width: 950px) {
    font-size: 25px;
    padding-top: 42%;
    padding-left: 45px;
    width: 80%;
  }
`

const SubTitle = styled.div`
  color: #FFFFFF;
  opacity: 0.59;
  font-size: 32px;
  font-family: tekoLight;
  font-weight: 300;
  position: absolute;
  padding-top: 20%;
  width: 100%;
  z-index: 2;
  /* background: white; */

  @media (max-width: 950px) {
    font-size: 15px;
    padding-top: 61%;
    padding-left: 45px;
    width: 80%;
  }
`

const WPDiv = styled.div`
  /* background: white; */
  position: absolute;
  margin-top: 25%;
  width: 100%;
  z-index: 2;

  @media (max-width: 950px) {
    width: 74%;
    margin-left: 0px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const WhitePaper = styled.button`
  width: 240px;
  height: 60px;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  /* border-radius: 4px; */
  color: white;
  font-size: 18px;
  font-family: poppinsMedium;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  @media (max-width: 950px) {
    width: 74%;
    margin-left: 0px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const FlexLayout = styled.div<{ justify?: any }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  // justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-flow: column;
  }
`

const Icon = styled.div`
  /* background-color: white; */
  /* padding-left: 250px; */
  /* width: 320px;
  height: 166px; */
`

const Icon2 = styled.div`
  @media (max-width: 950px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const IconTitle = styled.div`
  color: #FFFFFF;
  font-size: 28px;
  font-family: poppinsRegular;
  padding-top: 20px;

  @media (max-width: 950px) {
    font-size: 24px;
  }
`

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;

  @media (max-width: 950px) {
    padding-top: 60px;
    padding-bottom: 60px;
    margin-left: -5px;
  }
`

const BoxBorder = styled.div`
  /* border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #191b19;
  width: 450px;
  height: 210px;
  padding-left: 20px; */
  margin-bottom: 200px;

  @media (max-width: 950px) {
    border-width: 0px;
  }
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

  width: 273px;
  height: 116px;
  text-align: left;
`

const ContentTitleForRU = styled.div`
  font-size: 40px;
  font-weight: 600;
  font-family: poppinsMedium;
  background: linear-gradient(to right, #5574FF, #AF0BD9);
  -webkit-background-clip: text;
  color: transparent;

  /* background: green; */
  /* color: #FFFFFF; */
  width: 1280px;
  height: 116px;
  text-align: center;
`

const WhatIsDuet = styled.div`
  font-size: 24px;
  font-weight: 400;
  font-family: poppinsRegular;
  /* background: green; */
  width: 640px;
  height: 336px;
  text-align: left;
  color: #FFFFFF;
  margin-left: 367px;
  margin-bottom: 200px;
`

const BoxTitle = styled.div`
  /* background: green; */
  text-align: left;
  width: 500px;
  height: 45px;
  font-size: 32px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #FFFFFF;
  /* line-height: 48px; */
`

const BoxContent = styled.div`
  width: 500px;
  height: 48px;
  font-size: 16px;
  font-family: poppinsMedium;
  font-weight: 500;
  color: #FFFFFF;
  opacity: 0.4;
  text-align: left;
  /* background: green; */

  /* padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  text-align: left; */
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
`

const CTBigText = styled.div`
  position: absolute;
  opacity: 0.06;
  color: #5771FE;
  font-size: 100px;
  font-family: samsung;
  z-index: 1;
  width: 100%;
  /* background-color: #243a10; */

  @media (max-width: 950px) {
    font-size: 50px;
  }
`

const CTSmallText = styled.div`
  color: #FFFFFF;
  font-size: 50px;
  font-family: samsung;
  position: absolute;
  z-index: 2;
  width: 100%;

  @media (max-width: 950px) {
    font-size: 30px;
  }
`

const KeyFeature = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 200px;
`

const KFimage = styled.div`
  @media (max-width: 950px) {
    /* transform: scale(0.7); */
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

const KFContent = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-family: poppinsRegular;
  font-weight: bold;
  text-align: right;
  width: 335px;

  @media (max-width: 950px) {
    text-align: left;
    width: 260px;
  }
`

const KFContentSmall = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: poppinsLight;
  opacity: 0.5;
  text-align: right;
  width: 280px;
  margin-left: 55px;

  @media (max-width: 950px) {
    margin-left: 45px;
    margin-top: 5px;
    text-align: left;
    width: 250px;
  }
`

const KFContent2 = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-family: poppinsRegular;
  font-weight: bold;
  text-align: left;
  width: 280px;

  @media (max-width: 950px) {
    text-align: left;
    width: 260px;
  }
`

const KFContentSmall2 = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: poppinsLight;
  opacity: 0.5;
  text-align: left;
  width: 280px;
  margin-left: 50px;

  @media (max-width: 950px) {
    margin-left: 45px;
    margin-top: 5px;
    text-align: left;
    width: 250px;
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
`

const RMDiv1 = styled.div`
  padding-left: 20px;
  padding-top: 210px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 0px;
  }
`

const RMDiv2 = styled.div`
  padding-left: 20px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }
`

const RMDiv3 = styled.div`
  padding-left: 20px;
  padding-top: 70px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }
`

const RMDiv4 = styled.div`
  padding-left: 20px;
  padding-top: 10px;

  @media (max-width: 950px) {
    padding-left: 0px;
    padding-top: 30px;
  }
`

const RMDiv5 = styled.div`
  padding-left: 20px;

  @media (max-width: 950px) {
    padding-left: 0px;
  }
`

const RMDiv6 = styled.div`
  padding-left: 20px;
  padding-top: 190px;

  @media (max-width: 950px) {
    display: none;
  }
`

const ForMobile = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
    padding-top: 50px;
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
    /* opacity: 0; */
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

const ForMobileSmallCircle = styled(SmallCircle)`
  display: none;
  @media (max-width: 950px) {
    display: block;
    margin-left: 15px;
  }
`
const VerticalLine = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 200px;
  width: 1px;
  margin-left: 7px;

  @media (max-width: 950px) {
    /* opacity: 0;
    height: 0px; */
    display: none;
  }
`

const VL410 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 410px;
  width: 1px;
  margin-left: 7px;

  @media (max-width: 950px) {
    /* opacity: 0;
    height: 0px; */
    display: none;
  }
`

const VL340 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 340px;
  width: 1px;
  margin-left: 7px;

  @media (max-width: 950px) {
    /* opacity: 0;
    height: 0px; */
    display: none;
  }
`

const VL400 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 400px;
  width: 1px;
  margin-left: 7px;

  @media (max-width: 950px) {
    display: none;
  }
`

const VerticalLine2 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#5574FF, #AF0BD9);
  height: 200px;
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
`

const Submit = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    flex-flow: column;
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
    width: 70%;
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
    width: 74%;
    margin-left: 0px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const Media = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  margin-bottom: 40px;
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
    padding-bottom: 60px;
  }
`

const Space = styled.div<{ width?: number, height?: number }>`
  width: ${({ width }) => (width ? width + 'px' : '0px')};
  height: ${({ height }) => (height ? height + 'px' : '0px')};
`


function App() {

  const [email, setEmail] = useState('');

  return (
    <BG><Body>
      <DuetLogo><img width="176px" height="32px" src={logo} alt="logo" /></DuetLogo>

      <DuetIntro>
        <Mesh><img width="90%" src={mesh} alt="mesh" /></Mesh>
        <Brand><img width="612px" height="80px" src={brand} alt="brand" /></Brand>
        {/* <Brand>A Multi-chain Synthetic Asset Protocol</Brand> */}
        <SubTitle>A Parallel Universe Which Turns Flat Assets Into Sharp Assets</SubTitle>
        <WPDiv><WhitePaper onClick={() => submit(email)}>White Paper</WhitePaper></WPDiv>
      </DuetIntro>

      <FlexLayout>
        <ContentTitle>What is Duet Protocol</ContentTitle>
        <WhatIsDuet>Duet protocol (Duet) is a Multi-chain synthetic asset protocol 
          that sharpens all assets for use in the blockchain world. A duet in music 
          refers to a piece of music where two people play different parts or melodies. 
          Similarly, Duet protocol allows traders to replicate the real-world tradable 
          assets in a decentralised finance ecosystem. </WhatIsDuet>
      </FlexLayout>

      <FlexLayout>
        <ContentTitle>How It Works</ContentTitle>
        <KFimage><img src={keyfeature} alt="keyfeature" /></KFimage>
      </FlexLayout>
      <Space height={200} />

      <ContentTitle>Overview</ContentTitle>
      <Space height={60} />
      <FlexLayout justify='space-around'>
        <Icon><img src={icon1} alt="icon1" /><IconTitle>Reliability</IconTitle></Icon>
        <Icon2><img src={icon2} alt="icon2" /><IconTitle>Availability</IconTitle></Icon2>
        <Icon><img src={icon3} alt="icon3" /><IconTitle>Scalability</IconTitle></Icon>
      </FlexLayout>
      
      <Space height={80} />
      <FlexLayout>
        <BoxBorder>
          <BoxTitle>Seamless Integration</BoxTitle>
          <BoxContent>from BTC to Tesla, Moutai, and VIX, allocate capital to 
            ANY asset with only one crypto wallet</BoxContent>
        </BoxBorder>
        <Space width={140} />
        <BoxBorder>
          <BoxTitle>Hybrid-collateralization Model</BoxTitle>
          <BoxContent>algo based hyper-collateralization model to generate 
            on-chain synthetic assets</BoxContent>
        </BoxBorder>
      </FlexLayout>

      <ContentTitle>Key Features</ContentTitle>

      <KeyFeature>
        <KFTxtBorder>
          <TxtCircle>
            <ForMobileSmallCircle />
            <KFContent>Algo based hyper-collateralization model</KFContent>
            <SmallCircle />
          </TxtCircle>

          <KFContentSmall>boosting capital utilization while 
            enhancing system robustness</KFContentSmall>

          <TxtCircle>
            <ForMobileSmallCircle />
            <KFContent>Any asset class</KFContent>
            <SmallCircle />
          </TxtCircle>

          <KFContentSmall>can be minted on-chain</KFContentSmall>

          <TxtCircle>
            <ForMobileSmallCircle />
            <KFContent>Collateral earning multiplier</KFContent>
            <SmallCircle />
          </TxtCircle>

          <KFContentSmall>reduce the opportunity cost of user migration</KFContentSmall>

          <TxtCircle>
            <ForMobileSmallCircle />
            <KFContent>DeFi coupling modules</KFContent>
            <SmallCircle />
          </TxtCircle>

          <KFContentSmall>empowering various on-chain protocol combinations</KFContentSmall>
        </KFTxtBorder>

        <KFimage><img src={keyfeature} alt="keyfeature" /></KFimage>

        <KFTxtBorder>
          <TxtCircle>
            <SmallCircle /><ForMobileSmallCircle />
            <KFContent2>Music theme NFT</KFContent2>
          </TxtCircle>

          <KFContentSmall2>offering entertaining gamification schemes</KFContentSmall2>

          <TxtCircle>
            <SmallCircle /><ForMobileSmallCircle />
            <KFContent2>Unique token releasing scheme</KFContent2>
          </TxtCircle>

          <KFContentSmall2>to ensure project sustainability</KFContentSmall2>
          
          <TxtCircle>
            <SmallCircle /><ForMobileSmallCircle />
            <KFContent2>Broader collateral acceptance</KFContent2>
          </TxtCircle>

          <KFContentSmall2>including yield-bearing assets 
            (yToken, cToken, LPToken, etc.)</KFContentSmall2>
          
          <TxtCircle>
            <SmallCircle /><ForMobileSmallCircle />
            <KFContent2>Governed by DAO</KFContent2>
          </TxtCircle>

          <KFContentSmall2>delegate power to the users in a 
            transparent & censorship-resistance way</KFContentSmall2>
        </KFTxtBorder>
      </KeyFeature>

      <ContentTitle>Road Map</ContentTitle>
      <Space height={60} />
      <RoadMap>
        <RMDiv1>
          <Circle></Circle>
          <VerticalLine></VerticalLine>
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
          <Circle></Circle>
          <VL410></VL410>
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
          <Circle></Circle>
          <VL340></VL340>
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
          <Circle></Circle>
          <VL400></VL400>
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
          <VerticalLine2></VerticalLine2>
          <Circle></Circle>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q2 2021</RoadMapTitle>
          <RoadMapContent>Launch Ethereum and BSC airdrop and asset 
            minting module</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine2></VerticalLine2>
          <Circle></Circle>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q4 2021</RoadMapTitle>
          <RoadMapContent>Launch DUET’s own swap and lending modules; 
            dock dAssets with major global lending and trading protocol; 
            expand the issuance to more permissionless chains.</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine2></VerticalLine2>
          <Circle></Circle>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q2 2022</RoadMapTitle>
          <RoadMapContent>Covering more than 500 core assets achieving 
            the goal of ‘global coverage in-one-wallet’</RoadMapContent>
        </RMDiv6>
      </RoadMap>

      <Space height={200} />
      <ContentTitle>Partner</ContentTitle>

      <FlexLayout>
        <img width="320px" height="166px" src={omni} />
        <img width="320px" height="166px" src={bitcoin} />
        <img width="320px" height="166px" src={dao} />
        <img width="320px" height="166px" src={matrix} />
        <img width="320px" height="166px" src={ibm} />
        <img width="320px" height="166px" src={binance} />
        <img width="320px" height="166px" src={microsoft} />
        <img width="320px" height="166px" src={ifinance} />
      </FlexLayout>

      <Space height={160} />
      <ContentTitle>News</ContentTitle>

      <FlexLayout>
        <BoxBorder>
          <img width="300px" height="180px" src={news1} />
          <News>Duet protocol is a synthetic asset protocol that 
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </BoxBorder>
        <Space width={26} />
        <BoxBorder>
          <img width="300px" height="180px" src={news2} />
          <News>Duet protocol is a synthetic asset protocol that 
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </BoxBorder>
        <Space width={26} />
        <BoxBorder>
          <img width="300px" height="180px" src={news3} />
          <News>Duet protocol is a synthetic asset protocol that 
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </BoxBorder>
        <Space width={26} />
        <BoxBorder>
          <img width="300px" height="180px" src={news4} />
          <News>Duet protocol is a synthetic asset protocol that 
            allows traditional assets to migrate to high-growth </News>
          <NewsDate>April 13</NewsDate>
        </BoxBorder>
      </FlexLayout>

      <ContentTitleForRU>Receive updates</ContentTitleForRU>

      <Submit>
        <SubmitInput onChange={event => setEmail(event.target.value)} 
          placeholder="Enter Your Email" type="text" />
        <SubmitButton onClick={() => submit(email)}>Submit</SubmitButton>
      </Submit>

      <FlexLayout justify="space-between">
        <Media>
          <MediaIcon><img width="32" src={fb} alt="fb" onClick={goFacebook} /></MediaIcon>
          <MediaIcon><img width="32" src={twitter} alt="twitter" onClick={goTwitter} /></MediaIcon>
          <MediaIcon><img width="32" src={medium} alt="medium" onClick={goMedium} /></MediaIcon>
          <MediaIcon><img width="32" src={telegram} alt="telegram" onClick={goTelegram} /></MediaIcon>
          <MediaIcon><img width="32" src={weibo} alt="weibo" onClick={goWeibo} /></MediaIcon>
        </Media>

        <Copyright>@2021 Copyrights by Duet All Rights Reserved.</Copyright>
      </FlexLayout>
    </Body></BG>
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

  if(!isok) {
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
  let batch = { email: email }
  let response: Response
  let url = baseUrl + '/dSubscribe'
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
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


export default App;
