// send.js
const nodemailer = require('nodemailer');

// Функция для отправки электронной почты
function sendEmail(winner) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'esimbeke03@gmail.com',
      pass: 'Rys@2003'
    }
  });

  let mailOptions = {
    from: 'esimbeke03@gmail.com',
    to: 'esimbeke@gmail.com',
    subject: 'Победитель игры Connect 4',
    text: `Поздравляем! Игрок ${winner} победил в игре Connect 4.`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email отправлен: ' + info.response);
    }
  });
}

module.exports = { sendEmail };
