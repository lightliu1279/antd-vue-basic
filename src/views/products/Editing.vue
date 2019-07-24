<template>
  <a-row>
    <a-col :sm="24">
      <h3>【曼谷泰式按摩 】Let's Relax Spa 按摩體驗預約（Siam Square One 分店）</h3>
    </a-col>

    <a-divider />

    <a-col :sm="24">
      <a-row>
        <a-col :md="3" :sm="24">
          <span>Source Language : </span>
        </a-col>
        <a-col :md="5" :sm="24">
          <a-select v-model="select.lang" :style="{ 'width': '150px' }">
            <a-select-option v-for="(lang, key) in languages" :key="key" :value="key">
              {{ lang }}
            </a-select-option>
          </a-select>
        </a-col>
      </a-row>

      <a-row class="mt-15">
        <a-col :md="3" :sm="24">
          <span>Target Language : </span>
        </a-col>
        <a-col :md="19" :sm="24">
          <a-radio-group v-model="select.target">
            <a-radio-button v-for="(lang, key) in languages" :key="key" :value="key">
              <p>{{ lang }}</p>
              <!-- case status of target language -->
              <p>
                <!-- <a-icon type="check" /> {{ caseStatus.s1.label.en }} -->
                <a-icon type="close" /> {{ caseStatus.s2.label.en }}
              </p>
            </a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </a-col>

    <a-col :sm="24" :style="{ 'margin-top': '60px' }">
      <a-affix :offset-top="0">
        <div class="text-right fixed-buttons">
          <a-button
            type="primary"
            class="mr-10"
            icon="form"
            @click="() => memoVisible = !memoVisible"
          >
            <span>Memo</span>
          </a-button>

          <a-button
            type="primary"
            class="mr-10"
            icon="search"
            @click="() => dictVisible = !dictVisible"
          >
            <span>Dictionary</span>
          </a-button>

          <a-button
            type="primary"
            icon="check"
          >
            <span>Save</span>
          </a-button>
        </div>
      </a-affix>
      <a-table
        :columns="columns"
        :data-source="table"
        bordered
        :pagination="false"
      >
        <span slot="rowName" slot-scope="lang, row">{{ editLangColumn[row.key] }}</span>
        <span slot="source">{{ languages[select.lang] }}</span>
        <span slot="target">{{ languages[select.target] }}</span>
        <template slot="sourceText" slot-scope="value">
          <highlightable>
            <!-- <a-textarea :value="value" disabled :rows="30" /> -->
            <p>{{ value }}</p>
          </highlightable>
        </template>
        <template slot="targetLang" slot-scope="row">
          <a-textarea v-model="targetLang[row.key]" placeholder="" :rows="10" />
        </template>
      </a-table>
    </a-col>

    <!-- memo -->
    <a-drawer
      width="450"
      placement="right"
      :visible="memoVisible"
      @close="() => memoVisible = false"
    >
      <div class="setting-drawer-index-content">
        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">
            Memo
          </h3>
        </div>

        <div>
          <a-list
            class="comment-list"
            :header="`${comments.length} replies`"
            item-layout="horizontal"
            :data-source="comments"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-comment
                :author="item.author"
                :avatar="item.avatar"
              >
                <a-tooltip slot="datetime" :title="item.datetime">
                  <span>{{ item.datetime }}</span>
                </a-tooltip>
                <span slot="content">{{ item.content }}</span>
                <template slot="actions">
                  <span v-for="(action, idx) in item.actions" :key="idx">{{ action }}</span>
                </template>

                <a-comment>
                  <a slot="author">Han Solo</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                  <span slot="content">
                    We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).
                  </span>
                </a-comment>
              </a-comment>
            </a-list-item>
          </a-list>
          <a-comment>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
            <div slot="content">
              <a-form-item>
                <a-textarea :rows="4" placeholder="leave a message ..." />
              </a-form-item>
              <a-form-item>
                <a-button
                  html-type="submit"
                  type="primary"
                >
                  Add Comment
                </a-button>
              </a-form-item>
            </div>
          </a-comment>
        </div>
      </div>
    </a-drawer>

    <a-drawer
      width="450"
      placement="right"
      :visible="dictVisible"
      @close="() => dictVisible = false"
    >
      <a-form :layout="'vertical'">
        <a-form-item
          label="Key Word or Sentence :"
        >
          <a-textarea
            v-decorator="[
              'word',
              {rules: [{ required: true, message: 'Please input your note!' }]}
            ]"
            placeholder="..."
            :rows="6"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" icon="search">
            Search
          </a-button>
        </a-form-item>
      </a-form>
      <a-divider>Result</a-divider>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugiat quos! Accusamus accusantium consequatur fugiat, a quae temporibus praesentium consectetur.</p>
    </a-drawer>
    <!-- dictionary -->
  </a-row>
</template>
<script>
import { languages, caseStatus, editLangColumn } from '@/config/constants';
import highlightable from '@/components/highlightable';

const sourceLang = {
  name: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店',
  experience: '－ 行程特色 －\n\n・日本大阪環球影城™官方授權門票，中文介面讓您輕鬆訂購\n・訂購後 2 小時內拿到電子門票！現場掃QRcode即可入園遊玩\n・有效期限內可任選一天入園，不需指定日期，保有行程絕佳彈性\n\n\n\n－ 使用說明 －\n\n．使用對象：限非日本國籍購買\n．兌換期限：有效期限內，可任選一日入園\n．有效期限：即日起至2019年01月09日止\n．營業時間：9:00am-9:00pm \n．地址：554-0031 Osaka Prefecture, Osaka, Konohana Ward, Sakurajima, 2-1-33\n．如何抵達：大阪市區搭乘JR環狀線，於西九條站換乘JR櫻島線，在UniversalCity站下車，徒步三分鐘即達\n\n\n\n－ 票券介紹 －\n\n日本環球影城® （Universal Studios Japan® ）是一座以好萊塢電影為主題的大型樂園，更是去大阪旅遊不能錯過的世界級主題樂園。園區內代表性的遊樂設施有哈利波特禁忌之旅、小小兵・瘋狂乘車遊、飛天翼龍、好萊塢美夢・乘車遊等，快來親身感受這世界級的娛樂體驗吧！\n\n\n\n－ 方案介紹 －\n\n．成人票：12歲至64歲\n．孩童票：4歲至11歲\n＊0-3歲幼兒免費入園，KKday無販售65歲以上敬老票。\n\n\n\n－ 重要資訊 － \n\n．此票券一旦付款成功，將無法退換或更改\n．此票券有效期限內，可任選一日入園，將不需指定入園時間\n．此票券只提供給非日本、韓國國籍的旅客購買\n\n\n\n－ 兌換方式 －\n \n1. 訂單成立後，在訂購人email信箱內收到電子門票。\n2. 收到電子門票後建議列印出來，當天入園時掃描 QR code 直接入場。',
  priceDetail: ''
};

const targetLang = Object.keys(editLangColumn).reduce((acc, cur) => ({ ...acc, [cur]: null }), {});

export default {
  name: 'Editing',
  components: {
    highlightable
  },
  data() {
    const columns = [
      {
        dataIndex: 'language',
        title: '',
        key: 'language',
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
      text: '',
      languages,
      caseStatus,
      editLangColumn,
      select: {
        lang: 'zh-tw',
        target: 'en',
        status: 's1'
      },
      columns,
      sourceLang,
      targetLang,
      memoVisible: false,
      dictVisible: false,
      comments: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: '2019-06-28'
        }, {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: '2019-06-28'
        }, {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: '2019-06-28'
        }
      ],
      distForm: this.$form.createForm(this)
    };
  },
  computed: {
    table() {
      return Object.keys(editLangColumn).reduce((acc, cur) => {
        acc.push({
          key: cur,
          language: this.select.lang,
          sourceLang: sourceLang[cur],
          targetLang: {
            key: cur,
            value: targetLang[cur]
          }
        });
        return acc;
      }, []);
    }
  }
};
</script>

<style lang="scss" scoped>
.fixed-buttons {
  background: #f0f2f5;
  padding: 15px 30px;
  margin: 0 -30px 20px;
}
.ant-radio-button-wrapper {
  height: auto;
  p {
    margin-bottom: 0;
    .anticon {
      font-size: 1.2em;
      &-check {
        color: #13c2c2;
      }
       &-close {
        color: #f50;
      }
    }
  }
}
</style>
