document.addEventListener("DOMContentLoaded", function() {
    const chart = echarts.init(document.getElementById('activityChart'));
    const option = {
        animation: false,
        grid: {
            top: 10,
            right: 10,
            bottom: 20,
            left: 40,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            axisLine: {
                lineStyle: {
                    color: '#4B5563'
                }
            },
            axisLabel: {
                color: '#9CA3AF'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#4B5563'
                }
            },
            axisLabel: {
                color: '#9CA3AF'
            },
            splitLine: {
                lineStyle: {
                    color: '#374151'
                }
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#4169E1'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(65, 105, 225, 0.3)'
                }, {
                    offset: 1,
                    color: 'rgba(65, 105, 225, 0.1)'
                }])
            }
        }]
    };

    chart.setOption(option);

    document.getElementById('click-button').addEventListener('click', () => {
        updateChartData([820, 932, 901, 934, 1290, 1330, 1320, coins]); // Пример добавления монет к данным
    });

    function updateChartData(newData) {
        option.series[0].data = newData; // Обновление данных серии
        chart.setOption(option); // Перерисовка графика с новыми данными
    }
});
