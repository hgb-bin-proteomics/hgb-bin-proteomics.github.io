<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** Name of the software. */
  title: string;
  /** Short description of the software. Rendered in italics. */
  description: string;
  /** URL of the software's website (optional). */
  website?: string;
  /** URL of the software's code repository (optional). */
  repository?: string;
  /** URL of the software's publication (optional). */
  publication?: string;
}

const props = defineProps<Props>();

const links = computed(() =>
  [
    { label: "🔗 Website", href: props.website },
    { label: "💾 Repository", href: props.repository },
    { label: "📖 Publication", href: props.publication },
  ].filter((link) => link.href)
);
</script>

<template>
  <div class="software-card">
    <p class="software-card__title">{{ title }}</p>
    <p class="software-card__description">{{ description }}</p>
    <p v-if="links.length" class="software-card__links">
      <a
        v-for="link in links"
        :key="link.label"
        class="software-card__link"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        >{{ link.label }}</a
      >
    </p>
  </div>
</template>

<style scoped>
.software-card {
  display: block;
  margin: 16px 0;
  padding: 20px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-2);
  color: var(--vp-c-text-1);
  transition:
    border-color 0.25s,
    background-color 0.25s,
    box-shadow 0.25s;
}

.software-card:hover {
  border-color: var(--vp-c-brand-soft);
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
}

.software-card p {
  margin: 0;
}

.software-card__title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.software-card__description {
  margin-top: 8px !important;
  font-size: 14px;
  font-style: italic;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.software-card__links {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 12px !important;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 14px;
  line-height: 1.5;
}

.software-card__link,
.vp-doc a.software-card__link {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.software-card__link:hover,
.vp-doc a.software-card__link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>
