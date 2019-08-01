<template functional>
  <div>
    <template v-if="props.hasLink">
      <!-- <a-tag :color="props.color">
        <span>{{ props.label }}{{ props.editing ? ` - ${props.editing}` : '' }}</span>
      </a-tag> -->
      <a-badge :status="$options.methods.handleStatus(props.status)" />
      <span>{{ props.label }}{{ props.editing ? ` - ${props.editing}` : '' }}</span>

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

    <!-- <a-tag v-else :color="props.color">
      <span>{{ props.label }}</span>
    </a-tag> -->
    <template v-else>
      <!-- <a-badge status="success" /> {{ props.status }} -->
      <a-badge
        :status="$options.methods.handleStatus(props.status)"
      />{{ props.label }}
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
          badgeStatus = 'processing';
          break;
        case 's4':
        case 's5':
          badgeStatus = 'warning';
          break;
        case 's6':
        case 's8':
          badgeStatus = 'error';
          break;
        case 's9':
        case 's10':
          badgeStatus = 'success';
          break;
      }
      return badgeStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
  .ant-tag {
    font-size: 14px;
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
</style>
