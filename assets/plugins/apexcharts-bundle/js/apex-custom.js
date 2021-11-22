$(function () {
	"use strict";
	// chart 1
	var options = {
		series: [{
			name: 'Likes',
			data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 400,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.10,
			}
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		xaxis: {
			type: 'datetime',
			categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
		},
		title: {
			text: 'Line Chart',
			align: 'left',
			style: {
				fontSize: "16px",
				color: '#666'
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				gradientToColors: ['#673ab7'],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			},
		},
		markers: {
			size: 4,
			colors: ["#673ab7"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		colors: ["#673ab7"],
		yaxis: {
			title: {
				text: 'Engagement',
			},
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart1"), options);
	chart.render();
	// chart 2
	var optionsLine = {
		chart: {
			foreColor: '#9ba7b2',
			height: 420,
			type: 'line',
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 2,
				blur: 4,
				opacity: 0.1,
			}
		},
		stroke: {
			curve: 'smooth',
			width: 3
		},
		colors: ["#673ab7", '#f02769', '#32ab13'],
		series: [{
			name: "Music",
			data: [1, 15, 26, 20, 33, 27]
		}, {
			name: "Photos",
			data: [3, 33, 21, 42, 19, 32]
		}, {
			name: "Files",
			data: [0, 39, 52, 11, 29, 43]
		}],
		title: {
			text: 'Multiline Chart',
			align: 'left',
			offsetY: 25,
			offsetX: 20
		},
		subtitle: {
			text: 'Statistics',
			offsetY: 55,
			offsetX: 20
		},
		markers: {
			size: 4,
			strokeWidth: 0,
			hover: {
				size: 7
			}
		},
		grid: {
			show: true,
			padding: {
				bottom: 0
			}
		},
		labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
		xaxis: {
			tooltip: {
				enabled: false
			}
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			offsetY: -20
		}
	}
	var chartLine = new ApexCharts(document.querySelector('#chart2'), optionsLine);
	chartLine.render();
	// chart 4
	var options = {
		series: [{
			name: 'series1',
			data: [31, 40, 28, 51, 42, 109, 100]
		}, {
			name: 'series2',
			data: [11, 32, 45, 32, 34, 52, 41]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 400,
			type: 'area',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		colors: ["#673ab7", '#198fed'],
		title: {
			text: 'Area Chart',
			align: 'left',
			style: {
				fontSize: "16px",
				color: '#666'
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			type: 'datetime',
			categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		},
	};
	var chart = new ApexCharts(document.querySelector("#chart4"), options);
	chart.render();
	// chart 5
	var options = {
		chart: {
			foreColor: '#9ba7b2',
			height: 300,
			type: 'area',
			zoom: {
				enabled: false
			},
		},
		dataLabels: {
			enabled: false
		},
		plotOptions: {
			area: {
				isRange: true
			}
		},
		stroke: {
			curve: 'straight'
		},
		colors: ["#f02769"],
		series: [{
			name: 'range',
			data: [{
				x: new Date(1538780400000),
				y: [6632.01, 6643.59]
			}, {
				x: new Date(1538782200000),
				y: [6630.71, 6648.95]
			}, {
				x: new Date(1538784000000),
				y: [6635.65, 6651]
			}, {
				x: new Date(1538785800000),
				y: [6638.24, 6640]
			}, {
				x: new Date(1538787600000),
				y: [6624.53, 6636.03]
			}, {
				x: new Date(1538789400000),
				y: [6624.61, 6632.2]
			}, {
				x: new Date(1538791200000),
				y: [6617, 6627.62]
			}, {
				x: new Date(1538793000000),
				y: [6605, 6608.03]
			}, {
				x: new Date(1538794800000),
				y: [6604.5, 6614.4]
			}, {
				x: new Date(1538796600000),
				y: [6608.02, 6610.68]
			}, {
				x: new Date(1538798400000),
				y: [6608.91, 6618.99]
			}, {
				x: new Date(1538800200000),
				y: [6612, 6615.13]
			}, {
				x: new Date(1538802000000),
				y: [6612, 6624.12]
			}, {
				x: new Date(1538803800000),
				y: [6603.91, 6623.91]
			}, {
				x: new Date(1538805600000),
				y: [6611.69, 6618.74]
			}, {
				x: new Date(1538807400000),
				y: [6611, 6622.78]
			}, {
				x: new Date(1538809200000),
				y: [6614.9, 6626.2]
			}]
		}],
		title: {
			text: 'Range Area Chart',
			align: 'left',
			style: {
				fontSize: '16px'
			}
		},
		xaxis: {
			type: 'datetime',
		},
	}
	var chart = new ApexCharts(document.querySelector("#chart5"), options);
	chart.render();
	// chart 6
	var options = {
		series: [{
			name: 'north',
			data: [{
				x: 1996,
				y: 322
			}, {
				x: 1997,
				y: 324
			}, {
				x: 1998,
				y: 329
			}, {
				x: 1999,
				y: 342
			}, {
				x: 2000,
				y: 348
			}, {
				x: 2001,
				y: 334
			}, {
				x: 2002,
				y: 325
			}, {
				x: 2003,
				y: 316
			}, {
				x: 2004,
				y: 318
			}, {
				x: 2005,
				y: 330
			}, {
				x: 2006,
				y: 355
			}, {
				x: 2007,
				y: 366
			}, {
				x: 2008,
				y: 337
			}, {
				x: 2009,
				y: 352
			}, {
				x: 2010,
				y: 377
			}, {
				x: 2011,
				y: 383
			}, {
				x: 2012,
				y: 344
			}, {
				x: 2013,
				y: 366
			}, {
				x: 2014,
				y: 389
			}, {
				x: 2015,
				y: 334
			}]
		}, {
			name: 'south',
			data: [{
				x: 1996,
				y: 162
			}, {
				x: 1997,
				y: 90
			}, {
				x: 1998,
				y: 50
			}, {
				x: 1999,
				y: 77
			}, {
				x: 2000,
				y: 35
			}, {
				x: 2001,
				y: -45
			}, {
				x: 2002,
				y: -88
			}, {
				x: 2003,
				y: -120
			}, {
				x: 2004,
				y: -156
			}, {
				x: 2005,
				y: -123
			}, {
				x: 2006,
				y: -88
			}, {
				x: 2007,
				y: -66
			}, {
				x: 2008,
				y: -45
			}, {
				x: 2009,
				y: -29
			}, {
				x: 2010,
				y: -45
			}, {
				x: 2011,
				y: -88
			}, {
				x: 2012,
				y: -132
			}, {
				x: 2013,
				y: -146
			}, {
				x: 2014,
				y: -169
			}, {
				x: 2015,
				y: -184
			}]
		}],
		chart: {
			foreColor: '#9ba7b2',
			type: 'area',
			height: 300,
			zoom: {
				enabled: false
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		title: {
			text: 'Area with Negative Values',
			align: 'left',
			style: {
				fontSize: '14px'
			}
		},
		xaxis: {
			type: 'datetime',
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			tickAmount: 4,
			floating: false,
			labels: {
				style: {
					colors: '#8e8da4',
				},
				offsetY: -7,
				offsetX: 0,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			}
		},
		fill: {
			opacity: 0.5
		},
		tooltip: {
			x: {
				format: "yyyy",
			},
			fixed: {
				enabled: false,
				position: 'topRight'
			}
		},
		grid: {
			yaxis: {
				lines: {
					offsetX: -30
				}
			},
			padding: {
				left: 20
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();
	// chart 7
	var options = {
		series: [{
			name: 'Net Profit',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: 'Free Cash Flow',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			foreColor: '#9ba7b2',
			type: 'bar',
			height: 400
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '35%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		title: {
			text: 'Column Chart',
			align: 'left',
			style: {
				fontSize: '14px'
			}
		},
		colors: ["#673ab7", '#f02769', '#32ab13'],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		yaxis: {
			title: {
				text: '$ (thousands)'
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " thousands"
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart7"), options);
	chart.render();
	// chart 8
	var options = {
		series: [{
		data: [44, 55, 41, 64, 22, 43, 21]
	  }, {
		data: [53, 32, 33, 52, 13, 44, 32]
	  }],
		chart: {
		type: 'bar',
		height: 430
	  },
	  plotOptions: {
		bar: {
		  horizontal: true,
		  dataLabels: {
			position: 'top',
		  },
		}
	  },
	  dataLabels: {
		enabled: true,
		offsetX: -6,
		style: {
		  fontSize: '12px',
		  colors: ['#fff']
		}
	  },
	  stroke: {
		show: true,
		width: 1,
		colors: ['#fff']
	  },
	  tooltip: {
		shared: true,
		intersect: false
	  },
	  xaxis: {
		categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
	  },
	  };
	var chart = new ApexCharts(document.querySelector("#chart8"), options);
	chart.render();
	// chart 9
	var options = {
		series: [{
			name: 'Website Blog',
			type: 'column',
			data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
		}, {
			name: 'Social Media',
			type: 'line',
			data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		stroke: {
			width: [0, 4]
		},
		colors: ["#f02769", "#611ed8"],
		title: {
			text: 'Traffic Sources'
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
		xaxis: {
			type: 'datetime'
		},
		yaxis: [{
			title: {
				text: 'Website Blog',
			},
		}, {
			opposite: true,
			title: {
				text: 'Social Media'
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart9"), options);
	chart.render();
	// chart 10
	var options = {
		series: [{
			name: 'TEAM A',
			type: 'column',
			data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
		}, {
			name: 'TEAM B',
			type: 'area',
			data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
		}, {
			name: 'TEAM C',
			type: 'line',
			data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'line',
			stacked: false,
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		colors: ["#673ab7", "#198fed", "#32ab13"],
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '50%'
			}
		},
		fill: {
			opacity: [0.85, 0.25, 1],
			gradient: {
				inverseColors: false,
				shade: 'light',
				type: "vertical",
				opacityFrom: 0.85,
				opacityTo: 0.55,
				stops: [0, 100, 100, 100]
			}
		},
		labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
		markers: {
			size: 0
		},
		xaxis: {
			type: 'datetime'
		},
		yaxis: {
			title: {
				text: 'Points',
			},
			min: 0
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + " points";
					}
					return y;
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart10"), options);
	chart.render();
	// chart 11
	var options = {
		series: [44, 55, 13, 43, 22],
		chart: {
			foreColor: '#9ba7b2',
			height: 380,
			type: 'pie',
		},
		colors: ["#673ab7", "#32ab13", "#f02769", "#ffc107", "#198fed"],
		labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 360
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart11"), options);
	chart.render();
	// chart 12
	var options = {
		series: [44, 55, 41, 17, 15],
		chart: {
			foreColor: '#9ba7b2',
			height: 380,
			type: 'donut',
		},
		colors: ["#673ab7", "#32ab13", "#f02769", "#ffc107", "#198fed"],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					height: 320
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};
	var chart = new ApexCharts(document.querySelector("#chart12"), options);
	chart.render();
	/*
	// chart 13
	var options = {
		series: [70],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				hollow: {
					size: '70%',
				}
			},
		},
		labels: ['Cricket'],
	};
	var chart = new ApexCharts(document.querySelector("#chart13"), options);
	chart.render();
	*/
	/*
	// chart 14
	var options = {
		series: [44, 55, 67, 83],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: '22px',
					},
					value: {
						fontSize: '16px',
					},
					total: {
						show: true,
						label: 'Total',
						formatter: function (w) {
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							return 249
						}
					}
				}
			}
		},
		labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
	};
	var chart = new ApexCharts(document.querySelector("#chart14"), options);
	chart.render();
	*/
	// chart 15
	var options = {
		series: [{
			name: 'Series 1',
			data: [80, 50, 30, 40, 100, 20],
		}, {
			name: 'Series 2',
			data: [20, 30, 40, 80, 20, 80],
		}, {
			name: 'Series 3',
			data: [44, 76, 78, 13, 43, 10],
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'radar',
			dropShadow: {
				enabled: true,
				blur: 1,
				left: 1,
				top: 1
			}
		},
		colors: ["#673ab7", "#32ab13", "#f02769"],
		title: {
			text: 'Radar Chart - Multi Series'
		},
		stroke: {
			width: 2
		},
		fill: {
			opacity: 0.1
		},
		markers: {
			size: 0
		},
		xaxis: {
			categories: ['2011', '2012', '2013', '2014', '2015', '2016']
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart15"), options);
	chart.render();
	// chart 16
	var options = {
		series: [{
			name: 'Series 1',
			data: [20, 100, 40, 30, 50, 80, 33],
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 350,
			type: 'radar',
		},
		dataLabels: {
			enabled: true
		},
		plotOptions: {
			radar: {
				size: 140,
				polygons: {
					strokeColors: '#e9e9e9',
					fill: {
						colors: ['#f8f8f8', '#fff']
					}
				}
			}
		},
		title: {
			text: 'Radar with Polygon Fill'
		},
		colors: ["#673ab7"],
		markers: {
			size: 4,
			colors: ['#fff'],
			strokeColor: '#FF4560',
			strokeWidth: 2,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return val
				}
			}
		},
		xaxis: {
			categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: function (val, i) {
					if (i % 2 === 0) {
						return val
					} else {
						return ''
					}
				}
			}
		}
	};
	var chart = new ApexCharts(document.querySelector("#chart16"), options);
	chart.render();
});

// Car Count Bar Chart

var options = {
	series: [{
	name: 'Coppell',
	data: [50, 55,]
  }, {
	name: 'Mesquite',
	data: [60, 65,]
  },
  {
	name: 'Rufe Snow',
	data: [40, 40,]
  }
],
	chart: {
	type: 'bar',
	height: 430
  },
  plotOptions: {
	bar: {
	  horizontal: true,
	  dataLabels: {
		position: 'center',
	  },
	}
  },
  dataLabels: {
	enabled: true,
	offsetX: -6,
	style: {
	  fontSize: '12px',
	  colors: ['#fff']
	}
  },
  colors: ["#673ab7", "#f02769", "#32ab13"],
  stroke: {
	show: true,
	width: 1,
	colors: ['#fff']
  },
  tooltip: {
	shared: true,
	intersect: false
  },
  xaxis: {
	categories: ['12:00 PM ', '8:00 AM'],
  },
  
  };

  var chart = new ApexCharts(document.querySelector("#carcount"), options);
  chart.render();

  // Total Revenue Bar Chart

var options = {
	series: [{
	name: 'Coppell',
	data: [9000, 12000,]
  }, {
	name: 'Mesquite',
	data: [10000, 10000,]
  },
  {
	name: 'Rufe Snow',
	data: [8000, 8000,]
  }
],
	chart: {
	type: 'bar',
	height: 430
  },
  plotOptions: {
	bar: {
	  horizontal: false,
	  dataLabels: {
		position: 'center',
	  },
	}
  },
  dataLabels: {
	enabled: false,
	offsetX: -6,
	style: {
	  fontSize: '12px',
	  colors: ['#fff']
	}
  },
  colors: ["#673ab7", "#f02769", "#32ab13"],
  stroke: {
	show: true,
	width: 1,
	colors: ['#fff']
  },
  tooltip: {
	shared: false,
	intersect: false
  },
  xaxis: {
	categories: ['Jan -2021', 'Feb-2021'],
  },
  yaxis: {
	title: {
		text: 'Car Count',
	},
	min: 0
},
legend: {
    show: false
  },
  };

  var chart = new ApexCharts(document.querySelector("#totalrevenue"), options);
  chart.render();

    // New vs Returning Bar Chart

	var options = {
		series: [{
		name: 'New',
		data: [100, 200, 248]
	  }, {
		name: 'Returning',
		data: [50, 70, 85]
	  }, {
		name: 'Recurring',
		data: [30, 50, 25]
	  }],
		chart: {
		type: 'bar',
		height: 430
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		  dataLabels: {
			position: 'center',
		  },
		}
	  },
	  dataLabels: {
		enabled: true,
		offsetX: -6,
		style: {
		  fontSize: '12px',
		  colors: ['#fff']
		}
	  },
	  colors: ["#673ab7", "#f02769", "#32ab13" ],
	  stroke: {
		show: true,
		width: 1,
		colors: ['#fff']
	  },
	  tooltip: {
		shared: true,
		intersect: false
	  },
	  xaxis: {
		categories: ['Mesquite', 'Coppell', 'Rufe Snow'],
	  },
	legend: {
		show: true
	  }
	  };
	
	  var chart = new ApexCharts(document.querySelector("#newvsreturning"), options);
	  chart.render();

	  // individual Wash Sales

	  var options = {
		series: [31, 46, 8, 15],
		chart: {
		width: 560,
		type: 'pie',
	  },
	  labels: ['Deluxe', 'Peak', 'Summit', 'Everest'],
	  responsive: [{
		breakpoint: 480,
		options: {
		  chart: {
			width: 200
		  },
		  legend: {
			position: 'top'
		  }
		}
	  }]
	  };

	  var chart = new ApexCharts(document.querySelector("#washsales"), options);
	  chart.render();


	  // Cars Per Labor Hours 

	  var options = {
		series: [{
			name: 'Cars',
			data: [2, 4, 6, 8, 8, 12, 8, 4, 6, 4]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 400,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.10,
			}
		},
		stroke: {
			width: 5,
			curve: 'smooth'
		},
		xaxis: {
			categories: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm'],
		},
		
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				gradientToColors: ['#673ab7'],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			},
		},
		markers: {
			size: 4,
			colors: ["#673ab7"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		colors: ["#673ab7"],

	};
	var chart = new ApexCharts(document.querySelector("#carslaborshours"), options);
	chart.render();

	// Club Sales 

	var options = {
		series: [800.39, 750.37, 500.24],
		chart: {
		width: 480,
		type: 'donut',
	  },
	  dataLabels: {
		enabled: true
	  },
	  colors: ["#673ab7", "#f02769", "grey" ],
	  responsive: [{
		breakpoint: 480,
		options: {
		  chart: {
			width: 200
		  },
		  legend: {
			show: true
		  }
		}
	  }],
	  legend: {
		position: 'bottom',
		offsetY: 0,
	  },
	  labels: ['Mesquite', 'Coppell', 'Rufe Snow'],
	  };

	  var chart = new ApexCharts(document.querySelector("#clubsales"), options);
	  chart.render();


	  	  // Membership Value Trend 

			var options = {
				series: [{
					name: '',
					data: [10000, 15000, 30000, 32000, 35000, 42000, 50000, 75000, 100000, 125000]
				}],
				chart: {
					foreColor: '#9ba7b2',
					height: 400,
					type: 'line',
					zoom: {
						enabled: false
					},
					toolbar: {
						show: true
					},
					dropShadow: {
						enabled: true,
						top: 3,
						left: 14,
						blur: 4,
						opacity: 0.10,
					}
				},
				stroke: {
					width: 5,
					curve: 'smooth'
				},
				xaxis: {
					categories: ['Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'May 21', 'Jun 21', 'Aug 21', 'Sep 21', 'Oct 21'],
				},
				yaxis: {
					
				},
				tooltip: {
					y: {
						formatter: function (val) {
							return "$ " + val
						}
					}
				},
				fill: {
					type: 'gradient',
					gradient: {
						shade: 'light',
						gradientToColors: ['#673ab7'],
						shadeIntensity: 1,
						type: 'horizontal',
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 100, 100, 100]
					},
				},
				markers: {
					size: 4,
					colors: ["#673ab7"],
					strokeColors: "#fff",
					strokeWidth: 2,
					hover: {
						size: 7,
					}
				},
				colors: ["#673ab7"],
		
			};
			var chart = new ApexCharts(document.querySelector("#membershipvalue"), options);
			chart.render();


	// Cash Balance

	var options = {
		series: [{
		name: 'Acceptor',
		data: [2000.00, 1500.00]
	  }, {
		name: 'Dispensor ($1)',
		data: [300.00, 200.00]
	  }, {
		name: 'Dispensor ($5)',
		data: [500.00, 250.00]
	  }],
		chart: {
		type: 'bar',
		height: 430
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		  dataLabels: {
			position: 'center',
		  },
		}
	  },
	  dataLabels: {
		enabled: false,
		offsetX: -6,
		style: {
		  fontSize: '12px',
		  colors: ['#fff']
		}
	  },
	  colors: ["#673ab7", "#f02769", "#32ab13" ],
	  stroke: {
		show: true,
		width: 1,
		colors: ['#fff']
	  },
	  tooltip: {
		shared: true,
		intersect: false
	  },
	  xaxis: {
		categories: ['laneC1', 'laneC2'],
	  },
	legend: {
		show: true
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  };
	
	  var chart = new ApexCharts(document.querySelector("#carbalance"), options);
	  chart.render();


	  	// Average Depletion Per Day

	var options = {
		series: [{
		name: 'Dispensor ($1)',
		data: [500.00, 700.00, 1000.00, 5000.00, 400.00, 200.00]
	  }, {
		name: 'Dispensor ($5)',
		data: [1000.00, 1500.00, 500.00, 300.00, 500.00, 400.00]
	  }],
		chart: {
		type: 'bar',
		height: 430
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		  dataLabels: {
			position: 'center',
		  },
		}
	  },
	  dataLabels: {
		enabled: false,
		offsetX: -6,
		style: {
		  fontSize: '12px',
		  colors: ['#fff']
		}
	  },
	  colors: ["#673ab7", "#f02769" ],
	  stroke: {
		show: true,
		width: 1,
		colors: ['#fff']
	  },
	  tooltip: {
		shared: true,
		intersect: false
	  },
	  xaxis: {
		categories: ['laneC1', 'laneC2', 'laneM1', 'laneM2', 'laneM3', 'laneCRS1'],
	  },
	legend: {
		show: true
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  };
	
	  var chart = new ApexCharts(document.querySelector("#averagedepletion"), options);
	  chart.render();

	  // Monthly Dispensor Deposit Trend

	  var chart = new ApexCharts(document.querySelector("#monthlydispensor"), options);
	  chart.render();


	  // chart 4
	var options = {
		series: [{
			name: 'Dispenser ($1)',
			data: [5000, 7000, 6500, 5500, 2500, 7500, 2500, 7500, 6500 ]
		}, {
			name: 'Dispenser ($5)',
			data: [10000, 6500, 8000, 9000, 9500, 7500, 7000, 5200, 8900]
		}],
		chart: {
			foreColor: '#9ba7b2',
			height: 428,
			type: 'area',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: true
			},
		},
		colors: ["#673ab7", '#198fed'],
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			categories: ['Jan-21', 'Feb-21,', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Aug-21', 'Sep-21', 'Oct-21']
		},

	};
	var chart = new ApexCharts(document.querySelector("#chart30"), options);
	chart.render();

	// total Revenue
	var options = {
		series: [{
		name: 'Gross Revenue',
		data: [61500, 84000, 72960, 61662, 85088, 77450, 73240, 71881, 74555]
	  }, {
		name: 'Net Income',
		data: [33500, 12000, 31040, 32753, 13433, 27300, 18476, 37661, 79117]
	  }],
		chart: {
		type: 'bar',
		height: 335,
		stacked: true,
	  },
	  responsive: [{
		breakpoint: 480,
		options: {
		  legend: {
			position: 'bottom',
			offsetX: -10,
			offsetY: 0
		  }
		}
	  }],
	  xaxis: {
		categories: ['Jan-21', 'Feb-21,', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21'],
	  },
	  fill: {
		opacity: 1
	  },
	  legend: {
		position: 'right',
		offsetX: 0,
		offsetY: 50
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  };

	  var chart = new ApexCharts(document.querySelector("#chart50"), options);
	  chart.render();
	

	  //Revenue Per Car 
	  var options = {
		series: [{
		  name: "Revenue Per Car",
		  data: [11.18, 10.38, 12.21, 11.11, 10.33, 12.30, 10.53, 11.67, 14.10]
	  }],
		chart: {
		height: 350,
		type: 'line',
		zoom: {
		  enabled: false
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		curve: 'smooth'
	  },
	  colors: ["#673ab7"],
	  grid: {
		row: {
		  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
		  opacity: 0.5
		},
	  },
	  xaxis: {
		categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  };

	  var chart = new ApexCharts(document.querySelector("#chart60"), options);
	  chart.render();

	  // Profile and Loss Per Car 

	  var options = {
		series: [{
		name: 'Revenue Per Car',
		data: [11.18, 10.38, 12.21, 11.11, 10.33, 12.30, 10.53, 11.67, 14.10]
	  }, {
		name: 'Operating Expenses Per Car',
		data: [7.23, 12.11, 8.57, 7.25, 12.27, 9.09, 8.14, 7.66, 6.84]
	  }, {
		name: 'Profit/Loss Per Car',
		data: [3.94, 1.73, 3.54, 3.85, 1.94, 3.20, 2.12, 4.01, 7.26]
	  }],
		chart: {
		type: 'bar',
		height: 350,
		stacked: true,
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		},
	  },
	  stroke: {
		width: 1,
		colors: ['#fff']
	  },
	  
	  xaxis: {
		categories: ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21'],
	  },
	  yaxis: {
		title: {
		  text: undefined
		},
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  fill: {
		opacity: 1
	  },
	  legend: {
		position: 'bottom',
		horizontalAlign: 'left',
		offsetX: 60,
		offsetY: 5
	  }
	  };

	  var chart = new ApexCharts(document.querySelector("#chart70"), options);
	  chart.render();


	  
	  // Variable to Fixed Cost Ratio

	  var options = {
		series: [{
		name: 'Variable Expense',
		data: [21000, 22500, 19685, 21988, 22820, 23241, 23025, 24200]
	  }, {
		name: 'Fixed Expense',
		data: [63000, 22500, 19685, 21988, 22820, 23241, 23025, 24200]
	  }],
		chart: {
		type: 'bar',
		height: 335,
		stacked: true,
	  },
	  colors: ["#673ab7", "#f02769"],
	  responsive: [{
		breakpoint: 480,
		options: {
		  legend: {
			position: 'bottom',
			offsetX: -10,
			offsetY: 0
		  }
		}
	  }],
	  xaxis: {
		categories: ['Jan-21', 'Feb-21,', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Aug-21', 'Sep-21', 'Oct-21', 'Nov-21', 'Dec-21'],
	  },
	  fill: {
		opacity: 1
	  },
	  legend: {
		position: 'right',
		offsetX: 0,
		offsetY: 50
	  },
	  tooltip: {
		y: {
			formatter: function (val) {
				return "$ " + val
			}
		}
	},
	  };

	  var chart = new ApexCharts(document.querySelector("#chart80"), options);
	  chart.render();


		// Variable to Fixed Cost Ratio

		var options = {
			series: [{
				name: "Expected Revenue",
				data: [80000, 77000, 70000, 78000, 80000, 90000, 100000, 158000, 160000, 170000, 175000, 155000]
			},
			{
				name: "Actual Revenue",
				data: [100000, 87000, 80000, 83000]
			}
		
		],
			chart: {
			height: 330,
			type: 'area',
			zoom: {
				enabled: false
			}
			},
			dataLabels: {
			enabled: false
			},
			stroke: {
			curve: 'smooth'
			},
			colors: ["#673ab7", "#32ab13"],
			grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
			},
			xaxis: {
			categories: ['Aug-21', 'Sept-21', 'Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22', 'Jun-22'],
			},
			legend: {
				show: true
			  },
			tooltip: {
				y: {
					formatter: function (val) {
						return "$ " + val
					}
				}
			},
			};

			var chart = new ApexCharts(document.querySelector("#chart90"), options);
			chart.render();


			  // Total Revenue Bar Chart

var options = {
	series: [{
	name: 'Coppell',
	data: [250, 400,]
  }, {
	name: 'Mesquite',
	data: [300, 350,]
  },
  {
	name: 'Rufe Snow',
	data: [350, 250,]
  }
],
	chart: {
	type: 'bar',
	height: 334
  },
  plotOptions: {
	bar: {
	  horizontal: true,
	  dataLabels: {
		position: 'center',
	  },
	}
  },
  dataLabels: {
	enabled: true,
	offsetX: -6,
	style: {
	  fontSize: '12px',
	  colors: ['#fff']
	}
  },
  colors: ["#673ab7", "#f02769", "#198fed"],
  stroke: {
	show: true,
	width: 1,
	colors: ['#fff']
  },
  tooltip: {
	shared: false,
	intersect: false
  },
  xaxis: {
	categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	title: {
		text: 'Week',
	},
  },


legend: {
    show: true
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart100"), options);
  chart.render();


  		// Variable to Fixed Cost Ratio

		  var options = {
			series: [{
				name: "Expected Membership Value",
				data: [150000, 165000, 170000, 172000, 176000, 177000, 179000, 180000, 182000, 185000]
			},
			{
				name: "Actual Membership Value",
				data: [160000, 175000]
			}
		],
			chart: {
			height: 330,
			type: 'area',
			zoom: {
				enabled: false
			}
			},
			dataLabels: {
			enabled: false
			},
			stroke: {
			curve: 'smooth'
			},
			colors: ["#673ab7", "#32ab13"],
			grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
			},
			xaxis: {
			categories: ['Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Jun-22', 'Jul-22','Aug-22', 'Sep-22'],
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return "$ " + val
					}
				}
			},
			legend: {
				show: true
			  }
			};

			var chart = new ApexCharts(document.querySelector("#chart110"), options);
			chart.render();

			// Variable to Fixed Cost Ratio

			var options = {
				series: [{
					name: "Expected Labor & of Cost",
					data: [17, 16, 15, 14, 13, 13, 13, 13, 13, 13, 13, 13]
				},
				{
					name: "Actual Labor & of Cost",
					data: [15, 14, 15, 14, 15, 14, 15, 14, 14, 15, 14, 15]
				}
			],
				chart: {
				height: 330,
				type: 'area',
				zoom: {
					enabled: false
				}
				},
				dataLabels: {
				enabled: false
				},
				stroke: {
				curve: 'smooth'
				},
				colors: ["#673ab7", "#f02769"],
				grid: {
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
				tooltip: {
					y: {
					  formatter: function (val) {
						return val + "%"
					  }
					}
				  },
				},
				xaxis: {
				categories: ['Oct-21', 'Nov-21', 'Dec-21', 'Jan-22', 'Feb-22', 'Mar-22', 'Apr-22', 'May-22','Jun-22', 'Jul-22', 'Aug-22', 'Sep-22'],
				},
				};
	
				var chart = new ApexCharts(document.querySelector("#chart120"), options);
				chart.render();


				// Club Sales Amount

				var options = {
					series: [{
					name: 'Mesquite',
					data: [179]
				  }, {
					name: 'Coppell',
					data: [185]
				  }, {
					name: 'Rufe Snow',
					data: [523]
				  }],
					chart: {
					type: 'bar',
					height: 400,
					stacked: true,
				  },
				  plotOptions: {
					bar: {
					  horizontal: true,
					},
				  },
				  stroke: {
					width: 1,
					colors: ['#fff']
				  },
				  
				  xaxis: {
					categories: [],
					show: false,
				  },
				  yaxis: {
					show: false,
				  },
				  tooltip: {
					y: {
					  formatter: function (val) {
						return "$" + val
					  }
					}
				  },
				  fill: {
					opacity: 1
				  },
				  legend: {
					position: 'bottom',
					horizontalAlign: 'center',
					offsetX: 0,
					offsetY: 5
				  }
				  };
		  
				  var chart = new ApexCharts(document.querySelector("#chart130"), options);
				  chart.render();