<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post-btns"><mu-button>удалить</mu-button></div>
  </div>
</template>

<script>
import MuButton from "@/components/UI/MuButton";
export default {
  components: {MuButton},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 15px;
  border: 2px solid teal;
  padding: 15px;
}

.post-btns {
  margin-top: 10px;
}

button {
  padding: 10px;
}
</style>
