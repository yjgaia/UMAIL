/*
 * connect to mail server.
 */
UMAIL.CONNECT_TO_MAIL_SERVER = METHOD({

	run : function(params, connectionListener) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.host
		//REQUIRED: params.port
		//REQUIRED: params.isSecure
		//REQUIRED: params.username
		//REQUIRED: params.password
		//REQUIRED: connectionListener

		var
		//IMPORT: nodemailer
		nodemailer = require('nodemailer'),

		// host
		host = params.host,

		// port
		port = params.port,

		// is secure
		isSecure = params.isSecure,

		// username
		username = params.username,

		// password
		password = params.password,

		// create reusable transport method. (opens pool of SMTP connections.)
		smtpTransport = nodemailer.createTransport({
			host : host,
			port : port,
			secure : isSecure,
			auth : {
				user : username,
				pass : password
			}
		});

		connectionListener(

		// send mail.
		function(params) {
			//REQUIRED: params
			//REQUIRED: params.senderName
			//REQUIRED: params.senderAddress
			//OPTIONAL: params.receiverAddress
			//OPTIONAL: params.receiverAddresses
			//OPTIONAL: params.title
			//OPTIONAL: params.content
			//OPTIONAL: params.html

			var
			// sender name
			senderName = params.senderName,

			// sender address
			senderAddress = params.senderAddress,

			// receiver addresse
			receiverAddress = params.receiverAddress,

			// receiver addresses
			receiverAddresses = params.receiverAddresses,

			// title
			title = params.title,

			// content
			content = params.content,

			// html
			html = params.html;

			// send mail with defined transport object.
			smtpTransport.sendMail({

				// sender address
				from : senderName + ' <' + senderAddress + '>',

				// list of receivers
				to : receiverAddresses === undefined ? receiverAddress : RUN(function() {

					var
					// str
					str = '';

					EACH(receiverAddresses, function(receiverAddress, i) {
						str += receiverAddress + (i < receiverAddresses.length - 1 ? ', ' : '');
					});

					return str;
				}),

				// Subject line
				subject : title,

				// plaintext body
				text : content,

				// html body
				html : html

			}, function(error, response) {

				if (error !== TO_DELETE) {
					console.log('[UPPERCASE-CONNECT_TO_MAIL_SERVER] SEND MAIL ERROR:', error);
				}
			});
		});
	}
});
