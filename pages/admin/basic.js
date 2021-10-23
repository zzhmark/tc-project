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

import cardImagesStyles from "assets/jss/nextjs-material-dashboard/cardImagesStyles.js";


import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";


const useStyles2 = makeStyles(cardImagesStyles);


function InfoPage() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const cardClasses = useStyles2();
    return (
        <div>
            <Container maxWidth="md" style={{
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            }}>
                <h2 style={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                }}>What is Covid-19 Delta?</h2>
                <p>
                    Delta variant was first discovered in India in October 2020 and identified as an mRNA virus. At present, the virus has spread to 74 countries, which has the characteristics of high infectivity, fast transmission speed and making infected people more vulnerable to serious diseases.
                </p>
                <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={8}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/basic1.jpg"
                        />
                    </Card>
                </GridItem>
                </GridContainer>
                <Quote text={
                    <small>
                        <h3>How Variants Are Classified</h3>
                        <p>
                            The US Department of Health and Human Services (HHS) established a SARS-CoV-2 Interagency Group (SIG) to improve coordination among the Centers for Disease Control and Prevention (CDC), National Institutes of Health (NIH), Food and Drug Administration (FDA), Biomedical Advanced Research and Development Authority (BARDA), and Department of Defense (DoD). This interagency group is focused on the rapid characterization of emerging variants and actively monitors their potential impact on critical SARS-CoV-2 countermeasures, including vaccines, therapeutics, and diagnostics.
                        </p>
                        <p>
                            The SIG meets regularly to evaluate the risk posed by SARS-CoV-2 variants transmitting in the United States and to make recommendations about the classification of variants. This evaluation is undertaken by a group of subject matter experts who assess available data, including variant proportions at the national and regional levels and the potential or known impact of the constellation of mutations on the effectiveness of medical countermeasures, severity of disease, and ability to spread from person to person. Given the continuous evolution of SARS-CoV-2 and our understanding of the impact of variants on public health, variants may be reclassified based on their attributes and prevalence in the United States.
                        </p>
                    </small>
                }>
                </Quote>
                <h2 style={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                }}>How is Delta different?</h2>
                <p>
                    The Delta variant causes more infections and spreads faster than earlier forms of the virus that causes COVID-19. It might cause more severe illness than previous strains in unvaccinated people.
                </p>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={10} md={8}>
                        <Card>
                            <img
                                className={cardClasses.cardImg}
                                src="/img/basic2.png"
                            />
                        </Card>
                    </GridItem>
                </GridContainer>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>More contagious</h3>
                <p>
                    The Delta variant is highly contagious, more than 2x as contagious as previous variants.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Possibly severer for the unvaccinated</h3>
                <p>
                    In two different studies from Canada and Scotland, patients infected with the Delta variant are more likely to be hospitalized than patients infected with Alpha or original virus that causes COVID-19. Even so, the vast majority of hospitalization and death caused by COVID-19 is unvaccinated people.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>The vaccinated spreads delta sooner than not</h3>
                <p>
                    For prior variants, lower amounts of viral genetic material were found in samples taken from fully
                    vaccinated people who had breakthrough infections than from unvaccinated people with COVID-19. For
                    people infected with the Delta variant, similar amounts of viral genetic material have been found
                    among both unvaccinated and fully vaccinated people. However, like prior variants, the amount of
                    viral genetic material may go down faster in fully vaccinated people when compared to unvaccinated
                    people. This means fully vaccinated people will likely spread the virus for less time than
                    unvaccinated people.
                </p>


            </Container>
        </div>
    );
}

InfoPage.layout = Admin;

export default InfoPage;
