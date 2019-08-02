<template functional>
  <div class="status-label">
    <template v-if="props.hasLink">
      <a-badge
        :status="$options.methods.handleStatus(props.status)"
        :text="`${props.label}${ props.editing ? ` - ${props.editing}` : '' }`"
      />
      <router-link
        :to="{
          name: 'CaseAssignment',
          params: {
            productOid: props.oid,
            targetLang: props.targetLang
          }
        }"
        class="assignment-link"
      >
        <span>Go to assign</span>
        <a-icon type="right" />
      </router-link>
    </template>
    <template v-else>
      <a-badge
        :status="$options.methods.handleStatus(props.status)"
        :text="props.label"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CaseStatusTag',
  data() {
    return {
      statusCondition: {
        processing: {

        }
      }
    };
  },
  methods: {
    handleStatus(status) {
      let badgeStatus = 'default';
      switch (status) {
        case 's2':
        case 's3':
        case 's7':
        case 's8':
          badgeStatus = 'processing';
          break;
        case 's4':
        case 's5':
          badgeStatus = 'warning';
          break;
        case 's6':
        case 's10':
          badgeStatus = 'error';
          break;
        case 's9':
          badgeStatus = 'success';
          break;
      }
      return badgeStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
.status-label {
  .ant-badge {
    ::v-deep .ant-badge-status-dot {
      width: 7px;
      height: 7px;
      top: -1px;
    }
  }
  .assignment-link {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .anticon {
      font-size: 12px;
      margin-left: 5px;
      margin-top: 2px;
    }
  }
}

</style>
