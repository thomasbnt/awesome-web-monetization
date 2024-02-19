<template>
  <div>
    <p>Already <b>{{ totalContrib }}</b> contributors !</p>
    <div class='contributor'>
      <div v-for='contributor in gitContributors' :key='contributor'>
        <img :src='contributor.avatar_url' :alt='contributor.login' :title='contributor.login' draggable='false' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contributors',
  data() {
    return {
      gitContributors: this.gitContributors,
      totalContrib: this.gitContributors
    }
  },
  async mounted() {
    await fetch(
      `https://api.github.com/repos/thomasbnt/awesome-web-monetization/contributors?per_page=30`, {
        headers: {
          'accept': 'application/vnd.github+json',
          'content-type': 'application/json',
          'Authorization': import.meta.env.GITHUB_TOKEN
        }
      })
      .then(async res => {
        const contributors = await res.json()
        // if the contributor is a bot from type: "Bot", remove it from the list
        this.gitContributors = contributors.filter(contributor => contributor.type !== 'Bot')
        // And remove "thomasbnt" from the list
        this.gitContributors = this.gitContributors.filter(contributor => contributor.login !== 'restyled-commits')
        this.totalContrib = this.gitContributors.length
      })
      .catch(err => console.log(err))
  }
}
</script>

<style lang='scss' scoped>
@import '/src/assets/scss/utils/_variables.scss';

.contributor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  justify-items: center;
  margin: 3rem 0 1rem 0;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
    min-width: 3rem;
    min-height: 3rem;
  }
}

@media screen and (max-width: $medium_device) {
  .contributor {

  }
}
</style>
