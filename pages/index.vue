<template>
  <div class="container mx-auto">
    <div v-if="loading || pending">
      <ArticleLoading v-for="(item) in 10" />
    </div>
    <div v-else>
      <template v-for="(article, i) in articles.articles">
        <Article :article="article" />
      </template>
    </div>
    <div>
      <Pagination :totalPages="totalPages" v-on:page="handleClick" />
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { getArticles } from '@/API.js'
definePageMeta({
  layout: "custom",
});
const runtimeConfig = useRuntimeConfig()
let totalPages = ref(null)
const limit = 10
const { data: articles, pending } = await useLazyAsyncData('articles', () => $fetch(`${runtimeConfig.public.apiBase}` + `${getArticles(limit)}`))
totalPages.value = Math.floor(articles.value.articlesCount / limit) + 1;
const loading = ref(false)


async function handleClick(params) {
  loading.value = true
  const data = await $fetch(`${runtimeConfig.public.apiBase}` + `${getArticles(limit, (params - 1) * 10)}`, { method: 'GET', })
  articles.value = data;
  loading.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
  