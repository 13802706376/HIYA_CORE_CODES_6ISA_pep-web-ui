const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  authorization: state => state.user.authorization,
  rememberMe: state => state.user.rememberMe,
  name: state => state.user.name,
  roles: state => state.user.roles,
  visitedViews: state => state.tagsView.visitedViews,
}
export default getters
