<template>
  <a-drawer
    width="450"
    placement="right"
    :visible.sync="$visible"
    @close="() => $visible = false"
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
</template>

<script>
export default {
  name: 'Memo',
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    comments: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    $visible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    }
  }
};
</script>

