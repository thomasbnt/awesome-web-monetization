<template>
  <footer>
    <div class='row'>
      <div class='col'>
        <h3>Awesome Web Monetization</h3>
        <p>
          Stuffs about Web Monetization. Packages, articles, documentation links and others tools.
        </p>
        <p class='powered'><i class='fa fa-flash powered_icon'></i>Powered by
          <a href='https://www.netlify.com/' target='_blank' rel='noopener noreferrer'>Netlify</a>
          and
          <a href='https://vuejs.org/' target='_blank' rel='noopener noreferrer'>VueJS</a>
          with
          <a href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer'>Vite</a>.
        </p>
        <p>
          <a href='https://github.com/thomasbnt/awesome-web-monetization/blob/main/LICENSE'
             target='_blank' rel='noopener noreferrer'>
            <i class='fa fa-cc-cc license_icon' aria-hidden='true'></i>CC0-1.0 License
          </a>
        </p>
      </div>
      <div class='col'>

      </div>
      <div class='col'>
        <h4>Ressources</h4>
        <ul>
          <li>
            <a href='https://github.com/thomasbnt/awesome-web-monetization'
               target='_blank' rel='noopener noreferrer'>
              GitHub repository
            </a>
          </li>
          <li>
            <a
              href='https://webmonetization.org/?utm_source=awesome-web-monetization&utm_medium=website&utm_campaign=direct-link'
              target='_blank' rel='noopener noreferrer'>
              Web Monetization
            </a>
          </li>
          <li>
            <a
              href='https://webmonetization.org/specification.html?utm_source=awesome-web-monetization&utm_medium=website&utm_campaign=direct-link'
              target='_blank' rel='noopener noreferrer'>
              Specification
            </a>
          </li>
          <li>
            <a
              href='https://webmonetization.org/docs/getting-started?utm_source=awesome-web-monetization&utm_medium=website&utm_campaign=direct-link'
              target='_blank' rel='noopener noreferrer'>
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'mainFooter'
}
</script>

<style scoped lang='scss'>
@import '/src/assets/scss/utils/_variables.scss';

footer {
  user-select: none;
  padding: 4rem 3rem;
  margin-top: 2rem;
  border-bottom: $primary 1rem solid;

  > .row {
    gap: 1rem;
  }
}

@media (max-width: $medium_device) {
  footer {
    padding: 2rem;
  }
  .row {
    gap: 3rem !important;
    flex: 1;
    flex-direction: column;
  }
}

.powered,
.license {
  &_icon {
    text-align: center;
    width: 1rem;
    height: 1rem;
    margin-right: .8rem;
    color: $primary;
  }
}

</style>
