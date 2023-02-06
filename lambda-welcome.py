import json
import os
from twilio.rest import Client

def lambda_handler(event, context):
    client = Client(os.environ['ACCOUNT_SID'], os.environ['AUTH_TOKEN'])
    data = json.loads(event["body"])


    # Get phone number from event
    phone_number = data['phone_number']

    # Send text message
    message = client.messages \
                    .create(
                        to=phone_number,
                        from_=os.environ['TWILIO_NUMBER'],
                        body="Bienvenido a Ctrl+Dev"
                    )

    return {
        'statusCode': 200,
        'body': json.dumps(f'Text message sent to {phone_number}')
    }
