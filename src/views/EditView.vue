<template>
  <div>
    Edit memo
    <MemoForm :memo="memo" v-if="memo" />
    <p v-else>No memo specified</p>
  </div>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue';

export default {
  name: "EditView",
  components: {
    MemoForm
  },
  computed: {
      memo() {
          let id = parseInt(this.$route.params.id);
          return this.$store.getters.getMemoById(id);
      }
  }
}
</script>