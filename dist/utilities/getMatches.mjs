export default function getMatches(regExp,str){const matches=[];let match=regExp.exec(str);while(match!==null){matches.push(match.groups);match=regExp.exec(str)}return matches.filter(Boolean)}