import json
import boto3
import time

def lambda_handler(event, context):
    client = boto3.client('dynamodb')

    name = event['headers']['name']

    return client.put_item(
        TableName = 'visitorLog',
        Item = {
            'id': {
                'S': 'user'
            },
            'name': {
                'S': name
            },
            'timestamp': {
                'N': str(time.time())
            }
        }
    )
