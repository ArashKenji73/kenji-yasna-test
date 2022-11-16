<template>
  <div>
    <div v-if="loading || pending">{{loading}}</div>
    <div v-else>
      <div class="container mx-auto">
        <template v-for="(article, i) in articles.articles">
          <Article :article="article" />
        </template>

        <Pagination :totalPages="totalPages" v-on:page="handleClick" />
      </div>
    </div>
    <div @click="changePage">change page</div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import {getArticles} from '@/API.js'
definePageMeta({
  layout: "custom",
});
const runtimeConfig = useRuntimeConfig()
let totalPages = ref(null)
const limit = 10
const { data: articles, pending } = await useLazyAsyncData('articles', () => $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles(limit)}`))
totalPages.value = Math.floor(articles.value.articlesCount/limit)+1;
const loading = ref(false)


async function changePage() {
  loading.value = true
  const data = await $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles(10,20)}`, { method: 'GET', })
  articles.value = data;
  loading.value = false
}

async function handleClick(params) {
  console.log(params);
  loading.value = true
  const data = await $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles(limit,(params-1)*10)}`, { method: 'GET', })
  articles.value = data;
  loading.value = false
}
</script>
  