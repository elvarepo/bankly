"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from 'react'

function DoughnutChart({accounts}: DoughnutChartProps) {
    // create data for Doughnut components refer the chart exmaple from the website
    // https://cube.dev/blog/chart-js-example-with-dynamic-dataset
    const data = {
        datasets:[
            {
                label: 'Bank',
                data: [1250, 2500, 3750],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
            }
        ],
        labels: ['Bank 1','Bank 2','Bank 3']
        // labels: accountNames
    }
  return (
    <Doughnut 
    data={data}
    options={{         // add options
        cutout: '60%', // thickness of the curcile
        plugins: {
          legend: {     // not show the legend 
            display: false
          }
        }
    }}
    />
  )
}

export default DoughnutChart