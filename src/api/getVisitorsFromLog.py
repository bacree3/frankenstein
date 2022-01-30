import json
import boto3

def lambda_handler(event, context):
    client = boto3.client('dynamodb')

    return client.query(
        TableName = 'visitorLog',
        KeyConditionExpression = 'id = :id',
        ExpressionAttributeValues = {
            ':id': {
                'S': 'user'
            }
        },
        ScanIndexForward = False, # DESC ORDER, Set 'true' if u want asc order
    )
