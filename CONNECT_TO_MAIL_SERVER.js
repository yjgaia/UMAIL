// load UPPERCASE.JS.
require('../../../../UPPERCASE.JS-COMMON.js');
require('../../../../UPPERCASE.JS-NODE.js');

// load UPPERCASE.IO-TRANSPORT.
require('../../../../UPPERCASE.IO-TRANSPORT/NODE.js');

INIT_OBJECTS();

CONNECT_TO_MAIL_SERVER({
	host : 'smtp.gmail.com',
	port : 465,
	isSecure : true,
	username : 'contact@btncafe.com',
	password : 'ENTER YOUR PASSWORD'
}, function(sendMail) {

	sendMail({
		senderName : 'BTNcafe Contact',
		senderAddress : 'contact@btncafe.com',
		receiverAddress : 'admin@btncafe.com',
		title : 'Hello,',
		content : 'World!'
	});
});
