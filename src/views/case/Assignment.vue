<template>
  <a-row>
    <div class="form-search pb-15">
      <a-form :form="form" @submit="handleSubmit">
        <a-row type="flex">
          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Product Oid">
              <a-input
                v-decorator="[
                  'oid',
                  {
                    initialValue: productOid,
                    rules: [{ required: true, message: 'require product oid' }]
                  }
                ]"
                placeholder="oid"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Acceptor">
              <a-select
                v-decorator="['accptor']"
                placeholder="acceptor"
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
            <a-form-item label="source Language">
              <a-select
                v-decorator="[
                  'sourceLang',
                  {rules: [{ required: true, message: 'require source language' }]}
                ]"
                placeholder="source language"
              >
                <a-select-option v-for="(lang, key) in languages" :key="key" :value="key">
                  {{ lang }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Target Language">
              <a-select
                v-decorator="[
                  'targetLang',
                  {
                    initialValue: targetLang,
                    rules: [{ required: true, message: 'require target language' }]}
                ]"
                placeholder="target language"
              >
                <a-select-option v-for="(lang, key) in languages" :key="key" :value="key">
                  {{ lang }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Due Date">
              <a-date-picker
                v-decorator="['dueDate']"
                :style="{ 'width': '100%' }"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Reminder befor Assignee submit">
              <a-date-picker
                v-decorator="['remindDate']"
                :style="{ 'width': '100%' }"
              />
            </a-form-item>
          </a-col>

          <a-col :lg="8" :md="12" :xs="24">
            <a-form-item label="Reminder befor Assignee submit">
              <a-textarea
                v-decorator="['Comment']"
                :rows="2"
                placeholder="leave a comment"
              />
            </a-form-item>
          </a-col>

          <a-col :xs="24">
            <div class="text-right">
              <a-button type="primary" icon="search" class="mr-10" html-type="submit">
                Preview
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
    <a-table
      :loading="tableLoading"
      :columns="columns"
      :data-source="table"
      bordered
      :pagination="false"
    >
      <!-- <span slot="rowName" slot-scope="lang, row">{{ editLangColumn[row.key] }}</span> -->
      <span slot="source">
        <span v-if="params">{{ languages[params.sourceLang] }}</span>
        <span v-else> Source Language </span>
      </span>
      <span slot="target">
        <span v-if="params">{{ languages[params.targetLang] }}</span>
        <span v-else> Target Language </span>
      </span>
      <template slot="sourceText" slot-scope="value">
        <div class="product-content highlightable" v-text="sanitize(value)" />
      </template>
      <template slot="targetLang" slot-scope="value">
        <div class="product-content highlightable" v-text="sanitize(value)" />
      </template>
    </a-table>
    <a-divider />
    <a-col :xs="24">
      <div class="text-right">
        <router-link :to="{ name: 'CaseList' }">
          <a-button type="primary" icon="plus" :disabled="!table.length">
            Assign
          </a-button>
        </router-link>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { caseStatus, languages, editLangColumn } from '@/config/constants';
import sanitizeHtml from 'sanitize-html';
import { setTimeout } from 'timers';

const sourceLang = {
  name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
  experience: '－ 行程特色 －\n\n  <a href="#">・日本大阪環球影城™官方授權門票，中文介面讓您輕鬆訂購</a>\n・訂購後 2 小時內拿到電子門票！現場掃QRcode即可入園遊玩\n・有效期限內可任選一天入園，不需指定日期，保有行程絕佳彈性\n\n\n\n－ 使用說明 －\n\n．使用對象：限非日本國籍購買\n．兌換期限：有效期限內，可任選一日入園\n．有效期限：即日起至2019年01月09日止\n．營業時間：9:00am-9:00pm \n．地址：554-0031 Osaka Prefecture, Osaka, Konohana Ward, Sakurajima, 2-1-33\n．如何抵達：大阪市區搭乘JR環狀線，於西九條站換乘JR櫻島線，在UniversalCity站下車，徒步三分鐘即達\n\n\n\n－ 票券介紹 －\n\n日本環球影城® （Universal Studios Japan® ）是一座以好萊塢電影為主題的大型樂園，更是去大阪旅遊不能錯過的世界級主題樂園。園區內代表性的遊樂設施有哈利波特禁忌之旅、小小兵・瘋狂乘車遊、飛天翼龍、好萊塢美夢・乘車遊等，快來親身感受這世界級的娛樂體驗吧！\n\n\n\n－ 方案介紹 －\n\n．成人票：12歲至64歲\n．孩童票：4歲至11歲\n＊0-3歲幼兒免費入園，KKday無販售65歲以上敬老票。\n\n\n\n－ 重要資訊 － \n\n．此票券一旦付款成功，將無法退換或更改\n．此票券有效期限內，可任選一日入園，將不需指定入園時間\n．此票券只提供給非日本、韓國國籍的旅客購買\n\n\n\n－ 兌換方式 －\n \n1. 訂單成立後，在訂購人email信箱內收到電子門票。\n2. 收到電子門票後建議列印出來，當天入園時掃描 QR code 直接入場。',
  priceDetail: ''
};

const targetLang = {
  name: '',
  experience: '－ 行程特色 －\n\n  <a href="#">・日本大阪環球影城™官方授權門票，中文介面讓您輕鬆訂購</a>\n・訂購後 2 小時內拿到電子門票！現場掃QRcode即可入園遊玩\n・有效期限內可任選一天入園，不需指定日期，保有行程絕佳彈性\n\n\n\n－ 使用說明 －\n\n．使用對象：限非日本國籍購買\n．兌換期限：有效期限內，可任選一日入園\n．有效期限：即日起至2019年01月09日止\n．營業時間：9:00am-9:00pm \n．地址：554-0031 Osaka Prefecture, Osaka, Konohana Ward, Sakurajima, 2-1-33\n．如何抵達：大阪市區搭乘JR環狀線，於西九條站換乘JR櫻島線，在UniversalCity站下車，徒步三分鐘即達\n\n\n\n－ 票券介紹 －\n\n日本環球影城® （Universal Studios Japan® ）是一座以好萊塢電影為主題的大型樂園，更是去大阪旅遊不能錯過的世界級主題樂園。園區內代表性的遊樂設施有哈利波特禁忌之旅、小小兵・瘋狂乘車遊、飛天翼龍、好萊塢美夢・乘車遊等，快來親身感受這世界級的娛樂體驗吧！\n\n\n\n－ 方案介紹 －\n\n．成人票：12歲至64歲\n．孩童票：4歲至11歲\n＊0-3歲幼兒免費入園，KKday無販售65歲以上敬老票。\n\n\n\n－ 重要資訊 － \n\n．此票券一旦付款成功，將無法退換或更改\n．此票券有效期限內，可任選一日入園，將不需指定入園時間\n．此票券只提供給非日本、韓國國籍的旅客購買\n\n\n\n－ 兌換方式 －\n \n1. 訂單成立後，在訂購人email信箱內收到電子門票。\n2. 收到電子門票後建議列印出來，當天入園時掃描 QR code 直接入場。',
  priceDetail: ''
};

export default {
  name: 'Assignment',
  props: {
    productOid: {
      type: Number,
      default: () => undefined
    },
    targetLang: {
      type: String,
      default: () => undefined
    }
  },
  data() {
    const columns = [
      {
        dataIndex: 'rowName',
        title: '',
        key: 'rowName',
        width: '150px',
        scopedSlots: { customRender: 'rowName' }
      },
      {
        dataIndex: 'sourceLang',
        key: 'sourceLang',
        width: '45%',
        slots: { title: 'source' },
        scopedSlots: { customRender: 'sourceText' }
      },
      {
        dataIndex: 'targetLang',
        key: 'targetLang',
        width: '45%',
        scopedSlots: { customRender: 'targetLang' },
        slots: { title: 'target' }
      }
    ];
    return {
      languages,
      caseStatus,
      editLangColumn,
      columns,
      form: this.$form.createForm(this),
      params: null,
      tableLoading: false
    };
  },
  computed: {
    table() {
      if (!this.params) return [];
      return Object.keys(editLangColumn).reduce((acc, cur) => {
        acc.push({
          key: cur,
          rowName: cur,
          sourceLang: sourceLang[cur],
          targetLang: targetLang[cur]
        });
        return acc;
      }, []);
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.params = null;
      this.tableLoading = true;
      this.form.validateFields((err, values) => {
        if (!err) {
          this.params = { ...values };
        }
        setTimeout(() => {
          this.tableLoading = false;
        }, 500);
      });
    },
    handleReset() {
      this.form.resetFields();
    },
    sanitize(content) {
      if (!content) return '-';
      return sanitizeHtml(content.trim(), {
        allowedTags: [],
        allowedAttributes: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product-content {
  white-space: pre-line;
  height: 283px;
  overflow-y: scroll;
  background: #f5f5f5;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 5px;
  padding: 10px;
  color: rgba(0,0,0,.25);
  display: flex;
}
</style>

