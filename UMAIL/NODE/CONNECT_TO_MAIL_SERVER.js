/*
 * connect to mail server.
 */
UMAIL.CONNECT_TO_MAIL_SERVER = METHOD((m) => {

	let nodemailer = require('nodemailer');

	return {
		
		run : (params, connectionListener) => {
			//REQUIRED: params
			//REQUIRED: params.host
			//REQUIRED: params.port
			//REQUIRED: params.isSecure
			//REQUIRED: params.username
			//REQUIRED: params.password
			//REQUIRED: connectionListener
	
			let host = params.host;
			let port = params.port;
			let isSecure = params.isSecure;
			let username = params.username;
			let password = params.password;
	
			// create reusable transport method. (opens pool of SMTP connections.)
			let smtpTransport = nodemailer.createTransport({
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
			(params) => {
				//REQUIRED: params
				//REQUIRED: params.senderName
				//REQUIRED: params.senderAddress
				//OPTIONAL: params.receiverAddress
				//OPTIONAL: params.receiverAddresses
				//OPTIONAL: params.title
				//OPTIONAL: params.content
				//OPTIONAL: params.html
	
				let senderName = params.senderName;
				let senderAddress = params.senderAddress;
				let receiverAddress = params.receiverAddress;
				let receiverAddresses = params.receiverAddresses;
				let title = params.title;
				let content = params.content;
				let html = params.html;
				
				// send mail with defined transport object.
				smtpTransport.sendMail({
	
					// sender address
					from : senderName + ' <' + senderAddress + '>',
	
					// list of receivers
					to : receiverAddresses === undefined ? receiverAddress : RUN(() => {
	
						let str = '';
	
						EACH(receiverAddresses, (receiverAddress, i) => {
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
	
				}, (error, response) => {
					
					if (error !== TO_DELETE) {
						SHOW_ERROR('UMAIL', 'SEND MAIL ERROR', error);
					}
				});
			});
		}
	};
});
