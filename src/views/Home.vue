<template>
  <div class="home">
    <SearchBox />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SearchBox from "@/components/vacation/SearchBox";

export default defineComponent({
  name: 'Home',
  components: {
    SearchBox,
  },
});
</script>
