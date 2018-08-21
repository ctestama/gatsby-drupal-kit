import React from "react";
import styles from "./menu.module.css";
import Img from "gatsby-image";
import Container from "../container";
import { rhythm } from "../../utils/typography"
console.log(styles);
class ArticleInfo extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ul>
          <li><a href="/">Home</a></li>
          {this.props.items &&
                  this.props.items.map(ing => <li><a href={ing.node.path.alias}> {ing.node.name}</a></li>)}
        </ul>
      </div>
  
    )
  }
}

export default Menu;
