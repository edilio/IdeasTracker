Ext.define("MyIdea.view.TellAFriend", {
    extend: 'Ext.form.FormPanel',
    xtype: 'tellafriend',

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.Spinner',
        'Ext.field.Email'
    ],

    config: {
        title: 'Tell a friend',
        iconCls: 'team',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'Tell a friend',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Subject',
                        name: 'subject',
                        value: 'Hi buddy, take a look at this'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message',
                        name: 'message',
                        value: 'Hi:\n You may want to check out this site: www.jedutils.com',
                        height: 90
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Tell',
                ui: 'confirm',

                // The handler is called when the button is tapped
                handler: function() {

                    // This looks up the items stack above, getting a reference to the first form it see
                    var form = this.up('formpanel'),
                        fvalues = form.getValues(),
                        email = fvalues.email,
                        initialsubj = fvalues.subject,
                        initialmsg = fvalues.message,
                        good;

                    function checkEmailAddress(field) {

                        var goodEmail = field.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\.info)|(\.sex)|(\.biz)|(\.aero)|(\.coop)|(\.museum)|(\.name)|(\.pro)|(\..{2,2}))$)\b/gi);
                        if (goodEmail) {
                            return true;
                        }
                        else {
                            Ext.Msg.alert('Invalid Address','Please enter a valid address.');
                            return false;
                        }
                    }

                    function mailThisUrl(email) {
                        good = checkEmailAddress(email);
                        if (good) {

//window.location = "mailto:"+document.eMailer.email.value+"?subject="+initialsubj+"&body="+document.title+" "+u;
                            window.location = "mailto:"+ email+"?subject="+initialsubj+"&body="+initialmsg
                        }
                    }

                    mailThisUrl(email);

                }
            }
        ]
    }
});

