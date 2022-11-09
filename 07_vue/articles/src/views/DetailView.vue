<template>
  <div>
    <h1>Detail</h1>
    <p>글 번호 : {{ article?.id }}</p>
    <p>제목 : {{ article?.title }}</p>
    <p>내용 : {{ article?.content }}</p>
    <!-- <p>작성시간 : {{ article?.createdAt }}</p> -->
    <p>작성시간 : {{ articleCreatedAt }}</p>
    <button @click="deleteArticle(article.id)">Delete</button>
    <router-link :to="{name:'index'}">뒤로가기</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'DetailView',
  data() {
    return {
      article:null
    }
  },
  methods: {
    getArticleById() {
      const id = this.$route.params.articleId
      for (const article of this.articles) {
        if (article.id === Number(id)) {
          this.article = article
          break
        }
      }      
      if (!this.article) {
        this.$router.push({ name: 'NotFound404' })
      }
    },
    deleteArticle(id) {
      this.$store.commit('DELETE_ARTICLE',id)
      this.$router.push('/')
    },
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }, 
    articleCreatedAt(){
      const article = this.article
      const createdAt = new Date(article?.createdAt).toLocaleString()
      return createdAt
    } 
  },
  created() {
    this.getArticleById()
  },
}
</script>
