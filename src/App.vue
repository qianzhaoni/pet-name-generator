<template>
  <nav class="language-switcher">
    <button 
      v-for="locale in availableLocales" 
      :key="locale"
      @click="changeLocale(locale)"
      :class="{ active: currentLocale === locale }"
    >
      {{ locale.toUpperCase() }}
    </button>
  </nav>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale: currentLocale, availableLocales } = useI18n()
const router = useRouter()

const changeLocale = (newLocale: string) => {
  currentLocale.value = newLocale
  router.push(`/${newLocale}`)
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f3f4f6;
}

.language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
}

.language-switcher button {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.language-switcher button.active {
  background: #6366f1;
  color: white;
  border-color: #6366f1;
}

.language-switcher button:hover {
  background: #6366f1;
  color: white;
  border-color: #6366f1;
}
</style> 