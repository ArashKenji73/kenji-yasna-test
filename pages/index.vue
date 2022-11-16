<template>
  <div>
    <div v-if="loading || pending">{{loading}}</div>
    <div v-else>
      <div class="container mx-auto">
        <Article />
      </div>
      <pre>{{articles}}</pre>
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
const { data: articles, pending } = await useLazyAsyncData('articles', () => $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles()}`))
const loading = ref(false)
async function changePage() {
  loading.value = true
  const data = await $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles(10,20)}`, { method: 'GET', })
  articles.value = data;
  loading.value = false
}
</script>
  