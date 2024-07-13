import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FireChart = () => {
    const data = {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Acres Burned',
                data: [4664364, 10122336, 7125643, 7577183, 2693910],
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
