import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Container from '@material-ui/core/Container';
import Quote from "components/Typography/Quote.js";
import { bugs, website, server } from "variables/general.js";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

import Button from 'components/CustomButtons/Button'
import cardImagesStyles from "../../assets/jss/nextjs-material-dashboard/cardImagesStyles";

const useStyles2 = makeStyles(cardImagesStyles);

function PreventionsPage(props) {
    const useStyles = makeStyles(styles);
    const cardClasses = useStyles2();
    const classes = useStyles();
    return (
        <Container maxWidth="md" style={{
            fontFamily: `Georgia, serif`,
        }}>
            <h2 style={{fontFamily: `San Francisco`}}>General Protective Tactics</h2>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Vaccination</h3>
            <p>
                The COVID-19 vaccines approved or authorized in the United States are highly effective at preventing severe disease and death, including the Delta variant. But they are not 100% effective, some fully vaccinated people will become infected (called a breakthrough infection) and experience illness.
            </p>
            <p>
                Vaccination is the best way to protect yourself, your family, and your community. High vaccination coverage will reduce the spread of the virus and help prevent new variants from emerging. CDC recommends that everyone aged 12 years and older get vaccinated as soon as possible.
            </p>

            <h3 style={{
                fontFamily: `fantasy`,
            }}>Face masks</h3>
            <p>
                At this time, Vaccination levels were established nationwide, we must use all the prevention strategies available, including masking indoors in public places, to stop transmission and stop the pandemic. Everyone including fully vaccinated people, should wear masks in public indoor places in areas of substantial or high transmission.
            </p>
            <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={8}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/basic4.png"
                        />
                    </Card>
                </GridItem>
            </GridContainer>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Keep apart</h3>
            <p>
                Inside your home: Avoid close contact with people who are sick. if possible, maintain 6 feet between the person who is sick and other household members.
            </p>
            <p>
                Outside your home: put 6 feet of distance between yourself and people who don’t live in your household. remember that some people without symptoms may be able to spread virus. keeping distance from others is especially important for people who are at higher risk of getting very sick.
            </p>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Avoid crowds and poorly ventilated spaces</h3>
            <p>
                Being in crowds like in restaurants, bars, fitness centers, or movie theaters puts you at higher risk for COVID-19. Avoid indoor spaces that do not offer fresh air from the outdoors as much as possible. If indoors, bring in fresh air by opening windows and doors, if possible.
            </p>
            <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={8}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/basic6.png"
                        />
                    </Card>
                </GridItem>
            </GridContainer>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Wash hands often</h3>
            <p>
                Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing. If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry. Avoid touching your eyes, nose, and mouth with unwashed hands.
            </p>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Monitor your health daily</h3>
            <p>
                Be alert for symptoms. Watch for fever, cough, shortness of breath, or other symptoms of COVID-19. Especially important if you are running essential errands, going into the office or workplace, and in settings where it may be difficult to keep a physical distance of 6 feet. Take your temperature if symptoms develop. Don’t take your temperature within 30 minutes of exercising or after taking medications that could lower your temperature, like acetaminophen. Follow CDC guidance if symptoms develop.
            </p>
            <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={8}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/basic3.png"
                        />
                    </Card>
                </GridItem>
            </GridContainer>
        </Container>
    );
}

PreventionsPage.layout = Admin;

export default PreventionsPage;
