<template>
  <div class="home">
    <TopView/>
    <SaleView/>
    <BottomView/>
    <MapView/>
  </div>
</template>

<script>
import TopView from '@/components/top-view'
import SaleView from '@/components/sale-view'
import BottomView from '@/components/bottom-view'
import MapView from '@/components/map-view'

export default {
  name: 'Home',
  components: {
    TopView,
    SaleView,
    BottomView,
    MapView,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width:100%;
    height:100%;
    padding: 20px;
    background:#eee;
    box-sizing: border-box;
  }
</style>
