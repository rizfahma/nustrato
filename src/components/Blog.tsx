import type { CollectionEntry } from "astro:content"
import { createSignal, createMemo, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"

type Props = {
  data: CollectionEntry<"blog">[]
}

const POSTS_PER_PAGE = 8

export default function Blog({ data }: Props) {
  const [currentPage, setCurrentPage] = createSignal(1)
  const totalPages = Math.ceil(data.length / POSTS_PER_PAGE)

  const paginatedPosts = createMemo(() => {
    const start = (currentPage() - 1) * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE
    return data.slice(start, end)
  })

  const pageNumbers = createMemo(() => {
    const current = currentPage()
    if (totalPages <= 3) {
      const pages = []
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
      return pages
    }
    
    if (current <= 2) return [1, 2, 3]
    if (current >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages]
    
    return [current - 1, current, current + 1]
  })

  return (
    <div class="flex flex-col gap-6">
      <div class="text-sm uppercase mb-6">
        SHOWING {paginatedPosts().length} OF {data.length} POSTS
      </div>
      <div class="flex flex-col gap-6">
        <ul class="flex flex-col gap-3">
          <For each={paginatedPosts()}>
            {(post) => (
              <li>
                <ArrowCard entry={post} />
              </li>
            )}
          </For>
        </ul>
        
        <div class="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage() === 1}
            class={cn(
              "px-3 py-2 rounded transition-colors duration-300 ease-in-out text-sm",
              "bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            Previous
          </button>
          
          <For each={pageNumbers()}>
            {(page) => (
              <button
                onClick={() => setCurrentPage(page)}
                class={cn(
                  "px-3 py-2 rounded transition-colors duration-300 ease-in-out text-sm",
                  currentPage() === page
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15"
                )}
              >
                {page}
              </button>
            )}
          </For>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage() === totalPages}
            class={cn(
              "px-3 py-2 rounded transition-colors duration-300 ease-in-out text-sm",
              "bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
