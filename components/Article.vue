<template>
    <div class="article">
        <div class="article-meta">
            <div class="article-author">
                <div class="author-img"></div>
                <div class="flex flex-col">
                    <div class="author-username">Magda Parry</div>
                    <div class="author-date">October 9, 2022</div>
                </div>
            </div>
            <div class="article-like-btn">Like</div>
        </div>
        <div class="article-title">
            At quia eos consectetur reiciendis unde rerum ducimus vitae, et exercitationem quas labore unde reiciendis
            quas in exercitationem cupiditate at reiciendis qui nulla, at cupiditate reiciendis voluptatibus facilis hic
            fugit ullam rerum rerum fugit aliquid, consequuntur, quae, reiciendis sapiente tenetur quos, reiciendis
            neque error asperiores sequi, hic enim tenetur error.
            Blanditiis beatae quia tenetur esse.
            Reiciendis voluptatibus numquam beatae id repellat possimus sunt.
            At dicta repellat dicta nihil nostrum qui consectetur.
            Voluptatibus esse voluptatem aut fugit numquam eos hic dolores, nihil maiores esse, dicta cupiditate
            possimus sunt nihil, voluptate omnis, enim at quae dicta necessitatibus.
        </div>

        <div class="article-description">
            Veniam commodi autem voluptatibus eos dolor quas reprehenderit. Praesentium cupiditate tempore et
            reprehenderit. Deleniti exercitationem illum maiores. Reprehenderit odio in ea voluptatem ut ut ullam.
        </div>


        <div class="flex justify-between items-center">
            <div class="read-more">Read more</div>
            <ul class="tags">
                <li class="tag-pill">qui</li>
                <li class="tag-pill">qui</li>
                <li class="tag-pill">qui</li>
                <li class="tag-pill">qui</li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.article {
    @apply flex flex-col py-6;

    .article-meta {
        @apply flex justify-between mb-4;

        .article-author {
            @apply flex items-center gap-4;

            .author-img {
                @apply w-8 h-8 bg-red-200 rounded-full;
            }

            .author-username {
                @apply text-green-500;
            }

            .author-date {
                @apply text-xs text-gray-400;
            }
        }

        .article-like-btn {
            @apply flex items-center justify-center px-2 text-green-500 border border-green-500;
        }
    }

    .article-title {
        @apply text-xl text-gray-800 mb-1;
    }

    .article-description {
        @apply text-gray-400 mb-4;
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