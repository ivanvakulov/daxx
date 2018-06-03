<template>
    <v-card flat>
        <chart :options="polar" ref="chart"></chart>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Charts',
  data:() => {
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 50; i++) {
        xAxisData.push(i);
        data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    }

    return {
      activeTab: null,
      polar: {
       title: {
            text: '柱状图动画延迟'
        },
        legend: {
            data: ['bar', 'bar2'],
            align: 'left'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
      }
    }
  },
  methods: {
      getData() {
        axios.get('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
            .then(response => {
                console.log(response);
                let avarage = [];
                let lastOpen = [];
                
                response.data.forEach(elem => {
                    if (elem.Direction === 'Open')  {
                        avarage.push(elem.AverageTorque);                        
                        lastOpen.push(elem.LastTorque);
                    }
                });

                this.$refs.chart.mergeOptions({
                    series: [{
                        name: 'Average Open',
                        type: 'bar',
                        data: avarage,
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }, {
                        name: 'Last Open',
                        type: 'bar',
                        data: lastOpen,
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }]
                })
                
            })
            .catch()
      }
  },
  mounted() {
      this.getData();
  }
}
</script>

<style>

</style>
