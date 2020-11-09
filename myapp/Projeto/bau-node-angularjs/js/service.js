var App = angular.module('services', []);

App.factory('JogadoresService', function($http, API){
	return {
		list: function(){
			return $http.get(API+'jogadores');
		},
		create: function(item){
			return $http.post(API+'jogadores', item);
		},
		getById: function(id){
			return $http.get(API+'jogadores/'+id);	
		},
		update: function(item, id){
			return $http.put(API+'jogadores/'+id, item);	
		},
		delete: function(id){
			return $http.delete(API+'jogadores/'+id);
		}
	}
})