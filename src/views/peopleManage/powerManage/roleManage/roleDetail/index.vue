<template>
  <div class="home">
    <h3>角色详情列表</h3>
    <div style="margin: 10px 10px 0;">
      <el-select v-model="reqData.type" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input v-model="reqData.searchContent" placeholder="请输入内容" style="width: 200px; margin-left: 10px;"></el-input>
      <el-button type="primary" v-has="'addRole'" @click="search" style="margin-left: 10px;">搜索</el-button>
    </div>
    <el-table
      :data="tableData">
      <el-table-column
        prop="username"
        label="角色名">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="80">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="goNextPage('roleEdit')"
            type="text"
            size="small" v-has="'editUser'">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="currentChange"
      style="float: right;">
    </el-pagination>
  </div>
</template>

<script>
  import { getUserList } from '@/api/user'
  import paginationMixin from '@/mixins/pagitionMixin'
  import * as reqDataList from '@/config/reqDataList'
  export default {
    name: 'roleDetail',
    mixins: [paginationMixin],
    data () {
      return {
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        tableData: [],
        totalCount: 1,
        reqData: reqDataList.roleDetailReqData
      }
    },
    beforeRouteEnter (to, from, next) {
      getUserList(to.meta.reqData).then(res => {
        next(vm => {
          vm.tableData = res.data.list
          vm.totalCount = res.data.totalCount
        })
      })
    },
    methods: {
      goNextPage (name) {
        this.$router.push({
          name
        })
      },
      goAddUserPage () {
        this.$router.push({
          name: 'addRole'
        })
      },
      getList () {
        getUserList(this.reqData).then(res => {
          this.tableData = res.data.list
          this.totalCount = res.data.totalCount
        })
      }
    }
  }
</script>
