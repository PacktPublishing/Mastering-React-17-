import React from "react";
import MetricListItem from "./MetricListItem";
import { OverviewMetrics as metrics } from "../../DataStore/OverviewData";

const OverviewMetrics = () => {
  return (
    <div>
      {metrics.map(metric => {
        return <MetricListItem key={metric.id} metric={metric} />;
      })}
    </div>
  );
};

export default OverviewMetrics;
