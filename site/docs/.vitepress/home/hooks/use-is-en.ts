import { ref, onMounted } from "vue";
export function useIsEn() {
  const isEn = ref<boolean>(false);
  const vi = "vi_lang";

  onMounted(() => {
    localStorage.getItem(vi) === "en-US"
      ? (isEn.value = true)
      : (isEn.value = false);

    window.addEventListener("setItemEvent", function (e: any) {
      const val = e.newValue;
      val === "en-US" ? (isEn.value = true) : (isEn.value = false);
    });
  });

  return {
    isEn,
  };
}

export function useData(data: any, dataEn: any) {
  return {
    data,
    dataEn,
  };
}
