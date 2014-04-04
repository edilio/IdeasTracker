Ext.define('MyIdea.controller.IdeaPanelController', {
    extend: 'Ext.app.Controller',

    requires: ["MyIdea.view.IdeaPanel"],

    launch: function() {
//        console.log("running launch");
        var panel = Ext.getCmp('idea-panel');
        if (panel === undefined){
            panel = Ext.create('MyIdea.view.IdeaPanel');
        }
    }
});


