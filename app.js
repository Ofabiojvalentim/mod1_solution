(function(){
'use stric';

angular.module('LunchCheck',[])

.controller('LunchCheckController',DILunchCheckController);

	DILunchCheckController.$inject = ['$scope'];


	function DILunchCheckController($scope){

		$scope.message = "";
		$scope.inputMessage = "";

		$scope.checkLunch = function(){
		
		$scope.message = ReturnQtd($scope.inputMessage);


			function ReturnQtd(string){

				var text = string.split(",");
				var qtdpalavras = text.length;

				if($scope.inputMessage.length < 1){
					return "Please enter data first"
				}

				text.forEach(checagem);

				function checagem(item){

					var valor = item.trim();

					if(valor < 1){
						qtdpalavras--;
					}
				}

				if (qtdpalavras <= 3){
					return "Enjoy!"
				}
				if (qtdpalavras > 3){
					return "Too much"
				}


						
			};

			
		};

	};


})();
