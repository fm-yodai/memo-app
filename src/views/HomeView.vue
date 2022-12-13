<template>
  <div class="home">
    <ul>
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    memos () {
      return this.$store.state.memos
    }
  }
}
</script>