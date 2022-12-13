<template>
  <div class="home">
    <div v-if="hasMemos">
      <p>{{ memos.length }} memos here</p>
      <ul>
        <li v-for="memo in memos" :key="memo.id">
          {{ memo.title }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No Memo<br>
        Go <router-link to="/new">'New memo'</router-link> to add new memo</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    memos () {
      return this.$store.state.memos
    },
    hasMemos () {
      return this.$store.getters.getCount
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
li a {
  color: "#999";
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>