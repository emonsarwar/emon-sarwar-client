import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function SkillsChart() {
  const data = {
    labels: ['JavaScript', 'React', 'Node.js', 'Python', 'C/C++', 'HTML/CSS', 'SQL', 'Git'],
    datasets: [
      {
        label: 'Skill Level',
        data: [85, 90, 80, 75, 85, 95, 70, 88],
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        borderColor: 'rgba(56, 189, 248, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(56, 189, 248, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(56, 189, 248, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'var(--text-color)',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'var(--text-color)',
        },
        ticks: {
          color: 'var(--text-color)',
          backdropColor: 'transparent',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
}