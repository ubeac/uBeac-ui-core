<template>
  <div class="hello">
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ResourceService } from "@/services/api/vacation";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    
    ResourceService.getDepartures().then((x) => console.log(x));
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
