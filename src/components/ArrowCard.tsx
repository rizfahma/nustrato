import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({entry, pill}: Props) {
    return (
      <a href={`/${entry.collection}/${entry.slug}`} class="p-4 gap-3 flex items-center">
      <div class="w-full">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          }
          <div class="text-sm uppercase text-gray-600 dark:text-gray-400">
            {formatDate(entry.data.date)}
          </div>
        </div>
        <div class="font-semibold mt-3 text-gray-900 dark:text-white">
          {entry.data.title}
        </div>

        <div class="text-sm line-clamp-2 text-gray-600 dark:text-gray-300">
          {entry.data.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags?.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-400 dark:stroke-gray-500">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
   )
}
