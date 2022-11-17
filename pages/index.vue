<template>
  <div class="banner">
    <h1>conduit</h1>
    <p>A place to share your knowledge.</p>
  </div>
  <div class="container mx-auto">
    <div class="main">
      <article class="main-article">
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
      </article>
      <aside class="aside">
        <div class="tags-title">Popular Tags</div>
        <div class="flex flex-wrap gap-2">
          <div class="tag-default" v-for="tag in tags.tags">{{ tag }}</div>
        </div>
      </aside>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { getArticles, getTags } from '@/API.js'
definePageMeta({
  layout: "custom",
});
const runtimeConfig = useRuntimeConfig()
let totalPages = ref(null)
const limit = 10

const { data: articles, pending } = await useLazyAsyncData('articles', () => $fetch(`${runtimeConfig.public.apiBase}` + `${getArticles(limit)}`))
totalPages.value = Math.floor(articles.value.articlesCount / limit) + 1;
const loading = ref(false)

const { data: tags } = await useLazyAsyncData('tags', () => $fetch(`${runtimeConfig.public.apiBase}` + `${getTags()}`))


async function handleClick(params) {
  loading.value = true
  const data = await $fetch(`${runtimeConfig.public.apiBase}` + `${getArticles(limit, (params - 1) * 10)}`, { method: 'GET', })
  articles.value = data;
  loading.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
<style lang="scss">
.main-article {
  @apply w-2/3;
}

.main {
  @apply flex justify-between gap-8;
}

.aside {
  @apply w-1/3 h-max p-2 bg-slate-200;
}

.banner {
  @apply  p-8 mb-8 flex flex-col items-center justify-center ;
  background: #5CB85C;
  h1{
    @apply text-5xl text-white mb-4 font-extrabold;
  }
  p{
    @apply text-white;
  }
}

.tag-default {
  @apply text-white text-sm px-2 bg-slate-500 rounded-xl;
}

.tags-title {
  @apply mb-1;
}
</style>
  