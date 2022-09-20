<template>
  <div class="app">
    <h1>страница с постами</h1>
    <my-button @click="dialogVisible = true">создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialod";

export default {
  components: {
    MyDialog,
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "title 1", body: "body 1" },
        { id: 2, title: "title 2", body: "body 2" },
        { id: 3, title: "title 3", body: "body 3" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(posts) {
      this.posts.push(posts);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
    fetchUsers(){

    }
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
</style>
