<template>
  <div class="app">
    <h1>страница с постами</h1>
    <div class="app-btns">
      <my-button @click="dialogVisible = true">создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <div v-if="isPostsLoading">Загрузка...</div>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialod";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    MySelect,
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
      isPostsLoading: true,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" },
      ],
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
    async fetchPosts() {
      try {
        setTimeout(async () => {
          const responce = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.isPostsLoading = false;
          this.posts = responce.data;
        }, 100);
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
  },
  mounted() {
    this.fetchPosts();
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

.app-btns {
  display: flex;
  justify-content: space-between;
}
</style>
