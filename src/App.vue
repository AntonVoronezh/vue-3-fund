<template>
  <button @click="addLike">likes</button>
  <button @click="addDisLike">dizlikes</button>

  <div>
    likes <strong>{{ likes }}</strong>
  </div>
  <div>
    dizlikes <strong>{{ dizlikes }}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dizlikes: 0,
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

<style></style>
