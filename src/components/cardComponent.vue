<script setup>
const props = defineProps(["cardTitle", "cardText"]);
</script>


<template>
    <div class="card">
      <h4 class="card-title">
        {{ cardTitle }}
      </h4>
      <p class="card-text">{{ cardText }}</p>
    </div>


    <section class="section container">
          <h1 class="title">Show / Hide Password In Vue</h1>
          <p class="content">
            This Pen demonstrates a feature that lets the user view the unmasked contents of a password field. A <code>showPassword</code> flag controls whether or not the user is working with a type="text" or type="password" input control. Type in the password field and press the eye icon to show or hide the password.
          </p>
          <div class="columns is-mobile is-centered has-text-centered">
            <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <div class="card">
                <div class="card-content">
                  <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                      <input type="text" class="input" />
                    </div>
                  </div>
                  <label class="label">Password</label>
                  <div class="field has-addons">
                    <div class="control is-expanded">
                      <input
                        :type="showPassword ? 'text' : 'password'"
                        class="input"
                        v-model="password"
                      />
                    </div>
                    <div class="control">
                      <button class="button" @click="toggleShow">
                        <span class="icon is-small is-right">
                          <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button class="button is-success card-footer-item">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</template>

<style scoped>
.card{
    max-width: 292px;
    width: 100%;
    padding: 24px;
    background-color: rgba(117, 87, 211, 0.10);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .card-title{
    color: #211F26;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.16px;
  }
  .card-text{
    color: rgba(33, 31, 38, 0.60);
    font-size: 14px;
    line-height: 21.84px;
    letter-spacing: 0.14px;
  }

</style>