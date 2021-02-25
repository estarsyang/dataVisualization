<template>
  <div id="bmap" />
</template>

<script>
  export default {
    mounted() {
      const { Map, Point } = this.$bmap
      const map = new Map('bmap')
      const point = new Point(116.404, 39.915)
      map.centerAndZoom(point, 12)
      map.enableScrollWheelZoom(true)
    }
  }
</script>

<style>
  #bmap {
    width: 100%;
    height: 100%;
  }
</style>