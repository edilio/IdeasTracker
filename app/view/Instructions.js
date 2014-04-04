/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/26/12
 * Time: 11:52 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("MyIdea.view.Instructions", {
    extend: 'Ext.Panel',
    xtype: 'instructions',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: 'Instructions',
        iconCls: 'maps',
        styleHtmlContent: true,
        scrollable: true,

        items: [

                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: "Instructions"
                }
        ],
        html: [
            '<div style="text-align: center;">',
            '<p>We need to use short labels for the fields and this can cause confusion. ',
            'Here comes a better explanation:</p>',
            '<p>Name: Just the name you want for your idea</p>',
            '<p>Description: Just a bigger description for your idea</p>',
            '<p>Market Population: How big do you think your market is</p>',
            '<p>Market Percentage: Market Share you are expecting to get in your market</p>',
            '<p>Monthly Sales: How many sales are you expecting monthly</p>',
            '<p>Initial Cost: How much are expecting to spend to create the product or service</p>',
            '<p>Monthly Cost: How much money do you need monthly to cover your expenses</p>',
            '<p>Sale Price: The price you are expecting to sale your product or service</p>',
            '<p>Subscription Fee: How much are you expecting to charge per month to your clients</p>',
            '<p>We use those parameters to calculate how much you should be getting in one year and we display that number in the list</p>',
            '</div>'
        ].join("")

}
});

