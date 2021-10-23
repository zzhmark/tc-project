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
            fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        }}>
            <h2 style={{
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            }}>General Protective measures against novel coronavirus</h2>
            <h3 style={{
                fontFamily: `fantasy`,
            }}>Vaccines</h3>
            <p>
                The COVID-19 vaccines approved or authorized in the United States are highly effective at preventing severe disease and death, including the Delta variant. But they are not 100% effective, some fully vaccinated people will become infected (called a breakthrough infection) and experience illness. The vaccine provides optimal protection against serious illness and death.
            </p>
            <p>
                Vaccines play a crucial role in limiting the spread of the virus and minimizing severe disease. Although vaccines are highly effective, they are not perfect, and there will be vaccine breakthrough infections. Millions of Americans are vaccinated, and that number is growing. This means that even though the risk of breakthrough infections is low, there will be thousands of fully vaccinated people who become infected and able to infect others, especially with the surging spread of the Delta variant. Low vaccination coverage in many communities is driving the current rapid surge in cases involving the Delta variant, which also increases the chances that even more concerning variants could emerge.
            </p>
            <p>
                Vaccination is the best way to protect yourself, your family, and your community. High vaccination coverage will reduce the spread of the virus and help prevent new variants from emerging. CDC recommends that everyone aged 12 years and older get vaccinated as soon as possible.
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
                            src="/img/basic4.jpg"
                        />
                    </Card>
                </GridItem>
            </GridContainer>
        </Container>
    );
}

PreventionsPage.layout = Admin;

export default PreventionsPage;
