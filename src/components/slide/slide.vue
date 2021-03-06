<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/babel">
  import {addClass} from '../../store/dom'
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'slide'

  export default {
    name: COMPONENT_NAME,
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      showDot: {
        type: Boolean,
        default: true
      },
      click: {
        type: Boolean,
        default: true
      },
      allowVerticalScroll: {
        ype: Boolean,
        default: false
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      freeScroll :{
        type: Boolean,
        default: true
      },
      scrollY :{
        type: Boolean,
        default: false
      },
      directionLockThreshold : {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted() {
      setTimeout(() => {
        console.log(221)
        this._setSlideWidth()
        if (this.showDot) {
          this._initDots()
        }
        this._initSlide()

        if (this.autoPlay) {
          this._play()
        }
      }, 20)

      window.addEventListener('resize', () => {
        if (!this.slide || !this.slide.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
      })
    },
    activated() {
      console.log(12234)
      this.slide.enable()
      let pageIndex = this.slide.getCurrentPage().pageX
      if (pageIndex > this.dots.length) {
        pageIndex = pageIndex % this.dots.length
      }
      this.slide.goToPage(pageIndex, 0, 0)
      if (this.loop) {
        pageIndex -= 1
      }
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    methods: {
      refresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      next() {
        this.slide.next()
      },
      _setSlideWidth(isResize) {
        this.children = this.$refs.slideGroup.children

        let width = 0
        let slideWidth = this.$refs.slide.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slide-item')

          child.style.width = slideWidth + 'px'
          width += slideWidth
        }
        if (this.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.slideGroup.style.width = width + 'px'
      },
      _initSlide(e) {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
//          eventPassthrough: this.allowVerticalScroll ? 'vertical' : false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          directionLockThreshold : 100,
          startY : false,
          click: this.click
        })

        // 是否派发滚动事件
        if (this.listenScroll) {
          this.slide.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('touchend', () => {
          if (this.autoPlay) {
            this._play()
          }
        })

        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        let pageIndex = this.slide.getCurrentPage().pageX + 1
        console.log(pageIndex)
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slide.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .slide {
    min-height: 1px;
    .slide-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slide-item {
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a {
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }

    .dots {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      transform: translateZ(1px);
      text-align: center;
      font-size: 0;
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ccc;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: #fff;
        }
      }
    }
  }

</style>