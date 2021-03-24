<template>
  <v-chart :options="getOption()" />
</template>

<script>
import "echarts-wordcloud";
const originData = [
  {
    name: "蜡笔小新",
    value: 100 * Math.random(),
  },
  {
    name: "孙悟空",
    value: 100 * Math.random(),
  },
  {
    name: "卡卡西",
    value: 100 * Math.random(),
  },
  {
    name: "路飞",
    value: 100 * Math.random(),
  },
  {
    name: "中华小当家",
    value: 100 * Math.random(),
  },
  {
    name: "星马豪",
    value: 100 * Math.random(),
  },
  {
    name: "皮卡丘",
    value: 100 * Math.random(),
  },
];
const data = originData.map((val) => ({
  ...val,
  textStyle: {
    normal: {
      color: randomColor(),
    },
  },
}));
function randomColor() {
  return (
    "rgb(" +
    [
      Math.round(Math.random() * 160),
      Math.round(Math.random() * 160),
      Math.round(Math.random() * 160),
    ].join(",") +
    ")"
  );
}
export default {
  data() {
    return {};
  },
  methods: {
    getOption() {
      return {
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            data,
          },
        ],
      };
    },
  },
};
</script>