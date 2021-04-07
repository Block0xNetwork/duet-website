import styled from 'styled-components'
import logo from './assets/svg/logo.svg';
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


const Body = styled.div`
  align-items: center;
  text-align: center;
  background-color: #0D011F;
`

const DuetLogo = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`

const DuetIntro = styled.div`
  position: relative;
  height: 370px;
`

const Mesh = styled.div`
  position: absolute;
  z-index: 1;
`

const Brand = styled.div`
  color: #FFFFFF;
  font-size: 50px;
  font-family: samsung;
  position: absolute;
  padding-top: 12.5%;
  z-index: 2;
  width: 100%;
`

const SubTitle = styled.div`
  color: #FFFFFF;
  opacity: 0.59;
  font-size: 20px;
  font-family: poppinsLight;
  position: absolute;
  padding-top: 17.6%;
  width: 100%;
  z-index: 2;
`

const IconList = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  /* padding-left: 250px; */
`

const Icon2 = styled.div`
  padding-left: 210px;
  padding-right: 210px;
`

const IconTitle = styled.div`
  color: #FFFFFF;
  font-size: 28px;
  font-family: poppinsRegular;
  padding-top: 20px;
`

const IntroBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`

const BoxBorder = styled.div`
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: #191b19;
  width: 450px;
  height: 210px;
  padding-left: 20px;
`

const BoxContentTitle = styled.div`
  font-size: 24px;
  font-family: poppinsMedium;
  background: linear-gradient(to right, #5574FF, #AF0BD9);
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
  padding-top: 15%;
`

const CTBigText = styled.div`
  position: absolute;
  opacity: 0.06;
  color: #5771FE;
  font-size: 100px;
  font-family: samsung;
  z-index: 1;
  width: 100%;
`

const CTSmallText = styled.div`
  color: #FFFFFF;
  font-size: 50px;
  font-family: samsung;
  position: absolute;
  padding-top: 2.8%;
  z-index: 2;
  width: 100%;
`

const KeyFeature = styled.div`
  display: flex;
  justify-content: center;
`

const KFimage = styled.div`
`

const TxtCircle = styled.div`
  display: flex;
`

const KFTxtBorder = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`

const KFContent = styled.div`
  color: #FFFFFF;
  font-size: 16px;
  font-family: poppinsLight;
  opacity: 0.59;
  text-align: right;
  width: 280px;
`

const KFContent2 = styled.div`
  color: #FFFFFF;
  font-size: 16px;
  font-family: poppinsLight;
  opacity: 0.59;
  text-align: left;
  width: 280px;
`

const RoadMap = styled.div`
  display: flex;
  justify-content: center;
`

const RMDiv1 = styled.div`
  padding-left: 20px;
  padding-top: 210px;
`

const RMDiv2 = styled.div`
  padding-left: 20px;
`

const RMDiv3 = styled.div`
  padding-left: 20px;
  padding-top: 70px;
`

const RMDiv4 = styled.div`
  padding-left: 20px;
  padding-top: 10px;
`

const RMDiv5 = styled.div`
  padding-left: 20px;
`

const RMDiv6 = styled.div`
  padding-left: 20px;
  padding-top: 190px;
`

const Line = styled.div`
  opacity: 0.6;
  background: linear-gradient(to right, black, #9A24E2, #675FF7, black);
  // background: linear-gradient(to right, #AF0BD9, #9A24E2, #675FF7, #5574FF);
  height: 1px;
`

const Circle = styled.div`
  opacity: 0.6;
  width: 15px;
  height: 15px;
  background-color: #8C0AB2;
  border-radius: 50%;
`

const SmallCircle = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);
`

const VerticalLine = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 200px;
  width: 1px;
  margin-left: 7px;
`

const VL410 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 410px;
  width: 1px;
  margin-left: 7px;
`

const VL340 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 340px;
  width: 1px;
  margin-left: 7px;
`

const VL400 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#AF0BD9, #5574FF);
  height: 400px;
  width: 1px;
  margin-left: 7px;
`

const VerticalLine2 = styled.div`
  opacity: 0.6;
  background: linear-gradient(#5574FF, #AF0BD9);
  height: 200px;
  width: 1px;
  margin-left: 7px;
`

const RoadMapTitle = styled.div`
  font-size: 24px;
  font-family: poppinsRegular;
  /* background: linear-gradient(to right, #5574FF, #AF0BD9); */
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);
  -webkit-background-clip: text;
  color: transparent;
  padding-bottom: 30px;
  text-align: left;
`

const RoadMapContent = styled.div`
  color: #FFFFFF;
  font-size: 16px;
  font-family: poppinsLight;
  opacity: 0.59;
  text-align: left;
  width: 220px;
`

const Submit = styled.div`
  display: flex;
  justify-content: center;
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
`

const SubmitButton = styled.button`
  width: 120px;
  // height: 60px;
  margin-left: 20px;
  // background: linear-gradient(to right, #5574FFFF, #AF0BD9FF);
  background: linear-gradient(270deg, #AF0BD9 0%, #5574FF 100%);
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 18px;
  font-family: poppinsMedium;
`

const Media = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const MediaIcon = styled.div`
  margin-right: 20px;
`

const Copyright = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  opacity: 0.29;
  margin-top: 20px;
  padding-bottom: 20px;
`

const DivWidth = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`


function App() {
  return (
    <Body>
      <DuetLogo><img src={logo} alt="logo" /></DuetLogo>

      <DuetIntro>
        <Mesh><img width="100%" src={mesh} alt="mesh" /></Mesh>
        <Brand>A Multi-chain Synthetic Asset Protocol</Brand>
        <SubTitle>Duet enables on/off-ramp between traditional real assets 
        and high-growth crypto assets</SubTitle>
      </DuetIntro>

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
            <KFContent>Multichain deployment, including  BSC, Ethereum, NEO3.</KFContent>
            <SmallCircle />
          </TxtCircle>

          <TxtCircle>
            <KFContent>Onboard traditional assets in censorship-resistance 
              and trustless manner.</KFContent>
            <SmallCircle />
          </TxtCircle>

          <TxtCircle>
            <KFContent>Create financial derivatives without friction, 
              like mimic VIX index with no roll-over cost of futures.</KFContent>
            <SmallCircle />
          </TxtCircle>
        </KFTxtBorder>

        <KFimage><img src={keyfeature} alt="keyfeature" /></KFimage>

        <KFTxtBorder>
          <TxtCircle>
            <SmallCircle />
            <KFContent2>Broader collateral acceptance including yield-bearing 
              assets (yToken, cToken, LPToken etc.)</KFContent2>
          </TxtCircle>

          <TxtCircle>
            <SmallCircle />
            <KFContent2>User‘s collateral will be sent to the corresponding 
              governance/yield staking contract to earn interest.</KFContent2>
          </TxtCircle>

          <TxtCircle>
            <SmallCircle />
            <KFContent2>Algo based hyper-collateralization model to generate 
              on-chain synthetic assets for any asset class, boost capital 
              utilization while enhancing system robustness.</KFContent2>
          </TxtCircle>
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
          <RoadMapContent>Prelude-mining launch and get the code audited</RoadMapContent>
        </RMDiv1>

        <RMDiv2>
          <Circle></Circle>
          <VL410></VL410>
        </RMDiv2>
        <RMDiv2>
          <RoadMapTitle>Q3 2021</RoadMapTitle>
          <RoadMapContent>Launch on NEO. Expanding synthetic asset list to 50+, 
            launch reverse assets, VIX tracker, inflation hedger, etc. </RoadMapContent>
        </RMDiv2>

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

      <CenterTitle>
        <CTBigText>Receive updates</CTBigText>
        <CTSmallText>Receive updates</CTSmallText>
      </CenterTitle>

      <Submit>
        <SubmitInput placeholder="Enter Your Email" />
        <SubmitButton>Submit</SubmitButton>
      </Submit>

      <Media>
        <MediaIcon><img src={fb} alt="fb" /></MediaIcon>
        <MediaIcon><img src={twitter} alt="twitter" /></MediaIcon>
        <MediaIcon><img src={medium} alt="medium" /></MediaIcon>
        <MediaIcon><img src={telegram} alt="telegram" /></MediaIcon>
        <MediaIcon><img src={weibo} alt="weibo" /></MediaIcon>
      </Media>

      <Copyright>@ 2021 Copyrights by Duet All Rights Reserved.</Copyright>
    </Body>
  );
}

export default App;
