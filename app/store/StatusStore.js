Ext.define('MyIdea.store.StatusStore', {
    extend: 'Ext.data.Store',

    required:[
        'MyIdea.model.Status'
    ],

    config: {
        model: 'MyIdea.model.Status',
        data:[
            {id:0, name: 'Idea'},
            {id:1, name: 'In Progress'},
            {id:2, name: 'Done'}
        ],
        storeId: 'statuses',

        autoLoad : true
    }
});
