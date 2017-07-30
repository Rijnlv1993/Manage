$(document).ready(function(){//整个页面加载完之后在执行脚本，表单验证
	$('input[name="loginbtn"]').click(function(event){
		var $name = $('input[name="username"]');
		var $password = $('input[name="password"]');
		var $verify = $('input[name="verify"]');
		var $text=$('#text');
		var _name=$.trim($name.val());
		var _password=$.trim($password.val());
		var _verify=$.trim($verify.val());

		if(''==_name){
			$text.text('请输入用户名！');
			$name.focus();
			return;
		}
		if(''==_password){
			$text.text('请输入密码！');
			$password.focus();
			return;
		}
		if(''==_verify){
			$text.text('请输入验证码！');
			$verify.focus();
			return;
		}
		$text.text('登录成功！请稍等!');
		window.location.href="index.html";
	})

});