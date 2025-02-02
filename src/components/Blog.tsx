import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  data: CollectionEntry<"blog">[]
}

export default function Blog({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([])

  createEffect(() => {
    setPosts(data.filter((entry) => 
      Array.from(filter()).every((value) => 
        entry.data.tags.some((tag:string) => 
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
    ))
  })

  function toggleTag(tag: string) {
    setFilter((prev) => 
      new Set(prev.has(tag) 
        ? [...prev].filter((t) => t !== tag) 
        : [...prev, tag]
      )
    )
  }

  return (
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <div class="text-sm uppercase">
          SHOWING {posts().length} OF {data.length} POSTS
        </div>
        <div>
          <div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div>
          <select onChange={(e) => toggleTag(e.currentTarget.value)} class="w-full px-2 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15 transition-colors duration-300 ease-in-out">
            <option value="" disabled selected>Select a tag</option>
            <For each={tags}>
              {(tag) => (
                <option value={tag} class={cn(filter().has(tag) && "text-black dark:text-white")}>
                  {tag}
                </option>
              )}
            </For>
          </select>
        </div>
      </div>
      <div class="flex flex-col">
        <ul class="flex flex-col gap-3">
          {posts().map((post) => (
            <li>
              <ArrowCard entry={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
