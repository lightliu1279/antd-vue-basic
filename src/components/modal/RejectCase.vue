<template>
  <a-modal
    :visible="visible"
    :title="`Case: ${ rejectItem && rejectItem.caseId } `"
    @ok="() => { $emit('create') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-form
      :form="form"
    >
      <a-form-item
        label="Do you want to reject this case ?"
      >
        <a-textarea
          v-decorator="[
            'reason',
            {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            }
          ]"
          :rows="4"
          placeholder="reason"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  name: 'RejectModal',
  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    rejectItem: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  }
};
</script>
