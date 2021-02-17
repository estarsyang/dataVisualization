<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="lint"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-card',
  props: {
    title: String,
    value: String,
  }
}
</script>

<style scoped lang="scss">
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing:1px;
  }
  .chart {
    height:50px;

  }
  .lint {
    margin: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .total {
    color: #666;
    font-size: 12px;
  }
  /deep/ .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
</style>
