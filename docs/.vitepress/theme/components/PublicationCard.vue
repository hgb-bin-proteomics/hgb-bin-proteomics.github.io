<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** Title of the publication. */
  title: string;
  /** Authors, e.g. "Doe, J.; Smith, A.". Rendered in italics. */
  authors: string;
  /** Name of the journal. */
  journal: string;
  /** Volume of the journal (optional). */
  volume?: string | number;
  /** Issue of the journal (optional). */
  issue?: string | number;
  /** DOI of the publication. Bare DOIs get a "https://doi.org/" prefix automatically. */
  doi?: string;
  /** Direct URL to the publication. Used when no DOI is given. */
  url?: string;
}

const props = defineProps<Props>();

const href = computed<string | undefined>(() => {
  if (props.doi) {
    if (/^https?:\/\//i.test(props.doi)) return props.doi;
    return `https://doi.org/${props.doi.replace(/^doi:\s*/i, "")}`;
  }
  return props.url;
});

const linkAttrs = computed(() =>
  href.value
    ? { href: href.value, target: "_blank", rel: "noopener noreferrer" }
    : {}
);

const identifier = computed(() => props.doi ?? props.url ?? "");

const citation = computed(() => {
  let text = props.journal;
  if (props.volume !== undefined && props.volume !== "") {
    text += `, Volume ${props.volume}`;
  }
  if (props.issue !== undefined && props.issue !== "") {
    text += `, Issue ${props.issue}`;
  }
  return text;
});
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    class="publication-card"
    v-bind="linkAttrs"
  >
    <p class="publication-card__title">{{ title }}</p>
    <p class="publication-card__authors">{{ authors }}</p>
    <p class="publication-card__journal">{{ citation }}</p>
    <p v-if="identifier" class="publication-card__doi">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
      <span class="publication-card__doi-text">{{ identifier }}</span>
    </p>
  </component>
</template>

<style scoped>
.publication-card {
  display: block;
  margin: 16px 0;
  padding: 20px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-2);
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: normal;
  transition:
    border-color 0.25s,
    background-color 0.25s,
    box-shadow 0.25s,
    transform 0.25s;
}

.publication-card:is(a):hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  transform: translateY(-2px);
}

.publication-card p {
  margin: 0;
}

.publication-card__title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.publication-card:is(a):hover .publication-card__title {
  color: var(--vp-c-brand-1);
}

.publication-card__authors {
  margin-top: 8px !important;
  font-size: 14px;
  font-style: italic;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.publication-card__journal {
  margin-top: 4px !important;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.publication-card__doi {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px !important;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-brand-1);
  word-break: break-all;
}

.publication-card__doi svg {
  flex-shrink: 0;
  opacity: 0.75;
}

.publication-card:is(a):hover .publication-card__doi-text {
  text-decoration: underline;
}
</style>
