import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

// import Paper from '@material-ui/core/Paper'
import cardImagesStyles from "assets/jss/nextjs-material-dashboard/cardImagesStyles.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(cardImagesStyles);

export default function ProductSection() {
  const classes = useStyles();
  const cardClasses = useStyles2();
  return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>This is SEU..</h2>
            <h5 className={classes.description} style={{textAlign: 'justify'}}>
              Southeast University, located in Nanjing, the ancient capital of six dynasties, is a renowned institution of
              higher learning at home and abroad. Southeast University (SEU) is a national key university directly under
              the administration of the Ministry of Education and co-established with Jiangsu Province. It is one of the key
              universities in the national "Project 985" and "Project 211". Southeast University is a comprehensive and
              research-oriented university with engineering as its main feature, covering philosophy, economics, law, education,
              literature, science, engineering, medicine, management, art and other disciplines.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <img
                  className={cardClasses.cardImg}
                  src="/img/nj12.jpg"
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description} style={{textAlign: 'justify'}}>
              Southeast University has four campuses and one branch school, with beautiful campus environment, a wide area
              of land, good learning atmosphere and strong faculty. According to statistics, more than 200 academicians of
              the Chinese Academy of Sciences and Chinese Academy of Sciences have worked or studied in Southeast University.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <img
                  className={cardClasses.cardImg}
                  src="/img/nj13.jpg"
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <img
                  className={cardClasses.cardImg}
                  src="/img/nj14.jpg"
              />
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description} style={{textAlign: 'justify'}}>
              Over the years, Southeast University has achieved great achievements in teaching and research, both in
              theoretical research and in the combination of production, learning and research. In recent years, the
              university has also participated in major national projects such as the " Chinese Lunar Exploration Program",
              the " Three Gorges Hydroelectric Power Station", the Hong Kong-Zhuhai-Macao Bridge, high-speed rail technology,
              scientific expeditions to the South Pole, island-building in the South China Sea and wireless charging. It has made
              great contributions to many projects in the country's major development strategies. In addition, Southeast University
              also has close cooperation and exchange relations with many world-class universities and high-level research institutions,
              such as Massachusetts Institute of Technology and University of California, Berkeley, and has built multiple
              international exchange platforms for students.
            </h5>
          </GridItem>
        </GridContainer>
        {/*<div>*/}
        {/*  <GridContainer>*/}
        {/*    <GridItem xs={12} sm={12} md={4}>*/}
        {/*      <InfoArea*/}
        {/*        title="Free Chat"*/}
        {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
        {/*        icon={Chat}*/}
        {/*        iconColor="info"*/}
        {/*        vertical*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={4}>*/}
        {/*      <InfoArea*/}
        {/*        title="Verified Users"*/}
        {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
        {/*        icon={VerifiedUser}*/}
        {/*        iconColor="success"*/}
        {/*        vertical*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={4}>*/}
        {/*      <InfoArea*/}
        {/*        title="Fingerprint"*/}
        {/*        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."*/}
        {/*        icon={Fingerprint}*/}
        {/*        iconColor="danger"*/}
        {/*        vertical*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*  </GridContainer>*/}
        {/*</div>*/}
      </div>
  );
}
