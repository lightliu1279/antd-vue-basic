<template>
  <a-row>
    <a-col :span="24" class="mb-15">
      <h4>搜尋</h4>
      <a-button type="primary" icon="search" class="mr-10">
        搜尋
      </a-button>
      <a-button type="primary" icon="search" disabled class="mr-10">
        搜尋
      </a-button>
      <a-button type="primary" icon="search" :loading="true" class="mr-10">
        搜尋
      </a-button>
    </a-col>
    <a-col :span="24" class="mb-15">
      <h4>新增/編輯</h4>
      <a-button type="primary" icon="plus" class="mr-10">
        新增
      </a-button>
      <a-button type="primary" icon="form" class="mr-10">
        編輯
      </a-button>
      <a-button type="primary" icon="plus" disabled class="mr-10">
        新增
      </a-button>
      <a-button type="primary" icon="plus" :loading="true" class="mr-10">
        新增
      </a-button>
    </a-col>
    <a-col :span="24" class="mb-15">
      <h4>確定/儲存/送出</h4>
      <a-button type="primary" icon="check" class="mr-10">
        確定
      </a-button>
      <a-button type="primary" icon="check" disabled class="mr-10">
        確定
      </a-button>
      <a-button type="primary" icon="check" :loading="true" class="mr-10">
        確定
      </a-button>
    </a-col>

    <a-col :span="24" class="mb-15">
      <h4>取消/關閉</h4>
      <a-button type="default" icon="stop" class="mr-10">
        取消
      </a-button>
      <a-button type="default" icon="stop" disabled class="mr-10">
        取消
      </a-button>
      <a-button type="default" icon="stop" :loading="true" class="mr-10">
        取消
      </a-button>
    </a-col>

    <a-col :span="24" class="mb-15">
      <h4>刪除</h4>
      <a-button type="danger" icon="delete" class="mr-10">
        刪除
      </a-button>
      <a-button type="danger" icon="delete" disabled class="mr-10">
        刪除
      </a-button>
      <a-button type="danger" icon="delete" :loading="true" class="mr-10">
        刪除
      </a-button>
    </a-col>

    <a-col :span="24" class="mb-15">
      <h4>with 通知提醒</h4>
      <a-button
        type="default"
        class="mr-10"
        @click="openNotificationWithIcon('success')"
      >
        成功通知
      </a-button>
      <a-button
        type="default"
        class="mr-10"
        @click="openNotificationWithIcon('error')"
      >
        失敗通知
      </a-button>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: 'Notification Title',
        description: 'This is the content of the notification.'
      });
    }
  }
};
</script>
