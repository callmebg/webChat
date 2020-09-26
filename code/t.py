# -*- coding:utf8 -*-
import requests

import json 
r = requests.post('https://39.108.6.189:2000/register', data=json.dumps({'mail': 'mail', 'password':'password', 'nick':'nick'}))
print(r.json())