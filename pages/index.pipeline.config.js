// import { getIndex1, getIndex2, getIndex3 } from '@/mock'

export default {
  stages: {
    // 面向SEO渲染需要的 job 集合，一般要求是全部
    seoFetch: {
      type: 'parallel',
      jobs: ['task1']
    },
    // 面向用户首屏渲染需要的最小的 job 集合
    minFetch: {
      type: 'parallel',
      jobs: []
    },
    // 首屏加载完之后，在 mounted 阶段异步执行的 job 集合
    mounted: {
      type: 'parallel',
      jobs: []
    },
    // 空闲时刻才执行的 job 集合
    idle: {
      type: 'serial',
      jobs: []
    }
  },
  pipelines: {
    // 任务1
    task1: {
      task: ({ store, params, query, error, redirect, app, route }) => {
        console.log('task1')
      }
    }
    // task2: {
    //   task: () => {

    //   }
    // }
  }
}
