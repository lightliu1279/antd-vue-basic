<template>
  <a-row>
    <div class="form-search pb-15">
      <a-form :form="form" @submit="handleSubmit">
        <a-row :gutter="24">
          <a-col :md="8" :sm="24">
            <a-form-item label="商品名稱">
              <a-input
                v-decorator="[
                  'productName',
                  {rules: [{ required: true, message: '請輸入商品名稱!' }]}
                ]"
                placeholder="請輸入商品名稱"
              />
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <a-form-item label="商品 id">
              <a-input
                v-decorator="[
                  'productId',
                  {rules: [{ required: true, message: '請輸入商品id!' }]}
                ]"
                placeholder="請輸入商品id"
              />
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <a-form-item label="選擇日期">
              <a-date-picker
                v-decorator="[
                  'date',
                  {rules: [{ required: true, message: '請選擇日期!' }]}
                ]"
                style="width: 100%"
                placeholder="請選擇日期"
              />
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <a-form-item label="選擇區間">
              <a-range-picker style="width: 100%" />
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <a-form-item label="單選">
              <a-select>
                <a-select-option value="true">
                  true
                </a-select-option>
                <a-select-option value="false">
                  false
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :md="8" :sm="24">
            <a-form-item label="多選">
              <a-select mode="multiple">
                <a-select-option value="a1">
                  a1
                </a-select-option>
                <a-select-option value="a2">
                  a2
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :sm="24">
            <div class="text-right">
              <a-button type="primary" icon="search" class="mr-10" html-type="submit">
                搜尋
              </a-button>
              <a-button type="default" @click="handleReset">
                重置
              </a-button>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <a-divider orientation="left">
      資料表
    </a-divider>

    <a-table
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :row-key="record => record.login.uuid"
      :pagination="pagination"
      @change="handleTableChange"
    >
      <a slot="name" slot-scope="name" href="javascript:;">{{ `${name.first} ${name.last}` }}</a>
      <span slot="action" slot-scope="record">
        <a-button type="primary" icon="form" size="small">編輯</a-button>
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="data.length"
          title="確定要刪除嗎？"
          @confirm="onDelete(record.login.uuid)"
        >
          <a-button type="danger" icon="delete" size="small">刪除</a-button>
        </a-popconfirm>
      </span>
    </a-table>
  </a-row>
</template>
<script>
const columns = [{
  dataIndex: 'name',
  title: 'Name',
  key: 'name',
  scopedSlots: { customRender: 'name' }
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' }
  ],
  onFilter: (value, record) => record.gender === value
}, {
  title: 'Action',
  key: 'action',
  width: '200px',
  scopedSlots: { customRender: 'action' }
}];

import { tables } from '@/api';
export default {
  name: 'Table',
  data() {
    return {
      columns,
      data: [],
      loading: false,
      pagination: { pageSize: 20 },
      form: this.$form.createForm(this),
      params: {}
    };
  },
  methods: {
    getTableList() {
      const { current = 1 } = this.pagination;

      this.loading = true;

      tables({
        results: 10,
        page: current,
        ...this.params
      })
        .then(res => {
          const pagination = {
            ...this.pagination,
            total: 100
          };
          this.pagination = pagination;
          this.data = [...res.results];
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleTableChange(pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.getTableList();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.params = {};
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          this.params = { ...values };
          this.getTableList();
        }
      });
    },
    handleReset() {
      this.form.resetFields();
    },
    onDelete(id) {
      const dataSource = [...this.data];
      this.data = dataSource.filter(item => item.login.uuid !== id);
      this.$notification['success']({
        message: '刪除成功',
        description: `刪除 => uuid: ${id}`
      });
    }
  }
};
</script>
