Ext.define("MyIdea.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'MyIdea.store.Ideas'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                cls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome',
                    minWidth: '100%'

                },

                html: [
                    '<div style="text-align: center;">',
                    '<img align="middle" height=250 src="resources/images/IdeaSwapIcon.jpg" />',
                    '<p></p>',
                    '<h1>Welcome to Ideas Tracker </h1>',
                    '<p>We have created an app so you can play and keep track of your ideas and how profitable they are.</p>',
                    '<p>We are sure your startup and you can benefit from it.</p>',
                    '</div>'
                ].join("")
            },
            {
                xtype:'ideas-view'
            },
            {
                xtype:'instructions'
            },
            {
                xtype: 'contactus'
            },
            {
                xtype: 'tellafriend'
            }

        ]
    }
});
