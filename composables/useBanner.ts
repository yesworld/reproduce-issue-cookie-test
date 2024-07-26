export default function useBanner() {
  const token = useCookie<null|string>('banner')

  const showBanner = computed(() => token.value === 'show');

  function dismissBanner() {
    token.value = null // doesn't work
    // token.value = '' // it works!
  }

  const activeBanner = () => {
    token.value = 'show';
  }

  const toggleBanner = () => {
    token.value = token.value === 'show' ? null : 'show' // doesn't work
    // token.value = token.value === 'show' ? '' : 'show' // it works!
  }

  return {
    showBanner,
    dismissBanner,
    activeBanner,
    toggleBanner,
  }
}
