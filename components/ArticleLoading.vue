<template>
    <div class="article-loading">
        <div class="article-meta">
            <div class="article-author">
                <div class="author-img"></div>
                <div class="flex flex-col gap-2">
                    <div class="author-username"></div>
                    <div class="author-date"></div>
                </div>
            </div>
            <div class="article-like-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <span></span>
            </div>
        </div>
        <div class="article-title">
            
        </div>

        <div class="article-description">
            
        </div>


        <div class="flex justify-between items-center">
            <div class="read-more">Read more</div>
            <ul class="tags">
                <li class="tag-pill"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.article-loading {
    @apply flex flex-col py-6 border-gray-200 border-t;

    .article-meta {
        @apply flex justify-between mb-4;

        .article-author {
            @apply flex items-center gap-4;

            .author-img {
                @apply w-8 h-8 animate-pulse bg-gray-600 rounded-full;
            }

            .author-username {
                @apply w-20 h-4 bg-gray-600 animate-pulse;
            }

            .author-date {
                @apply w-10 h-4 bg-gray-600 animate-pulse;
            }
        }

        .article-like-btn {
            @apply flex items-center justify-center px-2 text-green-500 border border-green-500;
        }
    }

    .article-title {
        @apply bg-gray-600 w-full h-10 animate-pulse;
    }

    .article-description {
        @apply bg-gray-600 w-full h-20 animate-pulse;
    }

    .tags {
        @apply flex items-center gap-2;

        .tag-pill {
            @apply  py-0 px-3 text-sm text-gray-300 border border-gray-300 rounded-xl cursor-pointer;
        }
    }

    .read-more{
        @apply text-gray-300;
    }
}
</style>