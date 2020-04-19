<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-demo
      </h1>
      <h2 class="subtitle">
        My impressive Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <nuxt-link to="/about">About</nuxt-link>
    </div>
  </div>
</template>

<script>
import pipelineConfig from './index.pipeline.config'
import Logo from '~/components/Logo.vue'
import NuxtFetchPipeline, {
  adaptiveFetch,
  pipelineMixin
} from '@/utils/nuxt-fetch-pipeline'

const nuxtFetchPipeline = new NuxtFetchPipeline(pipelineConfig)

export default {
  components: {
    Logo
  },
  mixins: [pipelineMixin(pipelineConfig)],
  fetch(ctx) {
    adaptiveFetch(nuxtFetchPipeline)
    // const start = Date.now()
    // const data1 = await getIndex1()
    // const data2 = await getIndex2()
    // const timecost = Date.now() - start
    // console.log(data1, data2, '  timecost: ' + timecost)
  },
  async mounted() {
    // const start = Date.now()
    // const data3 = await getIndex3()
    // const timecost = Date.now() - start
    // console.log(data3, '  timecost: ' + timecost)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
