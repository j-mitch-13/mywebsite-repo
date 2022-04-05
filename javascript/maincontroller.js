app.controller('MainController', ['$scope', function($scope){
	$scope.todo = {list: ["Clean my room", "Go to the store", "Cracking the interview"],

				  };
	
	$scope.books = {
		list: []
	};

	$scope.addItem = () => {
		$scope.list.push($scope.addToDo);
	}
}])
