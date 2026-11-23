import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as M}from"node:fs";
const S="!2b%'+,0        *******&***&*******             AEEA!           &)              %%\"%";
let u=new Uint8Array(65536),l;
function G(p,q){
let A=new Int32Array(576),s=0,c=0,i=0,x=0,t=0,n=p.length;
l=0;
for(;;){
if(t==1e6)return 10;
if(x<0||x>=n)return 9;
let b=p[x],k=(S.charCodeAt(b)|0)-33;
if(k<0)return 5;
let a=(k/16)|0,o=((k%16)/4)|0,h=k%4;
if(x+a>=n)return 9;
t++;let y=x+1+a;
if(s<o)return 2;
if(s-o+h>256)return 3;
x=y;
switch(b){
case 0:return 0;
case 1:A[s++]=(p[y-1]<<24)>>24;break;
case 2:A[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:A[s]=A[s-1];s++;break;
case 5:{let v=A[s-1];A[s-1]=A[s-2];A[s-2]=v;break;}
case 6:A[s]=A[s-2];s++;break;
case 7:{let v=A[s-3];A[s-3]=A[s-2];A[s-2]=A[s-1];A[s-1]=v;break;}
case 23:A[s-1]=-A[s-1]|0;break;
case 27:A[s-1]=~A[s-1];break;
case 48:case 49:case 50:{let r=(p[y-1]<<24>>16)|p[y-2],v=b==48||(b==49?A[--s]==0:A[--s]!=0);if(v)x=y+r;break;}
case 51:if(c==64)return 7;A[256+c++]=y;x=p[y-2]|p[y-1]<<8;break;
case 52:if(!c)return 8;x=A[256+--c];break;
case 64:{let v=A[s-1];if(v<0||v>255)return 6;A[s-1]=A[320+v];break;}
case 65:{let v=A[s-1],w=A[s-2];if(v<0||v>255)return 6;s-=2;A[320+v]=w;break;}
case 80:{let v=String(A[s-1]);if(l+v.length>65536)return 11;s--;for(const d of v)u[l++]=d.charCodeAt(0);break;}
case 81:if(l+1>65536)return 11;u[l++]=A[--s]&255;break;
case 82:A[s++]=i<q.length?q[i++]:-1;break;
case 83:return A[--s]&255;
default:{let v=A[s-1],a=A[s-2],r;
if(b>18&&b<23&&!v)return 4;
if(b==16)r=a+v|0;else if(b==17)r=a-v|0;else if(b==18)r=Math.imul(a,v);
else if(b==19)r=(a/v)|0;else if(b==20)r=a%v|0;
else if(b==21)r=(a>>>0)/(v>>>0)|0;else if(b==22)r=(a>>>0)%(v>>>0)|0;
else if(b==24)r=a&v;else if(b==25)r=a|v;else if(b==26)r=a^v;
else if(b==28)r=a<<v;else if(b==29)r=a>>v;else if(b==30)r=(a>>>v)|0;
else if(b==32)r=a==v?1:0;else if(b==33)r=a<v?1:0;else r=(a>>>0)<(v>>>0)?1:0;
s-=2;A[s++]=r;}
}
}
}
const e=process.env,I=e.MAKEFUN_INPUT_DIR||"/input",O=e.MAKEFUN_OUTPUT_DIR||"/output";
for(const i of R(I)){
let a=I+"/"+i,b=O+"/"+i,z=G(F(a+"/program.bin"),F(a+"/input.bin"));
M(b,{recursive:true});
W(b+"/stdout.bin",u.subarray(0,l));
W(b+"/exit.txt",z+"\n");
}
