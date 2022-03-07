import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const options = {
    fill: true,
    animations: false,
    scales: {
        y: {
            min: 0,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
    },
};

function UsersChart({ usersDb}) {
    const usersInt = usersDb.filter((user) => user.rol === 2)
    const labels = usersInt.map((user) => {
        return user.nombres
    })

    const scores1 = usersInt.map((user) => {
        return user.created_users
    });

    const scores2 = usersInt.map((user) => {
        return user.edited_users
    });
    const scores3 = usersInt.map((user) => {
        return user.deleted_users
    });

    const data = {
            datasets: [
                {
                    label: "Predios creados",
                    data: scores1,
                    backgroundColor: "rgba(25, 135, 84, 0.8)",
                },
                {
                    label: "Predios editados",
                    data: scores2,
                    backgroundColor: "rgba(255, 194, 8, 0.8)",
                },
                {
                    label: "Predios eliminados",
                    data: scores3,
                    backgroundColor: "rgba(219, 52, 69, 0.8)",
                },
            ],
            labels
    }

    return (
        <div className="App">
            <Bar data={data} options={options} />
        </div>
    );
}

export default UsersChart;