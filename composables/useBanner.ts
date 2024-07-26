export default function useBanner() {
  const token = useCookie<null|string>('banner')

  const showBanner = computed(() => token.value === 'show');

  function dismissBanner() {
    token.value = null
  }

  const activeBanner = () => {
    token.value = 'show';
  }

  const toggleBanner = () => {
    token.value = token.value === 'show' ? null : 'show';
  }

  return {
    showBanner,
    dismissBanner,
    activeBanner,
    toggleBanner,
  }
}
