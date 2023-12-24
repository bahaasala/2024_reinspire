<template>
  <header class="header">
    <NuxtLink to="/" class="logo" aria-label="Go to Reinspire Studio">
      <SvgLogo />
    </NuxtLink>
    <div
      class="header__menu-btn"
      @click="toggleMobileMenu"
      :class="{ menuOpen: isMobileMenuOpen }"
    >
      <div class="open-btn-box">
        <p class="header__menu-btn-text">Menu</p>
        <p class="header__menu-btn-text">Menu</p>
      </div>

      <div class="close-btn-box">
        <p class="header__menu-btn-text">Close</p>
        <p class="header__menu-btn-text">Close</p>
      </div>
    </div>
    <!-- <div
      class="header__hamburger"
      @click="toggleMobileMenu"
      :class="{ open: isMobileMenuOpen }"
    >
      <SvgHamburger />
    </div> -->
    <div class="header__menu-container" :class="{ open: isMobileMenuOpen }">
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item">
            <NuxtLink
              to="/#works"
              class="header__menu-item-link"
              @click="toggleMobileMenu"
            >
              <p class="header__menu-item-text">Work</p>
              <p class="header__menu-item-text">Work</p>
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink
              to="/#about"
              class="header__menu-item-link"
              @click="toggleMobileMenu"
            >
              <p class="header__menu-item-text">About</p>
              <p class="header__menu-item-text">About</p>
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink
              to="/#contact"
              class="header__menu-item-link"
              @click="toggleMobileMenu"
            >
              <p class="header__menu-item-text">Contact</p>
              <p class="header__menu-item-text">Contact</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="bg-grain click-off w-embed"></div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = (): void => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
    };
  },
});
</script>

<style lang="scss">
$component: "header";
.#{$component} {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px 20px 25px;
  margin: 0 auto;
  z-index: 999;
  position: fixed;
  width: 100%;
  top: 0;
  .logo {
    margin-top: 10px;
  }
  &__menu-btn {
    height: 22px;
    overflow: hidden;
    margin-left: 120px;
    z-index: 9999;
    &:hover {
      .header__menu-btn-text {
        transform: translateY(-25px);
      }
    }
    p {
      font-size: 20px;
      margin: 0;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      user-select: none;
    }
  }
  .menuOpen {
    .header {
      position: fixed;
    }
    p {
      transform: translateY(-50px);
    }
    &:hover {
      .header__menu-btn-text {
        transform: translateY(-75px);
      }
    }
    .close-btn-box {
      opacity: 1;
    }
    .open-btn-box {
      opacity: 0;
    }
  }
  .open-btn-box {
    transition-delay: 0.1s;
    transition: 2s ease-in-out;
    opacity: 1;
  }
  .close-btn-box {
    transition-delay: 0.1s;
    transition: 2s ease-in-out;
    opacity: 0;
  }
  &__menu-container {
    // opacity: 0;
    position: fixed;
    width: 100%;
    height: 0;
    top: 0px;
    left: 0;
    align-items: center;
    background: #131010f4;
    z-index: -1;
    transition: 1s ease-in-out;
    // display: flex;
  }
  &__menu-container.open {
    // opacity: 1;
    // display: flex;
    z-index: 9998;
    height: 100%;
    top: 0;
    opacity: 1;
    .header__nav {
      height: 100%;
      opacity: 1;
      top: 0;
    }
    .header__menu-item {
      height: 90px;
    }
  }
  &__nav {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 1.5s cubic-bezier(0.39, 0.58, 0.57, 1);
    top: -500px;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    padding: 0;
  }

  &__menu-item {
    position: relative;
    font-family: "Condor-Light";
    font-weight: 100;
    display: inline-block;
    height: 0px;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    transition-delay: 0.1s;
    &:last-child {
      margin-right: 0;
    }
    &-text {
      font-size: 20px;
      margin: 0;
      transition: 0.5s ease-in-out;
    }
    &-link {
      position: relative;
      color: #e6e6e6;
      text-decoration: none;
      &:hover {
        .header__menu-item-text {
          transform: translateY(-100px);
        }
      }
      p {
        font-family: "Condor-Bold";
        font-size: 85px;
        margin: 0;
        text-align: center;
      }
      p:first-child {
        font-family: "Condor-Light";
      }
      // &::before {
      //   content: "";
      //   position: absolute;
      //   width: 100%;
      //   height: 4px;
      //   border-radius: 4px;
      //   background-color: #ea3d3d;
      //   bottom: -15px;
      //   left: 0;
      //   transform-origin: right;
      //   transform: scaleX(0);
      //   transition: transform 0.3s ease-in-out;
      // }
      // &:hover::before {
      //   transform-origin: left;
      //   transform: scaleX(1);
      // }
    }
  }
  &__hamburger {
    display: none;
    z-index: 9999;
    transition: transform 0.3s ease-in-out;
    .hamburger-line {
      transition: transform 0.3s ease-in-out;
    }
  }
  &__hamburger.open {
    position: fixed;
    right: 20px;
    svg {
      .hamburger-line {
        &:nth-child(1) {
          transform: translate(0px, 0px) rotate(45deg);
        }
        &:nth-child(2) {
          transform: translate(-11px, 17px) rotate(-45deg);
        }
      }
    }
  }

  // responsive
  @media (max-width: 768px) {
    padding: 10px 15px 0px 15px;
    .logo svg {
      width: 135px;
    }
    &__hamburger {
      display: block;
    }
    &__menu-item {
      &-link {
        &:hover {
          .header__menu-item-text {
            transform: translateY(-60px);
          }
        }
        p {
          font-size: 50px;
        }
      }
    }
    &__menu-container.open {
      .header__menu-item {
        height: 50px;
      }
    }
  }
}
</style>
