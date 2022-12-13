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
      return this.$store.state.memos.length
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
li {
  list-style: none;
  text-align: center;
}
</style>