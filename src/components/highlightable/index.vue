<template>
  <div :style="{ 'position': 'relative' }">
    <portal to="highlightable">
      <div
        v-show="showTools"
        class="tools"
        :style="{
          left: `${x}px`,
          top: `${y}px`
        }"
        @mousedown.prevent=""
      >
        <a-row>
          <a-list
            item-layout="horizontal"
            :data-source="list"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-skeleton :loading="loading" active>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
                </a-list-item-meta>
              </a-skeleton>
            </a-list-item>
          </a-list>
        </a-row>
      </div>
    </portal>
    <slot />
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Highlightable',
  data() {
    return {
      x: 0,
      y: 0,
      showTools: false,
      selectedText: '',
      loading: true,
      list: [
        {
          title: 'Ant Design Title 1'
        },
        {
          title: 'Ant Design Title 2'
        },
        {
          title: 'Ant Design Title 3'
        },
        {
          title: 'Ant Design Title 4'
        }
      ]
    };
  },
  computed: {
    highlightableEl() {
      console.log(this.$slots.default[0].elm);
      return this.$slots.default[0].elm;
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.onMouseup);
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.onMouseup);
  },
  methods: {
    onMouseup() {
      this.loading = true;
      const selection = window.getSelection();
      const startNode = selection.getRangeAt(0).startContainer.parentNode;
      const endNode = selection.getRangeAt(0).endContainer.parentNode;
      console.log(startNode.isSameNode(this.highlightableEl));
      if (!startNode.isSameNode(this.highlightableEl) || !startNode.isSameNode(endNode)) {
        this.showTools = false;
        return;
      }
      const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect();
      if (!width) {
        this.showTools = false;
        return;
      }
      this.x = x + (width / 2);
      this.y = y + window.scrollY + 40;
      this.showTools = true;
      this.selectedText = selection.toString();
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },

    handleAction(action) {
      this.$emit(action, this.selectedText);
    }
  }
};
</script>

<style lang="scss" scoped>
  .tools {
    min-height: 30px;
    max-height: 600px;
    min-width: 200px;
    max-width: 300px;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    z-index: 1;
  }
</style>
