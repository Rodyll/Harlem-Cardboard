"use strict";

Scene.Default = Scene.Base.extend
({
    setup: function () {
        this.setupTemplates();
        this.setupTextures();
//		this.setupLevel();
    },

    setupTemplates: function () {
		mighty.Template.init();
		mighty.Template.create("Loading");
		mighty.Template.create("FPS").show();
	},

    setupTextures: function () {
        mighty.LoadTexture([
            {path: "assets/bg"},
            {path: "assets/snake"},
            {path: "assets/food"}
        ]);
    },

    load: function () {
        this.gridWidth = 32;
        this.gridHeight = 32;
        this.gridSizeX = 20;
        this.gridSizeY = 30;
        Terrain.Cfg.grid.width = this.gridWidth;
        Terrain.cfg.grid.height = this.gridHeight;
        this.createLevel({ sizeX: 10, sizeY: 10, texture: "bg"});
    },

    createMan: function () {
        //Create man
        var x = Math.floor(this.gridSizeX / 2);
        var y = Math.floor(this.gridSizeY / 2);
        x *= this.gridWidth;
        y *= this.gridHeight;

        this.man = new Entity.Geometry({x: x, y: y, texture: "snake"});
        Entity.plugin.addEntity(this.man);

    },

    createCardboardBox: function () {
        this.boxX = mighty.Random.getNumber(0, this.gridSizeX - 1);
        this.boxY = mighty.Random.getNumber(0, this.gridSizeY - 1);
        var x = this.boxX * this.gridWidth;
        var y = this.boxY * this.gridHeight;

        this.box = new Entity.Geometry({ x: x, y: y, texture: "food" });
        Entity.plugin.addEntity(this.box);
    },

    ready: function () {
        this.direction = "none";
        this.score = 0;

        this.scoreTxt = new Entity.Text({ x: 5, y: 5 });
        this.scoreTxt.text = "Score: " + this.score;
        Entity.plugin.addEntity(this.scoreTxt);

        this.createMan();
        this.createCardboardBox();
    }
//
//
//	setupLevel: function()
//	{
//		mighty.engine.blockInput = true;
//
//		if(!mighty.editor) {
//			var levelID = Engine.Cfg.defaultLevel;
//			this.loadLevel(Palettes.Map.getByID(levelID));
//		}
//	}
});