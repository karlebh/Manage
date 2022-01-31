<template>
	<div class="w-40 h-48 inline-grid items-center justify-center p-4 bg-white rounded-sm">
		<canvas id="barChart"></canvas>
	</div>
</template>

<script>

	import Chart from 'chart.js/auto'
	export default {
		mounted() {
			this.draw()
		},
		methods: {
			draw() {
				const chart = document.getElementById('barChart').getContext('2d')
				new Chart(chart, {
					type: 'bar',
					data: {
						labels: ['Peanut', 'Sandwich', 'Burger', 'Fruits', 'Oroe'],
						datasets: [{
							label: 'Foods',
							data: [100, 300, 150, 45, 312],
							backgroundColor: 'hsl(12, 88%, 59%)',
						}],
					},
					options: {
						responsive: true,
						plugins: {
							title: {display: false, text: 'Extremely useful js package'},
							legend: {display: false},
						},
						scales: {
							y: {display: false},
							x: {display: false}
						},
					},
				})
			}
		}
		
	}
</script>