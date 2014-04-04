/**
 * Created with PyCharm.
 * User: edilio
 * Date: 5/28/12
 * Time: 11:11 AM
 * To change this template use File | Settings | File Templates.
 */

Ext.define("MyIdea.view.ContactUs", {
    extend: 'Ext.form.FormPanel',
    xtype: 'contactus',

    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Checkbox',
        'Ext.field.Spinner',
        'Ext.field.Email',
        'Ext.form.Panel'
    ],

    config: {
        title: 'Contact Us',
        iconCls: 'user',
        url: 'http://tenant.jedutils.com/contact_us',
        layout: 'vbox',
        standardSubmit : false,

        items: [
            {
                xtype: 'fieldset',
                title: 'Contact Us',
                instructions: 'Email address is optional',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
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
                        height: 90
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',

                // The handler is called when the button is tapped
                handler: function() {

                    // This looks up the items stack above, getting a reference to the first form it see
                    var form = this.up('formpanel'),
                        fvalues = form.getValues(),
                        email = fvalues.email,
                        initialsubj = 'Ideas Tracker - Message from ' + fvalues.name + ' at ' + email,
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
                            window.location = "mailto:edilio73@gmail.com?subject="+initialsubj+"&body="+initialmsg
                        }
                    }

                    mailThisUrl(email);

                }


                    //Jquery didn't work neither because of policy
//                    jQuery.post(
//                        'http://tenant.jedutils.com/contact_us',
//                        {
//                            'name' : formVales.name,
//                            'email' : formVales.email,
//                            'message' : formVales.message
//                        },
//                        function() {
//                            Ext.Msg.alert('Thank You', 'Your message has been received', function() {
//                                form.reset();
//                            });
//                        },
//                        function(error){
//                            Ext.Msg.alert('Error', 'There was an error trying to send your message! ' + error);
//                        }
//                    );


                    // Sends an AJAX request with the form data to the url specified above (contact.php).
                    // The success callback is called if we get a non-error response from the server
//                    form.submit({
//                        url: 'http://tenant.jedutils.com/contact_us',
//                        method: 'GET',
//                        params: {
//                            additionalParam1: 'test'
//                        },
//                        success: function() {
//                            // The callback function is run when the user taps the 'ok' button
//                            Ext.Msg.alert('Thank You', 'Your message has been received', function() {
//                                form.reset();
//                            });
//                        },
//                        failure: function(form, result){
//                            Ext.Msg.alert('Error', 'There was an error trying to send your message! ' + result.responseText);
//                        }
//
//                    });
//                }
            }
        ]
    }
});
