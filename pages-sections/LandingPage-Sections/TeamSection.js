import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/zzh.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Zuohan Zhao
                <br />
                <small className={classes.smallTitle}>Group Leader</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Leader of Group 3's TC project and main developer of this website.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/ljr.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Junru Lu
                <br />
                <small className={classes.smallTitle}>Reviewer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Proofreading for all documents and course assignments.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/faces/wlj.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Lijing Wang
                <br />
                <small className={classes.smallTitle}>Actor/Assistant Producer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Acting for the video and making presentation slides.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                    src="/img/faces/xkx.jpg"
                    alt="..."
                    className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kexue Xing
                <br />
                <small className={classes.smallTitle}>Material Collection/Website Content</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Collecting the documents and images used in this site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                    src="/img/faces/yyw.jpg"
                    alt="..."
                    className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Yuwei Yang
                <br />
                <small className={classes.smallTitle}>Scripter</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Drafting the script for the video and this website's documents.
                </p>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                    src="/img/faces/zjh.jpg"
                    alt="..."
                    className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jiahe Zhang
                <br />
                <small className={classes.smallTitle}>Video Maker</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Directing and producing the video for this site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                    src="/img/faces/wyq.jpg"
                    alt="..."
                    className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Yuqi Wang
                <br />
                <small className={classes.smallTitle}>Material Collection/Website Content</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Collecting the documents and images used in this site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
