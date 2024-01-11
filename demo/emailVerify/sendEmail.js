const sendEmail = require('./sendEmail.js');
let emailCode  = (function captchaNumber(){
		            let num = [];
		            for (let i = 0; i < 6; i++) {
		                num[i] = parseInt(Math.random()*10);
		            }
		            return num.join('');
		        })() 
            //随机生成6位数字
            

let email = {
        title: '某某的个人博客网站---邮箱验证码',
        body:`
                <h1>您好：</h1>
                <p style="font-size: 18px;color:#000;">
                    您的验证码为：
                    <span style="font-size: 16px;color:#f00;"> ${ emailCode }， </span>
                    您当前正在某某的个人博客网站注册账号，验证码告知他人将会导致数据信息被盗，请勿泄露
                </p>
                <p style="font-size: 1.5rem;color:#999;">60秒内有效</p>
                `
    }
let emailCotent = {
       from: '1968642178@qq.com', // 发件人地址
       to: '2438954496@qq.com', // 收件人地址，多个收件人可以使用逗号分隔
       subject: email.title, // 邮件标题
       html: email.body // 邮件内容
   };
sendEmail.send(emailCotent)
