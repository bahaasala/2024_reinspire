<template>
  <footer class="footer">
    <div class="footer-copyright">
      <p><span>©</span>{{ year }}</p>
    </div>
    <div class="footer-socials">
      <ul>
        <li>
          <a href="https://dribbble.com/Reinspire" target="_blank">Dribbble</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/reinspire-studio" target="_blank">Linkedin</a>
        </li>
        <li>
          <a href="https://www.instagram.com/reinspirestudio" target="_blank">Instagram</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
export default defineComponent({
  name: "Footer",
  setup() {
    const year = new Date().getFullYear();
    return { year };
  },
});
</script>

<style lang="scss">
$component: "footer";

.#{$component} {
  // position: fixed;
  // bottom: 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  // padding: 20px 40px 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-copyright {
    flex: 1;

    p {
      font-family: "NeueMontreal-Regular";
      font-size: 20px;
      display: flex;
      align-items: center;
      color: #8c8b87;
    }

    span {
      font-family: "NeueMontreal-Regular";
      font-size: 20px;
      padding-right: 3px;
      color: #8c8b87;
    }
  }

  &-socials {
    flex: 1;

    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      li {
        list-style-type: none;

        a {
          font-family: "NeueMontreal-Regular";
          color: #8c8b87;
          font-size: 20px;
          text-decoration: none;
          transition: 0.5s ease-in-out;

          &:hover {
            color: #e6e6e6;
          }
        }
      }
    }
  }

  // Media Queries
  @media (max-width: 767px) {
    padding: 0px 15px 20px 15px;
    flex-direction: column;
    align-items: flex-start;

    &-socials {
      width: 100%;

      ul {
        li {
          a {
            text-transform: uppercase;
            font-size: 18px;
          }
        }
      }
    }

    &-copyright {
      p {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
