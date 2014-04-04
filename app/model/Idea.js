/**
 * Created with PyCharm.
 * User: edilio
 * Date: 6/8/12
 * Time: 9:13 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('MyIdea.model.Idea', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: "localId",
        identifier: {
            type: 'uuid'
        },
        fields: [
            { name: "localId", type: "auto"},
            { name: 'id', type: 'int', isUnique:true},
            { name: 'name',  type: 'string' },
            { name: 'long_description', type: 'string' },
            { name: 'market_population', type: 'int' },
            { name: 'market_percentage', type: 'float' },
            { name: 'monthly_sales', type: 'float' },
            { name: 'initial_cost', type: 'int' },
            { name: 'monthly_cost', type: 'float' },
            { name: 'sale_price', type: 'float' },
            { name: 'subscription_fee', type: 'float' },
            { name: 'years', type: 'int' },
            { name: 'expectation_x_years', type: 'float' },
            { name: 'template', type: 'bool', defaultValue: false},
            { name: 'status', type: 'int', defaultValue: 0}
        ],
        proxy: {
            type: 'localstorage',
            id  : 'My-Ideas'
        }



    },
    max_number_of_sales : function (){
        return this.get('market_population')* this.get('market_percentage')/100;
    },

    total_number_of_sales : function(years){
        var max_number_of_sales_aux = this.max_number_of_sales();
        if (this.get('monthly_sales')*12*years < max_number_of_sales_aux)
            return this.get('monthly_sales')*12*years;
        else
            return max_number_of_sales_aux;
    },

    expectation_in_years : function(years){
        var total_number_of_sales_aux = this.total_number_of_sales(years),
            cost = this.get('initial_cost') + this.get('monthly_cost')*12*years,
            earnings = total_number_of_sales_aux*(this.get('sale_price') + this.get('subscription_fee')*12*years);
        return earnings - cost;
    },

    expectation : function (){
        return this.expectation_in_years(1);
    }

});



