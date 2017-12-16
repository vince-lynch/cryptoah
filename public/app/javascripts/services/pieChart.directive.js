var pieChart = function($timeout, highstock){

 var colors = ['#CD5955', '#E96D66', '#EC876C', '#EFA071', '#EFB278', '#EEC27D', '#DEC782', '#BCBB87', '#99AD8A', '#7B9D8A', '#5E8D8A'];
    var chartConfig = {
        chart: {
            type: 'pie',
            //renderTo: null,
            height: 300,
            backgroundColor: 'none',
            events: {
                //load: null
            }
        },
        title: {
            style: { display: 'none' }
        },
        subtitle: {
            style: { display: 'none' }
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%'],
                colors: colors,
                borderWidth: 1,
                borderColor: null,
                stickyTracking: false,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        brightness: 0
                    }
                }
            }
        },
        tooltip: {
            backgroundColor: '',
            borderWidth: 0,
            useHTML: true,
            formatter: function formatter() {
                console.log('this is ', this);
                var point = this.point;
                return `\n
                    <section class="donut-chart-tooltip">\n
                    <i style="background-color: ${point.color}">
                    <span class="point-percentage">${point.y.toFixed(2) + '%'}</span></i>\n
                    <span class="point-name" style="color: ${point.color}"> ${point.name}</span>\n 
                    </section>\n
                `;
            }
        },
        series: [{
            name: 'Assets Percentage',
            data: null, // To be set
            size: '100%',
            innerSize: '60%'
        }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    };

    return {
        restrict: 'AE',
        scope: {
            portfolio: '<',
            chartTitle: '<'
        },
        template: `
        \n
        <header class="portfolio-assets-donut-chart-title">\n
        <h3 ng-bind="chartTitle"></h3>\n
        </header>\n
        <div class="portfolio-assets-donut-chart"></div>\n
        `,
        link: function link(scope, elem) {
            var titleElem = elem[0].getElementsByClassName('portfolio-assets-donut-chart-title')[0];
            var chartElem = elem[0].getElementsByClassName('portfolio-assets-donut-chart')[0];

            var chart = null;
            var createChart = function createChart(portfolio) {
                console.log('creatingChart')
                // Process data
                var data = portfolio.portfolioAssets.map(function (item) {
                    return {
                        y: item.percentage,
                        name: item.name
                    };
                });

                chartConfig.series[0].data = data;

                console.log('data', data);

                chart = new highstock.Chart(chartConfig);
            };

            scope.getColorByIndex = function (i) {
                var len = colors.length;
                return colors[i % len];
            };

            var positionTitle = function positionTitle() {
                console.log('positioning title', chart);
                console.log('this is ', this);

                Object.assign(titleElem.style, {
                    width: this.plotWidth + 'px',
                    height: this.plotHeight + 'px',
                    left: this.plotLeft + 'px',
                    top: this.plotTop + 'px'
                });
            };

            //chartConfig.events.load = positionTitle;
            chartConfig.chart.renderTo = chartElem;
            chartConfig.chart.events.load = positionTitle;
            chartConfig.chart.events.redraw = positionTitle;
            createChart(scope.portfolio);


            scope.$watch('portfolio', function(){
                console.log('change happened');
                createChart(scope.portfolio);
            })
        }

    }
}

export default pieChart;



