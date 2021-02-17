<template>
  <div>
    <CommonCard title="累计订单量" value="￥ 2,157,420">
      <template>
        <v-chart :options="getOption()" />
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">￥ 300,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCardMixin from "@/mixins/common-card";
export default {
  name: "today-orders",
  mixins: [CommonCardMixin],
  methods: {
    getOption() {
      return {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [
              620,
              430,
              220,
              534,
              790,
              430,
              200,
              320,
              532,
              320,
              834,
              698,
              530,
              220,
              620,
            ],
            areaStyle: {
              color: "purple",
            },
            smooth: true,
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              opacity: 0,
            },
          },
        ],
        grid: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        },
      };
    },
  },
  // mounted () {
  //   const chartDom = document.getElementById('total-order-chart')
  //   const chart = this.$echarts.init(chartDom)
  //   chart.setOption({
  //     xAxis: {
  //       type: 'category',
  //       show:false,
  //       boundaryGap:false,
  //     },
  //     yAxis: {
  //       show:false
  //     },
  //     series: [{
  //       type: 'line',
  //       data: [620,430,220,534,790,430,200,320,532,320,834,698,530,220,620],
  //       areaStyle: {
  //         color: 'purple'
  //       },
  //       smooth:true,
  //       lineStyle: {
  //         width:0
  //       },
  //       itemStyle: {
  //         opacity:0
  //       }
  //     }],
  //     grid: {
  //       top:0,
  //       right:0,
  //       left:0,
  //       bottom:0,
  //     }
  //   })
  // }
};
</script>

<style scoped lang="scss">
</style>
