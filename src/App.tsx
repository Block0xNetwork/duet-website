import styled from 'styled-components'
import logo from './assets/svg/logo.svg';
import logoMobile from './assets/svg/logo-mobile.svg';
import brand from './assets/svg/brand.svg';
import mesh from './assets/images/mesh-png.png';
// import mesh from './assets/svg/mesh.svg';
import icon1 from './assets/svg/icon-1.svg';
import icon2 from './assets/svg/icon-2.svg';
import icon3 from './assets/svg/icon-3.svg';
import keyfeature from './assets/images/keyfeature.png';
import fb from './assets/images/fb.png';
import twitter from './assets/images/twitter.png';
import medium from './assets/images/medium.png';
import telegram from './assets/images/telegram.png';
import weibo from './assets/images/weibo.png';
import React, { useState } from 'react';
import Wave from './Wave/Wave';

// const Body = styled.div`
//   align-items: center;
//   text-align: center;
//   /* background-color: #0D011F; */
//   /* width: 100%; */
// `

const Body = styled.div`
  text-align: center;
  /* background-color: #616857; */
  max-width: 1280px;
  margin: 0 auto;
  font-size: 0;

  @media (max-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 750px) {
    padding-left: .4rem;
    padding-right: .4rem;
  }
`

// const DuetLogo = styled.div`
//   /* padding-top: 40px; */
//   padding-bottom: 120px;
//   padding-right: 40px;
//   /* background-color: #09a750; */
//   @media (max-width: 950px) {
//     padding-right: 0px;
//     padding-bottom: 30px;
//     transform: scale(0.85);
//   }
// `

// const DuetIntro = styled.div`
//   position: relative;
//   height: 570px;

//   @media (max-width: 950px) {
//     height: 510px;
//     overflow: hidden;
//     /* background-color: #87da3a; */
//   }
// `

const DuetIntro = styled.div`
  position: relative;
  font-size: 0;

  @media (max-width: 750px) {
    box-sizing: border-box;
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

// const Brand = styled.div`
//   color: #FFFFFF;
//   font-size: 50px;
//   font-family: samsung;
//   position: absolute;
//   padding-top: 11%;
//   z-index: 2;
//   width: 100%;

//   @media (max-width: 950px) {
//     font-size: 25px;
//     padding-top: 42%;
//     padding-left: 45px;
//     width: 80%;
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

// const SubTitle = styled.div`
//   color: #FFFFFF;
//   opacity: 0.59;
//   font-size: 20px;
//   font-family: poppinsLight;
//   position: absolute;
//   padding-top: 15.3%;
//   width: 100%;
//   z-index: 2;

//   @media (max-width: 950px) {
//     font-size: 15px;
//     padding-top: 61%;
//     padding-left: 45px;
//     width: 80%;
//   }
// `

const IconList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    flex-flow: column;
  }
`

const Icon = styled.div`
  /* padding-left: 250px; */
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
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #191b19;
  width: 450px;
  height: 210px;
  padding-left: 20px;

  @media (max-width: 950px) {
    border-width: 0px;
  }
`

const BoxContentTitle = styled.div`
  font-size: 24px;
  font-family: poppinsMedium;
  background: linear-gradient(to right, #5574FF, #AF0BD9);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: left;
`

const BoxContent = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-family: poppinsLight;
  opacity: 0.59;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  text-align: left;
`

const CenterTitle = styled.div`
  position: relative;
  height: 250px;
  line-height: 126px;
  margin-top: 15%;

  @media (max-width: 950px) {
    margin-top: 70px;
    margin-bottom: 170px;
    height: 0px;
    line-height: 30px;
    /* background-color: #87da3a; */
  }
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
  background-clip: text;
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
  background-color: #130B1F;
  width: 440px;
  height: 50px;
  outline-style: none;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  text-indent: 20px;

  @media (max-width: 950px) {
    width: 70%;
  }
`

const SubmitButton = styled.button`
  width: 120px;
  margin-left: 20px;
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 18px;
  font-family: poppinsMedium;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
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
  margin-top: 100px;
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
  margin-top: 20px;
  padding-bottom: 40px;

  @media (max-width: 950px) {
    padding-bottom: 60px;
  }
`

const DivWidth = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`

const DivMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  /* background-color: #bd1c44; */
`

const MenuList = styled.nav`
  margin-left: auto;
  /* background-color: #bd1c44; */
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
  padding-left: 10px;
  padding-right: 10px;
  /* background-color: #0bbe74; */
`

// const Menu = styled.div`
//   /* display: inline-block; */
//   line-height: 35px;
//   font-size: 14px;
//   font-family: poppinsMedium;
//   font-weight: 600;
//   color: #FFFFFF;
//   cursor: pointer;
//   margin-top: 20px;
//   margin-right: 60px;
//   padding-left: 10px;
//   padding-right: 10px;
//   /* background-color: #5840c2; */
// `

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

const Space = styled.div<{ width?: number, height?: number, mWidth?: number, mHeight?: number }>`
  width: ${({ width }) => (width ? width + 'px' : '0px')};
  height: ${({ height }) => (height ? height + 'px' : '0px')};

  @media (max-width: 750px) {
    width: ${({ mWidth }) => (mWidth ? mWidth + 'rem' : '0px')};
    height: ${({ mHeight }) => (mHeight ? mHeight + 'rem' : '0px')};
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

function App() {

  const [email, setEmail] = useState('');

  return (
    <Body>

      {/* <DivMenu><Menu>White Paper</Menu></DivMenu>
      <DuetLogo><img src={logo} alt="logo" /></DuetLogo>
      <DuetIntro>
        <Mesh><img width="90%" src={mesh} alt="mesh" /></Mesh>
        <Brand>A Multi-chain Synthetic Asset Protocol</Brand>
        <SubTitle>Duet enables on/off-ramp between traditional real assets 
        and high-growth crypto assets</SubTitle>
      </DuetIntro> */}

      <Wave />
      <HeaderView>
        <DuetLogo src={logo} alt="logo" />
        <DuetLogoMobile src={logoMobile} alt="logo" />
        <MenuList>
          <Menu onClick={goMedium}>Blog</Menu>
        </MenuList>
      </HeaderView>

      <Space height={212} mHeight={1.6} />
      <DuetIntro>
        <Brand><img src={brand} alt="brand" /></Brand>
        <SubTitle>A Parallel Universe Which Turns Flat Assets Into Sharp Assets</SubTitle>
        <WhitePaper onClick={openWhitePaper}>White Paper</WhitePaper>
      </DuetIntro>

      <Space height={60} mHeight={0.6} />
      <CenterTitle>
        <CTBigText>Overview</CTBigText>
        <CTSmallText>Overview</CTSmallText>
      </CenterTitle>

      <IconList>
        <Icon><img src={icon1} alt="icon1" /><IconTitle>Reliability</IconTitle></Icon>
        <Icon2><img src={icon2} alt="icon2" /><IconTitle>Availability</IconTitle></Icon2>
        <Icon><img src={icon3} alt="icon3" /><IconTitle>Scalability</IconTitle></Icon>
      </IconList>

      <IntroBox>
        <BoxBorder>
          <BoxContentTitle>Seamless Integration</BoxContentTitle>
          <BoxContent>from BTC to Tesla, Moutai, and VIX, allocate capital to
            ANY asset with only one crypto wallet</BoxContent>
        </BoxBorder>
        <DivWidth />
        <BoxBorder>
          <BoxContentTitle>Hybrid-collateralization Model</BoxContentTitle>
          <BoxContent>algo based hyper-collateralization model to generate
            on-chain synthetic assets</BoxContent>
        </BoxBorder>
      </IntroBox>

      <CenterTitle>
        <CTBigText>Key Features</CTBigText>
        <CTSmallText>Key Features</CTSmallText>
      </CenterTitle>

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

      <CenterTitle>
        <CTBigText>Road Map</CTBigText>
        <CTSmallText>Road Map</CTSmallText>
      </CenterTitle>

      <RoadMap>
        <RMDiv1>
          <Circle></Circle>
          <VerticalLine></VerticalLine>
        </RMDiv1>
        <RMDiv1>
          <RoadMapTitle>April 2021</RoadMapTitle>
          <RoadMapContent>Development and test of Instant DUET/dAsset Minter and cores</RoadMapContent>
        </RMDiv1>

        <ForMobile>
          <RoadMapTitle>May 2021</RoadMapTitle>
          <RoadMapContent>IDO and Ethereum launch</RoadMapContent>
        </ForMobile>

        <RMDiv2>
          <Circle></Circle>
          <VL410></VL410>
        </RMDiv2>
        <RMDiv2>
          <RoadMapTitle>June 2021</RoadMapTitle>
          <RoadMapContent>IDO and BSC(or other EVM blockchain) launch</RoadMapContent>
        </RMDiv2>

        <ForMobile>
          <RoadMapTitle>Q3 2021</RoadMapTitle>
          <RoadMapContent>Launch DUET’s own swap and lending modules;
          dock dAssets with major global lending and trading protocol;
            expand the issuance to more permissionless chains.</RoadMapContent>
        </ForMobile>

        <RMDiv3>
          <Circle></Circle>
          <VL340></VL340>
        </RMDiv3>
        <RMDiv3>
          <RoadMapTitle>Q4 2021</RoadMapTitle>
          <RoadMapContent>Atomic cross-chain transactions of dAssets based
          on ZK solution; community-based asset management platform based
            on dAsset development</RoadMapContent>
        </RMDiv3>

        <ForMobile>
          <RoadMapTitle>Q1 2022</RoadMapTitle>
          <RoadMapContent>Covering more than 500 core assets achieving
            the goal of ‘global coverage in-one-wallet’</RoadMapContent>
        </ForMobile>

        <RMDiv4>
          <Circle></Circle>
          <VL400></VL400>
        </RMDiv4>
        <RMDiv4>
          <RoadMapTitle>Q2 2022</RoadMapTitle>
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
          <RoadMapTitle>May 2021</RoadMapTitle>
          <RoadMapContent>IDO and Ethereum launch</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine2></VerticalLine2>
          <Circle></Circle>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q3 2021</RoadMapTitle>
          <RoadMapContent>Launch DUET’s own swap and lending modules;
          dock dAssets with major global lending and trading protocol;
            expand the issuance to more permissionless chains.</RoadMapContent>
        </RMDiv6>

        <RMDiv5>
          <VerticalLine2></VerticalLine2>
          <Circle></Circle>
        </RMDiv5>
        <RMDiv6>
          <RoadMapTitle>Q1 2022</RoadMapTitle>
          <RoadMapContent>Covering more than 500 core assets achieving
            the goal of ‘global coverage in-one-wallet’</RoadMapContent>
        </RMDiv6>
      </RoadMap>

      <CenterTitle>
        <CTBigText>Receive updates</CTBigText>
        <CTSmallText>Receive updates</CTSmallText>
      </CenterTitle>

      <Submit>
        <SubmitInput onChange={event => setEmail(event.target.value)}
          placeholder="Enter Your Email" type="text" />
        <SubmitButton onClick={() => submit(email)}>Submit</SubmitButton>
      </Submit>

      <Media>
        <MediaIcon><img width="32" src={fb} alt="fb" onClick={goFacebook} /></MediaIcon>
        <MediaIcon><img width="32" src={twitter} alt="twitter" onClick={goTwitter} /></MediaIcon>
        <MediaIcon><img width="32" src={medium} alt="medium" onClick={goMedium} /></MediaIcon>
        <MediaIcon><img width="32" src={telegram} alt="telegram" onClick={goTelegram} /></MediaIcon>
        <MediaIcon><img width="32" src={weibo} alt="weibo" onClick={goWeibo} /></MediaIcon>
      </Media>

      <Copyright>@2021 Copyrights by Duet All Rights Reserved.</Copyright>
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

function openWhitePaper() {
  window.open('https://duet.finance/doc/Duet-Protocol-White-Paper.pdf');
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
