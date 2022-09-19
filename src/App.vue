<template>
  <div class="app">
    <div>
      <form>
        <h4>создание поста</h4>
        <input
          v-bind:value="title"
          @input="inputTitle"
          class="input"
          type="text"
          placeholder="название"
        />
        <input
          v-bind:value="body"
          @input="body = $event.target.value"
          class="input"
          type="text"
          placeholder="описание"
        />
        <button class="btn" @click="createPost">создать</button>
      </form>
    </div>

    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "title 1", body: "body 1" },
        { id: 2, title: "title 2", body: "body 2" },
        { id: 3, title: "title 3", body: "body 3" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {},
    inputTitle(event) {
      this.title = event.target.value;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  margin-top: 15px;
  border: 2px solid teal;
  padding: 15px;
}

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
