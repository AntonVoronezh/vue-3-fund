<template>
  <input class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border-collor: teal;
  padding: 10px;
  margin-bottom: 5px;
}
</style>
