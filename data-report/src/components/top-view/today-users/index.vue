<template>
  <div>
    <CommonCard title="今日交易用户数" value="81,043">
      <template>
        <v-chart :options="getOption()" />
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCardMixin from "@/mixins/common-card";
export default {
  name: "today-users",
  mixins: [CommonCardMixin],
  methods: {
    getOption() {
      return {
        color: ["#3398DB"],
        series: [
          {
            type: "bar",
            data: [
              410,
              82,
              200,
              334,
              390,
              330,
              200,
              150,
              82,
              200,
              134,
              290,
              330,
              150,
            ],
          },
        ],
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
          ],
          show: false,
          barWidth: "60%",
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
</style>
