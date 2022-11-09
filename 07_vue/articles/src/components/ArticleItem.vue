<template>
  <div>
    <p>글 제목 : {{article.title}}</p>
    <p>글 내용 : {{article.content}}</p>
    <button @click="detail">detail</button>
    <hr>    
  </div>
</template>

<script>

export default {
  props: {
    article: Object,
  },
  methods: {
    detail() {
      this.$router.push({name:'detail', params:{articleId:this.article.id}})
    }
  }
}
</script>

<style>

</style>