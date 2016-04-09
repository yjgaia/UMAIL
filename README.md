# UMAIL
UPPERCASE BOX for sending mail

## 사용법
```javascript
// 메일 서버에 접속합니다.
UMAIL.CONNECT_TO_MAIL_SERVER({
	host : 'smtp.gmail.com',
	port : 465,
	isSecure : true,
	username : 'sender@hanul.me',
	password : 'ENTER YOUR PASSWORD'
}, function(sendMail) {

	// 메일을 보냅니다.
	sendMail({
		senderName : 'BTNcafe Contact',
		senderAddress : 'sender@hanul.me',
		receiverAddress : 'hanul@hanul.me',
		title : 'Hello,',
		content : 'World!'
	});
});
```

## Gmail 사용 시
Gmail 사용 시 외부 애플리케이션에서 사용할 수 있도록 이하 경로에서 `보안 수준이 낮은 앱의 액세스`를 `사용`으로 변경해야 합니다.

https://www.google.com/settings/security/lesssecureapps

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
