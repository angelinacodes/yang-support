import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Paper,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from "@material-ui/core";

import css from "./interactive-container.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(6),
    width: "250px",
    height: "250px",
    backgroundColor: "#6CACE4",
    textAlign: "center",
    color: "#FFFFFF"
  }
}));

const tileData = [
  {
    label: "UBI + VAT Calculator",
    url: "/ubi-vat-calculator"
  }
  //   {
  //     label: "UBI + VAT Calculator",
  //     url: "/ubi-vat-calculator"
  //   },
  //   {
  //     label: "UBI + VAT Calculator",
  //     url: "/ubi-vat-calculator"
  //   }
];

export default props => {
  const classes = useStyles();

  console.log("rendering interactive container");
  return (
    <div className={css.tileContainer}>
      <Grid container spacing={3}>
        {tileData.map(tile => (
          <Grid item key={tile.label} className={css.tile} md={4}>
            <Link to={tile.url}>
              <Paper className={classes.paper}>
                <h2>{tile.label}</h2>
              </Paper>
            </Link>
            {/* <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <InfoIcon />
                    </IconButton>
                }
                /> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
