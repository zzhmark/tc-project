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
import { useRouter} from 'next/router'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "variables/charts.js";
import Popover from '@material-ui/core/Popover';
import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";
import cardImagesStyles from "../../../assets/jss/nextjs-material-dashboard/cardImagesStyles";
import Button from 'components/CustomButtons/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const useStyles2 = makeStyles(cardImagesStyles);
const useStyles3 = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));
const useStyles = makeStyles(styles);

function HovButton({children}){
    const [on, setOn] = React.useState(false)
    return(
        <Button
            style={{fontFamily: "Cambria"}}
            fullWidth
            color={on? 'primary': 'transparent'}
            onMouseEnter={() => {setOn(true)}}
            onMouseLeave={()=>{setOn(false)}}>
            {children}
        </Button>
    )
}

function PreventionsPage() {
    const classes = useStyles();
    const popClasses = useStyles3();
    const router = useRouter();
    const {place} = router.query;
    const cardClasses = useStyles2();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popContent, setPopContent] = React.useState('');
    const open = Boolean(anchorEl);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    let content;
    switch(place){
        case 'lab':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Laboratory</h1>
                    </GridContainer>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/lab1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>
                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face communication without masks')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Viruses form aerosol deposits that deposit on the surface of objects')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Outer packaging of imported kit, frequent contact with the same object')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/lab2.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>
                        {[
                            'Wear a mask at all times in the laboratory, and wash your hands more frequently.',
                            'Take the stairs instead of the elevator, reduce time spent in confined spaces.',
                            'Keep indoor ultraviolet disinfection twice daily.'
                        ].map(v=>(
                            <li style={{marginBottom: 12}}>
                                <span>
                                    {v}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={4}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/lab4.jpg"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/lab5.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
            break;
        case 'railway':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Railway Station</h1>
                    </GridContainer>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/railway1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>

                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face communication without masks')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Aerosol deposition, central air-conditioning systems can cause aerosols to spread over long distances')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Frequent contact with the same object')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/railway4.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>
                        {[
                            'Wear a mask at all times and wash your hands frequently.',
                            'To check the body temperature and the health code of the persons entering the station, and show the negative nucleic acid test materials if necessary.',
                            'Thoroughly clean and disinfect seats, doorknobs, windows, floors, trash cans and other objects that can easily breed and infect germs.',
                            'The crew must disinfect the toilet after anyone uses it and close the toilet seat before flushing to avoid the inhalation risk of potentially infectious particles.',
                            'Clean the air conditioning ventilation system frequently.',
                            'The station should be sterilized by ultraviolet light daily.',
                            'Keep the air circulating in the station and control the indoor temperature and humidity.'
                        ].map(v=>(
                            <li style={{marginBottom: 12}}>
                                <span>
                                    {v}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/railway2.jpg"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/railway3.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
            break;
        case 'airport':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Airport</h1>
                    </GridContainer>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/airport1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>

                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face communication without masks')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Aerosol deposition, central air-conditioning systems can cause aerosols to spread over long distances')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Frequent contact with the same object')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/airport2.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>
                        {[
                            'Wear a mask at all times and wash your hands frequently.',
                            'To check the body temperature and the health code of the persons entering the airport lounge, and show the negative nucleic acid test materials if necessary.',
                            'Thoroughly clean and disinfect seats, doorknobs, windows, floors, trash cans and other objects that can easily breed and infect germs.',
                            'The crew must disinfect the toilet after anyone uses it and close the toilet seat before flushing to avoid the inhalation risk of potentially infectious particles.',
                            'Clean the air conditioning ventilation system frequently.',
                            'Domestic flights are managed separately from international flights.',
                            'Increase the frequency of nucleic acid testing for aircrew.'
                        ].map(v=>(
                            <li style={{marginBottom: 12}}>
                                <span>
                                    {v}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/airport3.jpg"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/airport4.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
            break;
        case 'hall':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Conference Hall</h1>
                    </GridContainer>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hall1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>

                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face close communication and high crowd density')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Aerosol deposition and aerosol long-distance diffusion')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Use the same seat, table and microphone')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hall3.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>
                        {[
                            'Managers should establish scientific, effective and practical epidemic prevention and health management systems based on the requirements of epidemic control and their own reality-Take the stairs instead of the elevator, reduce time spent in confined Spaces.',
                            'The conference organizer shall take the initiative to understand the health status of the participants and service personnel before the meeting is held. The participants shall be prohibited from attending the meeting if they have cough, fever, chest tightness and other symptoms.',
                            'At the entrance of the venue, managers set up temperature detection equipment and disinfectant hand sanitizer for participants to use',
                            'The seats in the conference hall are more than one meter apart, which can effectively prevent the spread of virus of Covid-19.',
                            'Participants are required to wear masks throughout the meeting Considering that the participants are from all over the world, the possibility of infection among participants cannot be completely ruled out. To this end, managers must make a detailed emergency plan.'
                        ].map(v=>(
                            <li style={{marginBottom: 12}}>
                                <span>
                                    {v}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hall2.jfif"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={6}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hall4.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
            break;
        case 'hotel':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Hotel</h1>
                    </GridContainer>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hotel1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>

                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face communication with staff or residents')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Aerosol deposition, central air-conditioning systems can cause aerosols to spread over long distances')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Use shared sheets, quilt covers, door handles, elevators, tables')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hotel2.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>
                        {[
                            'Maintain good indoor ventilation. Give priority to opening Windows and using natural ventilation',
                            'Set up temperature monitoring posts. Temperature monitoring posts should be set up at the entrance of the hotel to take temperature measurements of guests and retest if necessary. Guests with symptoms such as fever and dry cough should be advised to go to the nearest fever clinic for medical treatment',
                            'Implement a staff health monitoring system. The staff shall implement a daily health monitoring system and establish a temperature monitoring diary. In case of fever, fatigue, dry cough, chest tightness and other symptoms, the staff shall not go to work sick and should wear a disposable medical mask to seek medical treatment in time.',
                            'Strengthen routine health protection work.',
                            'Do daily cleaning and preventive disinfection measures. Ventilation is given priority to, and preventive disinfection is carried out on the ground, walls, public supplies and other utensils. Public supplies and utensils should be strictly sterilized which should changing after one customer used.'
                        ].map(v=>(
                            <li style={{marginBottom: 12}}>
                                <span>
                                    {v}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hotel3.jpg"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/hotel4.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
            break;
        case 'canteen':
            content = (
                <>
                    <GridContainer justify="center">
                        <h1 style={{fontFamily: `Lucida Bright`,}}>Canteen</h1>
                    </GridContainer>
                    <GridContainer justify="center">

                        <GridItem xs={12} sm={10} md={8}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/canteen1.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Potential Risks</h3>
                    </GridContainer>

                    <GridContainer justify="space-around" alignItems="center">
                        <GridItem xs={6} sm={5}>
                            <GridContainer justify="center" direction={'column'}>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Face to face communication without masks, eat food from the same container')
                                        handlePopoverOpen(event)}}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Direct transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Aerosol deposition and aerosol long-distance diffusion')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}>
                                            <HovButton>
                                                Aerosol transmission
                                            </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem
                                    onMouseEnter={(event) => {
                                        setPopContent('Use the same seats, tables and tableware')
                                        handlePopoverOpen(event)
                                    }}
                                    onMouseLeave={handlePopoverClose}>
                                    <GridContainer justify="center" alignItems="center">
                                        <GridItem xs={8}><HovButton>
                                            Contact transmission
                                        </HovButton>
                                        </GridItem>
                                        <GridItem xs={1}>
                                            <IconButton size={'small'}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem xs={6} sm={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/canteen2.jpg"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                        <h3 style={{fontFamily: `Georgia, serif`}}>Prevention Procedures</h3>
                    </GridContainer>
                    <ul>{[
                        'Managers of enterprise restaurants should establish scientific, effective and practical epidemic prevention and health management systems according to the requirements of epidemic control and their own reality-Take the stairs instead of the elevator, reduce time spent in confined spaces.',
                        'Necessary supplies for epidemic prevention, such as protective masks, disposable gloves, temperature gauges, cleaning and disinfectants, should be well stocked.',
                        'To ensure the hygiene and safety of cooking equipment in use and meet the requirements of epidemic prevention.',
                        'To take effective measures to strengthen the cleaning and disinfection work in complete with all washing disinfection facilities, on the basis of strict management system to carry out the washing disinfection sterilization pass link, disinfection sterilization, attention to detail without blind area and dead Angle, ensure personal proportional amount time constant area, implementation of washing disinfection process control, from the source to eliminate bacteria invasion.',
                        'Standardize the operation of the staff restaurant scientifically. Food processing process to achieve "three separate, one disinfection": raw food separately stored, meat and vegetable food separately washed and cut, clean area and contaminated area separated, strict disinfection of tableware.',
                        'We will further strengthen the implementation of the health and epidemic prevention system. Establish regular indoor ventilation and ventilation system in restaurant production and processing places, install ultraviolet air disinfection lamp in restaurant food cleaning operation area where conditions permit, and regularly disinfect after every meal every day. Food quasi-cleaning operation area, general operation area, dining area and auxiliary area should be cleaned and disinfected after each meal.'
                    ].map((v) => (
                        <li style={{marginBottom: 12}}>
                            <span>
                                {v}
                            </span>
                        </li>
                    ))}
                    </ul>
                    <GridContainer justify="space-around">
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/canteen3.jfif"
                                />
                            </Card>
                        </GridItem>
                        <GridItem xs={5}>
                            <Card>
                                <img
                                    className={cardClasses.cardImg}
                                    src="/img/canteen4.jfif"
                                />
                            </Card>
                        </GridItem>
                    </GridContainer>
                </>
            )
    }
    return (
        <div>
            <Container maxWidth="md" style={{fontFamily: `"San Francisco`}}>
                {content}
                <Popover
                    id="mouse-over-popover"
                    className={popClasses.popover}
                    classes={{
                        paper: popClasses.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography>{popContent}</Typography>
                </Popover>
            </Container>
        </div>
    );
}

PreventionsPage.layout = Admin;

export default PreventionsPage;
