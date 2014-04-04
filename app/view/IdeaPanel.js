Ext.define("MyIdea.view.IdeaPanel", {
    extend: 'Ext.Panel',

    xtype:'ideas-panel',

    requires:[
        'MyIdea.store.Ideas',
        'Ext.dataview.List',
        'Ext.field.Number',
        'Ext.form.Panel',
        'Ext.MessageBox',
        'Ext.Toolbar',
        'Ext.field.Select'
    ],
    config:{
        centered: true,
        layout: "fit",
        id: 'idea-panel',
        hideOnMaskTap: false,
        height: '98%',
        width: '98%',
        scrollable: true,
        items : [
            {
                xtype: 'toolbar',
                itemId:'title',
                docked: 'top',
                title: 'Edit Idea'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        ui: 'confirm',
                        text: 'Save',
                        handler: function(){
                            var panel = Ext.getCmp('idea-panel'),
                                ideaForm = panel.down('#idea-form'),
                                rec = ideaForm.getRecord(),
                                ideasStore = Ext.getStore("ideas");
                            ideaForm.updateRecord(rec);
                            rec.set('expectation_x_years', rec.expectation());
                            ideasStore.sync({
                                callback:function(){
                                    ideasStore.load();
                                }
                            });
                            panel.hide();
                        }
                    },
                    {
                        ui: 'default',
                        text: 'Cancel',
                        handler: function(){
                            var panel = Ext.getCmp('idea-panel');
                            panel.hide();
                        }
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        ui: 'decline',
                        text: 'Remove',
                        handler: function(){
                            var panel = Ext.getCmp('idea-panel'),
                                ideaForm = panel.down('#idea-form'),
                                currentIdea = ideaForm.getRecord(),
                                ideasStore = Ext.getStore("ideas");

                            Ext.Msg.confirm("Confirmation", "Are you sure you want to delete this record?", function(btn){

                                if (btn == 'yes') {
                                    ideasStore.remove(currentIdea);
                                    ideasStore.sync({
                                        callback:function(){
                                            ideasStore.load();
                                        }
                                    });
                                    panel.hide();
                                }
                                else{

                                }

                            });

                        }
                    }]
            },
            {
                xtype : 'formpanel',
                itemId: 'idea-form',
                items: [
                    {
                        xtype: 'textfield',
                        label: "Name",
                        name: "name",
                        placeHolder: "Name of your Idea",
                        labelWidth: '30%'

                    },
                    {
                        xtype: 'textareafield',
                        label: "Description",
                        name: "long_description",
                        placeHolder: "Long Description"
                    },
                    {
                        label: 'Market Population',
                        xtype: 'numberfield',
                        name: 'market_population',
                        placeHolder:'Population',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Market %',
                        xtype: 'numberfield',
                        name: 'market_percentage',
                        placeHolder: 'Market %',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Monthly Sales',
                        xtype: 'numberfield',
                        name: 'monthly_sales',
                        placeHolder: 'Monthly Sales',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Initial Cost',
                        xtype: 'numberfield',
                        name: 'initial_cost',
                        placeHolder: 'Initial Cost',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Monthly Cost',
                        xtype: 'numberfield',
                        name: 'monthly_cost',
                        placeHolder: 'Monthly Cost',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Sale Price',
                        xtype: 'numberfield',
                        name: 'sale_price',
                        placeHolder: 'Sale Price',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Subscription Fee',
                        xtype: 'numberfield',
                        name: 'subscription_fee',
                        placeHolder: 'Subscription Fee',
                        labelWidth: '50%'
                    },
                    {
                        label: 'Years',
                        xtype: 'numberfield',
                        name: 'years',
                        placeHolder: 'Enter Years',
                        hidden: true
                    },
                    {
                        label: 'Expectation in X Years',
                        xtype: 'numberfield',
                        name: 'expectation_x_years',
                        placeHolder: 'Expectation in x Years',
                        hidden: true
                    },
                    {
                        label: 'Status',
                        xtype: 'selectfield',
                        name: 'status',
                        store: 'statuses',
                        displayField:'name',
                        valueField:'id'
                    }
                ]
            }
        ]
    }


});
