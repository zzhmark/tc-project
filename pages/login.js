import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import "node_modules/video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton, ControlBar, VolumeMenuButton } from 'video-react';
import {useEffect} from "react";
import cardImagesStyles from "../assets/jss/nextjs-material-dashboard/cardImagesStyles";
import landingStyles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);

const useCardImageStyles = makeStyles(cardImagesStyles);

const landingPageStyles = makeStyles(landingStyles);


function LinkCard(props){
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const cardImageClasses = useCardImageStyles();
    return(
        <Card className={classes[cardAnimaton]} style={{...props.style}}>
            <CardActionArea>
                <a href={props.href}>
                    <img
                        className={cardImageClasses.cardImgTop}
                        data-src="holder.js/100px180/"
                        alt="100%x180"
                        style={{width: "100%", display: "block", align: 'middle' }}
                        src={props.src}
                        data-holder-rendered="true"
                    />

                    <CardFooter className={classes.cardFooter}>
                        <Button simple color="primary" size="lg" style={{textTransform: 'none',}}>
                            {props.lab}
                        </Button>
                    </CardFooter>
                </a>
            </CardActionArea>
        </Card>
    )
}


export default function LoginPage(props) {
    const classes = useStyles();
    const landingPageClasses = landingPageStyles();

    const [hw, setHw] = React.useState(true);
    useEffect(() => {
        setHw(window.innerWidth < window.innerHeight)
    }, [])

    const { ...rest } = props;
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="SEU Epidemic Prevention Guide"
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url('/img/bg7.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    height: hw? undefined: "100vh",
                    minHeight: hw? 0: undefined
                }}
            >
                <Player
                    fluid={hw}
                    autoPlay
                    muted
                    height="100%"
                    width='auto'
                    poster="/img/bg7.jpg"
                >
                    <BigPlayButton position="center" />
                    <ControlBar disableDefaultControls >
                        <VolumeMenuButton />
                    </ControlBar>
                    <source src="/sample.mp4" type='video/mp4' />
                </Player>
            </div>

            <div style={{
                backgroundImage: "url('/img/seu_big.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "left center",
            }}>
                <div style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), ' +
                        'rgba(100, 100, 100, 0.5), rgba(0, 0, 0, 1))',
                    paddingBottom: '50px'
                }}>

                    <div className={classes.container} style={{paddingTop:'5vh'}}>
                        <h1 className={landingPageClasses.title}>
                            Follow the links for your safe tour to SEU...
                        </h1>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={4} >
                                <LinkCard  lab='How is Covid-19 Delta different?' src='/img/virus.png'
                                           href='/admin/info'
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={4} >
                                <LinkCard lab='How can I arrive safely?' src='/img/people.png'
                                          href='/admin/preventions'
                                />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={4} >
                                <LinkCard lab='For more info, I can go...' src='/img/punch.png'
                                          href='/admin/references'
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        </div>
    );
}
