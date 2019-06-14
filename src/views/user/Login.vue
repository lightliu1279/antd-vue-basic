<template>
  <a-layout id="login">
    <a-layout-header />
    <a-layout-content>
      <div class="form-content">
        <h1 class="text-center app-title">
          <span class="kkday">
            <img src="@/assets/img/kkday_logo.svg" alt="">
          </span> Translation Accelerator
        </h1>
        <a-divider>login</a-divider>
        <!-- <a-alert type="error" message="API error or login error text" closable class="mb-15" /> -->
        <a-form
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'Email',
                {
                  rules: [
                    { required: true, message: 'Please input your email' }
                  ],
                  validateTrigger: 'change'
                }
              ]"
              :disabled="loading"
              placeholder="Email"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'Password',
                { rules: [{ required: true, message: 'Please input your password' }] }
              ]"
              :disabled="loading"
              type="password"
              placeholder="Password"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                }
              ]"
              :disabled="loading"
            >
              Remember me
            </a-checkbox>
            <!-- <a
              class="login-form-forgot"
              href=""
            >
              Forgot password
            </a> -->
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              :loading="loading"
            >
              Log in
            </a-button>
            <!-- Or
            <a href="">
              register now
            </a> -->
          </a-form-item>
        </a-form>
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script>
import Footer from '@/components/layout/Footer';

export default {
  name: 'Login',
  components: {
    Footer
  },
  data() {
    return {
      loading: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          setTimeout(() => {
            this.$router.push({ name: 'index' });
          }, 2000);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  @import '@/components/layout/style/utils.scss';

  #login {
      min-height: 100vh;

      .ant-layout-header {
        background: transparent;
      }
      .ant-layout-content {
        display: flex;
        justify-content: center;
      }
      .form-content {
        width: 50%;
        max-width: 400px;
        height: 100%;
        margin-top: 60px;

        .ant-divider {
          margin-top: 45px;
          &:before,
          &:after {
            border-top: 1px solid #dedede;
          }
        }
        .app-title {
          font-weight: 300;
        }
      }
      .login-form {
        .login-form-forgot {
          float: right;
        }
        .login-form-button {
          width: 100%;
        }
      }
  }
</style>

