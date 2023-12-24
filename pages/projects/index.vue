<template>
  <h1>Projects</h1>
  <div>
    <!-- <ul>
      <li v-for="work in works" :key="work.id">
        <NuxtLink :to="`/projects/${work.slug}`">{{ work.title }}</NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import client from "@/graphql";
import query from "@/data/pages/works.js";

export default defineComponent({
  setup() {
    const works = ref<Works[]>([]);

    onMounted(async () => {
      try {
        works.value = (
          await client.request<{ allWorks: Works[] }>(query)
        ).allWorks;
        console.log(works.value);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    });

    return {
      works,
    };
  },
});
</script>
