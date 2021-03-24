<template>
  <ve-wordcloud :data="chartData" :settings="chartSettings" height="100%" />
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["name", "value"],
        rows: [
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
        ],
      },
      chartSettings: {
        color: function () {
          // Random color
          return (
            "rgb(" +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(",") +
            ")"
          );
        },
      },
    };
  },
};
</script>