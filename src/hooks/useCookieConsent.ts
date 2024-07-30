import { ref, onMounted, computed } from "vue";

export default function useCookieConsent() {
  const dialogVisible = ref(false);

  onMounted(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === null) {
      dialogVisible.value = true;
    }
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    dialogVisible.value = false;
    window.dispatchEvent(new Event("cookie-consent-changed"));
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    dialogVisible.value = false;
  };

  const dialogWidth = computed(() => {
    return window.innerWidth <= 600 ? "65%" : "33%";
  });

  return {
    dialogVisible,
    acceptCookies,
    declineCookies,
    dialogWidth,
  };
}
