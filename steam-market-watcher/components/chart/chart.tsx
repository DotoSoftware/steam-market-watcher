import * as React from "react";
import { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

interface ChartProps {}

interface ChartState {}

class Chart extends Component<ChartProps, ChartState> {
  state = {};
  options = {
    title: {
      text: "Item price",
    },

    subtitle: {
      text: "Steam market",
    },

    yAxis: {
      title: {
        text: "Price $",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  render() {
    return (
      <Box>
        <HighchartsReact highcharts={Highcharts} options={this.options} />
      </Box>
    );
  }
}

export default Chart;
