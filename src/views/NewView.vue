<template>
  <div>
    Add memo
    <MemoForm />
  </div>
</template>

<script>
import MemoForm from '@/components/MemoForm.vue'
export default {
  name: 'NewView',
  components: {
    MemoForm
  }
}
</script>