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
          <h2 className={classes.title}>This is Nanjing..</h2>
          <h5 className={classes.description} style={{textAlign: 'justify'}}>
            Nanjing is the capital city of Jiangsu Province, nicknamed "Jinling", "Jiankang".
            As the " The six dynasties ancient capital " and "the capital of ten Dynasties", it is rich in historical deposits,
            with numerous historical sites and the birth of many historical celebrities, such as Cao Xueqin, the author of “The Story of the Stone”.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj1.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description} style={{textAlign: 'justify'}}>
            Nanjing is located at the intersection of China's coastal open zone and the Development zone of the Yangtze
            River Basin. It is an important regional central city in the economic core area of the Yangtze River Delta,
            an important comprehensive transportation and communication hub of the country, and one of the first Batch of
            Chinese historical and cultural cities and national key scenic tourist cities determined by The State Council.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj2.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={3}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj3.jpg"
            />
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description} style={{textAlign: 'justify'}}>
            Thanks to its geographical location and cultural accumulation, Nanjing is rich in tourism resources. It has
            many famous scenic spots, such as The Mausoleum of Sun Yat-sen, Confucius Temple, DongHuaMen Historical and
            Cultural Block, Xuanwu Lake, Jiming Temple and so on, which attract a large number of tourists every holiday.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj4.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj5.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj7.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj6.jpg"
            />
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description} style={{textAlign: 'justify'}}>
            Besides beautiful scenery, Nanjing is also famous for its delicious food. Such as salted duck, duck blood
            vermicelli soup, xiao long bao and so on. These delicacies not only enjoy a good reputation in the hearts of
            Nanjing locals, but also become a must-try for many outsiders when they come to Nanjing.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj8.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj9.jpg"
            />
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description} style={{textAlign: 'justify'}}>
            In terms of education, Nanjing has many top universities in China, such as Nanjing University and Southeast
            University, which are rich in educational resources. Therefore, Nanjing can be said to be the political,
            economic, scientific, educational and cultural center of the province.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj10.jpg"
            />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <img
                className={cardClasses.cardImg}
                src="/img/nj11.jpg"
            />
          </Card>
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
