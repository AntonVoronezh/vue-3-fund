<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.content {
  margin: auto;
  background: aliceblue;
  border-radius: 12px;
  min-height: 200px;
  min-width: 400px;
  padding: 20px;
}
</style>
