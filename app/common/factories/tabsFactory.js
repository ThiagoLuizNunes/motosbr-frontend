(function () {
  angular.module('motos-app').factory('tabs', [ TabsFactory ])

  function TabsFactory() {
    /*Exibe apenas as tabelas com propriedade TRUE*/
    /*OBJECT DESTRUCTURING*/
    function show(owner, {
      tabList = false,
      tabCreate = false,
      tabSearch = false,
      tabUpdate = false,
      tabDelete = false
    }) {
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabSearch = tabSearch
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
    }
    return { show }
  }
})()
