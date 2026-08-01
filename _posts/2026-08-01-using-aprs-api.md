---
title: "Using APRS api"
date: 2026-08-01
categories: [programming]
tags: [aprs,api]
---

## APRS api

i didn't realize there's api available at aprs that can return data in jason format

format:
https://api.aprs.fi/api/get?name=<CALLSIGN>&what=loc&apikey=<API KEY>&format=json

return:
{"command":"get","result":"ok","what":"loc","found":1,"entries":[{"class":"a","name":"CALLSIGN-7","type":"l","time":"1783566389","lasttime":"1783566389","lat":"LATITUDE","lng":"LONGITUDE","altitude":"36.86","symbol":"/\u003e","srccall":"CALLSIGN-7","dstcall":"APLRT1","status":"STATUS","status_lasttime":"1781666331","path":"WIDE1-1,qAO,DIGIPEATER-10"}]}