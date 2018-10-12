import React from "react";
import styles from "./teaser.module.scss";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import Container from "../../common/container";
import { rhythm } from "../../../utils/typography"
import { randomBytes } from "crypto";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
class Teaser extends React.Component {
  render() {
    return (
      <Card>
        <div className={styles.imageWrapper}>
          <Img
            fluid={
              this.props.image
            }
          />
        </div>
        <h3><a href={this.props.path}>{this.props.title}</a></h3>
        <NodeInfo 

          node={this.props.node}
        />
        <div>
          {this.props.content.replace(/(<([^>]+)>)/ig, "").substring(0, 250) + "..."}
        </div>
      </Card>
    )
  }
}

export default Teaser;