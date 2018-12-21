/**
 * ajax异步组件的混合
 * */
import store from '@/store/index'
import * as reqDataList from '@/config/reqDataList'
export default {
  data() {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    let isBack = from.path.indexOf(to.path) > -1
    let reqData = store.state.publicInfo.reqDataList[to.name]
    to.meta.reqData = isBack && reqData ? reqData : {...reqDataList[to.name + 'reqData']}
    if (from.path.indexOf(to.path) === -1) {
      console.log('离开了该模块')
      store.dispatch('uploadListParams', {
        routeName: to.name
      })
    } else {
      console.log('是返回', store.state.publicInfo.reqDataList[to.name])
    }
    next()
  },
  methods: {
    /**
     * @func 列表搜索
     */
    search () {
      console.log('搜索')
      this.reqData.page = 1
      store.dispatch('uploadListParams', {
        routeName: this.$route.name,
        reqData: this.reqData
      })
      this.getList ()
    },
    /**
     * @func 列表分页
     * @param val 当前第几页
     */
    currentChange (val) {
      console.log('分页')
      this.reqData.page = val
      store.dispatch('uploadListParams', {
        routeName: this.$route.name,
        reqData: {
          ...this.reqData,
          page: val
        }
      })
      this.getList (val)
    }
  }
}
