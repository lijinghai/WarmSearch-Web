<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '校园失物招领网站后台',
      logo: 'data:image/png;base64,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%0AHvwfupaiywTwg04AAAAASUVORK5CYII='
      // logo: require('../../../assets/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
