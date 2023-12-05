import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Настройки почтового сервера
email = 'esimbeke03@gmail.com'
password = 'Rys@2003'
send_to_email = 'esimbeke@gmail.com'
subject = 'Тема письма'
message = 'Текст вашего сообщения'

# Формирование письма
msg = MIMEMultipart()
msg['From'] = email
msg['To'] = send_to_email
msg['Subject'] = subject

# Добавление текста сообщения
msg.attach(MIMEText(message, 'plain'))

# Подключение к SMTP-серверу Gmail
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(email, password)

# Отправка письма
server.send_message(msg)
server.quit()
