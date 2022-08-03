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
      `https://api.github.com/repos/thomasbnt/awesome-web-monetization/contributors?per_page=15`, {
        headers: {
          'accept': 'application/vnd.github+json',
          'content-type': 'application/json',
          'Authorization': import.meta.env.GITHUB_TOKEN
        }
      })
      .then(async res => {
        this.gitContributors = await res.json()
        this.totalContrib = this.gitContributors.length
        console.log({ totalContrib: this.totalContrib })
        console.log({ x: this.gitContributors })
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
