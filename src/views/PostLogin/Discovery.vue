<template>
  <div class="base-layer">
    <div class="discovery-container">
    <EmailApp />
    </div>
  </div>
</template>

<script>
import EmailApp from "../../components/EmailApp.vue";

export default {
  components: {
    EmailApp,
  },
};
</script>

<style scoped>
.base-layer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  background-color: #f8f8f8;
  position: fixed;
}

.discovery-container {
  display: flex;
  max-width: 1400px;
  width: 100%;
  height: calc(100vh - 100px); /* Full viewport height minus navbar height */
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
  border-radius: 10px; /* Rounded corners */
  border: 0.5px solid #ccc;
  margin: 0 auto;
  overflow-y: auto; /* Ensures content stays within rounded borders */
  overflow-x: hidden;
}
</style>


