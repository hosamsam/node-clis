let s = 'if you want ot be somebody you have have to work so so hard to get what you aspire to'
s.match(/(\b[A-z]*) +\1/)
s.match(/(\<[A-z]*) +\>\1/)
s.match(/\<([A-z]*) +\>\1/)
s.match(/([A-z]*) +\1/)
s.match(/([a-z]*) +\1/)
s.match(/([a-z]* +)\1/)
s.match(/([a-z]* +)\1/g)
s.match(/([a-z]* +)\1/g)[0].match(/\s+[a-z]*/)
s.match(/([a-z]* +)\1/g)[0].replace(/\s+[a-z]*/, '')
s.match(/([a-z]* +)\1/g).map(x=>x.replace(/\s+[a-z]*/, ''))
let firstRmD = s.match(/([a-z]* +)\1/g).map(x=>x.replace(/\s+[a-z]*/, ''))
let firstRM = s=>s.match(/([a-z]* +)\1/g).map(x=>x.replace(/\s+[a-z]*/, ''))
"here are some duplicates duplicates".match(/([a-z]* +)\1/g)
s.match(/([a-z]* +)\1/g).map(x=>x.replace(/\s+[a-z]*/, ''))
"here are some duplicates duplicates".match(/([a-z]* +)\1 ?/g)
"here are some duplicates duplicates".match(/([a-z]* ?)\1/g)
"here are some duplicates duplicates".match(/([a-z]* +)\1/g)
"here are some duplicates duplicates".match(/([a-z]* +) \1/g)
"here are some duplicates duplicates".match(/([a-z]* +)\1\s/g)
"here are some duplicates duplicates".match(/\b/g)
"here are some duplicates duplicates".match(/\b.*/g)
"here are some duplicates duplicates".match(/\b.[a-z]/g)
"here are some duplicates duplicates".match(/\b[A-z]+/g)
"here are some duplicates duplicates".match(/(\b[A-z]+) +\1/g)
let rmdFirst = s=>s.match(/(\b[A-z]+) +\1/g).map(x=>x.replace(/\s\w+/, ''))
rmdFirst('here are are some duplicates duplicates')
s
rmdFirst(s)
let st = s
st.replace(/(\b.+) +\1/, '#')
st
rd = x=>x.replace(/\s.+/,'')
rd('aasda sad')
st.replace(/(\b.+) +\1/, rd)
st.replace(/(\b.+) +\1/, rd+'#')
st.replace(/(\b.+) +\1/, rd)
