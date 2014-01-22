
Scene.Default = Scene.Base.extend
({
    setup: function()
    {
        // Setup and load textures we want to use.
        mighty.LoadTexture([
            { path: "assets/bg" },
            { path: "assets/snake" },
            { path: "assets/food" }
        ]);
    },


    textures: function()
    {
        mighty.LoadTexture(
            [{
                path: "assets/basketcourt"}
            }]);
    }

});