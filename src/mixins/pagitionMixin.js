/**
 * ajax异步组件的混合
 * */
import store from '@/store/index'
import * as reqDataList from '@/config/reqDataList'
export default {
  data() {
    return {
      reqData: {...reqDataList[this.$route.name + 'reqData']}
    }
  },
  beforeRouteEnter (to, from, next) {

    // 是否是返回
    let isBack = from.path.indexOf(to.path) > -1
    // 从store里面拿到存储的值
    let reqData = store.state.publicInfo.reqDataList[to.name]
    // 把reqData存储到对应路由的meta信息中，供单个组件beforeRouteEnter生命周期使用，解决没有next(),拿不到this的问题；
    to.meta.reqData = isBack && reqData ? reqData : {...reqDataList[to.name + 'reqData']}
    if (!isBack) {
      console.log('前进')
      // 如果是前进，则清除store中存储的该组建的数据
      store.dispatch('uploadListParams', {
        routeName: to.name
      })
    } else {
      console.log('后退', store.state.publicInfo.reqDataList[to.name])
    }
    next(vm => {
      // 请求参数做赋值
      vm.reqData = to.meta.reqData
    })
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
