Ext.define('MyIdea.model.Status', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'auto' }

        ],
        identifier: "sequential"
    }
});
