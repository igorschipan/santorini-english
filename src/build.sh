#!/bin/sh
cd /home/claude/v2
python3 - <<'PY'
t=open('template.html').read()
content=open('content.js').read()+"\n"+open('talk.js').read()+"\n"+open('menu.js').read()
app=open('app.js').read()
import os
url=os.environ.get('PAGES_URL','https://igorschipan.github.io/santorini-english/')
app=app.replace('__PAGES_URL__',url)
open('site/index.html','w').write(t.replace('/*CONTENT*/',content).replace('/*APP*/',app))
PY
node -e "const h=require('fs').readFileSync('site/index.html','utf8');[...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((x,i)=>{try{new Function(x[1]);console.log('script',i,'ok')}catch(e){console.log('ERR',i,e.message)}})"
