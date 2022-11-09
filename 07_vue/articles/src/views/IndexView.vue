<template>
  <div>
    <h1>articles</h1>
    <button @click="toCreate">새글 작성하기</button>
    <ArticleItem
    v-for="(article,index) in articles" 
    :key="index"
    :article=article
  />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'IndexView',
  components: {
    ArticleItem,
  },
  methods: {
    toCreate() {
      this.$router.push('/create')
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
}
</script>
