(function(global) {
	function Nav(agents, obstacles){
        this.world = new Nav.World();
        this.world.agents = agents;
        this.world.obstacles = obstacles;

        this.aStar = new Nav.Strategy.AStar(this.world);
        this.dynamical = new Nav.Strategy.Dynamical(this.world);
	}

    Nav.prototype = {
        update: function(){
            var agents = this.world.agents;
            for(var i = 0; i < agents.length; i++){
                if(agents[i].strategy === "A*"){
                    // Do A*
                } else {
                    // Do DS
                }
            }
        }   
    };

	// Expose our module to the global scope
	if(global.Nav){
		throw new Error("Nav object already defined");
	} else {
		global.Nav = Nav;
	}

})(window)
