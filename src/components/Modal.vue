<template>
  <slot></slot>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensure it's above other content */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
}
</style>
