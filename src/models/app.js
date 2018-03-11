export default {
  namespace: 'app',
  state: {
    menu: [
      {
        id: 1,
        icon: 'laptop',
        name: 'Dashboard',
        router: '/dashboard'
      }
    ],
    siderFold: false,
    darkTheme: false
  },
  reducers: {
    switchSider (state) {
      return {
        ...state,
        siderFold: !state.siderFold
      }
    }
  }
}
