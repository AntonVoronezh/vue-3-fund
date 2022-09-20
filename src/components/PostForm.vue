<template>
  <form @submit.prevent>
    <h4>создание поста</h4>
    <my-input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="название"
    />
    <my-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="описание"
    />
    <my-button class="btn" @click="createPost">создать</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MuInput";
import MyButton from "@/components/UI/MuButton";
export default {
  components: {MyButton, MyInput},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);

      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}
</style>
