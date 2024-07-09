import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FireChart = () => {
    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
            {
                label: 'Acres Burned',
                data: [500000, 1000000, 750000, 1500000, 2000000],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Wildfires Over the Years',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default FireChart;
