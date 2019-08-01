<template>
  <a-row>
    <div class="form-search pb-15">
      <a-form :form="form" @submit="handleSubmit">
        <a-row type="flex">
          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Product OID">
              <a-input-number
                v-decorator="['oid']"
                placeholder="Oid"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                :style="{ 'width': '150px' }"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Latest Updated Date">
              <a-range-picker
                v-decorator="['updated']"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Target Language">
              <a-select
                v-decorator="['lenguages']"
                mode="multiple"
                placeholder="Select target languages"
              >
                <a-select-option v-for="(lang, key) in languages" :key="key" :value="key">
                  {{ lang }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Case Status">
              <a-select
                v-decorator="['status']"
                mode="multiple"
                placeholder="Select status"
              >
                <a-select-option v-for="(s, key) in caseStatus" :key="key" :value="key">
                  {{ s.label.en }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Keyword">
              <a-input
                v-decorator="['keyword']"
                placeholder="Keyword"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Machine Translation">
              <a-radio-group v-decorator="['machineTranslate', { initialValue: '1' }]">
                <a-radio value="1">
                  Yes
                </a-radio>
                <a-radio value="0">
                  No
                </a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="end">
          <a-col :lg="8" :md="12" :xs="24" class="text-right">
            <a-button type="primary" icon="search" class="mr-10" html-type="submit">
              Search
            </a-button>
            <a-button type="default" @click="handleReset">
              Reset
            </a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <a-divider />
    <div class="mb-15">
      <a-button type="primary">
        Product Update
      </a-button>
    </div>
    <a-table
      class="customTable"
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :row-class-name="() => 'customRow'"
      :pagination="pagination"
      bordered
      :row-selection="rowSelection"
      @change="handleTableChange"
    >
      <span slot="language" slot-scope="lang, record">
        <span>{{ languages[lang] }}</span>
        <br>
        <a-tag v-if="record.tag" color="red" class="mt-10" closable>{{ record.tag }}</a-tag>
      </span>
      <!-- <span slot="tag" slot-scope="tag">
        <a-tag v-if="tag" color="red">{{ tag }}</a-tag>
      </span> -->
      <span
        slot="machineTranslate"
        slot-scope="auto"
        class="machine-translate"
      >
        <a-icon :type="auto ? 'close-circle' : 'check-circle'" class="checked-icon" theme="filled" />
      </span>
      <span slot="caseStatus" slot-scope="status, record">
        <CaseStatusTag
          :has-link="['s1', 's8', 's9', 's10'].includes(status)"
          :oid="record.oid"
          :target-leng="record.lang"
          :color="caseStatus[status].color || '#ddd'"
          :label="caseStatus[status].label.en"
          :editing="status === 's1' ? 'Samuel' : null"
          :status="status"
        />
      </span>
    </a-table>
  </a-row>
</template>

<script>

import { caseStatus, languages } from '@/config/constants';
import CaseStatusTag from '@/views/products/components/CaseStatusTag';

const crossRow = (value, row, index) => {
  const langCount = Object.keys(languages).length;
  let rowSpan = 0;
  if (index % langCount === 0) {
    rowSpan = langCount;
  }
  return {
    children: value,
    attrs: {
      rowSpan
    }
  };
};
// temporarily table data
const results = [
  {
    key: '1',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'en',
    status: 's1',
    caseId: '01',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27',
    tag: 'To be Updated'
  },
  {
    key: '2',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'vi',
    status: 's2',
    caseId: '02',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '3',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'th',
    status: 's3',
    caseId: '-',
    machineTranslate: 1,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '4',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'zh-cn',
    status: 's4',
    caseId: '-',
    machineTranslate: 1,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '5',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'zh-hk',
    status: 's5',
    caseId: '-',
    machineTranslate: 1,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '6',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'zh-tw',
    status: 's6',
    caseId: '-',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '7',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'ja',
    status: 's7',
    caseId: '-',
    machineTranslate: 1,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '8',
    oid: 123456,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'ko',
    status: 's8',
    caseId: '-',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '9',
    oid: 123457,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'en',
    status: 's9',
    caseId: '01',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  },
  {
    key: '10',
    oid: 123457,
    name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
    lang: 'vi',
    status: 's10',
    caseId: '02',
    machineTranslate: 0,
    created: '2019-06-17 10:17:27',
    update: '2019-06-17 10:17:27'
  }
];

export default {
  name: 'ProductList',
  components: {
    CaseStatusTag
  },
  data() {
    // setup table column
    const columns = [
      {
        dataIndex: 'oid',
        title: 'Product OID',
        key: 'oid',
        customRender: crossRow
      },
      {
        dataIndex: 'name',
        title: 'Product Name',
        key: 'name',
        customRender: (value, row, index) => {
          const obj = crossRow(value, row, index);
          // return custom component with jsx
          obj.children =
            <router-link to={
              {
                name: 'Editing',
                params: {
                  oid: row.oid
                }
              }
            }>{ row.name }</router-link>;
          return obj;
        }
      },
      {
        dataIndex: 'lang',
        title: 'Target Language',
        key: 'language',
        scopedSlots: { customRender: 'language' }
      },
      // {
      //   dataIndex: 'tag',
      //   title: 'Tag',
      //   key: 'tag',
      //   scopedSlots: { customRender: 'tag' }
      // },
      {
        dataIndex: 'machineTranslate',
        title: 'Machine Translation',
        key: 'machineTranslate',
        scopedSlots: { customRender: 'machineTranslate' }
      },
      {
        dataIndex: 'caseId',
        title: 'Case ID',
        key: 'caseId'
      },
      {
        dataIndex: 'status',
        title: 'Case Status',
        key: 'caseStatus',
        width: '200px',
        scopedSlots: { customRender: 'caseStatus' }
      },
      {
        dataIndex: 'created',
        title: 'Product Created Date',
        key: 'created'
      },
      {
        dataIndex: 'update',
        title: 'Latest Updated Date',
        key: 'update',
        customRender: crossRow
      }
    ];

    return {
      caseStatus: caseStatus,
      languages: languages,
      columns,
      data: [...results],
      loading: false,
      pagination: {
        ageSize: 10,
        showSizeChanger: true
      },
      form: this.$form.createForm(this),
      params: {}
    };
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
      };
    }
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
      }, 500);
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
        console.log(values);
        if (!err) {
          this.params = { ...values };
          this.getTableList();
        }
      });
    },
    handleReset() {
      this.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-tag {
    cursor: default;
  }
.other-link {
  .ant-tag {
    cursor: pointer;
  }
}

.machine-translate {
  .anticon {
    display: flex;
    justify-content: center;
    svg {
      width: 1.7em;
      height: 1.7em;
    }

    &.anticon-close-circle {
      svg {
        fill: #ddd;
      }
    }
    &.anticon-check-circle {
      svg {
        fill: #87d068;
      }
    }
  }
}

</style>
