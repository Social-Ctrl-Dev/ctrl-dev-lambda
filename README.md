# Lambda Function from Ctrl+Dev

## `lambda-welcome.py`
Esta función Lambda-Python utiliza el módulo de Twilio para enviar un mensaje de texto a un número específico. Dando la bienvenida a la red social Ctrl+Dev.

### API Route
- [Lambda](https://1wtouivta5.execute-api.us-east-1.amazonaws.com/default/twilio-ads)

### Solicitud POST
```json
{
  "phone_number":"+51999888777"
}
```
<hr>

## `lambda_phoneVerify.js`
Esta función Lambda-Python utiliza el módulo de Twilio para enviar el código de verificación y el nombre hacia el nuevo usuario de Ctrl+Dev, siendo utilizado como método de verificación de número de celular.

### API Route
- [Lambda](https://ckrd7h6s37.execute-api.us-east-2.amazonaws.com/default/sendMessageWithTwilio)

### Solicitud POST
```json
{
    "id": 5,
    "phone": "+51xxxxxxxxx",
    "name": "Alvaro"
}
```
<hr>
