import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function MetricListItem(props) {
  const { classes, metric } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Overview Metric
        </Typography>
        <Typography variant="h5" component="h2">
          {metric.type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {metric.timeFrame} report
        </Typography>
        <Typography component="p">Year: {metric.year}</Typography>
        <Typography variant="h5" component="h2">
          {metric.value}
        </Typography>
      </CardContent>
    </Card>
  );
}

MetricListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MetricListItem);
