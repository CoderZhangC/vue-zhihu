import { ref, Ref, onMounted, onUnmounted } from 'vue'

const useClickOutside = (elementRef: Ref<HTMLElement | null>): Ref => {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      isClickOutside.value = !elementRef.value.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}

export default useClickOutside
