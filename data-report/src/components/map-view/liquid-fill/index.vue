<template>
  <ve-liquidfill :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
function getColor(value) {
  return value > 0 && value <= 0.5
    ? "rgba(97,216,0,.7)"
    : value > 0.5 && value <= 0.8
    ? "rgba(204,178,26,.7)"
    : value > 0.8
    ? "rgba(241,47,28,.7)"
    : "#c7c7cb";
}
export default {
  data() {
    return {
      chartData: {
        columns: ["rate", "percent"],
        rows: [
          {
            title: "rate",
            percent: 0.38,
          },
        ],
      },
      chartSettings: {},
    };
  },
  mounted() {
    this.chartSettings = {
      seriesMap: [
        {
          name: "转化率",
          radius: "80%",
          label: {
            formatter: function (v) {
              return ` ${Math.floor(v.data.value * 100)}%`;
            },
            fontSize: 36,
            color: "#999",
            fontWeight: "normal",
            insideColor: "#fff",
          },
          outline: {
            itemStyle: {
              borderColor: "#aaa4a4a",
              borderWidth: 1,
              color: "none",
              shadowBlur: 0,
              shadowColor: "#ffff",
            },
            borderDistance: 0,
          },
          backgroundStyle: "#fff",
          itemStyle: {
            shadowBlur: 0,
            shadowColor: "#ffff",
          },
          amplitude: "8%",
          color: [getColor(this.chartData.rows[0].percent)],
        },
      ],
    };
  },
};
</script>