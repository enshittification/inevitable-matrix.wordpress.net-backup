"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[3875],{"../matrix-react-sdk/src/async-components/views/dialogs/security/ExportE2eKeysDialog.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var s=r("../matrix-react-sdk/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=r("../matrix-react-sdk/node_modules/file-saver/dist/FileSaver.min.js"),a=r.n(n),i=r("./node_modules/react/index.js"),o=r("../matrix-js-sdk/src/logger.ts"),l=r("../matrix-react-sdk/src/languageHandler.tsx"),c=r("../matrix-react-sdk/src/utils/MegolmExportEncryption.ts"),p=r("../matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx"),d=r("../matrix-react-sdk/src/components/views/auth/PassphraseField.tsx"),m=r("../matrix-react-sdk/src/components/views/auth/PassphraseConfirmField.tsx"),h=function(e){return e.Edit="edit",e.Exporting="exporting",e}(h||{});class u extends i.Component{constructor(e){super(e),(0,s.Z)(this,"fieldPassword",null),(0,s.Z)(this,"fieldPasswordConfirm",null),(0,s.Z)(this,"unmounted",!1),(0,s.Z)(this,"onPassphraseFormSubmit",(async e=>{if(e.preventDefault(),!await this.verifyFieldsBeforeSubmit())return;if(this.unmounted)return;const t=this.state.passphrase1;this.startExport(t)})),(0,s.Z)(this,"onCancelClick",(e=>(e.preventDefault(),this.props.onFinished(!1),!1))),(0,s.Z)(this,"onPassphraseChange",((e,t)=>{this.setState({[t]:e.target.value})})),this.state={phase:h.Edit,errStr:null,passphrase1:"",passphrase2:""}}componentWillUnmount(){this.unmounted=!0}async verifyFieldsBeforeSubmit(){const e=[this.fieldPassword,this.fieldPasswordConfirm],t=[];for(const r of e){if(!r)continue;await r.validate({allowEmpty:!1})||t.push(r)}return 0===t.length||(t[0].focus(),t[0].validate({allowEmpty:!1,focused:!0}),!1)}startExport(e){Promise.resolve().then((()=>this.props.matrixClient.exportRoomKeys())).then((t=>c.c(JSON.stringify(t),e))).then((e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});a().saveAs(t,"element-keys.txt"),this.props.onFinished(!0)})).catch((e=>{if(o.k.error("Error exporting e2e keys:",e),this.unmounted)return;const t=e.friendlyText||(0,l._t)("error|unknown");this.setState({errStr:t,phase:h.Edit})})),this.setState({errStr:null,phase:h.Exporting})}render(){const e=this.state.phase===h.Exporting;return i.createElement(p.Z,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:(0,l._t)("settings|key_export_import|export_title")},i.createElement("form",{onSubmit:this.onPassphraseFormSubmit},i.createElement("div",{className:"mx_Dialog_content"},i.createElement("p",null,(0,l._t)("settings|key_export_import|export_description_1")),i.createElement("p",null,(0,l._t)("settings|key_export_import|export_description_2")),i.createElement("div",{className:"error"},this.state.errStr),i.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},i.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},i.createElement(d.Z,{minScore:3,label:(0,l.I8)("settings|key_export_import|enter_passphrase"),labelEnterPassword:(0,l.I8)("settings|key_export_import|enter_passphrase"),labelStrongPassword:(0,l.I8)("settings|key_export_import|phrase_strong_enough"),labelAllowedButUnsafe:(0,l.I8)("settings|key_export_import|phrase_strong_enough"),value:this.state.passphrase1,onChange:e=>this.onPassphraseChange(e,"passphrase1"),autoFocus:!0,size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPassword=e})),i.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},i.createElement(m.Z,{password:this.state.passphrase1,label:(0,l.I8)("settings|key_export_import|confirm_passphrase"),labelRequired:(0,l.I8)("settings|key_export_import|phrase_cannot_be_empty"),labelInvalid:(0,l.I8)("settings|key_export_import|phrase_must_match"),value:this.state.passphrase2,onChange:e=>this.onPassphraseChange(e,"passphrase2"),size:64,type:"password",disabled:e,autoComplete:"new-password",fieldRef:e=>this.fieldPasswordConfirm=e})))),i.createElement("div",{className:"mx_Dialog_buttons"},i.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:(0,l._t)("action|export"),disabled:e}),i.createElement("button",{onClick:this.onCancelClick,disabled:e},(0,l._t)("action|cancel")))))}}},"../matrix-react-sdk/src/utils/MegolmExportEncryption.ts":(e,t,r)=>{r.d(t,{c:()=>p,e:()=>c});var s=r("../matrix-js-sdk/src/logger.ts"),n=r("../matrix-react-sdk/src/languageHandler.tsx"),a=r("../matrix-react-sdk/src/SdkConfig.ts");const i=window.crypto.subtle||window.crypto.webkitSubtle;function o(e,t){return{message:e,friendlyText:t}}function l(){return(0,n._t)("encryption|export_unsupported")}async function c(e,t){const r=function(e){const t=(new TextDecoder).decode(new Uint8Array(e));let r=0;for(;;){const e=t.indexOf("\n",r);if(e<0)throw new Error("Header line not found");const s=t.slice(r,e).trim();if(r=e+1,s===m)break}const s=r;for(;;){const e=t.indexOf("\n",r);if(t.slice(r,e<0?void 0:e).trim()===h)break;if(e<0)throw new Error("Trailer line not found");r=e+1}const n=r;return function(e){const t=window.atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}(t.slice(s,n))}(e),s=a.ZP.get().brand;if(r.length<1)throw o("Invalid file: too short",(0,n._t)("encryption|import_invalid_keyfile",{brand:s}));if(1!==r[0])throw o("Unsupported version",(0,n._t)("encryption|import_invalid_keyfile",{brand:s}));const c=r.length-69;if(c<0)throw o("Invalid file: too short",(0,n._t)("encryption|import_invalid_keyfile",{brand:s}));const p=r.subarray(1,17),u=r.subarray(17,33),y=r[33]<<24|r[34]<<16|r[35]<<8|r[36],f=r.subarray(37,37+c),w=r.subarray(-32),[_,g]=await d(p,y,t),x=r.subarray(0,-32);let b,E;try{b=await i.verify({name:"HMAC"},g,w,x)}catch(e){throw o("subtleCrypto.verify failed: "+e,l())}if(!b)throw o("hmac mismatch",(0,n._t)("encryption|import_invalid_passphrase"));try{E=await i.decrypt({name:"AES-CTR",counter:u,length:64},_,f)}catch(e){throw o("subtleCrypto.decrypt failed: "+e,l())}return(new TextDecoder).decode(new Uint8Array(E))}async function p(e,t,r){const s=(r=r||{}).kdf_rounds||5e5,n=new Uint8Array(16);window.crypto.getRandomValues(n);const a=new Uint8Array(16);window.crypto.getRandomValues(a),a[8]&=127;const[c,p]=await d(n,s,t),y=(new TextEncoder).encode(e);let f;try{f=await i.encrypt({name:"AES-CTR",counter:a,length:64},c,y)}catch(e){throw o("subtleCrypto.encrypt failed: "+e,l())}const w=new Uint8Array(f),_=1+n.length+a.length+4+w.length+32,g=new Uint8Array(_);let x=0;g[x++]=1,g.set(n,x),x+=n.length,g.set(a,x),x+=a.length,g[x++]=s>>24,g[x++]=s>>16&255,g[x++]=s>>8&255,g[x++]=255&s,g.set(w,x),x+=w.length;const b=g.subarray(0,x);let E;try{E=await i.sign({name:"HMAC"},p,b)}catch(e){throw o("subtleCrypto.sign failed: "+e,l())}const k=new Uint8Array(E);return g.set(k,x),function(e){const t=96,r=Math.ceil(e.length/t),s=new Array(r+3);s[0]=m;let n,a=0;for(n=1;n<=r;n++)s[n]=u(e.subarray(a,a+t)),a+=t;return s[n++]=h,s[n]="",(new TextEncoder).encode(s.join("\n")).buffer}(g)}async function d(e,t,r){const n=new Date;let a,c;try{a=await i.importKey("raw",(new TextEncoder).encode(r),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw o("subtleCrypto.importKey failed: "+e,l())}try{c=await i.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},a,512)}catch(e){throw o("subtleCrypto.deriveBits failed: "+e,l())}const p=new Date;s.k.log("E2e import/export: deriveKeys took "+(p.getTime()-n.getTime())+"ms");const d=c.slice(0,32),m=c.slice(32),h=i.importKey("raw",d,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch((e=>{throw o("subtleCrypto.importKey failed for AES key: "+e,l())})),u=i.importKey("raw",m,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch((e=>{throw o("subtleCrypto.importKey failed for HMAC key: "+e,l())}));return Promise.all([h,u])}const m="-----BEGIN MEGOLM SESSION DATA-----",h="-----END MEGOLM SESSION DATA-----";function u(e){const t=String.fromCharCode.apply(null,Array.from(e));return window.btoa(t)}}}]);
//# sourceMappingURL=3875.js.map