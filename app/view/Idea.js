Ext.define("MyIdea.view.Idea", {
    extend: 'Ext.navigation.View',

    xtype:'ideas-view',

    requires:[
        'MyIdea.store.Ideas',
        'Ext.dataview.List',
        'Ext.MessageBox'
    ],

    config: {
        title: 'Ideas',
        iconCls: 'star',
        layout : 'card',
        styleHtmlContent: true,
        scrollable: true,

        autoDestroy: false,

        navigationBar: {
            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'addButton',
                    ui: 'action',
                    text: 'Add',
                    align: 'right',
                    //hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    },
                    handler: function(){
                        var panel = Ext.getCmp('idea-panel'),
                            ideaForm = panel.down('#idea-form'),
                            rec = Ext.create('MyIdea.model.Idea'),
                            ideas = Ext.getStore("ideas");

                        ideas.add(rec);
                        ideaForm.setRecord(rec);

                        panel.getComponent('title').setTitle('Adding a new Idea');
                        Ext.Viewport.add(panel);
                        panel.show();
                    }
                },
                {
                    xtype: 'button',
                    id: 'insertButton',
                    text: 'Insert Samples',
                    align: 'left',
//                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    },
                    handler: function(){
                        var cmp = Ext.getCmp('insertButton'),
                            ideas = Ext.getStore("ideas");
                        try
                        {
                            if (cmp.getText() === "Insert Samples"){
                                var data = [
                                        {'expectation_x_years': 475000, 'name': 'iOSApp1', 'years': 1, 'initial_cost': 5000, 'monthly_cost': 0, 'market_percentage': 60, 'market_population': 5000000, 'sale_price': 4, 'monthly_sales': 10000, 'long_description': 'Better description of this idea', 'subscription_fee': 0, template: true},
                                        {'expectation_x_years': 235000, 'name': "Juakus's Idea", 'years': 1, 'initial_cost': 5000, 'monthly_cost': 0, 'market_percentage': 10, 'market_population': 200000000, 'sale_price': 1, 'monthly_sales': 20000, 'long_description': 'Better description of this idea', 'subscription_fee': 0, template: true},
                                        {'expectation_x_years': 0, 'name': 'IVR1', 'years': 1, 'initial_cost': 0, 'monthly_cost': 0, 'market_percentage': 2, 'market_population': 0, 'sale_price': 0, 'monthly_sales': 0, 'long_description': 'Better description of this idea', 'subscription_fee': 0, template: true},
                                        {'expectation_x_years': 14393800, 'name': "Dak's Idea", 'years': 1, 'initial_cost': 5000, 'monthly_cost': 100, 'market_percentage': 2, 'market_population': 1000000, 'sale_price': 0, 'monthly_sales': 1000, 'long_description': 'Better description of this idea', 'subscription_fee': 100, template: true}
                                    ];
                                data.forEach(function(item){
                                    var nIdea = Ext.create('MyIdea.model.Idea',item);
                                    ideas.add(nIdea);

                                });
                                cmp.setText("Clear Samples");
                            }
                            else{
                                Ext.Msg.confirm("Confirmation", "Are you sure you want to delete sample records?", function(btn){

                                    if (btn == 'yes') {
                                        ideas.each(function(item){
                                            if (item.get("template") === true){
                                                ideas.remove(item);
                                            }
                                        });
                                        cmp.setText("Insert Samples");
                                    }
                                });
                            }
                            ideas.sync({
                                callback:function(){
                                    ideas.load();
                                }
                            });
                        }
                        catch(err)
                        {
                            Ext.Msg.alert('Ideas Tracker', 'Error: ' + err.message, Ext.emptyFn);
                        }
                    }
                }

            ]
        },
        items : [
            {
                xtype: 'list',
                id: 'list-of-ideas',
                title: 'Ideas',
                store: 'ideas',
                grouped: true,
                styleHtmlContent: true,
                itemTpl: new Ext.XTemplate(
                    '<div style="text-align:center"><div class="headshot">{name}</div><span>Expectation in 1 year: {expectation_x_years:this.beautiful} </span></div>',

                    {
                        beautiful: function(value){
                            var x, x1, x2, rgx,
                                nStr = value;
                            nStr += '';
                            x = nStr.split('.');
                            x1 = x[0];
                            x2 = x.length > 1 ? '.' + x[1] : '';
                            rgx = /(\d+)(\d{3})/;
                            while (rgx.test(x1)) {
                                x1 = x1.replace(rgx, '$1' + ',' + '$2');
                            }
                            return '$ ' + x1 + x2;
                        }
                    }),
                listeners : {
                    itemtap : function (thisView, index) {
                        var rec = thisView.getStore().getAt(index),
                            panel = Ext.getCmp('idea-panel'),
                            ideaForm = panel.down('#idea-form');

                        ideaForm.setRecord(rec);

                        panel.getComponent('title').setTitle('Edit - ' + rec.get('name') );
                        Ext.Viewport.add(panel);
                        panel.show();
                    }
                }
            }

        ],
        listeners: [
            {
                fn: 'onNavigationviewActivate',
                event: 'activate'
            }
        ]

    },
    onNavigationviewActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var samples = false,
            btn = Ext.getCmp('insertButton'),
            ideas = Ext.getStore("ideas");

        ideas.filter([{filterFn: function(item) { return item.get("template") === true; }}]);
        ideas.each(function(item){
           samples = true;
        });
        if (samples){
           btn.setText("Clear Samples");
        }
        else{
            btn.setText("Insert Samples");
        }
        ideas.clearFilter();

    }
});


