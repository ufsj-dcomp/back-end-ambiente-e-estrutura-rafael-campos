var App = angular.module('controllers', []);

App.controller('ListCtrl', function($scope, jogadoresService, $routeParams, $location){
	$scope.jogadores = [];
	$scope.notFound = false;
	jogadoresService.list().then(function(data){
		$scope.jogadores = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	});

	$scope.deletar = function(id){
		jogadoresService.delete(id).then(function(data){
			$location.path('/jogadores/list/delete-success');
		});	
	}
	
	handleMsgs($scope, $routeParams);
});	

App.controller('CreateCtrl', function($scope, jogadoresService, $location){
	$scope.cadastrar = function(item){
		jogadoresService.create(item).then(function(data){
			$location.path('/jogadores/list/add-success');
		});
	}
});	

App.controller('EditCtrl', function($scope, jogadoresService, $routeParams, $location){
	var id = $routeParams.id;
	jogadoresService.getById(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		jogadoresService.update(item, item.id).then(function(data){
			$location.path('/jogadores/list/edit-success');
		});
	}
});	

handleMsgs = function($scope, $routeParams) {
	var msg = $routeParams.msg;
	if (msg) {
		switch(msg) {
			case 'add-success':
				$scope.showMsg = true;
				$scope.msgClass = 'success';
				$scope.msg = 'Jogador adicionada com sucesso!';
				break;
			case 'edit-success':
				$scope.showMsg = true;
				$scope.msgClass = 'success';
				$scope.msg = 'Jogador atualizada com sucesso!';
				break;
			case 'delete-success':
				$scope.showMsg = true;
				$scope.msgClass = 'success';
				$scope.msg = 'Jogador removida com sucesso!';
				break;
		}
	}
}