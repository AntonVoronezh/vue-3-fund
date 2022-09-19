<template>
  <form @submit.prevent>
    <h4>создание поста</h4>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="описание"
    />
    <button class="btn" @click="createPost">создать</button>
  </form>
</template>

<script>
export default {
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
.input {
  width: 100%;
  border-collor: teal;
  padding: 10px;
  margin-bottom: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  background: none;
  padding: 10px 15px;
  border: 1px solid teal;
}
</style>
