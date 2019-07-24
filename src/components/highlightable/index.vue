<template>
  <div
    v-show="visible"
    class="tools"
    :style="{
      left: `${xAxis}px`,
      top: `${yAxis}px`
    }"
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
              <h4 slot="title">
                {{ item.title }}
              </h4>
            </a-list-item-meta>
          </a-skeleton>
        </a-list-item>
      </a-list>
    </a-row>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Highlightable',
  props: {
    visible: {
      type: Boolean,
      default() {
        return false;
      }
    },
    xAxis: {
      type: Number,
      default: 0
    },
    yAxis: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loading: false,
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
  watch: {
    visible() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
  .tools {
    min-height: 30px;
    max-height: 400px;
    min-width: 200px;
    max-width: 300px;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #ddd;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-y: auto;
    box-shadow: 5px 5px 10px #eaeaea;
  }
</style>
