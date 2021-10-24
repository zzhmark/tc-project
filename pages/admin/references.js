import Muted from "../../components/Typography/Muted";

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
            <h2 style={{fontFamily: `Georgia, serif`}}>And More Information Useful..</h2>
            <h3 style={{
                fontFamily: `San Francisco`,
            }}>High-lighted References</h3>
            <ol>
                {[['SARS-CoV-2 variant classifications and definitions. Centers for Disease Control and Prevention.', 'https://www.cdc.gov/coronavirus/2019-ncov/variants/variant-info.html'],
                ['Rahman, F., Ether, S. & Islam, M. (2021). The “Delta Plus” COVID-19 variant has evolved to become the next potential variant of concern: mutation history and measures of prevention. Journal of Basic and Clinical Physiology and Pharmacology.', 'https://doi.org/10.1515/jbcpp-2021-0251'],
                ['SARS-CoV-2 variants of concern and variants under investigation in England: Technical briefing 15. Public Health England.', 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/993879/Variants_of_Concern_VOC_Technical_Briefing_15.pdf'],
                ['China national Center for Bioinformatics, Covid-19 Database', 'https://ngdc.cncb.ac.cn/ncov/online/tool/annotation']].map(value => (
                    <li>
                        <a href={value[1]} target="_blank">
                            {value[0]}
                        </a>
                    </li>
                ))}
            </ol>
            <h3 style={{
                fontFamily: `San Francisco`,
            }}>Useful Links</h3>
            <ol>
                {[['Cleaning and Disinfecting Your Facility Every Day and When Someone is Sick', 'https://www.cdc.gov/coronavirus/2019-ncov/community/disinfecting-building-facility.html'],
                    ['Cleaning and Disinfecting Your Home | CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/disinfecting-your-home.html'],
                    ['Guidance for COVID-19 Prevention in K-12 Schools | CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/k-12-guidance.html'],
                    ['How to Protect Yourself & Others | CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html'],
                    ['Improving Ventilation in Your Home', 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/Improving-Ventilation-Home.html'],
                    ['Your Guide to Masks | CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/about-face-coverings.html'],
                ].map(value => (
                    <li>
                        <a href={value[1]} target="_blank">
                            {value[0]}
                        </a>
                    </li>
                ))}
            </ol>
            <GridContainer justify="center">
            <Muted>
                <p>Stay careful and stick to the basic preventions in your daily life..</p>
            </Muted>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref1.png"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref2.png"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref3.png"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref4.png"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref5.png"
                        />
                    </Card>
                </GridItem>
                <GridItem xs={6} sm={5} md={4}>
                    <Card>
                        <img
                            className={cardClasses.cardImg}
                            src="/img/ref6.png"
                        />
                    </Card>
                </GridItem>
                <Muted>
                    <p>Then good luck will be with you on your journey to our conference!</p>
                </Muted>
            </GridContainer>
        </Container>
    );
}

PreventionsPage.layout = Admin;

export default PreventionsPage;
