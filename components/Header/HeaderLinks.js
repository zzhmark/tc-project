/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from '@material-ui/icons/Notifications';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import BubbleChart from "@material-ui/icons/BubbleChart";
import TrainIcon from '@material-ui/icons/Train';
import SchoolIcon from '@material-ui/icons/School';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HotelIcon from '@material-ui/icons/Hotel';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Button
                href="/admin/info"
                color="transparent"
                className={classes.navLink}
            >
                <NotificationsIcon />
                About Covid-19 Delta
            </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="preventions"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/admin/preventions/railway">
                  <a className={classes.dropdownLink}>
                      <ListItem>

                          <ListItemIcon>

                              <TrainIcon />
                          </ListItemIcon>
                          <ListItemText>
                              Railway Station
                          </ListItemText>
                      </ListItem>
                  </a>
              </Link>,
              <Link href="/admin/preventions/airport">
                  <a className={classes.dropdownLink}>
                      <ListItem>
                          <ListItemIcon>

                              <LocalAirportIcon />
                          </ListItemIcon>
                          <ListItemText>

                              Airport
                          </ListItemText>
                      </ListItem>
                  </a>
              </Link>,
              <Link href="/admin/preventions/canteen">
                  <a className={classes.dropdownLink}>
                      <ListItem>
                          <ListItemIcon>

                              <FastfoodIcon />
                          </ListItemIcon>
                          <ListItemText>

                              Canteen
                          </ListItemText>
                      </ListItem>
                  </a>
              </Link>,
              <Link href="/admin/preventions/hall">
                  <a className={classes.dropdownLink}>
                      <ListItem>
                          <ListItemIcon>

                              <MeetingRoomIcon />
                          </ListItemIcon>
                          <ListItemText>
                              Conference Hall

                          </ListItemText>
                      </ListItem>

                  </a>
              </Link>,
              <Link href="/admin/preventions/lab">
                  <a className={classes.dropdownLink}>
                      <ListItem>

                          <ListItemIcon>

                              <SchoolIcon />
                          </ListItemIcon>
                          <ListItemText>

                              Laboratory
                          </ListItemText>
                      </ListItem>
                  </a>
              </Link>,
              <Link href="/admin/preventions/hotel">
                  <a className={classes.dropdownLink}>
                      <ListItem>
                          <ListItemIcon>

                              <HotelIcon />
                          </ListItemIcon>
                          <ListItemText>

                              Hotel
                          </ListItemText>
                      </ListItem>
                  </a>
              </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about-us"
          color="transparent"
          className={classes.navLink}
        >
          <BubbleChart /> about us
        </Button>
      </ListItem>

    </List>
  );
}
