<template>
  <a-drawer
    width="450"
    placement="right"
    :visible="$visible"
    @close="() => $visible = false"
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
</template>

<script>
export default {
  name: 'Dictionary',
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

