Ext.define('MyIdea.store.Ideas', {
    extend : 'Ext.data.Store',

    requires:[
        'MyIdea.model.Idea'
    ],

    config:{
        model: 'MyIdea.model.Idea',
        sorters: '-expectation',
        storeId: 'ideas',

        autoLoad : true,
        grouper: {
            groupFn: function(record) {
                var data = {
                        '0' : 'Idea',
                        '1' : 'In Progress',
                        '2' : 'Done'
                    },
                    status = record.get('status');

                return data[status];
            },
            sorterFn: function(idea1, idea2){
                var data1 = idea1.data,
                    data2 = idea2.data;

                if (data1.status !== data2.status){
                    return data1.status - data2.status;
                }
                else{
                    return idea2.expectation() - idea1.expectation();
                }

            }
        }


    }
});

