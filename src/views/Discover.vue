<template>
  <div class="discoverPage">
    <h2>Discover Page</h2>

    <CreateBookmarkList />
  </div>
</template>

<script>
import CreateBookmarkList from "@/components/CreateBookmarkList.vue";

export default {
  name: "App",
  components: {
    CreateBookmarkList,
  },
};
</script>

<style scoped></style>
