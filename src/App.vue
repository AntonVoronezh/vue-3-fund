<template>
  <div class="app">
    <h1>страница с постами</h1>
    <my-input placeholder="поиск" v-model="searchQuery" />
    <div class="app-btns">
      <my-button @click="dialogVisible = true">создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <div v-if="isPostsLoading">Загрузка...</div>
    <div class="page-wrap">
      <div
        class="page"
        v-for="pageNum in totalPage"
        :key="pageNum"
        :class="{ 'current-page': pageNum === page }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div>
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" />
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
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "по названию" },
        { value: "body", name: "по описанию" },
      ],
      page: 1,
      limit: 10,
      totalPage: 0,
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
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.isPostsLoading = false;
          this.posts = responce.data;
          this.totalPage = Math.ceil(
            responce.headers["x-total-count"] / this.limit
          );
        }, 100);
      } catch (e) {
        console.log(e); // eslint-disable-line
      }
    },
    changePage(num) {
      this.page = num;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();

    },
    selectedSort() {
      // this.posts.sort((a, b) => {
      //   return a[newValue].localeCompare(b[newValue]);
      // });
    },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((el) =>
        el.title.includes(this.searchQuery)
      );
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

.app-btns {
  display: flex;
  justify-content: space-between;
}

.page-wrap {
  display: flex;
  margin: 15px 0;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 5px;
}

.current-page {
  border: 2px solid teal;
}
</style>
