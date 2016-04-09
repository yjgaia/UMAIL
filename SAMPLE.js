// load UJS-NODE.
require(process.env.UPPERCASE_PATH + '/UJS-NODE.js');

// load UPPERCASE-TRANSPORT.
require(process.env.UPPERCASE_PATH + '/UPPERCASE-TRANSPORT/NODE.js');

BOX('UMAIL');

require('./__PACK/UMAIL/NODE.js');

INIT_OBJECTS();

UMAIL.CONNECT_TO_MAIL_SERVER({
	host : 'smtp.gmail.com',
	port : 465,
	isSecure : true,
	username : 'sender@hanul.me',
	password : 'ENTER YOUR PASSWORD'
}, function(sendMail) {

	sendMail({
		senderName : 'BTNcafe Contact',
		senderAddress : 'sender@hanul.me',
		receiverAddress : 'hanul@hanul.me',
		title : 'Hello,',
		content : 'World!'
	});
});
