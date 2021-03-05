<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.id" :placeholder="$t('table.id')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <!--      <el-select v-model="listQuery.importance" :placeholder="$t('table.importance')" clearable style="width: 90px" class="filter-item">-->
      <!--        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />-->
      <!--      </el-select>-->
      <!--      <el-select v-model="listQuery.type" :placeholder="$t('table.type')" clearable class="filter-item" style="width: 130px">-->
      <!--        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />-->
      <!--      </el-select>-->
      <!--      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">-->
      <!--        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />-->
      <!--      </el-select>-->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        {{ $t('table.export') }}
      </el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        {{ $t('table.reviewer') }}
      </el-checkbox>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="90" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片" width="180px" align="center">
        <template slot-scope="{row}">
          <!--          <span>{{ row.imgUrl }}</span>-->
          <img :src="row.imgurl" style="width:120px; height:100px">
        </template>
      </el-table-column>
            <el-table-column label="名称" width="120px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.imgname }}</span>
              </template>
            </el-table-column>
            <el-table-column label="描述" width="120px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.imgdesc}}</span>
              </template>
            </el-table-column>
            <el-table-column label="状态" width="120px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column label="联系人" width="140px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.lostname }}</span>
              </template>
            </el-table-column>

            <el-table-column label="联系方式" type="date" width="200px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.contact}}</span>
              </template>
            </el-table-column>

            <el-table-column label="类型" type="date" width="170px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.gid}}</span>
              </template>
            </el-table-column>

            <el-table-column label="发布时间" type="date" width="200px" align="center">
              <template slot-scope="{row}">
                <span>{{ row.createTime | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
              </template>
            </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="370" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
                    <el-button type="primary" size="mini" @click="handleUpdate(row)">
                      {{ $t('table.edit') }}
                    </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="110px" style="width: 400px; margin-left:150px;">

          <el-form-item :label="$t('table.imgUrl')" prop="imgUrl">
            <el-upload
              name="file"
              class="upload-demo"
              ref="upload"
              action="http://localhost:8091/goodsfirst"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>

        <el-form-item :label="$t('table.imgdesc')" prop="imgdesc">
          <el-input v-model="temp.imgdesc" />
        </el-form-item>

        <el-form-item :label="$t('table.imgname')" prop="imgname">
          <el-input v-model="temp.imgname" />
        </el-form-item>

        <el-form-item :label="$t('table.status')" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>

        <el-form-item :label="$t('table.lostname')" prop="lostname">
          <el-input v-model="temp.lostname" />
        </el-form-item>

        <el-form-item :label="$t('table.contact')" prop="contact">
           <el-input v-model="temp.contact" />
        </el-form-item>

        <el-form-item :label="$t('table.gid')" prop="gid">
          <el-input v-model="temp.gid" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ $t('table.cancel') }}
          <!--          {{ $t('table.confirm') }}-->
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          {{ $t('table.confirm') }}
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle, deleteUser } from '@/api/goodsfirst'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      fileList: [],
      // {name: 'food.jpeg',
      // url: ''},
      // {name: 'food2.jpeg',
      //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}

      tableKey: Math.random(),
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        id: undefined,
        imgurl: '',
        imgname: '',
        imgdesc: '',
        status: '',
        createTime: new Date(),
        lostname: '',
        contact: '',
        gid: '',
        // username: '',
        // password: '',
        // profession: '',
        // article: '',
        // phoneNum: '',
        // createTime: new Date(),
        // updateTime: new Date(),
        // importance: undefined,
        // title: undefined,
        // id: undefined,
        // type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Descending', key: '-id' },{ label: 'ID Ascending', key: '+id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        imgurl: '',
        imgname: '',
        imgdesc: '',
        status: '',
        createTime: new Date(),
        lostname: '',
        contact: '',
        gid: '',
        // timestamp: new Date(),
        // username: '',
        // password: '',
        // profession: '',
        // article: '',
        // phoneNum: '',
        // createTime: new Date(),
        // updateTime: new Date()
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        // type: [{ required: true, message: 'type is required', trigger: 'change' }],
        // timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        // title: [{ required: true, message: 'title is required', trigger: 'blur' }]
        // username: [{ required: true, message: '姓名必须输入', trigger: 'change' }],
        // password: [{ required: true, message: '密码必须输入', trigger: 'change' }],
        // profession: [{ required: true, message: '专业必须输入', trigger: 'change' }],
        // article: [{ required: true, message: '物品名必须输入', trigger: 'change' }],
        // phoneNum: [{ required: true, message: '电话号码必须输入', trigger: 'change' }]
        // imgUrl: [{ required: true, message: '图片必须输入', trigger: 'change' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        // this.size = response.data.size
        // this.current = response.data.current
        // this.pages = response.data.pages
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'descending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        // id: undefined,
        // importance: 1,
        // remark: '',
        // timestamp: new Date(),
        // title: '',
        // status: 'published',
        // type: ''
        id: undefined,
        imgurl: '',
        imgname: '',
        imgdesc: '',
        status: '',
        createTime: new Date(),
        lostname: '',
        contact: '',
        gid: '',
        // username: '',
        // password: '',
        // profession: '',
        // article: '',
        // phoneNum: '',
        // createTime: new Date(),
        // updateTime: new Date()
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs.upload.submit();
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          // this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          // this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.createTime = new Date(this.temp.createTime)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.createTime = +new Date(tempData.createTime) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row, index) {
      const tmpEmployee = this.list[index]
      deleteUser(tmpEmployee.id).then(() => {
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
        this.list.splice(index, 1)
      })
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
