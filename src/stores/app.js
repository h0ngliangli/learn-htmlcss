// Utilities
import { defineStore } from "pinia";
// defineStore is a function that returns a function.
// defineStore takes two arguments:
//  the name of the store, and an object with the store's state
// and actions.
// To use:
//   import useXXXStore from ...
//   const store = useXXXStore()
//   store.funcName()
//   store.stateName = ...
// 关于设计：
// 在useAppStore第一次被import的时候，会调用defineStore()并返回访问store的方法。
// 每次调用useAppStore()都会返回app对应的store对象，因此defineStore()只会被调用一次。

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: "dark",
  }),
  actions: {
    funcToggleTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
    },
  },
});
