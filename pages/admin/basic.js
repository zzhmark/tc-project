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

function InfoPage() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="md" style={{
                fontFamily: `"Roboto Slab", "Times New Roman", serif`,
            }}>
                <h2 style={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                }}>What is Covid-19 Delta?</h2>
                <p>
                    The Delta variant was first identified in India in October 2020.
                    The Delta variant was first identified in India in October 2020 as an mRNA virus.
                    The virus has now spread to 74 countries and is spreading fast. Not only is it highly contagious,
                    but those infected are more likely to develop severe disease.
                </p>
                <Quote text={
                    <small>
                        <h3>How Variants Are Classified</h3>
                        <p>
                            The US Department of Health and Human Services (HHS) established a SARS-CoV-2 Interagency Group (SIG)
                            to improve coordination among the Centers for Disease Control and Prevention (CDC),
                            National Institutes of Health (NIH), Food and Drug Administration (FDA),
                            Biomedical Advanced Research and Development Authority (BARDA), and Department of Defense (DoD).
                            This interagency group is focused on the rapid characterization of emerging variants and actively
                            monitors their potential impact on critical SARS-CoV-2 countermeasures, including vaccines,
                            therapeutics, and diagnostics.
                        </p>
                        <p>The SIG meets regularly to evaluate the risk posed by SARS-CoV-2 variants circulating in the
                            United States and to make recommendations about the classification of variants. This
                            evaluation is undertaken by a group of subject matter experts who assess available data,
                            including variant proportions at the national and regional levels and the potential or known
                            impact of the constellation of mutations on the effectiveness of medical countermeasures,
                            severity of disease, and ability to spread from person to person. Given the continuous
                            evolution of SARS-CoV-2 and our understanding of the impact of variants on public health,
                            variants may be reclassified based on their attributes and prevalence in the United States.
                        </p>
                    </small>
                }>
                </Quote>
                <h2 style={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                }}>How is it different from earlier variants?</h2>
                <p>
                    The Delta variant causes more infections and spreads faster than earlier forms of the virus that
                    causes COVID-19. It might cause more severe illness than previous strains in unvaccinated people.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>The Delta variant is more contagious</h3>
                <p>
                    The Delta variant is highly contagious, more than 2x as contagious as previous variants.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Some data suggest the Delta variant might cause more severe illness than previous variants
                    in unvaccinated people</h3>
                <p>
                    In two different studies from Canada and Scotland, patients infected with the Delta variant were
                    more likely to be hospitalized than patients infected with Alpha or the original virus that causes
                    COVID-19. Even so, the vast majority of hospitalization and death caused by COVID-19 are in
                    unvaccinated people.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Unvaccinated people remain the greatest concern</h3>
                <p>
                    The greatest risk of transmission is among unvaccinated people who are much more likely to get
                    infected, and therefore transmit the virus. Fully vaccinated people get COVID-19
                    (known as breakthrough infections) less often than unvaccinated people. People infected with the
                    Delta variant, including fully vaccinated people with symptomatic breakthrough infections, can
                    transmit the virus to others. CDC is continuing to assess data on whether fully vaccinated people
                    with asymptomatic breakthrough infections can transmit the virus.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Fully vaccinated people with Delta variant breakthrough infections can spread the virus to
                    others. However, vaccinated people appear to spread the virus for a shorter time</h3>
                <p>
                    For prior variants, lower amounts of viral genetic material were found in samples taken from fully
                    vaccinated people who had breakthrough infections than from unvaccinated people with COVID-19. For
                    people infected with the Delta variant, similar amounts of viral genetic material have been found
                    among both unvaccinated and fully vaccinated people. However, like prior variants, the amount of
                    viral genetic material may go down faster in fully vaccinated people when compared to unvaccinated
                    people. This means fully vaccinated people will likely spread the virus for less time than
                    unvaccinated people.
                </p>
                <h2 style={{
                    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
                }}>Protective measures in novel Coronavirus</h2>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Vaccines</h3>
                <p>
                    The COVID-19 vaccines approved or authorized in the United States are highly effective at preventing
                    severe disease and death, including against the Delta variant. But they are not 100% effective,
                    and some fully vaccinated people will become infected (called a breakthrough infection) and
                    experience illness. For all people, the vaccine provides the best protection against serious illness
                    and death.
                </p>
                <p>
                    Vaccines are playing a crucial role in limiting spread of the virus and minimizing severe disease.
                    Although vaccines are highly effective, they are not perfect, and there will be vaccine breakthrough
                    infections. Millions of Americans are vaccinated, and that number is growing. This means that even
                    though the risk of breakthrough infections is low, there will be thousands of fully vaccinated people
                    who become infected and able to infect others, especially with the surging spread of the Delta variant.
                    Low vaccination coverage in many communities is driving the current rapid surge in cases involving
                    the Delta variant, which also increases the chances that even more concerning variants could emerge.
                </p>
                <p>
                    Vaccination is the best way to protect yourself, your family, and your community. High vaccination
                    coverage will reduce spread of the virus and help prevent new variants from emerging. CDC recommends
                    that everyone aged 12 years and older get vaccinated as soon as possible.
                </p>
                <h3 style={{
                    fontFamily: `fantasy`,
                }}>Masks</h3>
                <p>
                    At this time, as we build the level of vaccination nationwide, we must also use all the prevention
                    strategies available, including masking indoors in public places, to stop transmission and stop the
                    pandemic. Everyone who is able, including fully vaccinated people, should wear masks in public indoor
                    places in areas of substantial or high transmission.
                </p>
            </Container>
        </div>
    );
}

InfoPage.layout = Admin;

export default InfoPage;
