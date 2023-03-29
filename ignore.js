const{$a,$b,$i,$p,$q,$s,$u,$br,$dd,$dl,$dt,$em,$h1,$h2,$h3,$h4,$h5,$h6,$hr,$li,$ol,$rp,$rt,$td,$th,$tr,$ul,$bdi,$bdo,$col,$del,$dfn,$div,$img,$ins,$kbd,$map
,$nav,$pre,$sub,$sup,$svg,$var,$wbr,$abbr,$area,$base,$body,$cite,$code,$data,$form,$head,$html,$link,$main,$aside,$audio,$embed,$input,$label,$meter,$small
,$mark,$math,$menu,$meta,$ruby,$samp,$slot,$span,$time,$style,$table,$button,$canvas,$dialog,$figure,$footer,$header,$hgroup,$iframe,$legend,$object,$option
,$tbody,$tfoot,$thead,$title,$track,$video,$output,$portal,$script,$select,$source,$strong,$address,$article,$caption,$details,$colgroup,$datalist,$fieldset
,$picture,$section,$summary,$noscript,$optgroup,$progress,$template,$textarea,$blockquote,$figcaption}=new Proxy({},{get:(_,t)=>(...a)=>{const f=(e,a)=>{if(
Array.isArray(a))a.forEach(a=>f(e,a));else if(a instanceof Node||typeof a==="string"||a instanceof String)e.append(a);else if(Object.prototype.toString.call
(a).slice(8,-1)==="Object")Object.entries(a).forEach(([k,v])=>(e[k+(k==="class"?"Name":"")]=v));return e};return f(document.createElement(t.slice(1)),a)}});
