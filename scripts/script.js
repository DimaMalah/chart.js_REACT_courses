
import users from "../modules/users.js";
const userArr = Array.from(users);
const data = userArr.reduce((acc, a, b) => {
	acc.push(userArr[b]["rating"])
	return acc
}, [])

const label = userArr.reduce((acc, a, b) => {
	acc.push(userArr[b]["firstName"][0] + ". " + userArr[b]["lastName"])
	return acc
}, [])

console.log([userArr]);
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: label,
		datasets: [{
			label: 'rating',
			data: data,
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(265, 159, 64, 0.2)',
				'rgba(205, 199, 64, 0.2)',
				'rgba(355, 179, 64, 0.2)',
				'rgba(155, 159, 64, 0.2)',
				'rgba(755, 159, 64, 0.2)',
				'rgba(485, 109, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(205, 159, 64, 1)',
				'rgba(355, 199, 64, 1)',
				'rgba(155, 179, 64, 1)',
				'rgba(755, 159, 64, 1)',
				'rgba(485, 109, 64, 1)',
			],
			borderWidth: 2,
			borderRadius: 5,
			borderSkipped: false,
		}]
	},
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			}
		}
	},
});