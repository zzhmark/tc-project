/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/footerStyle.js";
import Muted from "../Typography/Muted";

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {/*<ListItem className={classes.inlineBlock}>*/}
            {/*  <a href="/login" className={classes.block}>*/}
            {/*    Home*/}
            {/*  </a>*/}
            {/*</ListItem>*/}
            {/*<ListItem className={classes.inlineBlock}>*/}
            {/*  <a href="/about-us" className={classes.block}>*/}
            {/*    About us*/}
            {/*  </a>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} style={props.whiteFont ?{
                color:  '#aaaaaa'
              }: {}}>
                Acknowledgement: 赵作翰 张家和 王钰琪 邢珂雪 杨钰巍 王礼婧 卢俊儒
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span style={props.whiteFont ?{
            color:  '#666666'
          }: {}}>
            &copy; {1900 + new Date().getYear()}{" "} CreativeTim
            学位英语 TC Project 24班 第3组
          </span>
        </p>
      </div>
    </footer>
  );
}
