<template>
  <a-row>
    <div class="mb-15">
      <a-button
        type="primary"
        class="mr-10"
        icon="form"
      >
        <span>Proofread</span>
      </a-button>
      <a-button
        type="danger"
        class="mr-10"
        icon="stop"
      >
        <span>Cancel</span>
      </a-button>
    </div>
    <a-card
      :head-style="{
        padding: '0 15px'
      }"
    >
      <template slot="title">
        <p>
          <a-tag :color="caseStatus[info.caseStatus].color">
            editing
          </a-tag>
          <b>{{ info.productName }}</b>
        </p>
        <span />
      </template>
      <span slot="extra">
        <span class="acceptor">{{ info.acceptor }}</span>
        <a-divider type="vertical" />
        <a-dropdown
          overlay-class-name="case-action"
          placement="bottomRight"
        >
          <a class="ant-dropdown-link" href="javascript:;">
            Case Action <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <span>
                <a-icon
                  type="check-circle"
                  theme="twoTone"
                  two-tone-color="#52c41a"
                /> Approved
              </span>
            </a-menu-item>
            <a-menu-item>
              <span>
                <a-icon
                  type="stop"
                  theme="twoTone"
                  two-tone-color="red"
                /> Failed</span>
            </a-menu-item>
            <a-menu-item>
              <span>
                <a-icon
                  type="warning"
                  theme="twoTone"
                  two-tone-color="orange"
                /> To be revised</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
      <a-col :lg="6" :sm="8" class="mb-15">
        <a-card-meta
          title="Assigner"
        >
          <template slot="description">
            <p>{{ info.assigner }}</p>
          </template>
        </a-card-meta>
      </a-col>
      <a-col :lg="6" :sm="8" class="mb-15">
        <a-card-meta
          title="Source Language"
        >
          <template slot="description">
            <p>{{ languages[info.sourcetLang] }}</p>
          </template>
        </a-card-meta>
      </a-col>
      <a-col :lg="6" :sm="8" class="mb-15">
        <a-card-meta
          title="Target Language"
        >
          <template slot="description">
            <p>{{ languages[info.targetLang] }}</p>
          </template>
        </a-card-meta>
      </a-col>
      <a-col :lg="6" :sm="8" class="mb-15">
        <a-card-meta
          title="Due Date"
        >
          <template slot="description">
            <p>{{ info.dueDate }}</p>
          </template>
        </a-card-meta>
      </a-col>
      <a-col :sm="16">
        <a-card-meta
          title="Comment"
        >
          <template slot="description">
            <p>{{ info.comment }}</p>
          </template>
        </a-card-meta>
      </a-col>
    </a-card>
    <div class="mt-15">
      <a-affix :offset-top="0">
        <div class="fixed-buttons">
          <div class="text-right">
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
        </div>
      </a-affix>
      <a-table
        :loading="tableLoading"
        :columns="columns"
        :data-source="table"
        bordered
        :pagination="false"
      >
        <!-- <span slot="rowName" slot-scope="lang, row">{{ editLangColumn[row.key] }}</span> -->
        <span slot="source">
          <span v-if="info">{{ languages[info.sourceLang] }}</span>
          <span v-else> Source Language </span>
        </span>
        <span slot="target">
          <span v-if="info">{{ languages[info.targetLang] }}</span>
          <span v-else> Target Language </span>
        </span>
        <template slot="sourceText" slot-scope="value">
          <div class="product-content highlightable" v-text="sanitize(value)" />
        </template>
        <template slot="targetLang" slot-scope="value">
          <div class="product-content highlightable" v-text="sanitize(value)" />
        </template>
      </a-table>
    </div>
    <Memo :visible.sync="memoVisible" :comments="comments" />
    <Dictionary :visible.sync="dictVisible" />
  </a-row>
</template>

<script>
import { caseStatus, languages, editLangColumn } from '@/config/constants';
import { Memo, Dictionary } from '@/components/drawer';
import sanitizeHtml from 'sanitize-html';

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

const comments = [
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
];

export default {
  name: 'AssignmentReview',
  components: {
    Memo,
    Dictionary
  },
  props: {
    caseId: {
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
      caseStatus,
      languages,
      editLangColumn,
      columns,
      tableLoading: true,
      memoVisible: false,
      dictVisible: false,
      comments,
      info: {
        productName: '【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店)',
        targetLang: 'en',
        sourcetLang: 'zh-tw',
        assigner: 'Coco',
        statusManager: 'Ella',
        acceptor: '小K',
        caseStatus: 's3',
        updated: '2019-6-3',
        dueDate: '2019-8-10',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita laborum tempore, incidunt vitae eveniet rem tenetur corrupti hic saepe suscipit accusamus repudiandae laboriosam ipsa ratione quia repellat neque eum!'
      }
    };
  },
  computed: {
    table() {
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
  mounted() {
    setTimeout(() => {
      this.tableLoading = false;
    }, 500);
  },
  methods: {
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
.fixed-buttons {
  background: #fff;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 20px;
}
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
.case-action {
  margin-top: 20px;
  .ant-dropdown-menu {
    .ant-dropdown-menu-item {
      font-size: 16px;
      .anticon {
        margin-right: 5px;
      }
    }
  }
}
.ant-card-head-title {
  p {
    margin-bottom: 0;
  }
}
</style>
