<template lang="html">
    <div class="home">
        <h-slider></h-slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <hfooter></hfooter>
    </div>
</template>

<script>
import hSlider from './hSlider'
import novice from './novice'
import borrow from './borrow'
import money from './money'
import product from './product'
import life from './life'
import Hfooter from '../public/footer'
export default {
    name: 'home',
    data () {
        return {}
    },
    components: {
        hSlider,
        novice,
        borrow,
        money,
        product,
        life,
        Hfooter
    }
}
</script>

<style lang="scss" scoped>
  @import '../../css/reset.scss';
  .home{
    font-size: 80px;
    overflow: hidden;
  }
</style>
