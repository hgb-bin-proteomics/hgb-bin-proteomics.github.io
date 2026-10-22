<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** Name of the software. */
  title: string;
  /** Short description of the software. Rendered in italics. */
  description: string;
  /** Logo of the software (optional). Rendered at a fixed size on the left. */
  logo?: string;
  /** URL of the software's website (optional). */
  website?: string;
  /** URL of the software's code repository (optional). */
  repository?: string;
  /** URL of the software's publication (optional). */
  publication?: string;
}

const props = defineProps<Props>();

// always in the fixed order: Website, Repository, Publication
const links = computed(() =>
  [
    { label: "Website", href: props.website },
    { label: "Repository", href: props.repository },
    { label: "Publication", href: props.publication },
  ].filter((link) => link.href)
);
</script>

<template>
  <div class="software-card">
    <div class="software-card__header">
      <img
        v-if="logo"
        class="software-card__logo"
        :src="logo"
        :alt="`${title} logo`"
      />
      <div class="software-card__text">
        <p class="software-card__title">{{ title }}</p>
        <p class="software-card__description">{{ description }}</p>
      </div>
    </div>
    <div v-if="links.length" class="software-card__buttons">
      <a
        v-for="link in links"
        :key="link.label"
        class="software-card__button"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        >{{ link.label }}</a
      >
    </div>
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

.software-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.software-card__logo {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.software-card__text {
  flex: 1;
  min-width: 0;
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

.software-card__buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px !important;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.software-card__button,
.vp-doc a.software-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition:
    color 0.25s,
    background-color 0.25s,
    border-color 0.25s;
}

.software-card__button:hover,
.vp-doc a.software-card__button:hover {
  background-color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
}
</style>
