import React from "react";
import styles from "./featured.module.scss";
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import NodeInfo from "../../content/node-info";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function Featured(props) {
    const { classes } = props;
    return (
      <Paper className={classes.mainFeaturedPost}>
      <Grid container spacing={16}>

      <Grid item md={4}>
      <Img
        fluid={
          props.image
        }
      />
      </Grid>

      <Grid item md={8}>
      <div className={classes.mainFeaturedPostContent}>
      <h3><a href={props.path}>{props.title}</a></h3>
      <NodeInfo 
        node={props.node}
      />

        <div>
          {props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 899) + "..."}
        </div>
    </div>
              </Grid>
            </Grid>
        
</Paper>
    )
}
Featured.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Featured);