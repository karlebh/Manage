<template>
	<div class="w-40 h-48 p-2 inline-grid items-center justify-center bg-white rounded-sm">
		<canvas id="myChart"></canvas>
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
				const chart = document.getElementById('myChart').getContext('2d')
				new Chart(chart, {
					type: 'doughnut',
					data: {
						labels: ['Apple', 'Pie'],
						datasets: [{
							label: 'Foods',
							data: [300, 100],
							backgroundColor: ['hsl(12, 88%, 59%)', 'hsl(228, 39%, 23%)'],
						}],
					},
					options: {
						plugins: {legend: {display: false},},
						scales: {
							y: {display: false},
							x: {display: false}
						},
					}
				})
			}
		}
		
	}
</script>