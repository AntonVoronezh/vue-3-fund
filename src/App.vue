<template>
  <div>
    <form>

    </form>
  </div>

  <div class="post" v-for="post in posts">
    <div><strong>Название: </strong> {{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
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
    };
  },
  methods: {
    addLike() {
      this.likes++;
    },
    addDisLike() {
      this.dizlikes++;
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

.post {
  margin-top: 15px;
  border: 2px solid teal;
  padding: 15px;
}
</style>
