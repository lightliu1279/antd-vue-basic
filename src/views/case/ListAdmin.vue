<template>
  <a-row>
    <div class="form-search pb-15">
      <a-form :form="form" @submit="handleSubmit">
        <a-row type="flex">
          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Case Id">
              <a-input
                v-decorator="['caseId']"
                placeholder="case id"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Assigner">
              <a-select
                v-decorator="['assiner']"
                placeholder="assigner"
              >
                <a-select-option value="Coco">
                  Coco
                </a-select-option>
                <a-select-option value="Ella">
                  Ella
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Acceptor Name">
              <a-select
                v-decorator="['accptor']"
                placeholder="acceptor name"
              >
                <a-select-option value="yoyo">
                  yoyo
                </a-select-option>
                <a-select-option value="Hebe">
                  Hebe
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Case Status">
              <a-select
                v-decorator="['caseStatus']"
                mode="multiple"
                placeholder="case status"
              >
                <a-select-option v-for="(status, key) in caseStatus" :key="key" :value="key">
                  {{ status.label.en }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Target Language">
              <a-select
                v-decorator="['targetLanguage']"
                mode="multiple"
                placeholder="target language"
              >
                <a-select-option v-for="(lang, key) in languages" :key="key" :value="key">
                  {{ lang }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Case Updated Date">
              <a-range-picker
                v-decorator="['updated']"
                :style="{ 'width': '100%' }"
              />
            </a-form-item>
          </a-col>

          <a-col :xs="24">
            <div class="text-right">
              <a-button type="primary" icon="search" class="mr-10" html-type="submit">
                Search
              </a-button>
              <a-button type="default" @click="handleReset">
                Reset
              </a-button>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <a-divider />
    <div class="mb-15">
      <router-link :to="{ name: 'CaseAssignment' }">
        <a-button type="primary">
          <a-icon type="plus" />
          Case Assignment
        </a-button>
      </router-link>
    </div>
    <a-table
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :row-key="record => record.caseId"
      :pagination="pagination"
      bordered
      @change="handleTableChange"
    >
      <span slot="targetLang" slot-scope="lang">
        {{ languages[lang] }}
      </span>
      <span slot="caseStatus" slot-scope="status">
        {{ caseStatus[status].label.en }}
      </span>
      <span slot="action" slot-scope="record">
        <a-button type="primary" icon="form" size="small">Edit</a-button>
        <a-divider type="vertical" />
        <a-popconfirm
          v-if="data.length"
          title="Are you sure cancel this case"
          @confirm="onDelete(record.caseId)"
        >
          <a-button type="danger" icon="delete" size="small">cancel</a-button>
        </a-popconfirm>
      </span>
    </a-table>
  </a-row>
</template>
<script>
import { caseStatus, languages } from '@/config/constants';

// table column setting
const columns = [
  {
    dataIndex: 'caseId',
    title: 'Case Id',
    key: 'caseId',
    scopedSlots: { customRender: 'caseId' }
  },
  {
    dataIndex: 'productName',
    title: 'Product Name',
    key: 'productName',
    scopedSlots: { customRender: 'name' }
  },
  {
    dataIndex: 'targetLang',
    title: 'Target Language',
    key: 'targetLang',
    scopedSlots: { customRender: 'targetLang' }
  },
  {
    dataIndex: 'assigner',
    title: 'Assigner',
    key: 'assigner',
    scopedSlots: { customRender: 'assigner' }
  },
  {
    dataIndex: 'acceptor',
    title: 'Acceptor',
    key: 'acceptor',
    scopedSlots: { customRender: 'acceptor' }
  },
  {
    dataIndex: 'caseStatus',
    title: 'Case status',
    key: 'caseStatus',
    scopedSlots: { customRender: 'caseStatus' }
  },
  {
    dataIndex: 'updated',
    title: 'Updated',
    key: 'updated',
    scopedSlots: { customRender: 'updated' }
  },
  {
    title: 'Action',
    key: 'action',
    width: '200px',
    scopedSlots: { customRender: 'action' }
  }
];

// temporarily table data
const results = [
  {
    caseId: '24849-3-2',
    productName: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    targetLang: 'en',
    assigner: 'Coco',
    acceptor: 'KK',
    caseStatus: 's3',
    updated: '2019-6-3'
  }
];

export default {
  name: 'CaseList',
  data() {
    return {
      columns,
      data: [],
      loading: false,
      pagination: {
        pageSize: 20,
        total: 100,
        showSizeChanger: true
      },
      form: this.$form.createForm(this),
      params: {},
      caseStatus,
      languages
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      const { current = 1 } = this.pagination;

      if (!current) return false;
      this.loading = true;

      // api send { ...this.params,  page: current }
      setTimeout(() => {
        const pagination = {
          ...this.pagination,
          total: 100
        };
        this.pagination = pagination;
        this.data = [...results];
        this.loading = false;
      }, 1000);
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
