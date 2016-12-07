#!/bin/bash
bash -c "java -Djava.library.path=/opt/dynamodb/DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb"
