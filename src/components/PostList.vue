<template>
  <div v-if="posts.length">
    <h3>Список</h3>
    <transition-group>
      <post-item
        v-for="post in posts"
        v-bind:key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>

  <div v-if="!posts.length">нет постов</div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
