var highstock = function($window){

    var Highcharts = $window.Highcharts;
    // Pie chart has gap bug: https://github.com/highcharts/highcharts/issues/1828
    Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'drawPoints', function (proceed) {
        if (this.options.borderColor == null && this.options.borderWidth >= 1) {
            Highcharts.each(this.points, function (point) {
                point.pointAttr['']['stroke-width'] = 1;
                point.pointAttr[''].stroke = point.pointAttr[''].fill;
                point.pointAttr['hover']['stroke-width'] = 1;
                point.pointAttr['hover'].stroke = point.pointAttr['hover'].fill;
                point.pointAttr['select']['stroke-width'] = 1;
                point.pointAttr['select'].stroke = point.pointAttr['select'].fill;
            });
        }
        proceed.apply(this);
    });

    return Highcharts;

}

export default highstock;