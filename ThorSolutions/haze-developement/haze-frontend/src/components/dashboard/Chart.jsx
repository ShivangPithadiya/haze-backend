import React from "react";
import "chart.js/auto";

import { Line } from "react-chartjs-2";
import { Ticks } from "chart.js/auto";
const data = {
    labels: [93, 53, 85, 41, 44, 65, 21, 104, 60],
    datasets: [
        {
            label: "First dataset",
            data: [93, 53, 85, 41, 44, 65, 21, 104, 60],
            fill: false,
            backgroundColor: "rgba(251.5, 81, 84)",
            borderColor: "rgba(251.5, 81, 84)",
            tension: 0.4,
            borderWidth: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
            pointHoverRadius: 5,
            pointRadius: 5,
            pointBorderWidth: 2,
        }
    ]
};

const options = {
    plugins: {
        legend: {
            display: false,
            position: 'chartArea'
        },
        tooltip: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
            callbacks: {
                title: function(tooltipItem) {
                    return 'Sales';
                },
                label: function(context) {
                    return ' ' + context.parsed.y;
                },
                labelColor: function(context) {
                    return {
                        borderColor: 'rgba(0,0,0,0)',
                        backgroundColor: 'rgba(0,0,0,0)'
                    };
                }
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "category",
            }
        ],
        x: {
            display: false, // Hide x-axis line
            grid: {
                drawTicks: false,
                drawOnChartArea:false
            },
        },
        y: {
            ticks: {
                display: false
            },
            grid: {
                drawTicks: false,
            },
            display: true, // Hide x-axis line
            

        },
        
    }
};

export default function Chart() {
    return (
        <div className="chart">
            <Line data={data} options={options} />
        </div>
    );
}
