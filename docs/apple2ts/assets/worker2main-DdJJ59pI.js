(function(){var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(()=>{let e=new Int16Array(256);e.fill(-1);let t=[150,151,154,155,157,158,159,166,167,171,172,173,174,175,178,179,180,181,182,183,185,186,187,188,189,190,191,203,205,206,207,211,214,215,217,218,219,220,221,222,223,229,230,231,233,234,235,236,237,238,239,242,243,244,245,246,247,249,250,251,252,253,254,255];for(let n=0;n<t.length;n++)e[t[n]]=n;return e})();let t=65536,n=98048,r=function(e){return e[e.IDLE=0]=`IDLE`,e[e.RUNNING=-1]=`RUNNING`,e[e.PAUSED=-2]=`PAUSED`,e[e.NEED_BOOT=-3]=`NEED_BOOT`,e[e.NEED_RESET=-4]=`NEED_RESET`,e}({}),i=function(e){return e[e.MACHINE_STATE=0]=`MACHINE_STATE`,e[e.CLICK=1]=`CLICK`,e[e.DRIVE_PROPS=2]=`DRIVE_PROPS`,e[e.DRIVE_SOUND=3]=`DRIVE_SOUND`,e[e.ERRORMSG=4]=`ERRORMSG`,e[e.GET_MEMORY_RESPONSE=5]=`GET_MEMORY_RESPONSE`,e[e.SAVE_STATE=6]=`SAVE_STATE`,e[e.RUMBLE=7]=`RUMBLE`,e[e.HELP_TEXT=8]=`HELP_TEXT`,e[e.SHOW_APPLE_MOUSE=9]=`SHOW_APPLE_MOUSE`,e[e.MBOARD_SOUND=10]=`MBOARD_SOUND`,e[e.COMM_DATA=11]=`COMM_DATA`,e[e.MIDI_DATA=12]=`MIDI_DATA`,e[e.ENHANCED_MIDI=13]=`ENHANCED_MIDI`,e[e.REQUEST_THUMBNAIL=14]=`REQUEST_THUMBNAIL`,e[e.SOFTSWITCH_DESCRIPTIONS=15]=`SOFTSWITCH_DESCRIPTIONS`,e[e.INSTRUCTIONS=16]=`INSTRUCTIONS`,e[e.SERIAL_CONFIG_CHANGE=17]=`SERIAL_CONFIG_CHANGE`,e[e.VERA_FRAME=18]=`VERA_FRAME`,e[e.VERA_PCM_WRITE=19]=`VERA_PCM_WRITE`,e[e.VERA_PSG_WRITE=20]=`VERA_PSG_WRITE`,e[e.VERA_PSG_BATCH=21]=`VERA_PSG_BATCH`,e[e.OPERATION_RESULT=22]=`OPERATION_RESULT`,e[e.VERA_SD_STATUS=23]=`VERA_SD_STATUS`,e[e.VERA_SD_IMAGE_DATA=24]=`VERA_SD_IMAGE_DATA`,e}({}),a=function(e){return e[e.APPLE_PRESS=0]=`APPLE_PRESS`,e[e.APPLE_RELEASE=1]=`APPLE_RELEASE`,e[e.APP_MODE=2]=`APP_MODE`,e[e.AUTO_SNAPSHOT=3]=`AUTO_SNAPSHOT`,e[e.BASIC_STEP=4]=`BASIC_STEP`,e[e.BREAKPOINTS=5]=`BREAKPOINTS`,e[e.COMM_DATA=6]=`COMM_DATA`,e[e.CYCLES_TO_RUN=7]=`CYCLES_TO_RUN`,e[e.DEBUG=8]=`DEBUG`,e[e.DRIVE_NEW_DATA=9]=`DRIVE_NEW_DATA`,e[e.DRIVE_PROPS=10]=`DRIVE_PROPS`,e[e.ENABLE_GAME_PATCHES=11]=`ENABLE_GAME_PATCHES`,e[e.EXECUTE_BASIC_COMMAND=12]=`EXECUTE_BASIC_COMMAND`,e[e.GAMEPAD=13]=`GAMEPAD`,e[e.GET_MEMORY_REQUEST=14]=`GET_MEMORY_REQUEST`,e[e.GET_SAVE_STATE=15]=`GET_SAVE_STATE`,e[e.GET_SAVE_STATE_SNAPSHOTS=16]=`GET_SAVE_STATE_SNAPSHOTS`,e[e.KEYBOARD_STATE=17]=`KEYBOARD_STATE`,e[e.KEY_SEQUENCE=18]=`KEY_SEQUENCE`,e[e.KEYPRESS=19]=`KEYPRESS`,e[e.KEYRELEASE=20]=`KEYRELEASE`,e[e.MACHINE_NAME=21]=`MACHINE_NAME`,e[e.MEMORY_DUMP_STATE=22]=`MEMORY_DUMP_STATE`,e[e.MIDI_DATA=23]=`MIDI_DATA`,e[e.MOUSEEVENT=24]=`MOUSEEVENT`,e[e.PASTE_TEXT=25]=`PASTE_TEXT`,e[e.RAMWORKS=26]=`RAMWORKS`,e[e.RESTORE_STATE=27]=`RESTORE_STATE`,e[e.REVERSE_YAXIS=28]=`REVERSE_YAXIS`,e[e.RUN_MODE=29]=`RUN_MODE`,e[e.SET_BINARY_BLOCK=30]=`SET_BINARY_BLOCK`,e[e.SET_CYCLECOUNT=31]=`SET_CYCLECOUNT`,e[e.SET_MEMORY=32]=`SET_MEMORY`,e[e.SHOW_DEBUG_TAB=33]=`SHOW_DEBUG_TAB`,e[e.SIRIUS_JOYPORT=34]=`SIRIUS_JOYPORT`,e[e.SOFTSWITCHES=35]=`SOFTSWITCHES`,e[e.SPEED=36]=`SPEED`,e[e.STATE6502=37]=`STATE6502`,e[e.STEP_INTO=38]=`STEP_INTO`,e[e.STEP_OUT=39]=`STEP_OUT`,e[e.STEP_OVER=40]=`STEP_OVER`,e[e.THUMBNAIL_IMAGE=41]=`THUMBNAIL_IMAGE`,e[e.TIME_TRAVEL_INDEX=42]=`TIME_TRAVEL_INDEX`,e[e.TIME_TRAVEL_SNAPSHOT=43]=`TIME_TRAVEL_SNAPSHOT`,e[e.TIME_TRAVEL_STEP=44]=`TIME_TRAVEL_STEP`,e[e.TRACING=45]=`TRACING`,e[e.TRACE_SETTINGS=46]=`TRACE_SETTINGS`,e[e.VERA_SLOT=47]=`VERA_SLOT`,e[e.VIDEO7_OVERRIDE=48]=`VIDEO7_OVERRIDE`,e[e.SLOT_CONFIG=49]=`SLOT_CONFIG`,e[e.RUN_BINARY=50]=`RUN_BINARY`,e[e.LOAD_BINARY=51]=`LOAD_BINARY`,e[e.GET_MEMORY_VIEW=52]=`GET_MEMORY_VIEW`,e[e.WRITE_MEMORY=53]=`WRITE_MEMORY`,e[e.FIND_MEMORY=54]=`FIND_MEMORY`,e[e.SET_MEMORY_WRITE_WATCHPOINT=55]=`SET_MEMORY_WRITE_WATCHPOINT`,e[e.CLEAR_MEMORY_WRITE_WATCHPOINT=56]=`CLEAR_MEMORY_WRITE_WATCHPOINT`,e[e.CREATE_SESSION_SNAPSHOT=57]=`CREATE_SESSION_SNAPSHOT`,e[e.RESTORE_SESSION_SNAPSHOT=58]=`RESTORE_SESSION_SNAPSHOT`,e[e.COMPARE_SESSION_MEMORY=59]=`COMPARE_SESSION_MEMORY`,e[e.CONDITIONAL_KEY_SEQUENCE=60]=`CONDITIONAL_KEY_SEQUENCE`,e[e.CANCEL_CONDITIONAL_KEY_SEQUENCE=61]=`CANCEL_CONDITIONAL_KEY_SEQUENCE`,e[e.VERA_SD_IMAGE=62]=`VERA_SD_IMAGE`,e[e.VERA_SD_GET_IMAGE=63]=`VERA_SD_GET_IMAGE`,e[e.VERA_SD_WRITE_PROTECT=64]=`VERA_SD_WRITE_PROTECT`,e[e.VERA_SD_CLEAR_CHANGES=65]=`VERA_SD_CLEAR_CHANGES`,e}({}),o={1:`ssc`,2:`none`,3:`aux`,4:`mockingboard`,5:`mouse`,6:`disk2`,7:`smartport`},s=function(e){return e[e.AUTO_OFF=0]=`AUTO_OFF`,e[e.AUTO_100K=1]=`AUTO_100K`,e[e.AUTO_1M=2]=`AUTO_1M`,e}({}),c=function(e){return e[e.INFO=0]=`INFO`,e[e.WARNING=1]=`WARNING`,e[e.ERROR=2]=`ERROR`,e[e.QUESTION=3]=`QUESTION`,e}({}),l=function(e){return e[e.CURRENT=0]=`CURRENT`,e[e.MAIN=1]=`MAIN`,e[e.AUX=2]=`AUX`,e[e.HGR1=3]=`HGR1`,e[e.HGR2=4]=`HGR2`,e[e.NONE=5]=`NONE`,e}({}),u=function(e){return e[e.MOTOR_OFF=0]=`MOTOR_OFF`,e[e.MOTOR_ON=1]=`MOTOR_ON`,e[e.TRACK_END=2]=`TRACK_END`,e[e.TRACK_SEEK=3]=`TRACK_SEEK`,e}({}),d=function(e){return e[e.IMPLIED=0]=`IMPLIED`,e[e.IMM=1]=`IMM`,e[e.ZP_REL=2]=`ZP_REL`,e[e.ZP_X=3]=`ZP_X`,e[e.ZP_Y=4]=`ZP_Y`,e[e.ABS=5]=`ABS`,e[e.ABS_X=6]=`ABS_X`,e[e.ABS_Y=7]=`ABS_Y`,e[e.IND_X=8]=`IND_X`,e[e.IND_Y=9]=`IND_Y`,e[e.IND=10]=`IND`,e}({}),f=()=>({cycleCount:0,PStatus:0,PC:0,prevPC:0,Accum:0,XReg:0,YReg:0,StackPtr:0,flagIRQ:0,flagNMI:!1}),p=e=>e.startsWith(`B`)&&e!==`BIT`&&e!==`BRK`,m=(e,t=2)=>(e>255&&(t=4),(`0000`+e.toString(16).toUpperCase()).slice(-t));new Uint8Array(256).fill(0);let ee=e=>e.split(``).map(e=>e.charCodeAt(0)),te=e=>[e&255,e>>>8&255],ne=e=>[e&255,e>>>8&255,e>>>16&255,e>>>24&255],re=new Uint32Array(256).fill(0),ie=()=>{let e;for(let t=0;t<256;t++){e=t;for(let t=0;t<8;t++)e=e&1?3988292384^e>>>1:e>>>1;re[t]=e}},ae=(e,t=0)=>{re[255]===0&&ie();let n=-1;for(let r=t;r<e.length;r++)n=n>>>8^re[(n^e[r])&255];return(n^-1)>>>0},oe=e=>!!(e&&e.length>=4&&e[0]===87&&e[1]===79&&e[2]===90),se=e=>{if(e&&oe(e)&&e.length>=12){let t=ae(e,12);e.set(ne(t),8)}return e??void 0},ce=(e,t)=>e+40*Math.trunc(t/64)+t%8*1024+128*(Math.trunc(t/8)&7),le=e=>{let t=e&8191,n=Math.trunc(Math.min(t&127,119)/40),r=Math.trunc((t&1023)/128),i=Math.trunc(t/1024);return 64*n+8*r+i},ue=(e,t)=>{let n=e.toLowerCase();return/\.(?:woz|dsk|do)(?:$|[^a-z0-9])/.test(n)?!1:/\.(?:hdv|2mg|2meg)(?:$|[^a-z0-9])/.test(n)?!0:/\.(?:po|img)(?:$|[^a-z0-9])/.test(n)?t>=23e4&&t<=275e3?!1:t>143360:!1},de=!1,fe=()=>de,pe=e=>{de=e},me=!1,he=!1,ge=!1,_e=!1,ve=!1,ye=!1,be=!1,xe=!1,h=!1,Se=!1,Ce=e=>{let t=b.AN0.isSet,n=b.AN1.isSet;if(M.PC>=49408&&M.PC<=51199&&b.INTCXROM.isSet){j(e,0);return}let r=!1;switch(e){case b.PB0.isSetAddr:b.PB0.isSet=!t&&me||t&&he,r=b.PB0.isSet;break;case b.PB1.isSetAddr:b.PB1.isSet=!t&&n&&ve||t&&n&&ye||!t&&!n&&be||t&&!n&&xe,r=b.PB1.isSet;break;case b.PB2.isSetAddr:b.PB2.isSet=!t&&n&&ge||t&&n&&_e||!t&&!n&&h||t&&!n&&Se,r=b.PB2.isSet}j(e,r?0:128)},we=(e,t,n)=>{let r=!n;switch(t||(r=!0,n=!0),e){case-1:r&&(me=!1,ge=!1,ve=!1,be=!1,h=!1),n&&(he=!1,_e=!1,ye=!1,xe=!1,Se=!1);break;case 0:r&&(me=!0),n&&(he=!0);break;case 1:r&&(me=!0),n&&(he=!0);break;case 12:r&&(ve=!0),n&&(ye=!0);break;case 13:r&&(ge=!0),n&&(_e=!0);break;case 14:r&&(be=!0),n&&(xe=!0);break;case 15:r&&(h=!0),n&&(Se=!0)}},Te,Ee=2836,De=Ee/2,Oe=Ee/2,ke=Ee/2,Ae=Ee/2,je=0,Me=!1,Ne=!1,Pe=!1,Fe=!1,Ie=!1,Le=!1,Re=!1,ze=!1,Be=()=>{Pe=!0},Ve=()=>{Fe=!0},He=(e,t=!1)=>(e=Math.min(Math.max(e,-1),1),t&&ze&&(e=-e),(e+1)*Ee/2),Ue=(e,t)=>{switch(e){case 0:De=He(t);break;case 1:Oe=He(t,!0);break;case 2:ke=He(t);break;case 3:Ae=He(t)}},We=()=>{Le=Me||Pe,Re=Ne||Fe,b.PB0.isSet=Le,b.PB1.isSet=Re,b.PB2.isSet=Ie},Ge=(e,t)=>{t?Me=e:Ne=e,We()},Ke=e=>{ze=e},qe=()=>({countStart:je}),Je=e=>{e&&(je=e.countStart)},Ye=e=>{j(49252,128),j(49253,128),j(49254,128),j(49255,128),je=e},Xe=(e,t)=>{let n=e-je;j(49252,n<De?t|128:t&127),j(49253,n<Oe?t|128:t&127),j(49254,n<ke?t|128:t&127),j(49255,n<Ae?t|128:t&127)},Ze=(e,t)=>{if(fe())Ce(e);else{let n=!1;switch(e){case b.PB0.isSetAddr:n=b.PB0.isSet;break;case b.PB1.isSetAddr:n=b.PB1.isSet;break;case b.PB2.isSetAddr:n=b.PB2.isSet}j(e,n?t|128:t&127)}},Qe,$e,et=!1,tt=e=>{Te=e,et=!Te.length||!Te[0].buttons.length,Qe=Yt(),$e=Qe.gamepad?Qe.gamepad:fe()?we:Gt},nt=e=>e>-.01&&e<.01,rt=(e,t)=>{nt(e)&&(e=0),nt(t)&&(t=0);let n=Math.sqrt(e*e+t*t),r=.95*(n===0?1:Math.max(Math.abs(e),Math.abs(t))/n);return e=Math.min(Math.max(-r,e),r),t=Math.min(Math.max(-r,t),r),e=(e+r)/(2*r),t=(t+r)/(2*r),[e,t]},it=(e,t)=>([e,t]=rt(e,t),e=Math.trunc(Ee*e),t=Math.trunc(Ee*t),[e,t]),at=e=>{ze&&(e=e.map((e,t)=>t%2==1?-e:e));let[t,n]=it(e[0],e[1]),r=e.length>=6?e[5]:e[3],[i,a]=e.length>=4?it(e[2],r):[0,0];return[t,n,i,a]},ot=e=>{let t=Qe.joystick?Qe.joystick(Te[e].axes,et):Te[e].axes,n=at(t);e===0?(De=n[0],Oe=n[1]):(ke=n[0],Ae=n[1]);let r=Te[e].buttons;t.length>=10&&t[9]!==0&&t[9]<2&&(t[9]<-.4&&t[9]>-.5?r[15]=!0:t[9]>.7&&t[9]<.8?r[14]=!0:t[9]>.1&&t[9]<.2?r[13]=!0:t[9]<-.95&&(r[12]=!0)),$e(-1,Te.length>1,e===1),r.forEach((t,n)=>{t&&$e(n,Te.length>1,e===1)}),Qe.rumble&&Qe.rumble(),We()},st=()=>{Pe=!1,Fe=!1,Ie=!1,Te&&Te.length>0&&(ot(0),Te.length>1&&ot(1))},ct=e=>{switch(e){case 0:v(`JL`);break;case 1:v(`G`,200);break;case 2:_(`M`),v(`O`);break;case 3:v(`L`);break;case 4:v(`F`);break;case 5:_(`P`),v(`T`);break;case 6:break;case 7:break;case 8:v(`Z`);break;case 9:{let e=oa();e.includes(`'N'`)?_(`N`):e.includes(`'S'`)?_(`S`):e.includes(`NUMERIC KEY`)?_(`1`):_(`N`);break}case 10:break;case 11:break;case 12:v(`L`);break;case 13:v(`M`);break;case 14:v(`A`);break;case 15:v(`D`);break;case-1:return}},lt=0,ut=0,dt=!1,ft=.5,pt={address:24835,data:[173,198,9],keymap:{},joystick:e=>e[0]<-.5?(ut=0,lt===0||lt>2?(lt=0,_(`A`)):lt===1&&dt?v(`W`):lt===2&&dt&&v(`R`),lt++,dt=!1,e):e[0]>ft?(lt=0,ut===0||ut>2?(ut=0,_(`D`)):ut===1&&dt?v(`W`):ut===2&&dt&&v(`R`),ut++,dt=!1,e):e[1]<-.5?(v(`C`),e):e[1]>ft?(v(`S`),e):(dt=!0,e),gamepad:ct,rumble:null,setup:null,helptext:`AZTEC
Paul Stephenson, Datamost 1982
<a href="https://gamefaqs.gamespot.com/appleii/581004-aztec/faqs/10557" target="_blank">FAQ</a>

W: walk
R: run
J (A button): jump
S (Thumb down): stop
C (Thumb up): climb
A (Thumb left): turn left
D (Thumb right): turn right
G (B button): crawl (G to move)
P (RB button): place and light explosive
T (RB button): take item
O (X button): opens box or dig in trash
L (Y button): look in box
Z: inventory

F (LB button): goes to fight mode:
   S (Thumb down): spin around
   A (Dpad left): move one to left
   D (Dpad right): move one to right
   L: lunge with machete
   M (Dpad down): strike down with machete
   G (B button): draw gun
   L (A button): shoot gun

Thumbwheel
              Climb
  Walk/run left   Walk/run right
            Stop/spin

D-pad
        Lunge/shoot
  Move left    Move right
        Strike down

A:  jump/lunge/shoot
B:  crawl/switch to gun
X:  open box/dig in trash
Y:  look in box
RB: place explosive (crawling) or take item (box/trash)
LB: fight mode
Select: inventory
Start:  start the game
`},mt={address:25200,data:[141,16,192],keymap:{A:`J`,S:`K`,D:`L`,W:`I`,"\b":`U`,"":`O`},gamepad:null,joystick:null,rumble:null,setup:null,helptext:`Championship Lode Runner by Doug Smith
(c) 1984 Brøderbund Software
_____________________________________________
Joystick (Ctrl+J):   move
Button 0:   dig left
Button 1:   dig right

Keyboard (Ctrl+K):
   W
A     D
   S
Left arrow    dig left
Right arrow   dig right

Keyboard original controls:
   I
J     L
   K
U       dig left
O       dig right
ESC     pause game
_____________________________________________
Other Controls:
Ctrl+A        abort man
Ctrl+J        joystick mode
Ctrl+K        keyboard mode
Ctrl+R        reset game
Ctrl+S        toggle sound
Ctrl+X        flip joystick x-axis
Ctrl+Y        flip joystick y-axis
`},ht={address:24583,data:[173,0,192],keymap:{"\v":`A`,"\n":`Z`},joystick:null,gamepad:e=>{switch(e){case 0:_(` `);break;case 12:_(`A`);break;case 13:_(`Z`);break;case 14:_(`\b`);break;case 15:_(``);break;case-1:return}},rumble:null,setup:null,helptext:`Drol
Benny Aik Beng Ngo, Brøderbund 1983

KEYBOARD:
Arrow keys for left/right
Arrow keys or A/Z for up/down
Spacebar: Fire

GAMEPAD:
D-pad: Up/Down/Left/Right
A button: Fire
`},gt={address:17706,data:[173,0,192],keymap:{"\b":`A`,"":`D`,"\v":`W`,"\n":`X`,P:`\r`,M:` `},joystick:null,gamepad:null,rumble:null,setup:null,helptext:`FIREBUG
Silas Warner, Muse Software, 1982

KEYBOARD
W ↑    up
X ↓    down
A ←    left
D →    right
S      stop

P or Return   pick up gas can
M or Space    drop gas can

JOYSTICK
Button 0: drop gas can
Button 1: pick up gas can
`},_t={address:1037,data:[201,206,202,213,210],keymap:{},joystick:null,gamepad:null,rumble:null,setup:()=>{Dg(`APPLE2EU`,!1)},helptext:`Injured Engine
(c) 1984 Imagic, Inc.
Concept: Dave Johnson
Program: Tom McWilliams
Graphics: Karen Elliott
Tech Support: Dave Boisvert

Keyboard Controls:
T         Select, look at text
I         Inspect part(s)
R         Repair/replace part(s)
P         Price list
E, <ESC>  Main screen
A, S      Scroll text back
Z, X      Scroll text forward
Y         Yes
N         No
O         Open throttle
C         Close throttle`},vt=14,yt=14,bt={address:28268,data:[173,0,192],keymap:{N:`\b`,M:``,",":`\b`,".":``},joystick:null,gamepad:null,rumble:()=>{let e=k(182,!1);vt<40&&e<vt&&f_({startDelay:220,duration:300,weakMagnitude:1,strongMagnitude:0}),vt=e,e=k(183,!1),yt<40&&e<yt&&f_({startDelay:220,duration:300,weakMagnitude:0,strongMagnitude:1}),yt=e},setup:null,helptext:`KARATEKA
Jordan Mechner, Brøderbund 1984
Press K for Keyboard control
Press J for Joystick control

KEYBOARD
Fighting stance:
Q A Z     punch high, middle, low
W S X     kick high, middle, low
M . →     advance
N , ←     retreat
Space     stand up

Standing up:
B         bow
M . →     run forward
N , ←     stop
Space     fighting stance

JOYSTICK
Push the joystick up to stand up, and release it to get into a fighting stance.

Fighting stance:
Button 1: punch
Button 0: kick
Move the joystick up and down to control the height of your punches  and kicks. Move it right to advance and left to retreat.

To run forward, start from a standing position. Then move the joystick to the upper right. Press button 1 to bow.
`},xt={address:25078,data:[141,16,192],keymap:{A:`J`,S:`K`,D:`L`,W:`I`,"\b":`U`,"":`O`},gamepad:null,joystick:null,rumble:null,setup:()=>{A(46793,234),A(46794,234)},helptext:`Lode Runner by Doug Smith
(c) 1983 Brøderbund Software
_____________________________________________
Joystick (Ctrl+J):   move
Button 0:   dig left
Button 1:   dig right

Keyboard (Ctrl+K):
   W
A     D
   S
Left arrow    dig left
Right arrow   dig right

Keyboard original controls:
   I
J     L
   K
U       dig left
O       dig right
ESC     pause game
_____________________________________________
Other Controls:
Ctrl+A        abort man
Ctrl+J        joystick mode
Ctrl+K        keyboard mode
Ctrl+R        reset game
Ctrl+S        toggle sound
Ctrl+X        flip joystick x-axis
Ctrl+Y        flip joystick y-axis
Ctrl+Shift+6  next level (no high score)
Ctrl+Shift+2  add life (no high score)
_____________________________________________
Editor:
From demo mode, press Ctrl+E
E        edit
P        play
I        initialize
C        clear level
M        move (copy level)
S        clear high scores
I/J/K/M  move cursor
0-9      make shapes
Ctrl+S   save level
Ctrl+Q   quit editor
`},St=e=>{switch(e){case 0:v(`A`);break;case 1:v(`C`,50);break;case 2:v(`O`);break;case 3:v(`T`);break;case 4:v(`\x1B`);break;case 5:v(`\r`);break;case 6:break;case 7:break;case 8:_(`N`),v(`'`);break;case 9:_(`Y`),v(`1`);break;case 10:break;case 11:break;case 12:break;case 13:v(` `);break;case 14:break;case 15:v(`	`);break;case-1:return}},Ct=.5,wt={address:768,data:[141,74,3,132],keymap:{},gamepad:St,joystick:(e,t)=>{if(t)return e;let n=(e[0]<-.5?`\b`:e[0]>Ct?``:``)+(e[1]<-.5?`\v`:e[1]>Ct?`
`:``);return n||(n=e[2]<-.5?`L\b`:e[2]>Ct?`L`:``,n||=e[3]<-.5?`L\v`:e[3]>Ct?`L
`:``),n&&v(n,200),[0,0,0,0]},rumble:null,setup:null,helptext:`Nox Archaist, Mark Lemmert
6502 Workshop, 2021
_____________________________________________
Arrows (Left thumb)  movement
A (A button)         attack
C (B button)         cast spell
O (X button)         open or operate object
T (Y button)         talk
L (Right thumb)      look
SPACE (Dpad down)    pass turn
RETURN (RB button)   ready item
TAB  (Dpad right)    inventory
ESC  (LB button)     flee from battle

_____ ADVENTURING _____
B  board transport or mount
D  dig (ruins only)
G  get current location
H  hide and camp
I  ignite torch
J  jump with your horse
N  new character order
Q  quick save game
S  search
W  wait for a number of hours
X  exit transport or mount
Y  yell, go fast on horse/mount
/  quest log
V  volume/sound toggle
=  toggle character icon

_____ COMBAT _____
F  fire cannon (ships only)
SHIFT+8   toggle combat math
+/−  fast/slow scroll speed
8    pause text scroll

_____ INVENTORY & SHOPPING _____
TAB     switch to next menu (or press 1-7)
ARROWS  scroll through items or pages
SPACE   next character
RETURN  ready/unready item
I/U/D   Info/Use/Discard item
B/S  switch to buy/sell (shop)
RETURN buy or sell item (shop)
ESC    exit inventory/shop

_____ NPC DIALOG _____
Keywords NAME, JOB, JOIN
TAB  toggle voice mode
ESC  exit conversation`},Tt={address:41642,data:[67,82,79],keymap:{},joystick:null,gamepad:null,rumble:null,setup:null,helptext:`Julius Erving and Larry Bird Go One-on-One
Electronic Arts, Eric Hammond, 1983

To Leave Demo: Press the joystick button or the space bar.

To Choose Game Options:
1. Move the joystick up and down (or press SPACE) to move the highlight from option group to option group; press RETURN to enter the highlighted group.

2. Move the joystick right and left (or press SPACE) to move from option to option within a group after that group has been entered; press RETURN to select the highlighted option.

To Return to the Options Screen: Press CtrlR. (This command should also be used to recover if the program ever begins to behave erratically.)

T       Time Out
Ctrl+S  Turn Sound On/Off
!       Turn Slow Motion On/Off
ESC     Pause game; pressing ESC repeatedly single steps the action, any key restarts.

PLAYING DEFENSE FROM THE KEYBOARD
A     Move Up
Z     Move Down
←     Move Left
→     Move Right
SPACE Go For the Steal or the Block
Other keys (except T or ESC): Stop Moving

To change these, select CHANGE KEYBOARD and enter new choices.

Note: When defense is played from the keyboard, play will freeze after every turnover (whether caused by a score, a steal or a defensive rebound). To resume play after the offensive and defensive players have traded joystick and keyboard, press any key.
`},Et={address:55645,data:[173,0,192],keymap:{},joystick:null,gamepad:null,rumble:null,setup:null,helptext:`Prince of Persia
Jordan Mechner, Brøderbund 1989

Running, jumping, climbing:
Run: move joystick in desired direction, release to stop
Take careful steps: hold button while moving the joystick
Jump/climb up: move joystick up
Jump forward: move joystick up diagonally
Running jump: run, then move joystick up diagonally
Hang from ledge: hold button, to drop release button, to pull up onto ledge, move joystick up
Climb down: step to edge, turn around, move joystick down
If you fall within reach of a ledge, grab onto it by pressing a button
Duck: move joystick down, release to stand up
Pick up object: stand in front of object, press button

Fighting:
Release joystick, you will automatically draw your sword
Strike: press button
Advance/retreat: move joystick
Block a strike: move joystick up as opponent strikes
Stop fighting: move joystick down, press button to draw sword again

ESC: Freeze frame, single frame advance
Ctrl+J: joystick control
Ctrl+K: keyboard control
Ctrl+R: ends game
Ctrl+A: restart level
Ctrl+S: sound on/off
Ctrl+N: music on/off
Ctrl+G: save game
Ctrl+L: load game (during title screen)
Ctrl+X: flip vertical joystick axis
Ctrl+Y: flip horizontal joystick axis
Space:  see remaining time

KEYBOARD
Movement:
U I O
J K L
Button: Option/Alt key
`},Dt={address:30110,data:[173,0,192],keymap:{},joystick:null,gamepad:null,rumble:null,setup:null,helptext:`The Print Shop

Total Reprint is a port of The Print Shop Color (1986) to ProDOS. Some notable features:

* All Broderbund graphic libraries
* Additional openly licensed 3rd party graphics and fonts
* Unified UI for selecting 3rd party graphics and borders
* All libraries available from hard drive (no swapping floppies!)

Total Reprint is © 2025 by 4am and licensed under the MIT open source license.
All original code is available on <a href="https://github.com/a2-4am/4print" target="_blank" rel="noopener noreferrer">GitHub</a>.

Program and graphic libraries are © their respective authors.`},Ot={address:16962,data:[173,0,192],keymap:{},joystick:null,gamepad:null,rumble:()=>{k(14799,!1)===255&&f_({startDelay:0,duration:1e3,weakMagnitude:1,strongMagnitude:0})},setup:()=>{A(3178,99)},helptext:`Robotron: 2084
(c) 1982 Williams Electronics, Inc.
(c) 1983 Atari, Inc.
Written by Steve Hays

This "Robotron4Joy" patch by Nick Westgate

Press <Space> to start game
1) One joystick
2) Gamepad with two joysticks

ESC       Pause (Space to resume)
Ctrl+Q    Quit current game
Ctrl+R+## Jump to level ##
Ctrl+S    Turn Sound On/Off`},kt=`SNOGGLE
Jun Wada and Ken Iba
Star Craft (Brøderbund) 1981

KEYBOARD
A      up
Z      down
N ← ,  left
M → .  right
`,At=e=>{switch(e){case 1:A(109,255);break;case 12:_(`A`);break;case 13:_(`Z`);break;case 14:_(`\b`);break;case 15:_(``)}},jt=.75,Mt=[{address:34918,data:[32,0,96],keymap:{},joystick:null,gamepad:null,rumble:null,setup:()=>{A(25025,173),A(25036,64)},helptext:kt},{address:7291,data:[173,0,192],keymap:{N:`\b`,M:``,",":`\b`,".":``},joystick:e=>{let t=e[0]<-.75?`\b`:e[0]>jt?``:e[1]<-.75?`A`:e[1]>jt?`Z`:``;return t&&_(t),e},gamepad:At,rumble:null,setup:null,helptext:kt}],Nt={address:24907,data:[44,0,192],keymap:{},joystick:null,gamepad:null,rumble:null,setup:null,helptext:`<b>Tass Times in Tonetown</b>
Activision 1986
Designed by Michael Berlyn and Muffy McClung Berlyn
Apple ][ version by B. Heineman, Interplay Productions
Artwork by Todd Camasta
Advent code by Brian Fargo and Steve Neilsen

In Tass Times in Tonetown, you explore a bizarre city filled with eccentric characters and strange locations. Your goal is to solve puzzles, interact with the townspeople, and ultimately uncover the secrets of Tonetown.

<img src="disks/tasstimes_cover.jpg"/>

<a href="https://archive.org/details/Tass_Times_in_Tonetown_Manual_HQ/" target="_blank">Full Manual</a>

<a href="https://archive.org/details/Tass_Times-Newspaper/" target="_blank">Game Newspaper</a>

<a href="https://archive.org/details/tass-times-in-tone-town-source-code" target="_blank">Source Code</a>
`},Pt={address:28948,data:[213,204,212],keymap:{},gamepad:null,joystick:null,rumble:null,setup:null,helptext:`Ultima IV: Quest of the Avatar
by Lord British
(c) 1985 Origin Systems
_____________________________________________
Arrows movement
A      attack, plus direction
B      board transport or mount horse
C      cast spell, plus player and spell first letter
D      down ladder to next level
E      enter towne, castle, or structure
F      fire cannon, plus direction
G      get chest
H      hole up and camp
I      ignite torch
J      jimmy a lock, plus direction
K      climb up
L      locate position (requires special item)
M      mix reagents
N      new character order
O      open door, plus direction
P      peer at gem
Q      quit and save game
R      ready weapon
S      search
T      talk, plus direction
U      use item
V      volume, toggle sound
W      wear armour
X      exit transport or mount
Y      yell, speed up or slow down horse
Z      display stats/attributes
---
* Special Note: Talking with the people found in the game is one of the most important features of Ultima IV to master. It is virtually impossible to solve thy quests without talking to virtually all people in each towne. Each person with whom thou dost Talk is capable of a full conversation. They can be asked about their “Name,” “Job,” and “Health.” You may “Look” again at their visual description. From this information thou shouldst be able to discern what else they might know, hinted at directly by use of the precise words in the conversation. E.g., if thou were to ask Dupré about his “Job” and he were to respond “I am hunting Gremlins,” thou might think to ask him about “Hunting” or “Gremlins” - about either of which he might offer some insight.

Each of these people might ask of thee a question as well; be sure to answer the question honestly, for dishonesty will be remembered and not reflect well upon thee for the rest of the game. Often thou shalt not know what to ask a townsperson until thou hast been told by another: E.g., Iolo the Bard might tell thee to ask Shamino the Ranger about swords. Even if thou hadst met Shamino earlier thou wouldst not have known to ask him about swords, and thus thou wouldst have to seek him out again if thou dost wish that knowledge.

Some of the people that thou shalt meet may be willing to become thy travelling companions. If thou dost wish for a character to become a player in thy party, thou must ask them to “Join” thee. Tis most wise to strengthen thy party as rapidly as possible, up to the seven companions thou shalt need to complete the game. When thou art through with a conversation, then speak the word “Bye” as an accepted means of politely ending thy conversation.

Be sure to keep a journal of thy travels! Many of the clues to solving the quests of Ultima IV are contained in the various and diverse conversations thou might have with the various townsfolk. It would be next to impossible to solve this game without some means of referring back to prior conversa- tions held during play.

Be sure to thoroughly explore the cities and townes! Many of the quests within Ultima IV are contained entirely within individual cities. Tis wisest to spend a great deal of time seeking out the answers that lie hidden in each one of the various townes of Britannia, before moving on to another.

NOTE: During thy conversations with people in Ultima IV, thou may feel the impulse to show thy generosity to less fortunate fellows. Thou may do so by saying: “Give”.
`},Ft={address:514,data:[85,76,84,73,77,65,53],keymap:{},gamepad:null,joystick:null,rumble:null,setup:()=>{m_(1)},helptext:`Ultima V: Warriors of Destiny
by Lord British
(c) 1987 Origin Systems
_____________________________________________
Arrows    movement
A         attack
B         board transport or mount
C         cast spell
E         enter towne, castle, or structure
F         fire cannon
G         get gold, food, or items
H         hole up and camp
I         ignite torch
J         jimmy a lock
K         climb up or down
L         look
M         mix reagents
N         new character order
O         open door or chest
P         push object
Q         quit and save game
R         ready equipment
S         search
T         talk
U         use item
V         view area
X         exit transport or mount
Y         yell, go fast on ship
Z         display stats/attributes
1-6       set active character
0         clear active character
SPACE     pass turn
ESC       abort command, exit combat
Ctrl+S    toggle sound
Ctrl+T    toggle speed
Ctrl+V    set music volume 0-9
---
For Dual Mockingboard Support:
1) Open Settings (gear icon) and assign Mockingboard to both Slot 4 & Slot 5.
2) In Ultima V, go to Activate Music -> Change Music Configuration, add Mockingboard A to Slot 4 and Slot 5, and press Enter.
3) A total of 12 voices will be initialized. Press the initial letter of any song title to play music (e.g., Ultima Theme & Stones use 7–8 polyphonic voices).

For MIDI Support:
1) Open Settings (gear icon) and assign Passport MIDI Card to Slot 2.
2) In Audio Configuration (music icon), select Apple2TS Built-in Synthesizer. If using External MIDI, launch a WebMIDI-supported player/synthesizer (such as https://signalmidi.app/ or Munt MT-32 emulator) in a separate tab or app and grant WebMIDI access.
3) In Ultima V, navigate to Activate Music -> Change Music Configuration, add Passport to Slot 2, and press Enter.
4) In the MIDI Information screen, select Channel 1 (default) and 16 voices, then enter numbers 1–15 for "MIDI Number" for each song (where Ultima Theme is '1' and Rule Britannia is '15'). Press Enter on each song title to test playback.

`},It={address:46999,data:[173,0,192],keymap:{},gamepad:null,joystick:null,rumble:null,setup:null,helptext:`Wizardry
Andrew Greenberg and Robert Woodhead
Sir-Tech Software, 1981

____ Adventuring ____
W  forward
A  left
D  right
K  kick through a door
S  update status area
C  camp
T  combat message delay time (ms)
Q  quick plotting - see the LOMILWA spell
I  inspect for dead bodies

____ Combat ____
F  fight (# for group)
P  parry
S  cast spell
U  use an item
R  run!
D  dispell undead
`},Lt=`<b>Castle Wolfenstein</b>
Silas Warner, Muse Software 1981

World War II is raging across Europe, and Castle Wolfenstein has been occupied by the Nazis and converted into their HQ. You have just been captured behind enemy lines and await interrogation and torture by the dreaded SS in the dungeons of Castle Wolfenstein. A dying cellmate bequeaths you your only hope - a gun and ten bullets.

Your Mission: Find the war plans and escape from Castle Wolfenstein ALIVE!

<a href="https://archive.org/details/muse-castle-wolfenstein-a2-ph/" target="_blank">Detailed instructions</a>

<b>KEYBOARD</b>
<b>Q W E</b>
<b>A S D</b>    Movement (<b>S</b> = Stop)
<b>Z X C</b>

<b>I O P</b>
<b>K L ;</b>    Aim gun (<b>L</b> = Fire)
<b>, . /</b>

<b>Space</b>  Search guards, unlock doors & chests
<b>T</b>      Throw grenade
<b>U</b>      Use contents of chest
<b>RETURN</b> Inventory

<b>JOYSTICK</b>
Left button (0):  Hold down and move joystick to aim, or press button to holster
Right button (1): Shoot
X button:  Search/unlock
Y button:  Use chest contents
RB button: Throw grenade
LB button: Inventory`,Rt=e=>{switch(e){case 0:Be();break;case 1:Ve();break;case 2:v(` `);break;case 3:v(`U`);break;case 4:v(`\r`);break;case 5:v(`T`);break;case 9:{let e=oa();e.includes(`'N'`)?_(`N`):e.includes(`'S'`)?_(`S`):e.includes(`NUMERIC KEY`)?_(`1`):_(`N`);break}case 10:Be()}},zt=()=>{A(5128,0),A(5130,4);let e=5210;A(e,234),A(e+1,234),A(e+2,234),e=5224,A(e,234),A(e+1,234),A(e+2,234)},Bt=()=>{k(49178,!1)<128&&k(49181,!1)<128&&f_({startDelay:0,duration:200,weakMagnitude:1,strongMagnitude:0})},Vt={address:3205,data:[173,0,192],keymap:{},joystick:null,gamepad:null,rumble:null,setup:null,helptext:Lt},Ht={address:4745,data:[173,0,192],keymap:{},joystick:null,gamepad:Rt,rumble:Bt,setup:zt,helptext:Lt},Ut={address:2926,data:[169,0,133],keymap:{},joystick:null,gamepad:e=>{switch(e){case 0:Be();break;case 1:Ve();break;case 2:v(` `);break;case 3:v(`U`);break;case 4:v(`\r`);break;case 5:v(`:`);break;case 9:{let e=oa();e.includes(`'N'`)?_(`N`):e.includes(`'S'`)?_(`S`):e.includes(`NUMERIC KEY`)?_(`1`):_(`N`);break}case 10:Be()}},rumble:null,setup:null,helptext:`<b>Beyond Castle Wolfenstein</b>
Silas Warner, Muse Software 1981

<a href="https://archive.org/details/beyondcastlewolfensteinmusesoftware/" target="_blank">Detailed instructions</a>

Find the bomb, locate the private conference room, and leave the bomb, timed to detonate! Then return to the courtyard from which you entered the bunker. Good luck!

<b>KEYBOARD</b>
<b>Q W E</b>
<b>A S D</b>    Movement (<b>S</b> = Stop)
<b>Z X C</b>

<b>I O P</b>
<b>K L ;</b>    Aim gun (<b>L</b> = Fire)
<b>, . /</b>

<b>:</b>    Switch weapons (gun or dagger)
<b>B</b>    Bomb drop or pick up
<b>F</b>    Use first aid kit
<b>H</b>    Holster gun
<b>M</b>    Give money to bribe guard
<b>R</b>    Reset bomb
<b>U</b>    Use contents of open closet
<b>1-5</b>  Use pass
<b>Ctrl+T</b>  Use tool kit
<b>Ctrl+K</b>  Use key
<b>SPACE</b>   Search guards, unlock closets
<b>ESC</b>     Save game and exit
<b>RETURN</b>  Inventory

Open Closet: Aim gun and press SPACE
Unlock Closet: Aim gun then use number keys for 3-digit combo
Search Dead Guards: Stand over body and press SPACE
Drag Dead Guards: Stand next to body, aim gun at body and press SPACE

<b>JOYSTICK</b>
Left button (0):  Hold down and move joystick to aim, or press button to holster
Right button (1): Shoot
X button:  Search guards or open closet
Y button:  Use contents of open closet
RB button: Switch weapons
LB button: Inventory`},Wt=[],g=e=>{Array.isArray(e)?Wt.push(...e):Wt.push(e)};g(pt),g(mt),g(ht),g(gt),g(_t),g(bt),g(xt),g(wt),g(Tt),g(Et),g(Dt),g(Ot),g(Mt),g(Nt),g(Pt),g(Ft),g(It),g(Ht),g(Vt),g(Ut);let Gt=(e,t,n)=>{let r=!n;switch(e){case 0:r&&Be();break;case 1:r&&Ve();break;case 12:Ue(n?3:1,-1);break;case 13:Ue(n?3:1,1);break;case 14:Ue(n?2:0,-1);break;case 15:Ue(n?2:0,1)}},Kt={address:0,data:[],keymap:{},gamepad:null,joystick:e=>e,rumble:null,setup:null,helptext:` `},qt=!0,Jt=e=>{qt=e},Yt=()=>{if(qt){for(let e of Wt)if(ga(e.address,e.data))return e}return Kt},Xt=e=>{let t=Yt();return t===Kt?e:e.toUpperCase()in t.keymap?t.keymap[e.toUpperCase()]:e},Zt=(e=!1)=>{if(e){p_(` `),m_(0);return}let t=Yt();t!==Kt&&(p_(t.helptext?t.helptext:` `),t.setup&&t.setup())},Qt=e=>{j(49152,e|128,16),j(49168,e&255|128,16)},$t=0,en=!1,tn=0,nn=null,rn=()=>!!(nn||pn!==``||en||ta(49152)>=128),an=(e,t)=>{let n=nn;if(!n)return;nn=null,clearTimeout(n.timeout),$t=0,dn(),fn();let r={outcome:e,keysDelivered:n.currentIndex,keyMayHaveBeenObserved:t};n.onFinish?.(r),n.resolve(r)},on=()=>{an(`interrupted`,!0)},sn=async({keys:e,timeoutMs:t},n,r)=>{if(e.length<1||e.length>32||Array.from(e).some(e=>{let t=e.charCodeAt(0);return e.length!==1||t<1||t>255})||!Number.isInteger(t)||t<1||t>12e4)throw Error(`Invalid key sequence`);if(rn()){let e={outcome:`input_busy`,keysDelivered:0,keyMayHaveBeenObserved:!1};return n?.(e),e}let i=Array.from(e,e=>Xt(e).charCodeAt(0));return $t=0,new Promise(e=>{nn={keys:i,currentIndex:0,strobeCleared:!1,timeout:setTimeout(()=>an(`timeout`,!0),t),onFinish:n,onConsumed:r,resolve:e},Qt(i[0])})},cn=()=>{let e=nn;if(e?.strobeCleared){if(fn(),e.currentIndex+=1,e.onConsumed?.(),e.currentIndex===e.keys.length){an(`completed`,!1);return}e.strobeCleared=!1,Qt(e.keys[e.currentIndex])}},ln=e=>{if(on(),!e.isDown||e.key<0){en=!1,$t=0,fn();return}if(en=!0,$t=Xt(String.fromCharCode(e.key)).charCodeAt(0),Qt($t),e.saveSnapShot&&Ng(),!e.repeat){$t=0;return}tn=performance.now()+600},un=()=>{if(!$t)return;let e=performance.now();e<tn||(Qt($t),tn=e+75)},dn=()=>{let e=ta(49152),t=e&127;j(49152,t,16),nn&&e>=128&&(nn.strobeCleared=!0)},fn=()=>{let e=ta(49168)&127;j(49168,e,16)},pn=``,mn=1e9,hn=0,gn=()=>{let e=performance.now();if(hn++,pn!==``&&hn>2&&(ta(49152)<128||e-mn>3800)){hn=0,mn=e;let t=pn.charCodeAt(0);Qt(t),pn=pn.slice(1)}},_n=``,_=e=>{e===_n&&pn.length>0||(_n=e,pn+=e)},vn=0,v=(e,t=300)=>{let n=performance.now();n-vn<t||(vn=n,_(e))},yn=e=>{on();let t=String.fromCharCode(e);t=Xt(t),_(t),gn()},bn=e=>{on(),e.length===1&&(e=Xt(e)),_(e)},xn=[],Sn=new Set,y=(e,t,n,r=!1,i=null)=>{let a={offAddr:e,onAddr:t,isSetAddr:n,writeOnly:r,isSet:!1,setFunc:i};return e>=49152&&(xn[e-49152]=a),t>=49152&&(xn[t-49152]=a),n>=49152&&(xn[n-49152]=a),a},Cn=()=>Math.floor(180*Math.random()),wn=()=>Math.floor(256*Math.random()),Tn=e=>{let t=ta(e&65527);j(e,t&128|Cn()&127)},En=(e,t)=>{e&=11,t?(b.BSR_PREWRITE.isSet=!1,e&1||(b.BSR_WRITE.isSet=!1)):e&1?b.BSR_PREWRITE.isSet?b.BSR_WRITE.isSet=!0:b.BSR_PREWRITE.isSet=!0:(b.BSR_PREWRITE.isSet=!1,b.BSR_WRITE.isSet=!1),b.BSRBANK2.isSet=e<=3,b.BSRREADRAM.isSet=[0,3,8,11].includes(e)},b={STORE80:y(49152,49153,49176,!0),AUXRAMREAD:y(49154,49155,49171,!0),AUXRAMWRITE:y(49156,49157,49172,!0),INTCXROM:y(49158,49159,49173,!0),INTC8ROM:y(49194,0,0),ALTZP:y(49160,49161,49174,!0),SLOTC3ROM:y(49162,49163,49175,!0),COLUMN80:y(49164,49165,49183,!0),ALTCHARSET:y(49166,49167,49182,!0),KBRDSTROBE:y(49168,0,0,!1),BSRBANK2:y(0,0,49169),BSRREADRAM:y(0,0,49170),VBLINV:y(0,0,49177),CASSOUT:y(49184,0,0),NEWVIDEO:y(0,0,49193),SPEAKER:y(49200,0,0,!1,(e,t)=>{j(49200,Cn()),s_(t)}),GCSTROBE:y(49216,0,0),EMUBYTE:y(0,0,49231,!1,()=>{j(49231,205)}),TEXT:y(49232,49233,49178),MIXED:y(49234,49235,49179),PAGE2:y(49236,49237,49180),HIRES:y(49238,49239,49181),AN0:y(49240,49241,0),AN1:y(49242,49243,0),AN2:y(49244,49245,0),DHIRES:y(49247,49246,0),CASSIN1:y(0,0,49248,!1,()=>{j(49248,Cn())}),PB0:y(0,0,49249,!1,e=>{Ze(e,Cn())}),PB1:y(0,0,49250,!1,e=>{Ze(e,Cn())}),PB2:y(0,0,49251,!1,e=>{Ze(e,Cn())}),JOYSTICK0:y(0,0,49252,!1,(e,t)=>{Xe(t,Cn())}),JOYSTICK1:y(0,0,49253,!1,(e,t)=>{Xe(t,Cn())}),JOYSTICK2:y(0,0,49254,!1,(e,t)=>{Xe(t,Cn())}),JOYSTICK3:y(0,0,49255,!1,(e,t)=>{Xe(t,Cn())}),CASSIN2:y(0,0,49256,!1,e=>{Tn(e)}),PB0_MIRROR:y(0,0,49257,!1,e=>{Tn(e)}),PB1_MIRROR:y(49258,0,0,!1,e=>{Tn(e)}),PB2_MIRROR:y(49259,0,0,!1,e=>{Tn(e)}),JOYSTICK0_MIRROR:y(0,0,49260,!1,e=>{Tn(e)}),JOYSTICK1_MIRROR:y(49261,0,0,!1,e=>{Tn(e)}),JOYSTICK2_MIRROR:y(0,0,49262,!1,e=>{Tn(e)}),JOYSTICK3_MIRROR:y(0,0,49263,!1,e=>{Tn(e)}),BANKSEL:y(49267,0,0),ACCELCTRL:y(49268,0,0),VIDEO7_160:y(0,0,0),VIDEO7_MONO:y(0,0,0),VIDEO7_MIXED:y(0,0,0),BSR_PREWRITE:y(49280,0,0),BSR_WRITE:y(49288,0,0)};b.TEXT.isSet=!0;let Dn=!0,On=0,kn=e=>{if(Dn!==e){if(e)switch(b.VIDEO7_160.isSet=!1,b.VIDEO7_MONO.isSet=!1,b.VIDEO7_MIXED.isSet=!1,On=On<<1&2,On|=+!b.COLUMN80.isSet,On){case 0:break;case 1:b.VIDEO7_160.isSet=!0;break;case 2:b.VIDEO7_MIXED.isSet=!0;break;case 3:b.VIDEO7_MONO.isSet=!0}Dn=e}},An={"160x192":b.VIDEO7_160,monochrome:b.VIDEO7_MONO,mixed:b.VIDEO7_MIXED},jn=(e,t)=>{An[e].isSet=t},Mn=[49152,49153,49165,49167,49168,49200,49236,49237,49183],Nn=(e,t)=>8192+e%8*1024+128*(Math.trunc(e/8)&7)+40*Math.trunc(e/64)+t,Pn=(e,t,n)=>{if(e>1048575&&!Mn.includes(e)){let r=+(ta(e)>128);console.log(`${n} $${m(M.PC)}: $${m(e)} [${r}] ${t?`write`:``}`)}if(e<=49183&&ki()===`APPLE2P`){!t&&e<=49167&&gn(),e>=49168&&dn(),e!==49152&&e!==49168&&j(e,Cn());return}if(e>=49280&&e<=49295){En(e&-5,t);return}let r=xn[e-49152];if(e<=49167)t||gn();else if(e===49168||e<=49183&&t)dn();else if(e>=49264&&e<=49279){if(Ye(n),j(e,Cn()),!r)return}else if(!r){Sn.has(e)||(console.error(`Unknown softswitch `+m(e)),Sn.add(e)),j(e,Cn());return}if(r.setFunc){(e===r.offAddr||e===r.onAddr)&&(r.isSet=e===r.onAddr),r.setFunc(e,n);return}if(e===b.DHIRES.offAddr?kn(!0):e===b.DHIRES.onAddr&&kn(!1),e===r.offAddr||e===r.onAddr){if((!r.writeOnly||t)&&(In[r.offAddr-49152]===void 0?r.isSet=e===r.onAddr:In[r.offAddr-49152]=e===r.onAddr),r.isSetAddr){let e=ta(r.isSetAddr);j(r.isSetAddr,r.isSet?e|128:e&127)}if(e>=49184){let t;if(e>=49232&&e<=49247){let e=n%17030-4550;if(e>=0){let r=Math.floor(e/65),i=n%65,a=Nn(r,i);t=k(a,!1)}else t=wn()}else t=Cn();j(e,t)}}else if(e===r.isSetAddr){let t=ta(e);j(e,r.isSet?t|128:t&127)}},Fn=()=>{for(let e in b){let t=e;In[b[t].offAddr-49152]===void 0?b[t].isSet=!1:In[b[t].offAddr-49152]=!1}In[b.TEXT.offAddr-49152]===void 0?b.TEXT.isSet=!0:In[b.TEXT.offAddr-49152]=!0,On=0,Dn=!0},In=[],Ln=e=>{if(e>=49280&&e<=49295){En(e&-5,!1);return}let t=xn[e-49152];if(!t){console.error(`overrideSoftSwitch: Unknown softswitch `+m(e));return}In[t.offAddr-49152]===void 0&&(In[t.offAddr-49152]=t.isSet),t.isSet=e===t.onAddr},Rn=()=>{In.forEach((e,t)=>{e!==void 0&&(xn[t].isSet=e)}),In.length=0},zn=[],Bn=()=>{if(zn.length===0)for(let e in b){let t=b[e],n=t.onAddr>0,r=t.writeOnly?` (write)`:``;if(t.offAddr>0){let i=m(t.offAddr)+` `+e;zn[t.offAddr]=i+(n?`-OFF`:``)+r}if(t.onAddr>0){let n=m(t.onAddr)+` `+e;zn[t.onAddr]=n+`-ON`+r}if(t.isSetAddr>0){let n=m(t.isSetAddr)+` `+e;zn[t.isSetAddr]=n+`-STATUS`+r}}return zn[49152]=`C000 KBRD/STORE80-OFF`,zn},Vn=()=>{for(let e in b){let t=b[e];if(t.isSetAddr){let e=ta(t.isSetAddr);j(t.isSetAddr,t.isSet?e|128:e&127)}}},Hn=()=>`${b.ALTZP.isSet?`0`:`-`}${b.AUXRAMREAD.isSet?`R`:`-`}${b.AUXRAMWRITE.isSet?`W`:`-`}  ${b.BSRREADRAM.isSet?`R`:`-`}${b.BSR_WRITE.isSet?`W`:`-`}${b.BSRBANK2.isSet?`2`:`1`}${b.STORE80.isSet?`  ✓`:``}`;var Un=e((e=>{e.byteLength=c,e.toByteArray=u,e.fromByteArray=p;for(var t=[],n=[],r=typeof Uint8Array<`u`?Uint8Array:Array,i=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,a=0,o=i.length;a<o;++a)t[a]=i[a],n[i.charCodeAt(a)]=a;n[45]=62,n[95]=63;function s(e){var t=e.length;if(t%4>0)throw Error(`Invalid string. Length must be a multiple of 4`);var n=e.indexOf(`=`);n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function c(e){var t=s(e),n=t[0],r=t[1];return(n+r)*3/4-r}function l(e,t,n){return(t+n)*3/4-n}function u(e){var t,i=s(e),a=i[0],o=i[1],c=new r(l(e,a,o)),u=0,d=o>0?a-4:a,f;for(f=0;f<d;f+=4)t=n[e.charCodeAt(f)]<<18|n[e.charCodeAt(f+1)]<<12|n[e.charCodeAt(f+2)]<<6|n[e.charCodeAt(f+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=t&255;return o===2&&(t=n[e.charCodeAt(f)]<<2|n[e.charCodeAt(f+1)]>>4,c[u++]=t&255),o===1&&(t=n[e.charCodeAt(f)]<<10|n[e.charCodeAt(f+1)]<<4|n[e.charCodeAt(f+2)]>>2,c[u++]=t>>8&255,c[u++]=t&255),c}function d(e){return t[e>>18&63]+t[e>>12&63]+t[e>>6&63]+t[e&63]}function f(e,t,n){for(var r,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(e[a+2]&255),i.push(d(r));return i.join(``)}function p(e){for(var n,r=e.length,i=r%3,a=[],o=16383,s=0,c=r-i;s<c;s+=o)a.push(f(e,s,s+o>c?c:s+o));return i===1?(n=e[r-1],a.push(t[n>>2]+t[n<<4&63]+`==`)):i===2&&(n=(e[r-2]<<8)+e[r-1],a.push(t[n>>10]+t[n>>4&63]+t[n<<2&63]+`=`)),a.join(``)}})),Wn=e((e=>{
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
e.read=function(e,t,n,r,i){var a,o,s=i*8-r-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?i-1:0,f=n?-1:1,p=e[t+d];for(d+=f,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=a*256+e[t+d],d+=f,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=r;u>0;o=o*256+e[t+d],d+=f,u-=8);if(a===0)a=1-l;else if(a===c)return o?NaN:(p?-1:1)*(1/0);else o+=2**r,a-=l;return(p?-1:1)*o*2**(a-r)},e.write=function(e,t,n,r,i,a){var o,s,c,l=a*8-i-1,u=(1<<l)-1,d=u>>1,f=i===23?2**-24-2**-77:0,p=r?0:a-1,m=r?1:-1,ee=+(t<0||t===0&&1/t<0);for(t=Math.abs(t),isNaN(t)||t===1/0?(s=+!!isNaN(t),o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=2**-o)<1&&(o--,c*=2),o+d>=1?t+=f/c:t+=f*2**(1-d),t*c>=2&&(o++,c/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*c-1)*2**i,o+=d):(s=t*2**(d-1)*2**i,o=0));i>=8;e[n+p]=s&255,p+=m,s/=256,i-=8);for(o=o<<i|s,l+=i;l>0;e[n+p]=o&255,p+=m,o/=256,l-=8);e[n+p-m]|=ee*128}})),Gn=e((e=>{
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
let t=Un(),n=Wn(),r=typeof Symbol==`function`&&typeof Symbol.for==`function`?Symbol.for(`nodejs.util.inspect.custom`):null;e.Buffer=s,e.SlowBuffer=re,e.INSPECT_MAX_BYTES=50;let i=2147483647;e.kMaxLength=i,s.TYPED_ARRAY_SUPPORT=a(),!s.TYPED_ARRAY_SUPPORT&&typeof console<`u`&&typeof console.error==`function`&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),e.foo()===42}catch{return!1}}Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}});function o(e){if(e>i)throw RangeError(`The value "`+e+`" is invalid for option "size"`);let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,n){if(typeof e==`number`){if(typeof t==`string`)throw TypeError(`The "string" argument must be of type string. Received type number`);return d(e)}return c(e,t,n)}s.poolSize=8192;function c(e,t,n){if(typeof e==`string`)return f(e,t);if(ArrayBuffer.isView(e))return m(e);if(e==null)throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e);if(He(e,ArrayBuffer)||e&&He(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<`u`&&(He(e,SharedArrayBuffer)||e&&He(e.buffer,SharedArrayBuffer)))return ee(e,t,n);if(typeof e==`number`)throw TypeError(`The "value" argument must not be of type number. Received type number`);let r=e.valueOf&&e.valueOf();if(r!=null&&r!==e)return s.from(r,t,n);let i=te(e);if(i)return i;if(typeof Symbol<`u`&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==`function`)return s.from(e[Symbol.toPrimitive](`string`),t,n);throw TypeError(`The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type `+typeof e)}s.from=function(e,t,n){return c(e,t,n)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array);function l(e){if(typeof e!=`number`)throw TypeError(`"size" argument must be of type number`);if(e<0)throw RangeError(`The value "`+e+`" is invalid for option "size"`)}function u(e,t,n){return l(e),e<=0||t===void 0?o(e):typeof n==`string`?o(e).fill(t,n):o(e).fill(t)}s.alloc=function(e,t,n){return u(e,t,n)};function d(e){return l(e),o(e<0?0:ne(e)|0)}s.allocUnsafe=function(e){return d(e)},s.allocUnsafeSlow=function(e){return d(e)};function f(e,t){if((typeof t!=`string`||t===``)&&(t=`utf8`),!s.isEncoding(t))throw TypeError(`Unknown encoding: `+t);let n=ie(e,t)|0,r=o(n),i=r.write(e,t);return i!==n&&(r=r.slice(0,i)),r}function p(e){let t=e.length<0?0:ne(e.length)|0,n=o(t);for(let r=0;r<t;r+=1)n[r]=e[r]&255;return n}function m(e){if(He(e,Uint8Array)){let t=new Uint8Array(e);return ee(t.buffer,t.byteOffset,t.byteLength)}return p(e)}function ee(e,t,n){if(t<0||e.byteLength<t)throw RangeError(`"offset" is outside of buffer bounds`);if(e.byteLength<t+(n||0))throw RangeError(`"length" is outside of buffer bounds`);let r;return r=t===void 0&&n===void 0?new Uint8Array(e):n===void 0?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,s.prototype),r}function te(e){if(s.isBuffer(e)){let t=ne(e.length)|0,n=o(t);return n.length===0||e.copy(n,0,0,t),n}if(e.length!==void 0)return typeof e.length!=`number`||Ue(e.length)?o(0):p(e);if(e.type===`Buffer`&&Array.isArray(e.data))return p(e.data)}function ne(e){if(e>=i)throw RangeError(`Attempt to allocate Buffer larger than maximum size: 0x`+i.toString(16)+` bytes`);return e|0}function re(e){return+e!=e&&(e=0),s.alloc(+e)}s.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==s.prototype},s.compare=function(e,t){if(He(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),He(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError(`The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array`);if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,a=Math.min(n,r);i<a;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:+(r<n)},s.isEncoding=function(e){switch(String(e).toLowerCase()){case`hex`:case`utf8`:case`utf-8`:case`ascii`:case`latin1`:case`binary`:case`base64`:case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return!0;default:return!1}},s.concat=function(e,t){if(!Array.isArray(e))throw TypeError(`"list" argument must be an Array of Buffers`);if(e.length===0)return s.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let r=s.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){let t=e[n];if(He(t,Uint8Array))i+t.length>r.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else if(s.isBuffer(t))t.copy(r,i);else throw TypeError(`"list" argument must be an Array of Buffers`);i+=t.length}return r};function ie(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||He(e,ArrayBuffer))return e.byteLength;if(typeof e!=`string`)throw TypeError(`The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type `+typeof e);let n=e.length,r=arguments.length>2&&arguments[2]===!0;if(!r&&n===0)return 0;let i=!1;for(;;)switch(t){case`ascii`:case`latin1`:case`binary`:return n;case`utf8`:case`utf-8`:return Le(e).length;case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return n*2;case`hex`:return n>>>1;case`base64`:return Be(e).length;default:if(i)return r?-1:Le(e).length;t=(``+t).toLowerCase(),i=!0}}s.byteLength=ie;function ae(e,t,n){let r=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,t>>>=0,n<=t))return``;for(e||=`utf8`;;)switch(e){case`hex`:return be(this,t,n);case`utf8`:case`utf-8`:return he(this,t,n);case`ascii`:return ve(this,t,n);case`latin1`:case`binary`:return ye(this,t,n);case`base64`:return me(this,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return xe(this,t,n);default:if(r)throw TypeError(`Unknown encoding: `+e);e=(e+``).toLowerCase(),r=!0}}s.prototype._isBuffer=!0;function oe(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError(`Buffer size must be a multiple of 16-bits`);for(let t=0;t<e;t+=2)oe(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError(`Buffer size must be a multiple of 32-bits`);for(let t=0;t<e;t+=4)oe(this,t,t+3),oe(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError(`Buffer size must be a multiple of 64-bits`);for(let t=0;t<e;t+=8)oe(this,t,t+7),oe(this,t+1,t+6),oe(this,t+2,t+5),oe(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return e===0?``:arguments.length===0?he(this,0,e):ae.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError(`Argument must be a Buffer`);return this===e||s.compare(this,e)===0},s.prototype.inspect=function(){let t=``,n=e.INSPECT_MAX_BYTES;return t=this.toString(`hex`,0,n).replace(/(.{2})/g,`$1 `).trim(),this.length>n&&(t+=` ... `),`<Buffer `+t+`>`},r&&(s.prototype[r]=s.prototype.inspect),s.prototype.compare=function(e,t,n,r,i){if(He(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError(`The "target" argument must be one of type Buffer or Uint8Array. Received type `+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),r===void 0&&(r=0),i===void 0&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw RangeError(`out of range index`);if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;let a=i-r,o=n-t,c=Math.min(a,o),l=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<c;++e)if(l[e]!==u[e]){a=l[e],o=u[e];break}return a<o?-1:+(o<a)};function se(e,t,n,r,i){if(e.length===0)return-1;if(typeof n==`string`?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,Ue(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0)if(i)n=0;else return-1;if(typeof t==`string`&&(t=s.from(t,r)),s.isBuffer(t))return t.length===0?-1:ce(e,t,n,r,i);if(typeof t==`number`)return t&=255,typeof Uint8Array.prototype.indexOf==`function`?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ce(e,[t],n,r,i);throw TypeError(`val must be string, number or Buffer`)}function ce(e,t,n,r,i){let a=1,o=e.length,s=t.length;if(r!==void 0&&(r=String(r).toLowerCase(),r===`ucs2`||r===`ucs-2`||r===`utf16le`||r===`utf-16le`)){if(e.length<2||t.length<2)return-1;a=2,o/=2,s/=2,n/=2}function c(e,t){return a===1?e[t]:e.readUInt16BE(t*a)}let l;if(i){let r=-1;for(l=n;l<o;l++)if(c(e,l)===c(t,r===-1?0:l-r)){if(r===-1&&(r=l),l-r+1===s)return r*a}else r!==-1&&(l-=l-r),r=-1}else for(n+s>o&&(n=o-s),l=n;l>=0;l--){let n=!0;for(let r=0;r<s;r++)if(c(e,l+r)!==c(t,r)){n=!1;break}if(n)return l}return-1}s.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1},s.prototype.indexOf=function(e,t,n){return se(this,e,t,n,!0)},s.prototype.lastIndexOf=function(e,t,n){return se(this,e,t,n,!1)};function le(e,t,n,r){n=Number(n)||0;let i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;let a=t.length;r>a/2&&(r=a/2);let o;for(o=0;o<r;++o){let r=parseInt(t.substr(o*2,2),16);if(Ue(r))return o;e[n+o]=r}return o}function ue(e,t,n,r){return Ve(Le(t,e.length-n),e,n,r)}function de(e,t,n,r){return Ve(Re(t),e,n,r)}function fe(e,t,n,r){return Ve(Be(t),e,n,r)}function pe(e,t,n,r){return Ve(ze(t,e.length-n),e,n,r)}s.prototype.write=function(e,t,n,r){if(t===void 0)r=`utf8`,n=this.length,t=0;else if(n===void 0&&typeof t==`string`)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,r===void 0&&(r=`utf8`)):(r=n,n=void 0);else throw Error(`Buffer.write(string, encoding, offset[, length]) is no longer supported`);let i=this.length-t;if((n===void 0||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError(`Attempt to write outside buffer bounds`);r||=`utf8`;let a=!1;for(;;)switch(r){case`hex`:return le(this,e,t,n);case`utf8`:case`utf-8`:return ue(this,e,t,n);case`ascii`:case`latin1`:case`binary`:return de(this,e,t,n);case`base64`:return fe(this,e,t,n);case`ucs2`:case`ucs-2`:case`utf16le`:case`utf-16le`:return pe(this,e,t,n);default:if(a)throw TypeError(`Unknown encoding: `+r);r=(``+r).toLowerCase(),a=!0}},s.prototype.toJSON=function(){return{type:`Buffer`,data:Array.prototype.slice.call(this._arr||this,0)}};function me(e,n,r){return n===0&&r===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,r))}function he(e,t,n){n=Math.min(e.length,n);let r=[],i=t;for(;i<n;){let t=e[i],a=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,s,c;switch(o){case 1:t<128&&(a=t);break;case 2:n=e[i+1],(n&192)==128&&(c=(t&31)<<6|n&63,c>127&&(a=c));break;case 3:n=e[i+1],r=e[i+2],(n&192)==128&&(r&192)==128&&(c=(t&15)<<12|(n&63)<<6|r&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:n=e[i+1],r=e[i+2],s=e[i+3],(n&192)==128&&(r&192)==128&&(s&192)==128&&(c=(t&15)<<18|(n&63)<<12|(r&63)<<6|s&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|a&1023),r.push(a),i+=o}return _e(r)}let ge=4096;function _e(e){let t=e.length;if(t<=ge)return String.fromCharCode.apply(String,e);let n=``,r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=ge));return n}function ve(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]&127);return r}function ye(e,t,n){let r=``;n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function be(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i=``;for(let r=t;r<n;++r)i+=We[e[r]];return i}function xe(e,t,n){let r=e.slice(t,n),i=``;for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+r[e+1]*256);return i}s.prototype.slice=function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,s.prototype),r};function h(e,t,n){if(e%1!=0||e<0)throw RangeError(`offset is not uint`);if(e+t>n)throw RangeError(`Trying to access beyond buffer length`)}s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||h(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return r},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||h(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||h(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||h(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||h(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||h(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||h(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=Ge(function(e){e>>>=0,Ne(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Pe(e,this.length-8);let r=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,i=this[++e]+this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=Ge(function(e){e>>>=0,Ne(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Pe(e,this.length-8);let r=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],i=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||h(e,t,this.length);let r=this[e],i=1,a=0;for(;++a<t&&(i*=256);)r+=this[e+a]*i;return i*=128,r>=i&&(r-=2**(8*t)),r},s.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||h(e,t,this.length);let r=t,i=1,a=this[e+--r];for(;r>0&&(i*=256);)a+=this[e+--r]*i;return i*=128,a>=i&&(a-=2**(8*t)),a},s.prototype.readInt8=function(e,t){return e>>>=0,t||h(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||h(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n},s.prototype.readInt16BE=function(e,t){e>>>=0,t||h(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||h(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||h(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=Ge(function(e){e>>>=0,Ne(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Pe(e,this.length-8);let r=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}),s.prototype.readBigInt64BE=Ge(function(e){e>>>=0,Ne(e,`offset`);let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&Pe(e,this.length-8);let r=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||h(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||h(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||h(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||h(e,8,this.length),n.read(this,e,!1,52,8)};function Se(e,t,n,r,i,a){if(!s.isBuffer(e))throw TypeError(`"buffer" argument must be a Buffer instance`);if(t>i||t<a)throw RangeError(`"value" argument is out of bounds`);if(n+r>e.length)throw RangeError(`Index out of range`)}s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;Se(this,e,t,n,r,0)}let i=1,a=0;for(this[t]=e&255;++a<n&&(i*=256);)this[t+a]=e/i&255;return t+n},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=2**(8*n)-1;Se(this,e,t,n,r,0)}let i=n-1,a=1;for(this[t+i]=e&255;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+n},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,1,255,0),this[t]=e&255,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Ce(e,t,n,r,i){Me(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function we(e,t,n,r,i){Me(t,r,i,e,n,7);let a=Number(t&BigInt(4294967295));e[n+7]=a,a>>=8,e[n+6]=a,a>>=8,e[n+5]=a,a>>=8,e[n+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}s.prototype.writeBigUInt64LE=Ge(function(e,t=0){return Ce(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeBigUInt64BE=Ge(function(e,t=0){return we(this,e,t,BigInt(0),BigInt(`0xffffffffffffffff`))}),s.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);Se(this,e,t,n,r-1,-r)}let i=0,a=1,o=0;for(this[t]=e&255;++i<n&&(a*=256);)e<0&&o===0&&this[t+i-1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=2**(8*n-1);Se(this,e,t,n,r-1,-r)}let i=n-1,a=1,o=0;for(this[t+i]=e&255;--i>=0&&(a*=256);)e<0&&o===0&&this[t+i+1]!==0&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+n},s.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},s.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},s.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Se(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},s.prototype.writeBigInt64LE=Ge(function(e,t=0){return Ce(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))}),s.prototype.writeBigInt64BE=Ge(function(e,t=0){return we(this,e,t,-BigInt(`0x8000000000000000`),BigInt(`0x7fffffffffffffff`))});function Te(e,t,n,r,i,a){if(n+r>e.length||n<0)throw RangeError(`Index out of range`)}function Ee(e,t,r,i,a){return t=+t,r>>>=0,a||Te(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}s.prototype.writeFloatLE=function(e,t,n){return Ee(this,e,t,!0,n)},s.prototype.writeFloatBE=function(e,t,n){return Ee(this,e,t,!1,n)};function De(e,t,r,i,a){return t=+t,r>>>=0,a||Te(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}s.prototype.writeDoubleLE=function(e,t,n){return De(this,e,t,!0,n)},s.prototype.writeDoubleBE=function(e,t,n){return De(this,e,t,!1,n)},s.prototype.copy=function(e,t,n,r){if(!s.isBuffer(e))throw TypeError(`argument should be a Buffer`);if(n||=0,!r&&r!==0&&(r=this.length),t>=e.length&&(t=e.length),t||=0,r>0&&r<n&&(r=n),r===n||e.length===0||this.length===0)return 0;if(t<0)throw RangeError(`targetStart out of bounds`);if(n<0||n>=this.length)throw RangeError(`Index out of range`);if(r<0)throw RangeError(`sourceEnd out of bounds`);r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let i=r-n;return this===e&&typeof Uint8Array.prototype.copyWithin==`function`?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},s.prototype.fill=function(e,t,n,r){if(typeof e==`string`){if(typeof t==`string`?(r=t,t=0,n=this.length):typeof n==`string`&&(r=n,n=this.length),r!==void 0&&typeof r!=`string`)throw TypeError(`encoding must be a string`);if(typeof r==`string`&&!s.isEncoding(r))throw TypeError(`Unknown encoding: `+r);if(e.length===1){let t=e.charCodeAt(0);(r===`utf8`&&t<128||r===`latin1`)&&(e=t)}}else typeof e==`number`?e&=255:typeof e==`boolean`&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError(`Out of range index`);if(n<=t)return this;t>>>=0,n=n===void 0?this.length:n>>>0,e||=0;let i;if(typeof e==`number`)for(i=t;i<n;++i)this[i]=e;else{let a=s.isBuffer(e)?e:s.from(e,r),o=a.length;if(o===0)throw TypeError(`The value "`+e+`" is invalid for argument "value"`);for(i=0;i<n-t;++i)this[i+t]=a[i%o]}return this};let Oe={};function ke(e,t,n){Oe[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}ke(`ERR_BUFFER_OUT_OF_BOUNDS`,function(e){return e?`${e} is outside of buffer bounds`:`Attempt to access memory outside buffer bounds`},RangeError),ke(`ERR_INVALID_ARG_TYPE`,function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),ke(`ERR_OUT_OF_RANGE`,function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Ae(String(n)):typeof n==`bigint`&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Ae(i)),i+=`n`),r+=` It must be ${t}. Received ${i}`,r},RangeError);function Ae(e){let t=``,n=e.length,r=+(e[0]===`-`);for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function je(e,t,n){Ne(t,`offset`),(e[t]===void 0||e[t+n]===void 0)&&Pe(t,e.length-(n+1))}function Me(e,t,n,r,i,a){if(e>n||e<t){let r=typeof t==`bigint`?`n`:``,i;throw i=a>3?t===0||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(a+1)*8}${r}`:`>= -(2${r} ** ${(a+1)*8-1}${r}) and < 2 ** ${(a+1)*8-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Oe.ERR_OUT_OF_RANGE(`value`,i,e)}je(r,i,a)}function Ne(e,t){if(typeof e!=`number`)throw new Oe.ERR_INVALID_ARG_TYPE(t,`number`,e)}function Pe(e,t,n){throw Math.floor(e)===e?t<0?new Oe.ERR_BUFFER_OUT_OF_BOUNDS:new Oe.ERR_OUT_OF_RANGE(n||`offset`,`>= ${+!!n} and <= ${t}`,e):(Ne(e,n),new Oe.ERR_OUT_OF_RANGE(n||`offset`,`an integer`,e))}let Fe=/[^+/0-9A-Za-z-_]/g;function Ie(e){if(e=e.split(`=`)[0],e=e.trim().replace(Fe,``),e.length<2)return``;for(;e.length%4!=0;)e+=`=`;return e}function Le(e,t){t||=1/0;let n,r=e.length,i=null,a=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if(--t<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw Error(`Invalid code point`)}return a}function Re(e){let t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n)&255);return t}function ze(e,t){let n,r,i,a=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,a.push(i),a.push(r);return a}function Be(e){return t.toByteArray(Ie(e))}function Ve(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function He(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function Ue(e){return e!==e}let We=(function(){let e=`0123456789abcdef`,t=Array(256);for(let n=0;n<16;++n){let r=n*16;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t})();function Ge(e){return typeof BigInt>`u`?Ke:e}function Ke(){throw Error(`BigInt not supported`)}}))();let Kn=Array(256),qn={},x=(e,t,n,r)=>{console.assert(!Kn[n],`Duplicate instruction: `+e+` mode=`+t),Kn[n]={name:e,mode:t,bytes:r},qn[e]||(qn[e]=[]),qn[e][t]=n};x(`ADC`,d.IMM,105,2),x(`ADC`,d.ZP_REL,101,2),x(`ADC`,d.ZP_X,117,2),x(`ADC`,d.ABS,109,3),x(`ADC`,d.ABS_X,125,3),x(`ADC`,d.ABS_Y,121,3),x(`ADC`,d.IND_X,97,2),x(`ADC`,d.IND_Y,113,2),x(`ADC`,d.IND,114,2),x(`AND`,d.IMM,41,2),x(`AND`,d.ZP_REL,37,2),x(`AND`,d.ZP_X,53,2),x(`AND`,d.ABS,45,3),x(`AND`,d.ABS_X,61,3),x(`AND`,d.ABS_Y,57,3),x(`AND`,d.IND_X,33,2),x(`AND`,d.IND_Y,49,2),x(`AND`,d.IND,50,2),x(`ASL`,d.IMPLIED,10,1),x(`ASL`,d.ZP_REL,6,2),x(`ASL`,d.ZP_X,22,2),x(`ASL`,d.ABS,14,3),x(`ASL`,d.ABS_X,30,3),x(`BCC`,d.ZP_REL,144,2),x(`BCS`,d.ZP_REL,176,2),x(`BEQ`,d.ZP_REL,240,2),x(`BIT`,d.ZP_REL,36,2),x(`BIT`,d.ABS,44,3),x(`BIT`,d.IMM,137,2),x(`BIT`,d.ZP_X,52,2),x(`BIT`,d.ABS_X,60,3),x(`BMI`,d.ZP_REL,48,2),x(`BNE`,d.ZP_REL,208,2),x(`BPL`,d.ZP_REL,16,2),x(`BVC`,d.ZP_REL,80,2),x(`BVS`,d.ZP_REL,112,2),x(`BRA`,d.ZP_REL,128,2),x(`BRK`,d.IMPLIED,0,1),x(`CLC`,d.IMPLIED,24,1),x(`CLD`,d.IMPLIED,216,1),x(`CLI`,d.IMPLIED,88,1),x(`CLV`,d.IMPLIED,184,1),x(`CMP`,d.IMM,201,2),x(`CMP`,d.ZP_REL,197,2),x(`CMP`,d.ZP_X,213,2),x(`CMP`,d.ABS,205,3),x(`CMP`,d.ABS_X,221,3),x(`CMP`,d.ABS_Y,217,3),x(`CMP`,d.IND_X,193,2),x(`CMP`,d.IND_Y,209,2),x(`CMP`,d.IND,210,2),x(`CPX`,d.IMM,224,2),x(`CPX`,d.ZP_REL,228,2),x(`CPX`,d.ABS,236,3),x(`CPY`,d.IMM,192,2),x(`CPY`,d.ZP_REL,196,2),x(`CPY`,d.ABS,204,3),x(`DEC`,d.IMPLIED,58,1),x(`DEC`,d.ZP_REL,198,2),x(`DEC`,d.ZP_X,214,2),x(`DEC`,d.ABS,206,3),x(`DEC`,d.ABS_X,222,3),x(`DEX`,d.IMPLIED,202,1),x(`DEY`,d.IMPLIED,136,1),x(`EOR`,d.IMM,73,2),x(`EOR`,d.ZP_REL,69,2),x(`EOR`,d.ZP_X,85,2),x(`EOR`,d.ABS,77,3),x(`EOR`,d.ABS_X,93,3),x(`EOR`,d.ABS_Y,89,3),x(`EOR`,d.IND_X,65,2),x(`EOR`,d.IND_Y,81,2),x(`EOR`,d.IND,82,2),x(`INC`,d.IMPLIED,26,1),x(`INC`,d.ZP_REL,230,2),x(`INC`,d.ZP_X,246,2),x(`INC`,d.ABS,238,3),x(`INC`,d.ABS_X,254,3),x(`INX`,d.IMPLIED,232,1),x(`INY`,d.IMPLIED,200,1),x(`JMP`,d.ABS,76,3),x(`JMP`,d.IND,108,3),x(`JMP`,d.IND_X,124,3),x(`JSR`,d.ABS,32,3),x(`LDA`,d.IMM,169,2),x(`LDA`,d.ZP_REL,165,2),x(`LDA`,d.ZP_X,181,2),x(`LDA`,d.ABS,173,3),x(`LDA`,d.ABS_X,189,3),x(`LDA`,d.ABS_Y,185,3),x(`LDA`,d.IND_X,161,2),x(`LDA`,d.IND_Y,177,2),x(`LDA`,d.IND,178,2),x(`LDX`,d.IMM,162,2),x(`LDX`,d.ZP_REL,166,2),x(`LDX`,d.ZP_Y,182,2),x(`LDX`,d.ABS,174,3),x(`LDX`,d.ABS_Y,190,3),x(`LDY`,d.IMM,160,2),x(`LDY`,d.ZP_REL,164,2),x(`LDY`,d.ZP_X,180,2),x(`LDY`,d.ABS,172,3),x(`LDY`,d.ABS_X,188,3),x(`LSR`,d.IMPLIED,74,1),x(`LSR`,d.ZP_REL,70,2),x(`LSR`,d.ZP_X,86,2),x(`LSR`,d.ABS,78,3),x(`LSR`,d.ABS_X,94,3),x(`NOP`,d.IMPLIED,234,1),x(`ORA`,d.IMM,9,2),x(`ORA`,d.ZP_REL,5,2),x(`ORA`,d.ZP_X,21,2),x(`ORA`,d.ABS,13,3),x(`ORA`,d.ABS_X,29,3),x(`ORA`,d.ABS_Y,25,3),x(`ORA`,d.IND_X,1,2),x(`ORA`,d.IND_Y,17,2),x(`ORA`,d.IND,18,2),x(`PHA`,d.IMPLIED,72,1),x(`PHP`,d.IMPLIED,8,1),x(`PHX`,d.IMPLIED,218,1),x(`PHY`,d.IMPLIED,90,1),x(`PLA`,d.IMPLIED,104,1),x(`PLP`,d.IMPLIED,40,1),x(`PLX`,d.IMPLIED,250,1),x(`PLY`,d.IMPLIED,122,1),x(`ROL`,d.IMPLIED,42,1),x(`ROL`,d.ZP_REL,38,2),x(`ROL`,d.ZP_X,54,2),x(`ROL`,d.ABS,46,3),x(`ROL`,d.ABS_X,62,3),x(`ROR`,d.IMPLIED,106,1),x(`ROR`,d.ZP_REL,102,2),x(`ROR`,d.ZP_X,118,2),x(`ROR`,d.ABS,110,3),x(`ROR`,d.ABS_X,126,3),x(`RTI`,d.IMPLIED,64,1),x(`RTS`,d.IMPLIED,96,1),x(`SBC`,d.IMM,233,2),x(`SBC`,d.ZP_REL,229,2),x(`SBC`,d.ZP_X,245,2),x(`SBC`,d.ABS,237,3),x(`SBC`,d.ABS_X,253,3),x(`SBC`,d.ABS_Y,249,3),x(`SBC`,d.IND_X,225,2),x(`SBC`,d.IND_Y,241,2),x(`SBC`,d.IND,242,2),x(`SEC`,d.IMPLIED,56,1),x(`SED`,d.IMPLIED,248,1),x(`SEI`,d.IMPLIED,120,1),x(`STA`,d.ZP_REL,133,2),x(`STA`,d.ZP_X,149,2),x(`STA`,d.ABS,141,3),x(`STA`,d.ABS_X,157,3),x(`STA`,d.ABS_Y,153,3),x(`STA`,d.IND_X,129,2),x(`STA`,d.IND_Y,145,2),x(`STA`,d.IND,146,2),x(`STX`,d.ZP_REL,134,2),x(`STX`,d.ZP_Y,150,2),x(`STX`,d.ABS,142,3),x(`STY`,d.ZP_REL,132,2),x(`STY`,d.ZP_X,148,2),x(`STY`,d.ABS,140,3),x(`STZ`,d.ZP_REL,100,2),x(`STZ`,d.ZP_X,116,2),x(`STZ`,d.ABS,156,3),x(`STZ`,d.ABS_X,158,3),x(`TAX`,d.IMPLIED,170,1),x(`TAY`,d.IMPLIED,168,1),x(`TSX`,d.IMPLIED,186,1),x(`TXA`,d.IMPLIED,138,1),x(`TXS`,d.IMPLIED,154,1),x(`TYA`,d.IMPLIED,152,1),x(`TRB`,d.ZP_REL,20,2),x(`TRB`,d.ABS,28,3),x(`TSB`,d.ZP_REL,4,2),x(`TSB`,d.ABS,12,3),Object.keys(qn);let Jn={"":``,$:`Address`,A:`Accum`,X:`X Reg`,Y:`Y Reg`,S:`Stack`,P:`PStatus`,C:`PCounter`,"@":`Cycles`},Yn=e=>Jn[e]||`???`,Xn=e=>{let t=e.register===`$`?` $`+m(e.address,4):``,n=e.register===`@`?e.value.toString():`$`+m(e.value);return`(${Yn(e.register)||``}${t}${e.operator}${n})`},Zn=e=>{let t=``;if(e.instruction){let n=Kn[e.address&255];t=e.address===65792?`Any illegal 65C02`:e.address===66048?`Any illegal 6502`:n.name;let r=e.hexvalue>=0?m(e.hexvalue,4):`zzzz`,i=e.hexvalue>=0?m(e.hexvalue,2):`zz`;switch(n.mode){case d.IMPLIED:break;case d.IMM:t+=` #$`+i;break;case d.ZP_REL:t+=` $`+i;break;case d.ZP_X:t+=` $`+i+`,X`;break;case d.ZP_Y:t+=` $`+i+`,Y`;break;case d.ABS:t+=` $`+r;break;case d.ABS_X:t+=` $`+r+`,X`;break;case d.ABS_Y:t+=` $`+r+`,Y`;break;case d.IND_X:t+=` ($`+(n.name===`JMP`?r:i)+`,X)`;break;case d.IND_Y:t+=` ($`+i+`),Y`;break;case d.IND:t+=` ($`+(n.name===`JMP`?r:i)+`)`}}else t=e.address>=0&&e.address<131072?e.basic?e.address.toString():`$${m(e.address,4)}`:``;return e.watchpoint?(e.memget&&(t+=` read`),e.memset&&(t+=` write`),e.hexvalue>=0&&(t+=` $`+m(e.hexvalue,2))):e.basic?t+=` BASIC`:(e.hitcount>1&&(t+=` hit=${e.hitcount}`),e.expression1.register!==``&&(t+=(t?` `:``)+Xn(e.expression1),e.expression2.register!==``&&(t+=` ${e.expressionOperator} ${Xn(e.expression2)}`))),(e.action1.action!==``||e.action2.action!==``)&&(t+=` + actions`),t},Qn=()=>{let e={register:``,address:768,operator:`==`,value:128},t={action:``,register:`A`,address:768,value:0};return{address:-1,watchpoint:!1,instruction:!1,disabled:!1,hidden:!1,once:!1,memget:!1,memset:!0,expression1:{...e},expression2:{...e},expressionOperator:``,hexvalue:-1,hitcount:1,nhits:0,memoryBank:``,action1:{...t},action2:{...t},halt:!1,basic:!1}},$n=e=>{if(e.address>=0&&e.address<131072)return e.address;let t=0,n=Zn(e).replace(/\s+/g,``);for(let e=0;e<n.length;e++)t=(t<<5)-t+n.charCodeAt(e)&65535;return t|131072};var er=class extends Map{set(e,t){let n=[...this.entries()];(e<0||e&131072)&&(e=$n(t),t.address=e),n.push([e,t]),n.sort((e,t)=>e[0]-t[0]),super.clear();for(let[e,t]of n)super.set(e,t);return this}};let tr=e=>{let t=[];for(let n of e.values())n.address&131072&&t.push(n);return t},S={};S[``]={name:`Any`,min:0,max:65535},S.MAIN={name:`Main RAM ($0 - $FFFF)`,min:0,max:65535},S.AUX={name:`Auxiliary RAM ($0 - $FFFF)`,min:0,max:65535},S.ROM={name:`ROM ($D000 - $FFFF)`,min:53248,max:65535},S[`MAIN-DXXX-1`]={name:`Main D000 Bank 1 ($D000 - $DFFF)`,min:53248,max:57343},S[`MAIN-DXXX-2`]={name:`Main D000 Bank 2 ($D000 - $DFFF)`,min:53248,max:57343},S[`AUX-DXXX-1`]={name:`Aux D000 Bank 1 ($D000 - $DFFF)`,min:53248,max:57343},S[`AUX-DXXX-2`]={name:`Aux D000 Bank 2 ($D000 - $DFFF)`,min:53248,max:57343},S[`CXXX-ROM`]={name:`Internal ROM ($C100 - $CFFF)`,min:49408,max:53247},S[`CXXX-CARD`]={name:`Peripheral Card ROM ($C100 - $CFFF)`,min:49408,max:53247},Object.keys(S),Object.values(S).map(e=>e.name);let nr=(e,t)=>e+2+(t>127?t-256:t),rr=(e,t)=>{if(t<0)return!1;let n=!1;switch(e){case`BCS`:n=!!(t&1);break;case`BCC`:n=!(t&1);break;case`BEQ`:n=!!(t&2);break;case`BNE`:n=!(t&2);break;case`BMI`:n=!!(t&128);break;case`BPL`:n=!(t&128);break;case`BVS`:n=!!(t&64);break;case`BVC`:n=!(t&64);break;case`BRA`:n=!0}return n},ir=(e,t,n,r,i)=>{if(!t)return`${m(e,4)}: ???`;if(e>>8==192){let n=`---`;return e>=49168&&e<=49183&&(n=t.pcode>=128?`ON`:`OFF`),`${m(e,4)}: ${m(t.pcode)}        ${n}`}let a=``,o=`${m(t.pcode)}`,s=``,c=``;switch(t.bytes){case 1:o+=`      `;break;case 2:s=m(n),o+=` ${s}   `;break;case 3:s=m(n),c=m(r),o+=` ${s} ${c}`}let l=``;i>=0&&p(t.name)&&(l=rr(t.name,i)?`  ✓`:`  ✗`);let u=p(t.name)?m(nr(e,n),4):s;switch(t.mode){case d.IMPLIED:break;case d.IMM:a=` #$${s}`;break;case d.ZP_REL:a=` $${u}`;break;case d.ZP_X:a=` $${s},X`;break;case d.ZP_Y:a=` $${s},Y`;break;case d.ABS:a=` $${c}${s}`;break;case d.ABS_X:a=` $${c}${s},X`;break;case d.ABS_Y:a=` $${c}${s},Y`;break;case d.IND_X:a=` ($${c.trim()}${s},X)`;break;case d.IND_Y:a=` ($${s}),Y`;break;case d.IND:a=` ($${c.trim()}${s})`}return`${m(e,4)}: ${o}  ${t.name}${a}${l}`},ar={numLines:1e4,collapseLoops:!0,ignoreRegisters:!1},or=!1,sr=null,cr=null,lr=`breakpoint`,ur=null,dr=null,fr=null,pr=new er,mr=!1,hr=()=>{or=!0},gr=()=>{new er(pr).forEach((e,t)=>{e.once&&e.hidden&&pr.delete(t)})},_r=()=>{gr();let e=Va();if(e<0||pr.get(e))return;let t=Qn();t.address=e,t.once=!0,t.hidden=!0,pr.set(e,t)},vr=()=>{gr();let e=55301;if(pr.get(e))return;let t=Qn();t.address=e,t.once=!0,t.hidden=!0,pr.set(e,t)},yr=e=>{pr=e},br=e=>{let t=dr!==null;return dr=e,!e&&sr?.memoryWrite&&(sr=null),t},xr=(e,t,n,r)=>{let i=dr;fr===null||!i||e<i.address||e>=i.address+i.length||(i.space===`active`||i.space===n)&&(i.space!==`aux`||i.auxBank===r)&&Fr(e,{watchpointId:i.watchpointId,writerPC:fr,address:e,value:t,watchpointSpace:i.space,watchpointAuxBank:i.auxBank,effectiveSpace:n,effectiveAuxBank:r,mapping:{RAMRD:b.AUXRAMREAD.isSet,RAMWRT:b.AUXRAMWRITE.isSet,ALTZP:b.ALTZP.isSet,"80STORE":b.STORE80.isSet,PAGE2:b.PAGE2.isSet,HIRES:b.HIRES.isSet}})},Sr=!1,Cr=()=>{Sr=!0,S.MAIN.enabled=(e=0)=>e>=53248?!b.ALTZP.isSet&&b.BSRREADRAM.isSet:e>=512?!b.AUXRAMREAD.isSet:!b.ALTZP.isSet,S.AUX.enabled=(e=0)=>e>=53248?b.ALTZP.isSet&&b.BSRREADRAM.isSet:e>=512?b.AUXRAMREAD.isSet:b.ALTZP.isSet,S.ROM.enabled=()=>!b.BSRREADRAM.isSet,S[`MAIN-DXXX-1`].enabled=()=>!b.ALTZP.isSet&&b.BSRREADRAM.isSet&&!b.BSRBANK2.isSet,S[`MAIN-DXXX-2`].enabled=()=>!b.ALTZP.isSet&&b.BSRREADRAM.isSet&&b.BSRBANK2.isSet,S[`AUX-DXXX-1`].enabled=()=>b.ALTZP.isSet&&b.BSRREADRAM.isSet&&!b.BSRBANK2.isSet,S[`AUX-DXXX-2`].enabled=()=>b.ALTZP.isSet&&b.BSRREADRAM.isSet&&b.BSRBANK2.isSet,S[`CXXX-ROM`].enabled=(e=0)=>e>=49920&&e<=50175?b.INTCXROM.isSet||!b.SLOTC3ROM.isSet:e>=51200?b.INTCXROM.isSet||b.INTC8ROM.isSet:b.INTCXROM.isSet,S[`CXXX-CARD`].enabled=(e=0)=>e>=49920&&e<=50175?!b.INTCXROM.isSet&&b.SLOTC3ROM.isSet:e>=51200?!b.INTCXROM.isSet&&!b.INTC8ROM.isSet:!b.INTCXROM.isSet},wr=(e,t)=>{Sr||Cr();let n=S[e];return!(t<n.min||t>n.max||n.enabled&&!n?.enabled(t))},Tr=(e,t,n)=>{let r=pr.get(e);if(!r||!r.watchpoint||r.disabled||r.hexvalue>=0&&r.hexvalue!==t||r.memoryBank&&!wr(r.memoryBank,e))return!1;let i=n?r.memset:r.memget;return i&&r.once&&pr.delete(e),i},Er=(e=0,t=!0)=>{t?M.flagIRQ|=1<<e:M.flagIRQ&=~(1<<e),M.flagIRQ&=255},Dr=()=>{M.flagIRQ=0,M.flagNMI=!1},Or=[],kr=[],Ar=(e,t)=>{Or.push(e),kr.push(t)},jr=()=>{Or.length=0,kr.length=0},Mr=()=>{for(let e=0;e<Or.length;e++)Or[e](kr[e])},Nr=e=>{let t=0;switch(e.register){case`$`:t=$i(e.address);break;case`A`:t=M.Accum;break;case`X`:t=M.XReg;break;case`Y`:t=M.YReg;break;case`S`:t=M.StackPtr;break;case`P`:t=M.PStatus;break;case`C`:t=M.PC;break;case`@`:t=M.cycleCount}switch(e.operator){case`==`:return t===e.value;case`!=`:return t!==e.value;case`<`:return t<e.value;case`<=`:return t<=e.value;case`>`:return t>e.value;case`>=`:return t>=e.value}},Pr=e=>{let t=Nr(e.expression1);return e.expressionOperator===``?t:e.expressionOperator===`&&`&&!t?!1:e.expressionOperator===`||`&&t?!0:Nr(e.expression2)},Fr=(e,t=null)=>{(!sr||t&&!sr.memoryWrite)&&(sr={address:e,memoryWrite:t})},Ir=(e,t,n)=>{let r=ir(M.PC,{...n},e,t,M.PStatus)+`          `,i=`${(`0000000000`+M.cycleCount.toString()).slice(-10)}  ${r.slice(0,29)}  ${Ia()}`;console.log(i)},Lr=(e,t,n,r)=>{if(e.action===``)return!1;let i=e.value&255,a=e.address&65535;switch(e.action){case`set`:switch(e.register){case`A`:M.Accum=i;break;case`X`:M.XReg=i;break;case`Y`:M.YReg=i;break;case`S`:M.StackPtr=i;break;case`P`:M.PStatus=i;break;case`C`:M.PC=e.value&65535}break;case`jump`:M.PC=a;break;case`print`:Ir(t,n,r);break;case`snapshot`:Ng()}return!0},Rr=(e,t,n,r)=>{let i=Lr(e.action1,t,n,r),a=Lr(e.action2,t,n,r);return i||a?e.halt?1:2:e.hidden?3:1},zr=(e=-1,t=0,n=0,r=null)=>{if(cr=null,lr=`breakpoint`,ur=null,sr)return cr=sr.address,lr=`watchpoint`,ur=sr.memoryWrite,sr=null,1;if(pr.size===0||or)return 0;if(M.PC===55301){let e=k(117,!1)+(k(118,!1)<<8),t=pr.get(e);if(t?.basic&&!t.disabled)return t.once&&pr.delete(e),lr=`step`,3}let i=M.PC,a=pr.get(i);if(a||=(i=e|65536,pr.get(i)),!a&&e>=0&&(i=65792,a=pr.get(i)),!a&&e>=0&&(i=66048,a=pr.get(i)),!a){let e=tr(pr);for(let t of e)if(t.expression1.register!==``&&Pr(t)){a=t,i=$n(a);break}}if(!a||a.disabled||a.watchpoint)return 0;if(a.instruction){let r=(n<<8)+t;if(a.address===65792){if(z[e].name!==`???`)return 0}else if(a.address===66048){if(z[e].is6502)return 0}else if(r>=0&&a.hexvalue>=0&&a.hexvalue!==r)return 0}if(a.expression1.register!==``&&!Pr(a))return 0;if(a.hitcount>1){if(a.nhits++,a.nhits<a.hitcount)return 0;a.nhits=0}if(a.memoryBank&&!wr(a.memoryBank,M.PC))return 0;a.once&&pr.delete(i);let o=Rr(a,t,n,r);return o===1?cr=a.address:o===3&&(lr=`step`,cr=null),o},Br=e=>e!==1&&e!==3?!1:(Rg(r.PAUSED,e!==3,void 0,{reason:lr,breakpointAddress:ur?void 0:cr??void 0,memoryWrite:ur??void 0}),!0),Vr=new Float64Array(65536),Hr=0,Ur=0,Wr=e=>{let t=Vr[e]+1;Vr[e]=t,t>Hr&&(Hr=t,Ur=e)},Gr=()=>bh?Vr:new Float64Array,Kr=()=>({value:Hr,index:Ur}),qr=()=>{Vr.fill(0),Hr=0,Ur=0},Jr=(e=null)=>{let t=0,n=M.PC,i=k(n,!1),a=z[i],o=a.bytes>1?k(n+1,!1):-1,s=a.bytes>2?k(n+2,!1):0;if(!bg()){let e=zr(i,o,s,a);if(Br(e))return-1;if(e===2)return M.PC===n&&(or=!0),0;or=!1}let c=Ui.get(n);c&&(!b.INTCXROM.isSet||(n&61440)!=49152)&&c();let l=qa();Ta(),fr=n;try{t=a.execute(o,s)}finally{fr=null}if(a.pcode===64&&(l=qa()),bh&&(Wr(n),a.bytes>1&&Wr(n+1),a.bytes>2&&Wr(n+2)),e&&(n<64680||n>64691)){let t=ir(n,a,o,s,M.PStatus)+`          `,r=`${(`0000000000`+M.cycleCount.toString()).slice(-10)}  ${t.slice(0,29)}  ${Ia()}  ${Hn()}`,i=r.indexOf(`JMP`);if(i===-1&&(i=r.indexOf(`RTS`)),i!==-1){let e=r.slice(i,i+15);e=e.replaceAll(` `,`_`),r=r.slice(0,i)+e+r.slice(i+15)}e(r)}if(M.prevPC=n,Ma(a.bytes),ka(M.cycleCount+t),Mr(),M.flagNMI&&(M.flagNMI=!1,t=go(),ka(M.cycleCount+t)),M.flagIRQ){let e=ho(l);e>0&&(ka(M.cycleCount+e),t=e)}return sr?.memoryWrite&&Br(zr())?-1:mr&&a.pcode===96?(mr=!1,Rg(r.PAUSED),-1):t},Yr=[197,58,163,92,197,58,163,92],Xr=new class{constructor(){this.bits=[],this.pattern=Array(64),this.patternIdx=0,this.reset=()=>{this.patternIdx=0},this.checkPattern=e=>e===(Yr[Math.floor(this.patternIdx/8)]>>this.patternIdx%8&1),this.calcBits=()=>{let e=e=>{this.bits.push(e&8?1:0),this.bits.push(e&4?1:0),this.bits.push(e&2?1:0),this.bits.push(e&1?1:0)},t=t=>{e(Math.floor(t/10)),e(Math.floor(t%10))},n=new Date,r=n.getFullYear()%100,i=n.getDate(),a=n.getDay()+1,o=n.getMonth()+1,s=n.getHours(),c=n.getMinutes(),l=n.getSeconds(),u=n.getMilliseconds()/10;this.bits=[],t(r),t(o),t(i),t(a),t(s),t(c),t(l),t(u)},this.access=e=>{e&4?this.reset():this.checkPattern(e&1)?(this.patternIdx++,this.patternIdx===64&&this.calcBits()):this.reset()},this.read=e=>{let t=-1;return this.bits.length>0?e&4&&(t=this.bits.pop()):this.access(e),t}}},Zr=new Uint8Array([173,123,7,41,248,201,48,240,33,169,48,141,123,7,141,251,7,169,0,141,251,6,32,97,201,162,0,138,141,176,192,189,161,200,141,177,192,232,224,16,208,241,141,89,192,96,173,251,7,41,8,240,9,32,147,254,32,34,252,32,137,254,104,168,104,170,104,96,32,209,200,230,78,208,2,230,79,173,0,192,16,245,32,92,200,144,240,44,16,192,24,96,201,139,208,2,169,219,201,129,208,10,173,251,7,73,64,141,251,7,176,231,72,173,251,7,10,10,104,144,31,201,176,144,27,44,99,192,48,20,201,176,240,14,201,192,208,2,169,208,201,219,144,8,41,207,208,4,169,221,9,32,72,41,127,141,123,6,104,56,96,123,80,94,41,27,8,24,25,0,8,224,8,0,0,0,0,141,123,6,165,37,205,251,5,240,6,141,251,5,32,4,202,165,36,205,123,5,144,3,141,123,5,173,123,6,32,137,202,169,15,141,176,192,173,123,5,201,80,176,19,109,123,4,141,177,192,169,14,141,176,192,169,0,109,251,4,141,177,192,96,73,192,201,8,176,29,168,169,201,72,185,242,203,72,96,234,172,123,5,169,160,32,113,202,200,192,80,144,248,96,169,52,141,123,7,96,169,50,208,248,160,192,162,128,202,208,253,173,48,192,136,208,245,96,172,123,5,192,80,144,5,72,32,176,201,104,172,123,5,32,113,202,238,123,5,44,120,4,16,7,173,123,5,201,80,176,104,96,172,123,5,173,251,5,72,32,7,202,32,4,201,160,0,104,105,0,201,24,144,240,176,35,32,103,201,152,240,232,169,0,141,123,5,141,251,5,168,240,18,206,123,5,16,157,169,79,141,123,5,173,251,5,240,147,206,251,5,76,4,202,169,48,141,123,7,104,9,128,201,177,208,103,169,8,141,88,192,208,91,201,178,208,81,169,254,45,251,7,141,251,7,96,141,123,6,78,120,4,76,203,200,32,39,202,238,251,5,173,251,5,201,24,144,74,206,251,5,173,251,6,105,4,41,127,141,251,6,32,18,202,169,13,141,176,192,173,123,4,141,177,192,169,12,141,176,192,173,251,4,141,177,192,169,23,32,7,202,160,0,32,4,201,176,149,201,179,208,14,169,1,13,251,7,208,169,201,176,208,156,76,9,200,76,39,201,173,251,5,141,248,4,10,10,109,248,4,109,251,6,72,74,74,74,74,141,251,4,104,10,10,10,10,141,123,4,96,201,13,208,6,169,0,141,123,5,96,9,128,201,160,176,206,201,135,144,8,168,169,201,72,185,185,201,72,96,24,113,19,178,72,96,175,157,242,19,19,19,19,19,19,19,19,19,102,14,19,56,0,20,123,24,152,109,123,4,72,169,0,109,251,4,72,10,41,12,170,189,176,192,104,74,104,170,96,10,72,173,251,7,74,104,106,72,32,89,202,104,176,5,157,0,204,144,3,157,0,205,96,72,169,247,32,160,201,141,89,192,173,123,7,41,7,208,4,104,76,35,202,41,4,240,3,76,135,201,104,56,233,32,41,127,72,206,123,7,173,123,7,41,3,208,21,104,201,24,176,3,141,251,5,173,248,5,201,80,176,3,141,123,5,76,4,202,104,141,248,5,96,173,0,192,201,147,208,15,44,16,192,173,0,192,16,251,201,131,240,3,44,16,192,96,168,185,49,203,32,241,200,32,68,200,201,206,176,8,201,201,144,4,201,204,208,234,76,241,200,234,44,203,255,112,49,56,144,24,184,80,43,1,130,17,20,28,34,76,0,200,32,68,200,41,127,162,0,96,32,167,201,162,0,96,201,0,240,9,173,0,192,10,144,3,32,92,200,162,0,96,145,40,56,184,141,255,207,72,133,53,138,72,152,72,165,53,134,53,162,195,142,120,4,72,80,16,169,50,133,56,134,57,169,7,133,54,134,55,32,0,200,24,144,111,104,164,53,240,31,136,173,120,6,201,136,240,23,217,0,2,240,18,73,32,217,0,2,208,59,173,120,6,153,0,2,176,3,32,237,202,169,128,32,245,201,32,68,200,201,155,240,241,201,141,208,5,72,32,1,201,104,201,149,208,18,172,123,5,32,89,202,176,5,189,0,204,144,3,189,0,205,9,128,141,120,6,208,8,32,68,200,160,0,140,120,6,186,232,232,232,157,0,1,169,0,133,36,173,251,5,133,37,76,46,200,104,172,251,7,16,8,172,120,6,192,224,144,1,152,32,177,200,32,207,202,169,127,32,160,201,173,123,5,233,71,144,212,105,31,24,144,209,96,56,113,178,123,0,72,102,196,194,193,255,195,234]),C=new class{constructor(e=3){this.enabled=!1,this.slot=3,this.active=!1,this.vram=new Uint8Array(2048),this.vramBank=0,this.crtcAddress=0,this.crtcRegs=new Uint8Array(18),this.cursorCol=0,this.cursorRow=0,this.inverse=!1,this.rom=new Uint8Array(2048),this.slot=e,this.initRom(),this.reset()}reset(){this.active=!1,this.vram.fill(160),this.vramBank=0,this.crtcAddress=0,this.crtcRegs.fill(0),this.crtcRegs[0]=123,this.crtcRegs[1]=80,this.crtcRegs[2]=98,this.crtcRegs[3]=41,this.crtcRegs[4]=27,this.crtcRegs[5]=8,this.crtcRegs[6]=24,this.crtcRegs[7]=25,this.crtcRegs[9]=8,this.crtcRegs[10]=192,this.crtcRegs[11]=8,this.crtcRegs[14]=0,this.crtcRegs[15]=0,this.cursorCol=0,this.cursorRow=0,this.inverse=!1}initRom(){this.rom.fill(234),this.rom.set(Zr)}getDriver(){let e=new Uint8Array(256);return e.set(this.rom.subarray(768,1024)),e}readIO(e){if(e<49328||e>49343)return 0;let t=e&15;return this.vramBank=t>>2&3,t===0?this.crtcAddress:t===1&&this.crtcRegs[this.crtcAddress]||0}writeIO(e,t){let n=e&15;if(this.active=!0,this.vramBank=n>>2&3,n===0)this.crtcAddress=t&31;else if(n===1){if(this.crtcAddress<18&&(this.crtcRegs[this.crtcAddress]=t),this.crtcAddress===14){let e=this.crtcRegs[15],n=(t&7)<<8|e;this.cursorRow=Math.min(23,Math.floor(n/80)),this.cursorCol=Math.min(79,n%80)}else if(this.crtcAddress===15){let e=(this.crtcRegs[14]&7)<<8|t;this.cursorRow=Math.min(23,Math.floor(e/80)),this.cursorCol=Math.min(79,e%80)}}else n===2&&this.handleCharOutput(t)}readMemory(e){if(e>=49920&&e<=50175)return this.rom[e-49152];if(e>=51200&&e<=52223)return this.rom[e-51200];if(e>=52224&&e<=52735){let t=this.vramBank*512+(e-52224);return this.vram[t&2047]}return 0}writeMemory(e,t){if(e>=52224&&e<=52735){this.active=!0;let n=this.vramBank*512+(e-52224);this.vram[n&2047]=t&255}}handleCharOutput(e){this.active=!0;let t=e&127;if(t===13||t===141)this.cursorCol=0,this.cursorRow++,this.cursorRow>=24&&(this.scrollUp(),this.cursorRow=23);else if(t===10||t===138)this.cursorRow++,this.cursorRow>=24&&(this.scrollUp(),this.cursorRow=23);else if(t===8||t===136)this.cursorCol>0&&this.cursorCol--;else if(t===12||t===140||t===26||t===154)this.clearScreen();else if(t>=32&&t<=126){let e=this.cursorRow*80+this.cursorCol;e<1920&&(this.vram[e]=this.inverse?t&63:t|128),this.cursorCol++,this.cursorCol>=80&&(this.cursorCol=0,this.cursorRow++,this.cursorRow>=24&&(this.scrollUp(),this.cursorRow=23))}let n=this.cursorRow*80+this.cursorCol;this.crtcRegs[14]=n>>8&7,this.crtcRegs[15]=n&255}clearScreen(){this.vram.fill(160),this.cursorCol=0,this.cursorRow=0,this.crtcRegs[14]=0,this.crtcRegs[15]=0}scrollUp(){this.vram.copyWithin(0,80,1920),this.vram.fill(160,1840,1920)}getTextPage(){let e=new Uint8Array(1920),t=((this.crtcRegs[12]&7)<<8|this.crtcRegs[13])%2048,n=((this.crtcRegs[14]&7)<<8|this.crtcRegs[15])%2048;for(let r=0;r<24;r++){let i=(t+r*80)%2048;for(let t=0;t<80;t++){let a=(i+t)%2048,o=this.vram[a],s=r*80+t,c=o&127;e[s]=a===n?c:c>=32?c|128:160}}return e}}(3),Qr=()=>{C.enabled=!0,Yi(3,C.getDriver()),qi(3,(e,t=-1)=>e<49328||e>49343?-1:t>=0?(C.writeIO(e,t),-1):C.readIO(e))},$r=()=>{C.enabled=!1},w=new class{constructor(e=3){this.enabled=!1,this.slot=3,this.newVideo=0,this.rom=new Uint8Array(256),this.slot=e,this.initRom(),this.reset()}reset(){this.newVideo=0}get active(){return this.enabled&&!!(this.newVideo&128)}get isMonochrome(){return!!(this.newVideo&32)}get isLinear(){return!!(this.newVideo&64)}initRom(){this.rom.fill(96),this.rom[0]=36,this.rom[1]=234,this.rom[2]=76,this.rom[3]=88,this.rom[4]=255}readMemory(e){let t=e&255;return this.rom[t]}readIO(e){let t=e&15;return this.rom[t]}readSoftSwitch(){return this.newVideo}writeSoftSwitch(e){this.newVideo=e&255}extractShrBuffer(e,t){let n=t+8192;return e.slice(n,n+32768)}decodeShrTo560x384(e,t){if(t.fill(0),e.length<32768)return;let n=new Uint8Array(256),r=new Uint8Array(256),i=new Uint8Array(256);for(let t=0;t<16;t++){let a=32256+t*32;for(let o=0;o<16;o++){let s=t<<4|o,c=e[a+o*2]|e[a+o*2+1]<<8;n[s]=(c>>8&15)*17,r[s]=(c>>4&15)*17,i[s]=(c&15)*17}}for(let a=0;a<384;a++){let o=Math.min(199,Math.floor(a*200/384)),s=o*160,c=e[32e3+o],l=(c&15)<<4,u=!!(c&128),d=a*560*4;if(u)for(let a=0;a<560;a++){let o=Math.min(639,Math.floor(a*640/560)),c=e[s+(o>>2)]>>(3-(o&3))*2&3,u=l|o%4*4+c,f=d+a*4;t[f]=n[u],t[f+1]=r[u],t[f+2]=i[u],t[f+3]=255}else for(let a=0;a<560;a++){let o=Math.min(319,Math.floor(a*320/560)),c=e[s+(o>>1)],u=l|(o&1?c&15:c>>4&15),f=d+a*4;t[f]=n[u],t[f+1]=r[u],t[f+2]=i[u],t[f+3]=255}}}}(3),ei=81920,ti=83712,ni=0,ri=n,ii=()=>ri+(ni+1)*65536+256,ai=()=>ii()/256-1,T=new Uint8Array(ii()).fill(0),oi=new Uint8Array(8).fill(0),si=()=>ta(49194),ci=e=>{j(49194,e)},li=()=>ta(49267),ui=e=>{j(49267,e)},E=new Uint32Array(257),di=new Uint32Array(257),fi=16777215,pi=()=>li()<=ni,mi=e=>pi()?383+li()*256+e:ai(),hi=e=>pi()?383+li()*256+e:fi,gi=`APPLE2EE`,_i=new Float64Array(65536),vi=new Float64Array(65536),yi=0,bi=0,xi=0,Si=0,Ci=()=>bh?_i:new Float64Array,wi=()=>bh?vi:new Float64Array,Ti=()=>({value:yi,index:bi}),Ei=()=>({value:xi,index:Si}),Di=()=>{_i.fill(0),yi=0,bi=0},Oi=()=>{vi.fill(0),xi=0,Si=0},ki=()=>gi,Ai=e=>{gi=e;let n=``;switch(e){case`APPLE2P`:n=`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
LFj/cBg4kBi4UBIBgBEUFxpMFstMHMtMyslMIstIikiYSAiGNa3/z3ggWP+6aGho
aKjKmmiqjvgHmI17BooKCgoKqIz4BihMQMgIeI17BqUASKUBSCy0wK17BYUArfsF
hQGtewaiACyywDD7LLLAEPuBACy2wGiFAWiFAChgCHilAEilAUgstMCtewWFAK37
BYUBogAsssAw+yyywBD7oQCqLLbAaIUBaIUAKGAIeKUASKUBSCy0wKIArXsFhQCt
+wWFAakgLLLAMPssssAQ+4EArXsHyU+wE+57B+YA0OTmAaUBydCQ3KnI0NYstsBo
hQFohQAoYP///////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
oiCgAKIDhjyKCiQ88BAFPEn/KX6wCErQ+5idVgPI6BDlIFj/ur0AAQoKCgqFK6q9
jsC9jMC9isC9icCgUL2AwJgpAwoFK6q9gcCpViCo/IgQ64UmhT2FQakIhScYCL2M
wBD7SdXQ972MwBD7yarQ8+q9jMAQ+8mW8AkokN9JrfAl0NmgA4VAvYzAEPsqhTy9
jMAQ+yU8iNDsKMU90L6lQMVB0Liwt6BWhDy8jMAQ+1nWAqQ8iJkAA9DuhDy8jMAQ
+1nWAqQ8kSbI0O+8jMAQ+1nWAtCHoACiVsow+7EmXgADKl4AAyqRJsjQ7uYn5j2l
Pc0ACKYrkNtMAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAG/YZdf43JTZsdsw89jf4duP85jz5PHd8dTxJPIx8kDy
1/Ph8+j2/fZo92735vdX/CD3Jvd092zybvJy8nbyf/JO8mrZVfKF8qXyyvIX87vz
nvNh8kXaPdkR2cjZSNj0AyDZatnb2W3Y69mD58jYr9gS43rn1NqV2KTWadaf20jW
kOsj7K/rCgDe4hLUzd//4o3uru9B6Qnv6u/x7zrwnvBk59bmxeMH5+XmRuZa5obm
keZ5wOd5qed7gel7aOp9lu5QVN9GTt9/z+5/l95kZN9FTsRGT9JORVjUREFUwUlO
UFXUREXMREnNUkVBxEfSVEVY1FBSo0lOo0NBTMxQTE/USExJzlZMSc5IR1KySEfS
SENPTE9SvUhQTE/URFJB11hEUkHXSFRBwkhPTcVST1S9U0NBTEW9U0hMT0HEVFJB
Q8VOT1RSQUPFTk9STUHMSU5WRVJTxUZMQVPIQ09MT1K9UE/QVlRBwkhJTUVNukxP
TUVNuk9ORVLSUkVTVU3FUkVDQUzMU1RPUsVTUEVFRL1MRdRHT1TPUlXOScZSRVNU
T1LFpkdPU1XCUkVUVVLOUkXNU1RP0E/OV0FJ1ExPQcRTQVbFREXGUE9LxVBSSU7U
Q09O1ExJU9RDTEVB0kdF1E5F11RBQqhUz0bOU1BDqFRIRc5B1E5P1FNURdCrraqv
3kFOxE/Svr28U0fOSU7UQULTVVPSRlLFU0NSTqhQRMxQT9NTUdJSTsRMT8dFWNBD
T9NTSc5UQc5BVM5QRUXLTEXOU1RSpFZBzEFTw0NIUqRMRUZUpFJJR0hUpE1JRKQA
TkVYVCBXSVRIT1VUIEZP0lNZTlRB2FJFVFVSTiBXSVRIT1VUIEdPU1XCT1VUIE9G
IERBVMFJTExFR0FMIFFVQU5USVTZT1ZFUkZMT9dPVVQgT0YgTUVNT1LZVU5ERUYn
RCBTVEFURU1FTtRCQUQgU1VCU0NSSVDUUkVESU0nRCBBUlJB2URJVklTSU9OIEJZ
IFpFUs9JTExFR0FMIERJUkVD1FRZUEUgTUlTTUFUQ8hTVFJJTkcgVE9PIExPTsdG
T1JNVUxBIFRPTyBDT01QTEXYQ0FOJ1QgQ09OVElOVcVVTkRFRidEIEZVTkNUSU/O
IEVSUk9SBwAgSU4gAA1CUkVBSwcAuujo6Oi9AQHJgdAhpYbQCr0CAYWFvQMBhYbd
AwHQB6WF3QIB8AeKGGkSqtDYYCDj04VthG44pZblm4VeqKWX5Zyq6JjwI6WWOOVe
hZawA8aXOKWU5V6FlLAIxpWQBLGWkZSI0PmxlpGUxpfGlcrQ8mAKaTawNYVeuuRe
kC5gxHCQKNAExW+QIkiiCZhItZPKEPoghOSi92iVnegw+mioaMRwkAbQBcVvsAFg
ok0k2BADTOnyIPvaIFrbvWDSSCBc2+hoEPUgg9apUKDTIDrbpHbI8AMgGe0g+9qi
3SAu1Ya4hLlG2CCxAKrw7KL/hnaQBiBZ1UwF2KavhmmmsIZqIAzaIFnVhA8gGtaQ
RKABsZuFX6VphV6lnIVhpZuI8ZsYZWmFaYVgpWpp/4Vq5ZyqOKWb5WmosAPoxmEY
ZV6QA8ZfGLFekWDI0PnmX+ZhytDyrQAC8Dilc6R0hW+EcKVphZZlD4WUpGqEl5AB
yISVIJPTpVCkUY3+AYz/AaVtpG6FaYRqpA+5+wGIkZvQ+CBl1qVnpGiFXoRfGKAB
sV7QC6Vpha+laoWwTDzUoATIsV7Q+8iYZV6qoACRXqVfaQDIkV6GXoVfkNKigIYz
IGr94O+QAqLvqQCdAAKK8Au9/wEpf53/AcrQ9akAov+gAWAgDP0pf2CmuMqgBIQT
JNYQCGhoIGXWTNLX6L0AAiQTcATJIPD0hQ7JIvB0cE3JP9AEqbrQRckwkATJPJA9
hK2p0IWdqc+FnqAAhA+IhrjKyNAC5p7ovQACySDw+DjxnfDuyYDQQQUPycXQDb0B
AslO8DTJT/AwqcWkrejImfsBufsB8Dk46TrwBMlJ0AKFEzjpeNCGhQ69AALw38UO
8NvImfsB6NDwprjmD7GdyNAC5p4KkPaxndCdvQACELuZ/QHGuan/hbhgpWemaKAB
hZuGnLGb8B/IyKVR0ZuQGPADiNAJpVCI0ZuQDPAKiLGbqoixm7DXGGDQ/akAhdao
kWfIkWelZ2kChWmFr6VoaQCFaoWwIJfWqQDQKqVzpHSFb4RwpWmkaoVrhGyFbYRu
IEnYolWGUmioaKL4mkiYSKkAhXqFFGAYpWdp/4W4pWhp/4W5YJAK8AjJyfAEySzQ
5SAM2iAa1iC3APAQycnwBMks0IQgsQAgDNrQymhopVAFUdAGqf+FUIVRoAGxm/BE
IFjYIPvayLGbqsixm8VR0ATkUPACsC2EhSAk7akgpIUpfyBc26UkySGQByD72qkF
hSTIsZvQHaixm6rIsZuGm4Wc0LapDSBc20zS18jQAuaesZ1gEMw46X+qhIWg0ISd
oM+EnqD/yvAHICzXEPsw9qkgIFzbICzXMAUgXNvQ9iBc26kg0JipgIUUIEbaIGXT
0AWKaQ+qmmhoqQkg1tMgo9kYmGW4SKW5aQBIpXZIpXVIqcEgwN4gat0gZ92logl/
JZ6FnqmvoNeFXoRfTCDeqROg6SD56iC3AMnH0AYgsQAgZ90ggusgFd6lhkilhUip
gUi6hvggWNiluKS5pnbo8ASFeYR6oACxuNBXoAKxuBjwNMixuIV1yLG4hXaYZbiF
uJAC5rkk8hAUpnbo8A+pIyBc26Z1pXYgJO0gV9sgsQAgKNhM0tfwYvAt6YCQEclA
sBQKqLkB0Ei5ANBITLEATEbayTrwv0zJ3jilZ+kBpGiwAYiFfYR+YK0AwMmD8AFg
IFPVov8k2BADTOnyyQOwARjQPKW4pLmmdujwDIV5hHqldaR2hXeEeGhoqV2g05AD
TDHUTDzU0Bei0qR60ANMEtSleYW4hLmld6R4hXWEdmA4pa/lZ4VQpbDlaIVRIPDY
IM3+IAHZTM3+IPDYIP3+GKVnZVCFaaVoZVGFaqVShdYgAdkg/f4k1hADTGXWTPLU
qVCgAIU8hD2pUoU+hD+E1mClZ6RohTyEPaVppGqFPoQ/YAjGdijQA0xl1iBs1kw1
2akDINbTpblIpbhIpXZIpXVIqbBIILcAID7ZTNLXIAzaIKbZpXbFUbALmDhluKa5
kAfosASlZ6ZoIB7WkB6lm+kBhbilnOkAhblg0P2p/4WFIGXTmsmw8AuiFiyiWkwS
1EzJ3mhowELwO4V1aIV2aIW4aIW5IKPZmBhluIW4kALmuWCiOiyiAIYNoACEDqUO
pg2FDYYOsbjw6MUO8OTIySLQ8/DpaGhoYCB73SC3AMmr8AWpxCDA3qWd0AUgptnw
tyC3ALADTD7ZTCjYIPjmSMmw8ATJq9CJxqHQBGhMKtggsQAgDNrJLPDuaGCiAIZQ
hlGw9+kvhQ2lUYVeyRmw1KVQCiZeCiZeZVCFUKVeZVGFUQZQJlGlUGUNhVCQAuZR
ILEATBLaIOPfhYWEhqnQIMDepRJIpRFIIHvdaCogbd3QGGgQEiBy6yAM4aAApaCR
hciloZGFYEwn62igArGgxXCQF9AHiLGgxW+QDqShxGqQCNANpaDFabAHpaCkoUy3
2qAAsaAg1eOljKSNhauErCDU5amdoACFjISNIDXmoACxjJGFyLGMkYXIsYyRhWAg
PdsgtwDwJPApycDwOcnDGPA0ySwY8BzJO/BEIHvdJBEw3SA07SDn40zP2qkNIFzb
Sf9gpSTJGJAFIPva0CFpECnwhSSQGQgg9ebJKfADTMneKJAHyorlJJAFqujK0AYg
sQBM19ogV9vQ8iDn4yAA5qqgAOjK8LuxXiBc28jJDdDzIADbTETbqSAsqT8JgMmg
kAIF8yDt/Sl/SKXxIKj8aGClFfASMASg/9AEpXukfIV1hHZMyd5oJNgQBaL+TOny
qe+g3CA626V5pHqFuIS5YCAG46IBoAKpAI0BAqlAIOvbYMki0A4ggd6pOyDA3iA9
20zH2yBa2yAG46ksjf8BICzVrQACyQPQEExj2CBa20ws1aZ9pH6pmCypAIUVhn+E
gCDj34WFhIaluKS5hYeEiKZ/pICGuIS5ILcA0B4kFVAOIAz9KX+NAAKi/6AB0Agw
fyBa2yDc24a4hLkgsQAkERAxJBVQCeiGuKkAhQ3wDIUNySLwB6k6hQ2pLBiFDqW4
pLlpAJAByCDt4yA95yB72kxy3EitAALwMGggSuylEiBj2iC3APAHySzwA0xx26W4
pLmFf4SApYekiIW4hLkgtwDwMyC+3kzx26UV0MxMhtsgo9nIqtASoirIsbjwX8ix
uIV7yLG4yIV8sbiqIJjZ4IPQ3Uwr3KV/pICmFRADTFPYoACxf/AHqd+g3Ew622A/
RVhUUkEgSUdOT1JFRA0AP1JFRU5URVINANAEoADwAyDj34WFhIYgZdPwBKIA8Gma
6Ojo6Iro6Ojo6OiGYKABIPnqur0JAYWipYWkhiC+5yAn66ABILTrujj9CQHwF70P
AYV1vRABhXa9EgGFuL0RAYW5TNLXimkRqpogtwDJLNDxILEAIP/cIHvdGCQ4JBEw
A7ADYLD9oqNMEtSmuNACxrnGuKIAJEiKSKkBINbTIGDeqQCFiSC3ADjpz5AXyQOw
E8kBKkkBRYnFiZBhhYkgsQBMmN2midAssHtpB5B3ZRHQA0yX5Wn/hV4KZV6oaNmy
0LBnIGrdSCD93WikhxAXqvBW0F9GEYoqprjQAsa5xrigG4WJ0NfZstCwSJDZubTQ
SLmz0EggEN6liUyG3UzJ3qWivrLQqGiFXuZeaIVfmEggcuuloUiloEiln0ilnkil
nUhsXgCg/2jwI8lk8AMgat2Eh2hKhRZohaVohaZohadohahohalohapFooWrpZ1g
qQCFESCxALADTErsIH3gsGTJLvD0ycnwVcnI8OfJItAPpbikuWkAkAHIIOfjTD3n
ycbQEKAY0DilndADoAEsoABMAePJwtADTFTjydKQA0wM3yC73iB73akpLKkoLKks
oADRuNADTLEAohBMEtSgFWhoTNfdIOPfhaCEoaYR8AWiAIasYKYSEA2gALGgqsix
oKiKTPLiTPnqILEAIOzxiqTwIHH4qCAB40y43snX8OkKSKogsQDgz5AgILveIHvd
IL7eIGzdaKqloUiloEiKSCD45mioikhMP98gst5oqLncz4WRud3PhZIgkABMat2l
pQWd0AulpfAEpZ3QA6AALKABTAHjIG3dsBOlqgl/JaaFpqmloAAgsuuqTLDfqQCF
EcaJIADmhZ2GnoSfpaikqSAE5oaohKmqOOWd8AipAZAEpp2p/4WioP/oyMrQB6ai
MA8YkAyxqNGe8O+i/7ACogHoiiolFvACqQFMk+sg++YgHvtMAeMgvt6qIOjfILcA
0PRgogAgtwCGEIWBILcAIH3gsANMyd6iAIYRhhJMB+BMKPFMPNQAILEAkAUgfeCQ
C6ogsQCQ+yB94LD2ySTQBqn/hRHQEMkl0BOlFDDGqYCFEgWBhYGKCYCqILEAhoI4
BRTpKNADTB7hJBQwAnD3qQCFFKVppmqgAIachZvkbNAExWvwIqWB0ZvQCKWCyNGb
8GyIGKWbaQeQ4ejQ3MlBkAXpWzjppWBoSMnX0A+6vQIByd7QB6maoOBgAACla6Rs
hZuEnKVtpG6FloSXGGkHkAHIhZSElSCT06WUpJXIhWuEbKAApYGRm8ilgpGbqQDI
kZvIkZvIkZvIkZvIkZulmxhpAqSckAHIhYOEhGClDwppBWWbpJyQAciFlISVYJCA
AAAgsQAgZ92lojANpZ3JkJAJqf6g4CCy69B+TPLrpRTQR6UQBRJIpRFIoACYSKWC
SKWBSCAC4WiFgWiFgmiour0CAUi9AQFIpaCdAgGloZ0BAcggtwDJLPDShA8guN5o
hRFohRIpf4UQpmulbIabhZzFbtAE5G3wP6AAsZvIxYHQBqWC0ZvwFsixmxhlm6rI
sZtlnJDXomssojVMEtSieKUQ0PelFPACOGAg7eClD6AE0ZvQ4UxL4qUU8AWiKkwS
1CDt4CDj06kAqIWuogWlgZGbEAHKyKWCkZsQAsrKhq2lD8jIyJGbogupACQQUAho
GGkBqmhpAMiRm8iKkZsgreKGrYWupF7GD9DcZZWwXYWVqIpllJADyPBSIOPThW2E
bqkA5q6krfAFiJGU0PvGlcau0PXmlTilbeWboAKRm6VuyOWckZulENBiyLGbhQ+p
AIWtha7IaKqFoGiFodGbkA7QBsiK0ZuQB0yW4UwQ1MilrgWtGPAKIK3iimWgqpik
XmWhhq3GD9DKha6iBaWBEAHKpYIQAsrKhmSpACC24opllIWDmGWVhYSopYNghF6x
m4VkiLGbhWWpEIWZogCgAIoKqpgqqLCkBq0mrpALGIplZKqYZWWosJPGmdDjYKUR
8AMgAOYghOQ4pW/lbailcOVuogCGEYWehJ+ikEyb66QkqQA48OymdujQoaKVLKLg
TBLUIEHjIAbjILveqYCFFCDj3yBq3SC43qnQIMDeSKWESKWDSKW5SKW4SCCV2Uyv
46nCIMDeCYCFFCDq34WKhItMat0gQeOli0ilikggst4gat1ohYpohYugArGKhYOq
yLGK8JmFhMixg0iIEPqkhCAr66W5SKW4SLGKhbjIsYqFuaWESKWDSCBn3WiFimiF
iyC3APADTMneaIW4aIW5oABokYpoyJGKaMiRimjIkYpoyJGKYCBq3aAAIDbtaGip
/6AA8BKmoKShhoyEjSBS5IaehJ+FnWCiIoYNhg6Fq4SshZ6En6D/yLGr8AzFDfAE
xQ7Q88ki8AEYhJ2YZauFraaskAHohq6lrPAEyQLQC5gg1eOmq6SsIOLlplLgXtAF
or9MEtSlnZUApZ6VAaWflQKgAIaghKGIhBGGU+jo6IZSYEYTSEn/OGVvpHCwAYjE
bpAR0ATFbZALhW+EcIVxhHKqaGCiTaUTMLgghOSpgIUTaNDQpnOldIZvhXCgAISL
pW2mboWbhpypVaIAhV6GX8VS8AUgI+Xw96kHhY+laaZqhV6GX+Rs0ATFa/AFIBnl
8POFlIaVqQOFj6WUppXkbtAHxW3QA0xi5YVehl+gALFeqsixXgjIsV5llIWUyLFe
ZZWFlSgQ04ow0MixXqAACmkFZV6FXpAC5l+mX+SV0ATFlPC6ICPl8POxXjA1yLFe
EDDIsV7wK8ixXqrIsV7FcJAG0B7kb7AaxZyQFtAE5JuQEIabhZylXqZfhYqGi6WP
hZGljxhlXoVekALmX6ZfoABgpovw96WRKQRKqIWRsYplm4WWpZxpAIWXpW+mcIWU
hpUgmtOkkcillJGKquaVpZXIkYpMiOSloUiloEggYN4gbN1ohatohaygALGrGHGg
kAWisEwS1CDV4yDU5aWMpI0gBOYg5uWlq6SsIATmICrkTJXdoACxq0jIsauqyLGr
qGiGXoRfqPAKSIixXpFxmND4aBhlcYVxkALmcmAgbN2loKShhV6EXyA15gigALFe
SMixXqrIsV6oaCjQE8Rw0A/kb9ALSBhlb4VvkALmcGiGXoRfYMRU0AzFU9AIhVLp
A4VToABgIPvmikipASDd42igAJGeaGhMKuQguebRjJiQBLGMqphIikgg3eOljKSN
IATmaKhoGGVehV6QAuZfmCDm5Uwq5CC55hjxjEn/TGDmqf+FoSC3AMkp8AYgvt4g
+OYguebKikgYogDxjLC4Sf/FoZCzpaGwryC43mioaIWRaGhoqmiFjGiFjaWRSJhI
oACK8B1gINzmTAHjIP3logCGEahgINzm8AigALFeqEwB40yZ4SCxACBn3SAI4aag
0PCmoUy3ACDc5tADTE7oprikuYathK6mXoa4GGVehWCmX4a5kAHohmGgALFgSKkA
kWAgtwAgSuxooACRYKatpK6GuIS5YCBn3SBS5yC+3kz45qWdyZGwmiDy66WgpKGE
UIVRYKVQSKVRSCBS56AAsVCoaIVRaIVQTAHjIEbniqAAkVBgIEbnhoWiACC3APAD
IEznhoagALFQRYYlhfD4YKlkoO5Mvucg4+mlokn/haJFqoWrpZ1Mwecg8OiQPCDj
6dADTFPrpqyGkqKlpaWo8M445Z3wJJAShJ2kqoSiSf9pAKAAhJKindAEoACErMn5
MMeopaxWASAH6SSrEFegneCl8AKgpThJ/2WShay5BAD1BIWhuQMA9QOFoLkCAPUC
hZ+5AQD1AYWesAMgnuigAJgYpp7QSqafhp6moIafpqGGoKashqGErGkIySDQ5KkA
hZ2FomBlkoWspaFlqYWhpaBlqIWgpZ9lp4WfpZ5lpoWeTI3oaQEGrCahJqAmnyae
EPI45Z2wx0n/aQGFnZAO5p3wQmaeZp9moGahZqxgpaJJ/4WipZ5J/4WepZ9J/4Wf
paBJ/4WgpaFJ/4WhpaxJ/4Ws5qzQDuah0ArmoNAG5p/QAuaeYKJFTBLUomG0BISs
tAOUBLQClAO0AZQCpKSUAWkIMOjw5ukIqKWssBQWAZAC9gF2AXYBdgJ2A3YEasjQ
7BhggQAAAAADf15Wy3mAE5sLZIB2OJMWgjiqOyCANQTzNIE1BPM0gIAAAACAMXIX
+CCC6/ACEANMmeGlnel/SKmAhZ2pLaDpIL7nqTKg6SBm6qkToOkgp+epGKDpIFzv
qTeg6SC+52gg1eypPKDpIOPp0ANM4ukgDuqpAIVihWOFZIVlpawgsOmloSCw6aWg
ILDppZ8gsOmlniC16Uzm6tADTNroSgmAqJAZGKVlZamFZaVkZaiFZKVjZaeFY6Vi
ZaaFYmZiZmNmZGZlZqyYStDWYIVehF+gBLFehamIsV6FqIixXoWniLFehapFooWr
paoJgIWmiLFehaWlnWClpfAfGGWdkAQwHRgsEBRpgIWd0ANMUuilq4WiYKWiSf8w
BWhoTE7oTNXoIGPrqvAQGGkCsPKiAIarIM7n5p3w52CEIAAAACBj66lQoOqiAIar
IPnqTGnqIOPp8HYgcuupADjlnYWdIA7q5p3wuqL8qQGkpsSe0BCkp8Sf0AqkqMSg
0ASkqcShCCqQCeiVZfAyEDSpASiwDgapJqgmpyamsOYwzhDiqKWp5aGFqaWo5aCF
qKWn5Z+Fp6Wm5Z6FpphMpuqpQNDOCgoKCgoKhawoTObqooVMEtSlYoWepWOFn6Vk
haClZYWhTC7ohV6EX6AEsV6FoYixXoWgiLFehZ+IsV6FogmAhZ6IsV6FnYSsYKKY
LKKToADwBKaFpIYgcuuGXoRfoASloZFeiKWgkV6IpZ+RXoilogl/JZ6RXoilnZFe
hKxgpaqFoqIFtaSVnMrQ+YasYCBy66IGtZyVpMrQ+YasYKWd8PsGrJD3IMbo0PJM
j+ilnfAJpaIqqf+wAqkBYCCC64WeqQCFn6KIpZ5J/yqpAIWhhaCGnYWshaJMKehG
omCFYIRhoACxYMiq8MSxYEWiMMLkndAhsWAJgMWe0BnIsWDFn9ASyLFgxaDQC8ip
f8WssWDlofAopaKQAkn/TIjrpZ3wSjjpoCSiEAmqqf+FpCCk6Iqincn5EAYg8OiE
pGCopaIpgEaeBZ6FniAH6YSkYKWdyaCwICDy64SspaKEokmAKqmghZ2loYUNTCno
hZ6Fn4WghaGoYKAAogqUmcoQ+5APyS3QBIaj8ATJK9AFILEAkFvJLvAuyUXQMCCx
AJAXycnwDskt8ArJyPAIySvwBNAHZpwgsQCQXCScEA6pADjlmkyg7GabJJtQw6Wa
OOWZhZrwEhAJIFXq5prQ+fAHIDnqxprQ+aWjMAFgTNDuSCSbEALmmSA56mg46TAg
1exMYexIIGPraCCT66WqRaKFq6adTMHnpZrJCpAJqWQknDARTNXoCgoYZZoKGKAA
cbg46TCFmkyH7Js+vB/9nm5rJ/2ebmsoAKlYoNMgMe2ldqZ1hZ6Gn6KQOCCg6yA0
7Uw626ABqS2IJKIQBMiZ/wCFooStyKkwpp3QA0xX7qkA4IDwArAJqRSg7SB/6an3
hZmpD6DtILLr8B4QEqkKoO0gsuvwAhAOIDnqxpnQ7iBV6uaZ0NwgoOcg8uuiAaWZ
GGkKMAnJC7AGaf+qqQI46QKFmoaZivACEBOkrakuyJn/AIrwBqkwyJn/AIStoACi
gKWhGHls7oWhpaB5a+6FoKWfeWruhZ+lnnlp7oWe6LAEEN4wAjDaipAESf9pCmkv
yMjIyISDpK3Iqil/mf8AxpnQBqkuyJn/AIStpIOKSf8pgKrAJNCqpK25/wCIyTDw
+Mku8AHIqSummvAuEAipADjlmqqpLZkBAalFmQABiqIvOOjpCrD7aTqZAwGKmQIB
qQCZBAHwCJn/AKkAmQABqQCgAWCAAAAAAPoKHwAAmJaA//C9wAABhqD//9jwAAAD
6P///5wAAAAK/////yBj66lkoO4g+erwcKWl0ANMUOiiiqAAICvrpaoQDyAj7KmK
oAAgsuvQA5ikDSBV65hIIEHpqYqgACB/6SAJ72hKkAqlnfAGpaJJ/4WiYIE4qjsp
B3E0WD5WdBZ+sxt3L+7jhXodhBwqfGNZWAp+df3nxoAxchgQgQAAAACp26DuIH/p
paxpUJADIHrrhZIgZuulncmIkAMgK+ogI+ylDRhpgfDzOOkBSKIFtaW0nZWdlKXK
EPWlkoWsIKrnINDuqeCg7iBy76kAhatoIBDqYIWthK4gIeupkyB/6SB276mToABM
f+mFrYSuIB7rsa2Fo6StyJjQAuauha2kriB/6aWtpK4YaQWQAciFrYSuIL7nqZig
AMaj0ORgmDVEemgosUYgguuqMBipyaAAIPnqivDnqaag7yB/6amqoO8gvuemoaWe
haGGnqkAhaKlnYWsqYCFnSAu6KLJoABMK+upZqDwIL7nIGPrqWug8KaqIF7qIGPr
ICPsqQCFqyCq56lwoPAgp+elokgQDSCg56WiMAmlFkn/hRYg0O6pcKDwIL7naBAD
INDuqXWg8Exc7yAh66kAhRYg8e+iiqAAIOfvqZOgACD56qkAhaKlFiBi8KmKoABM
ZupITCPwgUkP2qKDSQ/aon8AAAAABYTmGi0bhigH+/iHmWiJAYcjNd/hhqVd5yiD
SQ/aoqbTwcjUyNXEzsqlokgQAyDQ7qWdSMmBkAepE6DpIGbqqc6g8CBc72jJgZAH
qWag8CCn52gQA0zQ7mALdrODvdN5HvSm9XuD/LAQfAwfZ8p83lPLwX0UZHBMfbfq
UXp9YzCIfn6SRJk6fkzMkcd/qqqqE4EAAAAA5rjQAua5rWDqyTqwCskg8O846TA4
6dBggE/HUlii/4Z2ovuaqSig8YUBhAKFBIQFIHPyqUyFAIUDhZCFCqmZoOGFC4QM
ohy9CvGVsIbxytD2hvKKhaSFVEipA4WPIPvaqQGN/QGN/AGiVYZSqQCgCIVQhFGg
AOZRsVBJ/5FQ0VDQCEn/kVDRUPDspFClUSnwhHOFdIRvhXCiAKAIhmeEaKAAhNaY
kWfmZ9AC5milZ6RoIOPTIEvWqTqg24UEhAWpPKDUhQGEAmwBACBn3SBS52xQACD4
5opMi/4g+OaKTJX+IPjm4DCwE4bwqSwgwN4g+ObgMLAFhiyGLWBMmeEg7PHk8LAI
pfCFLIUthvCpxSDA3iD45uAwsOJgIOzxiqTwwCiw10wA+CAJ8oqkLMAosMqk8EwZ
+CAJ8oqowCiwvKXwTCj4IPjmikxk+CD45sqKyRiwp0xb+yD45opJ/6rohvFgOJAY
ZvJgqf/QAqk/ogCFMobzYKl/okDQ9SBn3SBS56VQxW2lUeVusANMENSlUIVzhW+l
UYV0hXBgIGfdIFLnpVDFc6VR5XSw4KVQxWmlUeVqkNalUIVppVGFakxs1qmrIMDe
pbiF9KW5hfU4ZtildYX2pXaF9yCm2UyY2YbepviG36V1hdqldoXbpXmF3KV6hd2l
9IW4pfWFuaX2hXWl94V2ILcAID7ZTNLXpdqFdaXbhXal3IW4pd2FuabfmkzS10zJ
3rD7pq+GaaawhmogDNogGtalm4VgpZyFYaksIMDeIAza5lDQAuZRIBrWpZvFYKWc
5WGwAWCgALGbkWDmm9AC5pzmYNAC5mGlacWbpWrlnLDmpmGkYNAByoiGaoRpTPLU
rVbArVPATED7rVTATDn7INn3oAOxm6qIsZvpAbAByoVQhlEgzf4gvPdMzf4g2fcg
/f6gArGbxVDIsZvlUbADTBDUILz3TP3+LFXALFLAqUDQCKkgLFTALFPAheatV8Ct
UMCpAIUcpeaFG6AAhBqlHJEaIH70yND25hulGykf0O5gheKG4IThSCnAhSZKSgUm
hSZohScKCgomJwomJwpmJqUnKR8F5oUnisAA8AWgI2kEyOkHsPuE5aq9ufSFMJhK
peSFHLAoYCAR9KUcUSYlMFEmkSZgECOlMEqwBUnAhTBgiBACoCepwIUwhOWlHArJ
wBAGpRxJf4UcYKUwCkmAMN2pgcjAKJDgoACw3Bil0SkE8CWpfyUwMSbQGebqqX8l
MBARGKXRKQTwDrEmRRwlMNAC5upRJpEmpdFl0ykDyQJqsJIwMBilJyy59dAiBiaw
GizN9PAFaR84sBJpI0ilJmmwsAJp8IUmaLACaR9mJmn8hSdgGKUnaQQsufXQ8wYm
kBhp4BgsCPXwEqUmaVBJ8PACSfCFJqXmkAJp4GYmkNFIqQCF4IXhheJoSDjl4EiK
5eGF07AKaEn/aQFIqQDl04XRhdVohdCF1GiF4IbhmBjl4pAESf9p/oXShOJm0zjl
0Kqp/+XRhR2k5bAFCiBl9Dil1GXShdSl1ekAhdWxJkUcJTBRJpEm6NAE5h3wYqXT
sNog0/QYpdRl0IXUpdVl0VDZgYKEiJCgwBz//vr07OHUxbShjXhhSTEY/6UmCqUn
KQMqBSYKCgqF4qUnSkopBwXiheKl5Qpl5QqqyqUwKX/oStD8heGKGGXlkALm4YXg
YIYahBuqSkpKSoXTiikPqry69YTQSQ+qvLv1yITSpOWiAIbqoRqF0aKAhtSG1abn
pdQ4ZdCF1JAEILP0GKXVZdKF1ZADILT0ytDlpdFKSkrQ1OYa0ALmG6Ea0MpghhqE
G6pKSkpKhdOKKQ+qvLr1hNBJD6q8u/XIhNKk5aIAhuqhGoXRooCG1IbVpuel1Dhl
0IXUkAQgnPQYpdVl0oXVkAMgnfTK0OWl0UpKStDU5hrQAuYboRrQymAgZ90gUuek
UaZQwAGQBtAd4BiwGYpImEipLCDA3iD45uDAsAmGnWioaKqlnWBMBvIg+ObgCLD2
vfb2heRgACpVf4Cq1f/JwfANILn2IFf0ILcAycHQ5iDA3iC59oSdqIqmnSA69UwI
9yD45ob5YCD45obnYCD45qXohRql6YUbiqIAwRrwArClCpAD5hsYqLEaZRqqyLEa
ZemFG4YaILcAycXQCSDA3iC59iAR9KX5YCAt90wF9iAt90xh9qkAhT2FP6BQhDzI
hD4g/f4YpXOqyoY+5VBIpXSo6NABiIQ/5VHFbpAC0ANMENSFdIVwhT2F6WiF6IVz
hW+FPCD6/KkDTAL/GKWbZVCFPqWcZVGFP6AEsZsg7+CllIU8pZWFPWCpQIUUIOPf
qQCFFEzw2CD45sqKySiQCukoSCD72mhM7PeFJGDL0tdKCCBH+CipD5ACaeCFLrEm
RTAlLlEmkSZgIAD4xCywEcggDviQ9mkBSCAA+GjFLZD1YKAv0AKgJ4QtoCepAIUw
ICj4iBD2YEhKKQMJBIUnaCkYkAJpf4UmCgoFJoUmYKUwGGkDKQ+FMAoKCgoFMIUw
YEoIIEf4sSYokARKSkpKKQ9gpjqkOyCW/SBI+aE6qEqQCWqwEMmi8Awph0qqvWL5
IHn40ASggKkAqr2m+YUuKQOFL5gpj6qYoAPgivALSpAISkoJIIjQ+siI0PJg////
IIL4SLE6INr9ogEgSvnEL8iQ8aIDwASQ8mioucD5hSy5APqFLakAoAUGLSYsKojQ
+Gm/IO39ytDsIEj5pC+iBuAD8BwGLpAOvbP5IO39vbn58AMg7f3K0OdgiDDnINr9
pS7J6LE6kPIgVvmq6NAByJgg2v2KTNr9ogOpoCDt/crQ+GA4pS+kO6oQAYhlOpAB
yGAEIFQwDYAEkAMiVDMNgASQBCBUMw2ABJAEIFQ7DYAEkAAiRDMNyEQAESJEMw3I
RKkBIkQzDYAEkAEiRDMNgASQJjGHmgAhgYIAAFlNkZKGSoWdrKmso6ik2QDYpKQA
HIocI12LG6Gdih0jnYsdoQApGa5pqBkjJFMbIyRTGaEAGltbpWkkJK6uqK0pAHwA
FZxtnKVpKVOEEzQRpWkjoNhiWkgmYpSIVETIVGhE6JQAtAiEdLQobnT0zEpy8qSK
AKqionR0dHJEaLIysgAiABoaJiZycojIxMomSEREosiFRWhICgoKMANs/gMoIEz/
aIU6aIU7bPADIIL4INr6TGX/2CCE/iAv+yCT/iCJ/q1YwK1awK1dwK1fwK3/zywQ
wNggOv+t8wNJpc30A9AXrfID0A+p4M3zA9AIoAOM8gNMAOBs8gMgYPuiBb38+p3v
A8rQ96nIhgCFAaAHxgGlAcnA8NeN+AexANkB+9DsiIgQ9WwAAOrqII79qUWFQKkA
hUGi+6mgIO39vR76IO39qb0g7f21SiDa/egw6GBZ+gDgRSD/AP8D/zzB0NDMxaDd
28TCwf/D////wdjZ0NOtcMCgAOrqvWTAEATI0PiIYKkAhUitVsCtVMCtUcCpAPAL
rVDArVPAIDb4qRSFIqkAhSCpKIUhqRiFI6kXhSVMIvwgWPygCLkI+5kOBIjQ92Ct
8wNJpY30A2DJjdAYrADAEBPAk9APLBDArADAEPvAg/ADLBDATP37OEws/Ki5SPog
l/sgDP3JzrDuycmQ6snM8ObQ6Orq6urq6urq6urq6urqSEopAwkEhSloKRiQAml/
hSgKCgUohShgyYfQEqlAIKj8oMCpDCCo/K0wwIjQ9WCkJJEo5iSlJMUhsGZgyaCw
76gQ7MmN8FrJivBayYjQycYkEOilIYUkxiSlIsUlsAvGJaUlIMH7ZSCFKGBJwPAo
af2QwPDaaf2QLPDeaf2QXNDppCSlJUggJPwgnvygAGhpAMUjkPCwyqUihSWgAIQk
8OSpAIUk5iWlJcUjkLbGJaUiSCAk/KUohSqlKYUrpCGIaGkBxSOwDUggJPyxKJEq
iBD5MOGgACCe/LCGpCSpoJEoyMQhkPlgOEjpAdD8aOkB0PZg5kLQAuZDpTzFPqU9
5T/mPNAC5j1goEsg2/zQ+Wn+sPWgISDb/MjIiND9kAWgMojQ/awgwKAsymCiCEgg
+vxoKqA6ytD1YCD9/IitYMBFLxD4RS+FL8CAYKQksShIKT8JQJEoaGw4AOZO0ALm
TywAwBD1kSitAMAsEMBgIAz9IKX7IAz9yZvw82ClMkip/4UyvQACIO39aIUyvQAC
yYjwHcmY8Arg+JADIDr/6NATqdwg7f0gjv2lMyDt/aIBivDzyiA1/cmV0AKxKMng
kAIp350AAsmN0LIgnPypjdBbpD2mPCCO/SBA+aAAqa1M7f2lPAkHhT6lPYU/pTwp
B9ADIJL9qaAg7f2xPCDa/SC6/JDoYEqQ6kpKpT6QAkn/ZTxIqb0g7f1oSEpKSkog
5f1oKQ8JsMm6kAJpBmw2AMmgkAIlMoQ1SCB4+2ikNWDGNPCfytAWybrQu4UxpT6R
QOZA0ALmQWCkNLn/AYUxYKIBtT6VQpVEyhD3YLE8kUIgtPyQ92CxPNFC8Bwgkv2x
PCDa/amgIO39qagg7f2xQiDa/ampIO39ILT8kNlgIHX+qRRIIND4IFP5hTqEO2g4
6QHQ72CK8Ae1PJU6yhD5YKA/0AKg/4QyYKkAhT6iOKAb0AipAIU+ojag8KU+KQ/w
BgnAoADwAqn9lACVAWDq6kwA4EwD4CB1/iA//2w6AEzX+mDqYOrq6urqTPgDqUAg
yfygJ6IAQTxIoTwg7f4guvygHWiQ7qAiIO3+8E2iEAog1vzQ+mAgAP5oaNBsIPr8
qRYgyfyFLiD6/KAkIP38sPkg/fygOyDs/IE8RS6FLiC6/KA1kPAg7PzFLvANqcUg
7f2p0iDt/SDt/amHTO39pUhIpUWmRqRHKGCFRYZGhEcIaIVIuoZJ2GAghP4gL/sg
k/4gif7YIDr/qaqFMyBn/SDH/yCn/4Q0oBeIMOjZzP/Q+CC+/6Q0THP/ogMKCgoK
CiY+Jj/KEPilMdAGtT+VPZVB6PDz0AaiAIY+hj+5AALISbDJCpDTaYjJ+rDNYKn+
SLnj/0ilMaAAhDFgvLK+su/Esqm7pqQGlQcCBfAA65Onxpmyyb7BNYzElq8XFysf
g39dzLX8Fxf1A/sDYvpA+g==`;break;case`APPLE2EU`:n=`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
IFTLIGPOxiowCywawDDvpSrJFLDpjQ3AaI17BWiN+wVMUcsIeKAAhCuMAcAsVMCx
KCxVwCCjzixUwLEoIKPOwCiQ7CCRzixVwCCRzixUwChgoBSpoCQyMAIpf5EoyMAo
0PlgSJhKqGiRKOYrpCtgjXsFhSSNewQsH8AQHakAhSSNewSlITjtewXJCLAMhSSp
KDjlJIUkjXsErXsFYEiYSKx7BSABz0mALADPIAbPaKhoYEgkMjACSYAsAM8gBs9o
YLggBs9ghB9IrR/AEDKlH0qocBYIeK1VwJADrVTAsSiorVTAKGiYSFAkaEgIeEit
VcCQA61UwGiRKK1UwChwDqQfcAZosShIUARoSJEoaKQfYEiYSKx7BSABz417BimA
SatMbs9ImEisewWtewYsAM8gBs9oqGhgSAh4rRHASK4SwK2BwK2BwKAAqfiFN6U2
SKkAhTaxNpE2yND55jfQ9WiFNqnDhTdoEA+KEAatgMBMxc+tgcBMxc+KEAatiMBM
xc+ticAoaGCt+wQpAdADIJvNqf+FMq37BCkE8AJGMq17B4UorfsHhSlgKEJMfJvp
/wGJ4OzM0tjpIyLmAAAAAG/YZdf43JTZsdsw89jf4duP85jz5PHd8dTxJPIx8kDy
1/Ph8+j2/fZo92735vdX/CD3Jvd092zybvJy8nbyf/JO8mrZVfKF8qXyyvIX87vz
nvNh8kXaPdkR2cjZSNj0AyDZatnb2W3Y69mD58jYr9gS43rn1NqV2KTWadaf20jW
kOsj7K/rCgDe4hLUzd//4o3uru9B6Qnv6u/x7zrwnvBk59bmxeMH5+XmRuZa5obm
keZ5wOd5qed7gel7aOp9lu5QVN9GTt9/z+5/l95kZN9FTsRGT9JORVjUREFUwUlO
UFXUREXMREnNUkVBxEfSVEVY1FBSo0lOo0NBTMxQTE/USExJzlZMSc5IR1KySEfS
SENPTE9SvUhQTE/URFJB11hEUkHXSFRBwkhPTcVST1S9U0NBTEW9U0hMT0HEVFJB
Q8VOT1RSQUPFTk9STUHMSU5WRVJTxUZMQVPIQ09MT1K9UE/QVlRBwkhJTUVNukxP
TUVNuk9ORVLSUkVTVU3FUkVDQUzMU1RPUsVTUEVFRL1MRdRHT1TPUlXOScZSRVNU
T1LFpkdPU1XCUkVUVVLOUkXNU1RP0E/OV0FJ1ExPQcRTQVbFREXGUE9LxVBSSU7U
Q09O1ExJU9RDTEVB0kdF1E5F11RBQqhUz0bOU1BDqFRIRc5B1E5P1FNURdCrraqv
3kFOxE/Svr28U0fOSU7UQULTVVPSRlLFU0NSTqhQRMxQT9NTUdJSTsRMT8dFWNBD
T9NTSc5UQc5BVM5QRUXLTEXOU1RSpFZBzEFTw0NIUqRMRUZUpFJJR0hUpE1JRKQA
TkVYVCBXSVRIT1VUIEZP0lNZTlRB2FJFVFVSTiBXSVRIT1VUIEdPU1XCT1VUIE9G
IERBVMFJTExFR0FMIFFVQU5USVTZT1ZFUkZMT9dPVVQgT0YgTUVNT1LZVU5ERUYn
RCBTVEFURU1FTtRCQUQgU1VCU0NSSVDUUkVESU0nRCBBUlJB2URJVklTSU9OIEJZ
IFpFUs9JTExFR0FMIERJUkVD1FRZUEUgTUlTTUFUQ8hTVFJJTkcgVE9PIExPTsdG
T1JNVUxBIFRPTyBDT01QTEXYQ0FOJ1QgQ09OVElOVcVVTkRFRidEIEZVTkNUSU/O
IEVSUk9SBwAgSU4gAA1CUkVBSwcAuujo6Oi9AQHJgdAhpYbQCr0CAYWFvQMBhYbd
AwHQB6WF3QIB8AeKGGkSqtDYYCDj04VthG44pZblm4VeqKWX5Zyq6JjwI6WWOOVe
hZawA8aXOKWU5V6FlLAIxpWQBLGWkZSI0PmxlpGUxpfGlcrQ8mAKaTawNYVeuuRe
kC5gxHCQKNAExW+QIkiiCZhItZPKEPoghOSi92iVnegw+mioaMRwkAbQBcVvsAFg
ok0k2BADTOnyIPvaIFrbvWDSSCBc2+hoEPUgg9apUKDTIDrbpHbI8AMgGe0g+9qi
3SAu1Ya4hLlG2CCxAKrw7KL/hnaQBiBZ1UwF2KavhmmmsIZqIAzaIFnVhA8gGtaQ
RKABsZuFX6VphV6lnIVhpZuI8ZsYZWmFaYVgpWpp/4Vq5ZyqOKWb5WmosAPoxmEY
ZV6QA8ZfGLFekWDI0PnmX+ZhytDyrQAC8Dilc6R0hW+EcKVphZZlD4WUpGqEl5AB
yISVIJPTpVCkUY3+AYz/AaVtpG6FaYRqpA+5+wGIkZvQ+CBl1qVnpGiFXoRfGKAB
sV7QC6Vpha+laoWwTDzUoATIsV7Q+8iYZV6qoACRXqVfaQDIkV6GXoVfkNKigIYz
IGr94O+QAqLvqQCdAAKK8Au9/wEpf53/AcrQ9akAov+gAWAgDP0pf2CmuMqgBIQT
JNYQCGhoIGXWTNLX6L0AAiQTcATJIPD0hQ7JIvB0cE3JP9AEqbrQRckwkATJPJA9
hK2p0IWdqc+FnqAAhA+IhrjKyNAC5p7ovQACySDw+DjxnfDuyYDQQQUPycXQDb0B
AslO8DTJT/AwqcWkrejImfsBufsB8Dk46TrwBMlJ0AKFEzjpeNCGhQ69AALw38UO
8NvImfsB6NDwprjmD7GdyNAC5p4KkPaxndCdvQACELuZ/QHGuan/hbhgpWemaKAB
hZuGnLGb8B/IyKVR0ZuQGPADiNAJpVCI0ZuQDPAKiLGbqoixm7DXGGDQ/akAhdao
kWfIkWelZ2kChWmFr6VoaQCFaoWwIJfWqQDQKqVzpHSFb4RwpWmkaoVrhGyFbYRu
IEnYolWGUmioaKL4mkiYSKkAhXqFFGAYpWdp/4W4pWhp/4W5YJAK8AjJyfAEySzQ
5SAM2iAa1iC3APAQycnwBMks0IQgsQAgDNrQymhopVAFUdAGqf+FUIVRoAGxm/BE
IFjYIPvayLGbqsixm8VR0ATkUPACsC2EhSAk7akgpIUpfyBc26UkySGQByD72qkF
hSTIsZvQHaixm6rIsZuGm4Wc0LapDSBc20zS18jQAuaesZ1gEMw46X+qhIWg0ISd
oM+EnqD/yvAHICzXEPsw9qkgIFzbICzXMAUgXNvQ9iBc26kg0JipgIUUIEbaIGXT
0AWKaQ+qmmhoqQkg1tMgo9kYmGW4SKW5aQBIpXZIpXVIqcEgwN4gat0gZ92logl/
JZ6FnqmvoNeFXoRfTCDeqROg6SD56iC3AMnH0AYgsQAgZ90ggusgFd6lhkilhUip
gUi6hvggWNiluKS5pnbo8ASFeYR6oACxuNBXoAKxuBjwNMixuIV1yLG4hXaYZbiF
uJAC5rkk8hAUpnbo8A+pIyBc26Z1pXYgJO0gV9sgsQAgKNhM0tfwYvAt6YCQEclA
sBQKqLkB0Ei5ANBITLEATEbayTrwv0zJ3jilZ+kBpGiwAYiFfYR+YK0AwMmD8AFg
IFPVov8k2BADTOnyyQOwARjQPKW4pLmmdujwDIV5hHqldaR2hXeEeGhoqV2g05AD
TDHUTDzU0Bei0qR60ANMEtSleYW4hLmld6R4hXWEdmA4pa/lZ4VQpbDlaIVRIPDY
IM3+IAHZTM3+IPDYIP3+GKVnZVCFaaVoZVGFaqVShdYgAdkg/f4k1hADTGXWTPLU
qVCgAIU8hD2pUoU+hD+E1mClZ6RohTyEPaVppGqFPoQ/YAjGdijQA0xl1iBs1kw1
2akDINbTpblIpbhIpXZIpXVIqbBIILcAID7ZTNLXIAzaIKbZpXbFUbALmDhluKa5
kAfosASlZ6ZoIB7WkB6lm+kBhbilnOkAhblg0P2p/4WFIGXTmsmw8AuiFiyiWkwS
1EzJ3mhowELwO4V1aIV2aIW4aIW5IKPZmBhluIW4kALmuWCiOiyiAIYNoACEDqUO
pg2FDYYOsbjw6MUO8OTIySLQ8/DpaGhoYCB73SC3AMmr8AWpxCDA3qWd0AUgptnw
tyC3ALADTD7ZTCjYIPjmSMmw8ATJq9CJxqHQBGhMKtggsQAgDNrJLPDuaGCiAIZQ
hlGw9+kvhQ2lUYVeyRmw1KVQCiZeCiZeZVCFUKVeZVGFUQZQJlGlUGUNhVCQAuZR
ILEATBLaIOPfhYWEhqnQIMDepRJIpRFIIHvdaCogbd3QGGgQEiBy6yAM4aAApaCR
hciloZGFYEwn62igArGgxXCQF9AHiLGgxW+QDqShxGqQCNANpaDFabAHpaCkoUy3
2qAAsaAg1eOljKSNhauErCDU5amdoACFjISNIDXmoACxjJGFyLGMkYXIsYyRhWAg
PdsgtwDwJPApycDwOcnDGPA0ySwY8BzJO/BEIHvdJBEw3SA07SDn40zP2qkNIFzb
Sf9gpSTJGJAFIPva0CFpECnwhSSQGQgg9ebJKfADTMneKJAHyorlJJAFqujK0AYg
sQBM19ogV9vQ8iDn4yAA5qqgAOjK8LuxXiBc28jJDdDzIADbTETbqSAsqT8JgMmg
kAIF8yDt/Sl/SKXxIKj8aGClFfASMASg/9AEpXukfIV1hHZMyd5oJNgQBaL+TOny
qe+g3CA626V5pHqFuIS5YCAG46IBoAKpAI0BAqlAIOvbYMki0A4ggd6pOyDA3iA9
20zH2yBa2yAG46ksjf8BICzVrQACyQPQEExj2CBa20ws1aZ9pH6pmCypAIUVhn+E
gCDj34WFhIaluKS5hYeEiKZ/pICGuIS5ILcA0B4kFVAOIAz9KX+NAAKi/6AB0Agw
fyBa2yDc24a4hLkgsQAkERAxJBVQCeiGuKkAhQ3wDIUNySLwB6k6hQ2pLBiFDqW4
pLlpAJAByCDt4yA95yB72kxy3EitAALwMGggSuylEiBj2iC3APAHySzwA0xx26W4
pLmFf4SApYekiIW4hLkgtwDwMyC+3kzx26UV0MxMhtsgo9nIqtASoirIsbjwX8ix
uIV7yLG4yIV8sbiqIJjZ4IPQ3Uwr3KV/pICmFRADTFPYoACxf/AHqd+g3Ew622A/
RVhUUkEgSUdOT1JFRA0AP1JFRU5URVINANAEoADwAyDj34WFhIYgZdPwBKIA8Gma
6Ojo6Iro6Ojo6OiGYKABIPnqur0JAYWipYWkhiC+5yAn66ABILTrujj9CQHwF70P
AYV1vRABhXa9EgGFuL0RAYW5TNLXimkRqpogtwDJLNDxILEAIP/cIHvdGCQ4JBEw
A7ADYLD9oqNMEtSmuNACxrnGuKIAJEiKSKkBINbTIGDeqQCFiSC3ADjpz5AXyQOw
E8kBKkkBRYnFiZBhhYkgsQBMmN2midAssHtpB5B3ZRHQA0yX5Wn/hV4KZV6oaNmy
0LBnIGrdSCD93WikhxAXqvBW0F9GEYoqprjQAsa5xrigG4WJ0NfZstCwSJDZubTQ
SLmz0EggEN6liUyG3UzJ3qWivrLQqGiFXuZeaIVfmEggcuuloUiloEiln0ilnkil
nUhsXgCg/2jwI8lk8AMgat2Eh2hKhRZohaVohaZohadohahohalohapFooWrpZ1g
qQCFESCxALADTErsIH3gsGTJLvD0ycnwVcnI8OfJItAPpbikuWkAkAHIIOfjTD3n
ycbQEKAY0DilndADoAEsoABMAePJwtADTFTjydKQA0wM3yC73iB73akpLKkoLKks
oADRuNADTLEAohBMEtSgFWhoTNfdIOPfhaCEoaYR8AWiAIasYKYSEA2gALGgqsix
oKiKTPLiTPnqILEAIOzxiqTwIHH4qCAB40y43snX8OkKSKogsQDgz5AgILveIHvd
IL7eIGzdaKqloUiloEiKSCD45mioikhMP98gst5oqLncz4WRud3PhZIgkABMat2l
pQWd0AulpfAEpZ3QA6AALKABTAHjIG3dsBOlqgl/JaaFpqmloAAgsuuqTLDfqQCF
EcaJIADmhZ2GnoSfpaikqSAE5oaohKmqOOWd8AipAZAEpp2p/4WioP/oyMrQB6ai
MA8YkAyxqNGe8O+i/7ACogHoiiolFvACqQFMk+sg++YgHvtMAeMgvt6qIOjfILcA
0PRgogAgtwCGEIWBILcAIH3gsANMyd6iAIYRhhJMB+BMKPFMPNQAILEAkAUgfeCQ
C6ogsQCQ+yB94LD2ySTQBqn/hRHQEMkl0BOlFDDGqYCFEgWBhYGKCYCqILEAhoI4
BRTpKNADTB7hJBQwAnD3qQCFFKVppmqgAIachZvkbNAExWvwIqWB0ZvQCKWCyNGb
8GyIGKWbaQeQ4ejQ3MlBkAXpWzjppWBoSMnX0A+6vQIByd7QB6maoOBgAACla6Rs
hZuEnKVtpG6FloSXGGkHkAHIhZSElSCT06WUpJXIhWuEbKAApYGRm8ilgpGbqQDI
kZvIkZvIkZvIkZvIkZulmxhpAqSckAHIhYOEhGClDwppBWWbpJyQAciFlISVYJCA
AAAgsQAgZ92lojANpZ3JkJAJqf6g4CCy69B+TPLrpRTQR6UQBRJIpRFIoACYSKWC
SKWBSCAC4WiFgWiFgmiour0CAUi9AQFIpaCdAgGloZ0BAcggtwDJLPDShA8guN5o
hRFohRIpf4UQpmulbIabhZzFbtAE5G3wP6AAsZvIxYHQBqWC0ZvwFsixmxhlm6rI
sZtlnJDXomssojVMEtSieKUQ0PelFPACOGAg7eClD6AE0ZvQ4UxL4qUU8AWiKkwS
1CDt4CDj06kAqIWuogWlgZGbEAHKyKWCkZsQAsrKhq2lD8jIyJGbogupACQQUAho
GGkBqmhpAMiRm8iKkZsgreKGrYWupF7GD9DcZZWwXYWVqIpllJADyPBSIOPThW2E
bqkA5q6krfAFiJGU0PvGlcau0PXmlTilbeWboAKRm6VuyOWckZulENBiyLGbhQ+p
AIWtha7IaKqFoGiFodGbkA7QBsiK0ZuQB0yW4UwQ1MilrgWtGPAKIK3iimWgqpik
XmWhhq3GD9DKha6iBaWBEAHKpYIQAsrKhmSpACC24opllIWDmGWVhYSopYNghF6x
m4VkiLGbhWWpEIWZogCgAIoKqpgqqLCkBq0mrpALGIplZKqYZWWosJPGmdDjYKUR
8AMgAOYghOQ4pW/lbailcOVuogCGEYWehJ+ikEyb66QkqQA48OymdujQoaKVLKLg
TBLUIEHjIAbjILveqYCFFCDj3yBq3SC43qnQIMDeSKWESKWDSKW5SKW4SCCV2Uyv
46nCIMDeCYCFFCDq34WKhItMat0gQeOli0ilikggst4gat1ohYpohYugArGKhYOq
yLGK8JmFhMixg0iIEPqkhCAr66W5SKW4SLGKhbjIsYqFuaWESKWDSCBn3WiFimiF
iyC3APADTMneaIW4aIW5oABokYpoyJGKaMiRimjIkYpoyJGKYCBq3aAAIDbtaGip
/6AA8BKmoKShhoyEjSBS5IaehJ+FnWCiIoYNhg6Fq4SshZ6En6D/yLGr8AzFDfAE
xQ7Q88ki8AEYhJ2YZauFraaskAHohq6lrPAEyQLQC5gg1eOmq6SsIOLlplLgXtAF
or9MEtSlnZUApZ6VAaWflQKgAIaghKGIhBGGU+jo6IZSYEYTSEn/OGVvpHCwAYjE
bpAR0ATFbZALhW+EcIVxhHKqaGCiTaUTMLgghOSpgIUTaNDQpnOldIZvhXCgAISL
pW2mboWbhpypVaIAhV6GX8VS8AUgI+Xw96kHhY+laaZqhV6GX+Rs0ATFa/AFIBnl
8POFlIaVqQOFj6WUppXkbtAHxW3QA0xi5YVehl+gALFeqsixXgjIsV5llIWUyLFe
ZZWFlSgQ04ow0MixXqAACmkFZV6FXpAC5l+mX+SV0ATFlPC6ICPl8POxXjA1yLFe
EDDIsV7wK8ixXqrIsV7FcJAG0B7kb7AaxZyQFtAE5JuQEIabhZylXqZfhYqGi6WP
hZGljxhlXoVekALmX6ZfoABgpovw96WRKQRKqIWRsYplm4WWpZxpAIWXpW+mcIWU
hpUgmtOkkcillJGKquaVpZXIkYpMiOSloUiloEggYN4gbN1ohatohaygALGrGHGg
kAWisEwS1CDV4yDU5aWMpI0gBOYg5uWlq6SsIATmICrkTJXdoACxq0jIsauqyLGr
qGiGXoRfqPAKSIixXpFxmND4aBhlcYVxkALmcmAgbN2loKShhV6EXyA15gigALFe
SMixXqrIsV6oaCjQE8Rw0A/kb9ALSBhlb4VvkALmcGiGXoRfYMRU0AzFU9AIhVLp
A4VToABgIPvmikipASDd42igAJGeaGhMKuQguebRjJiQBLGMqphIikgg3eOljKSN
IATmaKhoGGVehV6QAuZfmCDm5Uwq5CC55hjxjEn/TGDmqf+FoSC3AMkp8AYgvt4g
+OYguebKikgYogDxjLC4Sf/FoZCzpaGwryC43mioaIWRaGhoqmiFjGiFjaWRSJhI
oACK8B1gINzmTAHjIP3logCGEahgINzm8AigALFeqEwB40yZ4SCxACBn3SAI4aag
0PCmoUy3ACDc5tADTE7oprikuYathK6mXoa4GGVehWCmX4a5kAHohmGgALFgSKkA
kWAgtwAgSuxooACRYKatpK6GuIS5YCBn3SBS5yC+3kz45qWdyZGwmiDy66WgpKGE
UIVRYKVQSKVRSCBS56AAsVCoaIVRaIVQTAHjIEbniqAAkVBgIEbnhoWiACC3APAD
IEznhoagALFQRYYlhfD4YKlkoO5Mvucg4+mlokn/haJFqoWrpZ1Mwecg8OiQPCDj
6dADTFPrpqyGkqKlpaWo8M445Z3wJJAShJ2kqoSiSf9pAKAAhJKindAEoACErMn5
MMeopaxWASAH6SSrEFegneCl8AKgpThJ/2WShay5BAD1BIWhuQMA9QOFoLkCAPUC
hZ+5AQD1AYWesAMgnuigAJgYpp7QSqafhp6moIafpqGGoKashqGErGkIySDQ5KkA
hZ2FomBlkoWspaFlqYWhpaBlqIWgpZ9lp4WfpZ5lpoWeTI3oaQEGrCahJqAmnyae
EPI45Z2wx0n/aQGFnZAO5p3wQmaeZp9moGahZqxgpaJJ/4WipZ5J/4WepZ9J/4Wf
paBJ/4WgpaFJ/4WhpaxJ/4Ws5qzQDuah0ArmoNAG5p/QAuaeYKJFTBLUomG0BISs
tAOUBLQClAO0AZQCpKSUAWkIMOjw5ukIqKWssBQWAZAC9gF2AXYBdgJ2A3YEasjQ
7BhggQAAAAADf15Wy3mAE5sLZIB2OJMWgjiqOyCANQTzNIE1BPM0gIAAAACAMXIX
+CCC6/ACEANMmeGlnel/SKmAhZ2pLaDpIL7nqTKg6SBm6qkToOkgp+epGKDpIFzv
qTeg6SC+52gg1eypPKDpIOPp0ANM4ukgDuqpAIVihWOFZIVlpawgsOmloSCw6aWg
ILDppZ8gsOmlniC16Uzm6tADTNroSgmAqJAZGKVlZamFZaVkZaiFZKVjZaeFY6Vi
ZaaFYmZiZmNmZGZlZqyYStDWYIVehF+gBLFehamIsV6FqIixXoWniLFehapFooWr
paoJgIWmiLFehaWlnWClpfAfGGWdkAQwHRgsEBRpgIWd0ANMUuilq4WiYKWiSf8w
BWhoTE7oTNXoIGPrqvAQGGkCsPKiAIarIM7n5p3w52CEIAAAACBj66lQoOqiAIar
IPnqTGnqIOPp8HYgcuupADjlnYWdIA7q5p3wuqL8qQGkpsSe0BCkp8Sf0AqkqMSg
0ASkqcShCCqQCeiVZfAyEDSpASiwDgapJqgmpyamsOYwzhDiqKWp5aGFqaWo5aCF
qKWn5Z+Fp6Wm5Z6FpphMpuqpQNDOCgoKCgoKhawoTObqooVMEtSlYoWepWOFn6Vk
haClZYWhTC7ohV6EX6AEsV6FoYixXoWgiLFehZ+IsV6FogmAhZ6IsV6FnYSsYKKY
LKKToADwBKaFpIYgcuuGXoRfoASloZFeiKWgkV6IpZ+RXoilogl/JZ6RXoilnZFe
hKxgpaqFoqIFtaSVnMrQ+YasYCBy66IGtZyVpMrQ+YasYKWd8PsGrJD3IMbo0PJM
j+ilnfAJpaIqqf+wAqkBYCCC64WeqQCFn6KIpZ5J/yqpAIWhhaCGnYWshaJMKehG
omCFYIRhoACxYMiq8MSxYEWiMMLkndAhsWAJgMWe0BnIsWDFn9ASyLFgxaDQC8ip
f8WssWDlofAopaKQAkn/TIjrpZ3wSjjpoCSiEAmqqf+FpCCk6Iqincn5EAYg8OiE
pGCopaIpgEaeBZ6FniAH6YSkYKWdyaCwICDy64SspaKEokmAKqmghZ2loYUNTCno
hZ6Fn4WghaGoYKAAogqUmcoQ+5APyS3QBIaj8ATJK9AFILEAkFvJLvAuyUXQMCCx
AJAXycnwDskt8ArJyPAIySvwBNAHZpwgsQCQXCScEA6pADjlmkyg7GabJJtQw6Wa
OOWZhZrwEhAJIFXq5prQ+fAHIDnqxprQ+aWjMAFgTNDuSCSbEALmmSA56mg46TAg
1exMYexIIGPraCCT66WqRaKFq6adTMHnpZrJCpAJqWQknDARTNXoCgoYZZoKGKAA
cbg46TCFmkyH7Js+vB/9nm5rJ/2ebmsoAKlYoNMgMe2ldqZ1hZ6Gn6KQOCCg6yA0
7Uw626ABqS2IJKIQBMiZ/wCFooStyKkwpp3QA0xX7qkA4IDwArAJqRSg7SB/6an3
hZmpD6DtILLr8B4QEqkKoO0gsuvwAhAOIDnqxpnQ7iBV6uaZ0NwgoOcg8uuiAaWZ
GGkKMAnJC7AGaf+qqQI46QKFmoaZivACEBOkrakuyJn/AIrwBqkwyJn/AIStoACi
gKWhGHls7oWhpaB5a+6FoKWfeWruhZ+lnnlp7oWe6LAEEN4wAjDaipAESf9pCmkv
yMjIyISDpK3Iqil/mf8AxpnQBqkuyJn/AIStpIOKSf8pgKrAJNCqpK25/wCIyTDw
+Mku8AHIqSummvAuEAipADjlmqqpLZkBAalFmQABiqIvOOjpCrD7aTqZAwGKmQIB
qQCZBAHwCJn/AKkAmQABqQCgAWCAAAAAAPoKHwAAmJaA//C9wAABhqD//9jwAAAD
6P///5wAAAAK/////yBj66lkoO4g+erwcKWl0ANMUOiiiqAAICvrpaoQDyAj7KmK
oAAgsuvQA5ikDSBV65hIIEHpqYqgACB/6SAJ72hKkAqlnfAGpaJJ/4WiYIE4qjsp
B3E0WD5WdBZ+sxt3L+7jhXodhBwqfGNZWAp+df3nxoAxchgQgQAAAACp26DuIH/p
paxpUJADIHrrhZIgZuulncmIkAMgK+ogI+ylDRhpgfDzOOkBSKIFtaW0nZWdlKXK
EPWlkoWsIKrnINDuqeCg7iBy76kAhatoIBDqYIWthK4gIeupkyB/6SB276mToABM
f+mFrYSuIB7rsa2Fo6StyJjQAuauha2kriB/6aWtpK4YaQWQAciFrYSuIL7nqZig
AMaj0ORgmDVEemgosUYgguuqMBipyaAAIPnqivDnqaag7yB/6amqoO8gvuemoaWe
haGGnqkAhaKlnYWsqYCFnSAu6KLJoABMK+upZqDwIL7nIGPrqWug8KaqIF7qIGPr
ICPsqQCFqyCq56lwoPAgp+elokgQDSCg56WiMAmlFkn/hRYg0O6pcKDwIL7naBAD
INDuqXWg8Exc7yAh66kAhRYg8e+iiqAAIOfvqZOgACD56qkAhaKlFiBi8KmKoABM
ZupITCPwgUkP2qKDSQ/aon8AAAAABYTmGi0bhigH+/iHmWiJAYcjNd/hhqVd5yiD
SQ/aoqbTwcjUyNXEzsqlokgQAyDQ7qWdSMmBkAepE6DpIGbqqc6g8CBc72jJgZAH
qWag8CCn52gQA0zQ7mALdrODvdN5HvSm9XuD/LAQfAwfZ8p83lPLwX0UZHBMfbfq
UXp9YzCIfn6SRJk6fkzMkcd/qqqqE4EAAAAA5rjQAua5rWDqyTqwCskg8O846TA4
6dBggE/HUlii/4Z2ovuaqSig8YUBhAKFBIQFIHPyqUyFAIUDhZCFCqmZoOGFC4QM
ohy9CvGVsIbxytD2hvKKhaSFVEipA4WPIPvaqQGN/QGN/AGiVYZSqQCgCIVQhFGg
AOZRsVBJ/5FQ0VDQCEn/kVDRUPDspFClUSnwhHOFdIRvhXCiAKAIhmeEaKAAhNaY
kWfmZ9AC5milZ6RoIOPTIEvWqTqg24UEhAWpPKDUhQGEAmwBACBn3SBS52xQACD4
5opMi/4g+OaKTJX+IPjm4DCwE4bwqSwgwN4g+ObgMLAFhiyGLWBMmeEg7PHk8LAI
pfCFLIUthvCpxSDA3iD45uAwsOJgIOzxiqTwwCiw10wA+CAJ8oqkLMAosMqk8EwZ
+CAJ8oqowCiwvKXwTCj4IPjmikxk+CD45sqKyRiwp0xb+yD45opJ/6rohvFgOJAY
ZvJgqf/QAqk/ogCFMobzYKl/okDQ9SBn3SBS56VQxW2lUeVusANMENSlUIVzhW+l
UYV0hXBgIGfdIFLnpVDFc6VR5XSw4KVQxWmlUeVqkNalUIVppVGFakxs1qmrIMDe
pbiF9KW5hfU4ZtildYX2pXaF9yCm2UyY2YbepviG36V1hdqldoXbpXmF3KV6hd2l
9IW4pfWFuaX2hXWl94V2ILcAID7ZTNLXpdqFdaXbhXal3IW4pd2FuabfmkzS10zJ
3rD7pq+GaaawhmogDNogGtalm4VgpZyFYaksIMDeIAza5lDQAuZRIBrWpZvFYKWc
5WGwAWCgALGbkWDmm9AC5pzmYNAC5mGlacWbpWrlnLDmpmGkYNAByoiGaoRpTPLU
rVbArVPATED7rVTATDn7INn3oAOxm6qIsZvpAbAByoVQhlEgzf4gvPdMzf4g2fcg
/f6gArGbxVDIsZvlUbADTBDUILz3TP3+LFXALFLAqUDQCKkgLFTALFPAheatV8Ct
UMCpAIUcpeaFG6AAhBqlHJEaIH70yND25hulGykf0O5gheKG4IThSCnAhSZKSgUm
hSZohScKCgomJwomJwpmJqUnKR8F5oUnisAA8AWgI2kEyOkHsPuE5aq9ufSFMJhK
peSFHLAoYCAR9KUcUSYlMFEmkSZgECOlMEqwBUnAhTBgiBACoCepwIUwhOWlHArJ
wBAGpRxJf4UcYKUwCkmAMN2pgcjAKJDgoACw3Bil0SkE8CWpfyUwMSbQGebqqX8l
MBARGKXRKQTwDrEmRRwlMNAC5upRJpEmpdFl0ykDyQJqsJIwMBilJyy59dAiBiaw
GizN9PAFaR84sBJpI0ilJmmwsAJp8IUmaLACaR9mJmn8hSdgGKUnaQQsufXQ8wYm
kBhp4BgsCPXwEqUmaVBJ8PACSfCFJqXmkAJp4GYmkNFIqQCF4IXhheJoSDjl4EiK
5eGF07AKaEn/aQFIqQDl04XRhdVohdCF1GiF4IbhmBjl4pAESf9p/oXShOJm0zjl
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
g39dzLX8Fxf1A/sDYvpA+g==`;break;case`APPLE2EE`:n=`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
cM5oYLEoLB/AEBmNAcCEKphFIGqwBK1VwMiYSqixKCxUwKQqLB7AEAbJILACCUBg
SCn/MBat+wRqaEiQDiwewBAJSUAsrM7wAklALB/AEB2NAcBIhCqYRSBKsAStVcDI
mEqoaJEorVTApCpoYJEoaGBImEisewUgRM6NewYpgEmrTM3OSJhIrHsFrXsGIHDO
aKhoYCBxzan/hTKt+wQpBPACRjKteweFKK37B4UprfsFhSVgLBLAED2pBs2z+/A2
ogMsEcAwAqILjbP7LIDArbP7yQbwAegsgcAsgcCgAKn4hTeENrE2kTbI0PnmN9D1
vYDAvYDAYAAAAOmBStAUpD+mPtABiMqKGOU6hT4QAciY5TvQQKQvuT0AkTqIEPgg
SPkgGvwgGvxM4/ylPSCO+Kq9APrFQtATvcD5xUPQDKVEpC7AnfCzxS7wysY90Nzm
RMY18NakNJiqTNL8IMf/rQACyaDwEsmN0AFgIKf/yZPQ5Yrw4iB4/qkDhT0gE/8K
6b7JwpDRCgqiBAomQiZDyhD4xj3w9BDkogUgyMSlRAoKBTXJILAGpjXwAgmAhUSE
NLkAAsm78ATJjdC0TGvP32/YZdf43JTZsdsw89jf4duP85jz5PHd8dTxJPIx8kDy
1/Ph8+j2/fZo92735vdX/CD3Jvd092zybvJy8nbyf/JO8mrZVfKF8qXyyvIX87vz
nvNh8kXaPdkR2cjZSNj0AyDZatnb2W3Y69mD58jYr9gS43rn1NqV2KTWadaf20jW
kOsj7K/rCgDe4hLUzd//4o3uru9B6Qnv6u/x7zrwnvBk59bmxeMH5+XmRuZa5obm
keZ5wOd5qed7gel7aOp9lu5QVN9GTt9/z+5/l95kZN9FTsRGT9JORVjUREFUwUlO
UFXUREXMREnNUkVBxEfSVEVY1FBSo0lOo0NBTMxQTE/USExJzlZMSc5IR1KySEfS
SENPTE9SvUhQTE/URFJB11hEUkHXSFRBwkhPTcVST1S9U0NBTEW9U0hMT0HEVFJB
Q8VOT1RSQUPFTk9STUHMSU5WRVJTxUZMQVPIQ09MT1K9UE/QVlRBwkhJTUVNukxP
TUVNuk9ORVLSUkVTVU3FUkVDQUzMU1RPUsVTUEVFRL1MRdRHT1TPUlXOScZSRVNU
T1LFpkdPU1XCUkVUVVLOUkXNU1RP0E/OV0FJ1ExPQcRTQVbFREXGUE9LxVBSSU7U
Q09O1ExJU9RDTEVB0kdF1E5F11RBQqhUz0bOU1BDqFRIRc5B1E5P1FNURdCrraqv
3kFOxE/Svr28U0fOSU7UQULTVVPSRlLFU0NSTqhQRMxQT9NTUdJSTsRMT8dFWNBD
T9NTSc5UQc5BVM5QRUXLTEXOU1RSpFZBzEFTw0NIUqRMRUZUpFJJR0hUpE1JRKQA
TkVYVCBXSVRIT1VUIEZP0lNZTlRB2FJFVFVSTiBXSVRIT1VUIEdPU1XCT1VUIE9G
IERBVMFJTExFR0FMIFFVQU5USVTZT1ZFUkZMT9dPVVQgT0YgTUVNT1LZVU5ERUYn
RCBTVEFURU1FTtRCQUQgU1VCU0NSSVDUUkVESU0nRCBBUlJB2URJVklTSU9OIEJZ
IFpFUs9JTExFR0FMIERJUkVD1FRZUEUgTUlTTUFUQ8hTVFJJTkcgVE9PIExPTsdG
T1JNVUxBIFRPTyBDT01QTEXYQ0FOJ1QgQ09OVElOVcVVTkRFRidEIEZVTkNUSU/O
IEVSUk9SBwAgSU4gAA1CUkVBSwcAuujo6Oi9AQHJgdAhpYbQCr0CAYWFvQMBhYbd
AwHQB6WF3QIB8AeKGGkSqtDYYCDj04VthG44pZblm4VeqKWX5Zyq6JjwI6WWOOVe
hZawA8aXOKWU5V6FlLAIxpWQBLGWkZSI0PmxlpGUxpfGlcrQ8mAKaTawNYVeuuRe
kC5gxHCQKNAExW+QIkiiCZhItZPKEPoghOSi92iVnegw+mioaMRwkAbQBcVvsAFg
ok0k2BADTOnyIPvaIFrbvWDSSCBc2+hoEPUgg9apUKDTIDrbpHbI8AMgGe0g+9qi
3SAu1Ya4hLlG2CCxAKrw7KL/hnaQBiBZ1UwF2KavhmmmsIZqIAzaIFnVhA8gGtaQ
RKABsZuFX6VphV6lnIVhpZuI8ZsYZWmFaYVgpWpp/4Vq5ZyqOKWb5WmosAPoxmEY
ZV6QA8ZfGLFekWDI0PnmX+ZhytDyrQAC8Dilc6R0hW+EcKVphZZlD4WUpGqEl5AB
yISVIJPTpVCkUY3+AYz/AaVtpG6FaYRqpA+5+wGIkZvQ+CBl1qVnpGiFXoRfGKAB
sV7QC6Vpha+laoWwTDzUoATIsV7Q+8iYZV6qoACRXqVfaQDIkV6GXoVfkNKigIYz
IGr94O+QAqLvqQCdAAKK8Au9/wEpf53/AcrQ9akAov+gAWAgDP0pf2CmuMqgBIQT
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
5opMi/4g+OaKTJX+IPjm4DCwE4bwqSwgwN4g+ObgMLAFhiyGLWBMmeEg7PHk8LAI
pfCFLIUthvCpxSDA3iD45uAwsOJgIOzxiqTwwCiw10wA+CAJ8oqkLMAosMqk8EwZ
+CAJ8oqowCiwvKXwTCj4IPjmikxk+CD45sqKyRiwp0xb+yD45opJ/6rohvFgOJAY
ZvJgqf/QAqk/ogCFMobzYKl/okDQ9SBn3SBS56VQxW2lUeVusANMENSlUIVzhW+l
UYV0hXBgIGfdIFLnpVDFc6VR5XSw4KVQxWmlUeVqkNalUIVppVGFakxs1qmrIMDe
pbiF9KW5hfU4ZtildYX2pXaF9yCm2UyY2YbepviG36V1hdqldoXbpXmF3KV6hd2l
9IW4pfWFuaX2hXWl94V2ILcAID7ZTNLXpdqFdaXbhXal3IW4pd2FuabfmkzS10zJ
3rD7pq+GaaawhmogDNogGtalm4VgpZyFYaksIMDeIAza5lDQAuZRIBrWpZvFYKWc
5WGwAWCgALGbkWDmm9AC5pzmYNAC5mGlacWbpWrlnLDmpmGkYNAByoiGaoRpTPLU
rVbArVPATED7rVTATDn7INn3oAOxm6qIsZvpAbAByoVQhlEgzf4gd/dMzf4g2fcg
/f6gArGbxVDIsZvlUbADTBDUIHf3TP3+LFXALFLAqUDQCKkgLFTALFPAheatV8Ct
UMCpAIUcpeaFG6AAhBqlHJEaIH70yND25hulGykf0O5gheKG4IThSCnAhSZKSgUm
hSZohScKCgomJwomJwpmJqUnKR8F5oUnisAA8AWgI2kEyOkHsPuE5aq9ufSFMJhK
peSFHLAoYCAR9KUcUSYlMFEmkSZgECOlMEqwBUnAhTBgiBACoCepwIUwhOWlHArJ
wBAGpRxJf4UcYKUwCkmAMN2pgcjAKJDgoACw3Bil0SkE8CWpfyUwMSbQGebqqX8l
MBARGKXRKQTwDrEmRRwlMNAC5upRJpEmpdFl0ykDyQJqsJIwMBilJyy59dAiBiaw
GizN9PAFaR84sBJpI0ilJmmwsAJp8IUmaLACaR9mJmn8hSdgGKUnaQQsufXQ8wYm
kBhp4BgsCPXwEqUmaVBJ8PACSfCFJqXmkAJp4GYmkNFIqQCF4IXhheJoSDjl4EiK
5eGF07AKaEn/aQFIqQDl04XRhdVohdCF1GiF4IbhmBjl4pAESf9p/oXShOJm0zjl
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
g39dzLX8Fxf1A/sDYvr6ww==`}let r=n.replace(/\n/g,``),i=new Uint8Array(Gn.Buffer.from(r,`base64`));i[15035]=5,T.set(i,t)},ji=e=>{e=Math.max(64,Math.min(8192,e));let t=ni;if(ni=Math.floor(e/64)-1,ni===t)return;li()>ni&&(ui(0),Hi());let n=ii();if(ni<t)T=T.slice(0,n);else{let e=T;T=new Uint8Array(n).fill(255),T.set(e.subarray(0,e.length-256))}T.fill(255,n-256)},Mi=!0,Ni=e=>{Mi=e,Hi()},Pi=()=>Mi,Fi=()=>{let e=Mi&&b.AUXRAMREAD.isSet,t=Mi&&b.AUXRAMWRITE.isSet,n=Mi&&b.PAGE2.isSet,r=Mi&&b.STORE80.isSet?n:e,i=Mi&&b.STORE80.isSet?n:t,a=Mi&&b.STORE80.isSet&&b.HIRES.isSet?n:e,o=Mi&&b.STORE80.isSet&&b.HIRES.isSet?n:t;for(let n=2;n<256;n++)E[n]=e?mi(n):n,di[n]=t?hi(n):n;for(let e=4;e<=7;e++)E[e]=r?mi(e):e,di[e]=i?hi(e):e;for(let e=32;e<=63;e++)E[e]=a?mi(e):e,di[e]=o?hi(e):e},Ii=()=>{let e=Mi&&b.ALTZP.isSet;if(E[0]=e?mi(0):0,E[1]=e?mi(1):1,di[0]=e?hi(0):0,di[1]=e?hi(1):1,b.BSRREADRAM.isSet){for(let t=208;t<=255;t++)E[t]=e?mi(t):t;if(!b.BSRBANK2.isSet)for(let t=208;t<=223;t++)E[t]=e?mi(t-16):t-16}else for(let e=208;e<=255;e++)E[e]=256+e-192},Li=()=>{let e=Mi&&b.ALTZP.isSet,t=b.BSR_WRITE.isSet;for(let e=192;e<=255;e++)di[e]=fi;if(t){for(let t=208;t<=255;t++)di[t]=e?hi(t):t;if(!b.BSRBANK2.isSet)for(let t=208;t<=223;t++)di[t]=e?hi(t-16):t-16}},Ri=e=>b.INTCXROM.isSet?!1:e!==3||b.SLOTC3ROM.isSet,zi=()=>!!(b.INTCXROM.isSet||b.INTC8ROM.isSet),Bi=e=>{if(e<=7){if(b.INTCXROM.isSet)return;e===3&&!b.SLOTC3ROM.isSet&&(b.INTC8ROM.isSet||(b.INTC8ROM.isSet=!0,ci(255),Hi())),si()===0&&Gi[e]&&(ci(e),Hi())}else b.INTC8ROM.isSet=!1,ci(0),Hi()},Vi=()=>{E[192]=256;for(let e=1;e<=7;e++){let t=192+e;E[t]=e+(Ri(e)?319:256)}if(zi())for(let e=200;e<=207;e++)E[e]=256+e-192;else{let e=327+8*(si()-1);for(let t=0;t<=7;t++){let n=200+t;E[n]=e+t}}},Hi=()=>{Fi(),Ii(),Li(),Vi();for(let e=0;e<256;e++)E[e]=256*E[e],di[e]=256*di[e]},Ui=new Map,Wi=Array(8),Gi=new Uint8Array(8),Ki=(e,n=-1)=>{let r=e>>8==192?e-49280>>4:(e>>8)-192;if(e>=49408&&(Bi(r),!Ri(r)))return;let i=Wi[r];if(i!==void 0){let r=i(e,n);if(r>=0){let n=e>=49408?81664:t;T[e-49152+n]=r}}},qi=(e,t)=>{oi[e]=1,Wi[e]=t},Ji=e=>{e<1||e>7||(T.fill(0,ei+(e-1)*256,ei+e*256),T.fill(0,ti+(e-1)*2048,ti+e*2048),oi[e]=0,Gi[e]=0,Wi[e]=void 0)},Yi=(e,t,n=0,r=()=>{})=>{if(T.set(t.slice(0,256),ei+(e-1)*256),oi[e]=+!!t.some(e=>e!==0),t.length>256){let n=t.length>2304?2304:t.length,r=ti+(e-1)*2048;T.set(t.slice(256,n),r),Gi[e]=255}n&&Ui.set(n,r)},Xi=()=>{T.fill(255,0,65536),T.fill(255,ri),T[158]=0,T[159]=0,ci(0),ui(0),Hi()},Zi=e=>e===49193&&w.enabled?w.readSoftSwitch():w.enabled&&e>>4===3080+w.slot?w.readIO(e):(e===49240&&C.enabled?C.active=!1:e===49241&&C.enabled&&(C.active=!0),e>=49296?Ki(e):Pn(e,!1,M.cycleCount),e>=49232&&Hi(),T[t+e-49152]),D=(e,t)=>{let n=ei+(e-1)*256+(t&255);return T[n]},O=(e,t,n)=>{if(n>=0){let r=ei+(e-1)*256+(t&255);T[r]=n&255}},Qi=(e,t,n,r=-1)=>{if(Ri(e)&&(t-49280>>4===e||(t>>8)-192===e)){let e=`$${M.PC.toString(16)}: $${t.toString(16)} (${n})`;r>=0&&(e+=` = $${r.toString(16)}`),console.log(e)}},k=(e,t=!0)=>{let n=0,r=e>>>8;if(bh&&t){let t=_i[e]+1;_i[e]=t,t>yi&&(yi=t,bi=e)}if(r===192)n=Zi(e);else{if(n=-1,r>=193&&r<=199)if(r===195&&C.enabled){let t=Xr.read(e);n=t>=0?t:C.readMemory(e)}else if(r===195&&w.enabled)if(b.SLOTC3ROM.isSet&&!b.INTCXROM.isSet)n=w.readMemory(e);else{let t=Xr.read(e);n=t>=0?t:-1,Ki(e)}else r==195&&(b.INTCXROM.isSet||!b.SLOTC3ROM.isSet)?(n=Xr.read(e),Ki(e)):(Ri(r-192)&&!oi[r-192]&&(n=Math.floor(256*Math.random())),Ki(e));else r>=200&&r<=205&&C.enabled?n=C.readMemory(e):e===53247&&Bi(255);if(C.enabled&&C.active&&(e===65008||e===65161||e===64303)&&(C.active=!1),n<0){let t=E[r];n=T[t+(e&255)]}}return t&&Tr(e,n,!1)&&Fr(e),n},$i=e=>{let t=e>>>8,n=E[t];return T[n+(e&255)]},ea=(e,t)=>{if(e===49193&&w.enabled){w.writeSoftSwitch(t),b.NEWVIDEO.isSet=!!(t&128);return}e===49240&&C.enabled?C.active=!1:e===49241&&C.enabled&&(C.active=!0),e===49265||e===49267?ui(t):e>=49296?Ki(e,t):Pn(e,!0,M.cycleCount),(e<=49167||e>=49232)&&Hi()},A=(e,t)=>{let r=e>>>8;if(bh){let t=vi[e]+1;vi[e]=t,t>xi&&(xi=t,Si=e)}if(r===192)xr(e,t,`system`,null),ea(e,t);else{e===55&&C.enabled&&(t===253?C.active=!1:t===195&&(C.active=!0)),r>=193&&r<=199?(xr(e,t,`system`,null),Ki(e,t)):r>=204&&r<=205&&C.enabled?(xr(e,t,`system`,null),C.writeMemory(e,t)):e===53247&&(xr(e,t,`system`,null),Bi(255));let i=di[r];if(i>=fi)return;let a=i+(e&255),o=a<65536?`main`:a>=98048?`aux`:`system`,s=o===`aux`?Math.floor((a-n)/65536):null;xr(e,t,o,s),T[a]=t}Tr(e,t,!0)&&Fr(e)},ta=e=>T[t+e-49152],j=(e,n,r=1)=>{let i=t+e-49152;T.fill(n,i,i+r)},na=1024,ra=2048,ia=[0,128,256,384,512,640,768,896,40,168,296,424,552,680,808,936,80,208,336,464,592,720,848,976],aa=(e=!1)=>{if(C.enabled&&C.active&&!e){if(!b.TEXT.isSet&&!b.MIXED.isSet)return new Uint8Array;if(!(!b.TEXT.isSet&&b.MIXED.isSet))return C.getTextPage()}let t=0,r=24,i=!1;if(e){if(b.TEXT.isSet||b.HIRES.isSet)return new Uint8Array;r=b.MIXED.isSet?20:24,i=Mi&&b.COLUMN80.isSet&&b.DHIRES.isSet}else{if(!b.TEXT.isSet&&!b.MIXED.isSet)return new Uint8Array;!b.TEXT.isSet&&b.MIXED.isSet&&(t=20),i=Mi&&b.COLUMN80.isSet}if(i){let e=b.PAGE2.isSet&&!b.STORE80.isSet?ra:na,i=new Uint8Array(80*(r-t)).fill(160);for(let a=t;a<r;a++){let r=80*(a-t);for(let t=0;t<40;t++)i[r+2*t+1]=T[e+ia[a]+t],i[r+2*t]=T[n+e+ia[a]+t]}return i}if(b.DHIRES.isSet&&!b.COLUMN80.isSet&&b.STORE80.isSet){let e=new Uint8Array(80*(r-t));for(let i=t;i<r;i++){let r=80*(i-t),a=na+ia[i];e.set(T.slice(a,a+40),r),a+=n,e.set(T.slice(a,a+40),r+40)}return e}let a=b.PAGE2.isSet&&!b.STORE80.isSet?ra:na,o=new Uint8Array(40*(r-t));for(let e=t;e<r;e++){let n=40*(e-t),r=a+ia[e];o.set(T.slice(r,r+40),n)}return o},oa=()=>Gn.Buffer.from(aa().map(e=>e&=127)).toString(),sa=new Uint8Array(7680),ca=new Uint8Array(15360),la=sa,ua=192,da=e=>{let t=b.DHIRES.isSet&&b.COLUMN80.isSet,r=b.DHIRES.isSet&&!b.COLUMN80.isSet&&b.STORE80.isSet,i=b.DHIRES.isSet&&!b.COLUMN80.isSet&&b.VIDEO7_160.isSet,a=b.DHIRES.isSet&&b.COLUMN80.isSet&&b.VIDEO7_MONO.isSet;if(t||i||a||r){e===0&&(la=ca,ua=b.MIXED.isSet?160:192);let t=b.PAGE2.isSet&&!b.STORE80.isSet?16384:8192,r=ce(t,e);for(let t=0;t<40;t++)ca[e*80+2*t+1]=T[r+t],ca[e*80+2*t]=T[n+r+t]}else{e===0&&(la=sa,ua=b.MIXED.isSet?160:192);let t=(b.PAGE2.isSet?16384:8192)+40*Math.trunc(e/64)+e%8*1024+128*(Math.trunc(e/8)&7);sa.set(T.slice(t,t+40),e*40)}},fa=()=>b.TEXT.isSet||!b.HIRES.isSet?new Uint8Array:ua===192?la:la===sa?la.slice(0,40*ua):la.slice(0,80*ua),pa=(e,t=512)=>{let n=new Uint8Array(t),r=0;for(;r<t;){let i=e+r&65535,a=i&255,o=Math.min(256-a,t-r),s=E[i>>>8]+a;n.set(T.subarray(s,s+o),r),r+=o}return n},ma=(e,t)=>{let n=0;for(;n<t.length;){let r=e+n&65535,i=r&255,a=Math.min(256-i,t.length-n),o=di[r>>>8];o<fi&&T.set(t.subarray(n,n+a),o+i),n+=a}},ha=(e,t)=>{if(!Number.isInteger(e)||e<0||e+t.length>49152)throw Error(`Binary block must fit within main RAM at $0000-$BFFF`);T.set(t,e)},ga=(e,t)=>{for(let n=0;n<t.length;n++)if(k(e+n,!1)!==t[n])return!1;return!0},_a=()=>{let e=E[0];return T.slice(e,e+256)},va=()=>{let e=new Uint8Array(65536);for(let t=0;t<256;t++){let n=E[t];e.set(T.slice(n,n+256),t*256)}return e},ya=()=>T.slice(0,65536),ba=()=>T.slice(n,163584),xa=()=>T.slice(8192,16384),Sa=()=>T.slice(16384,24576),Ca=()=>!w.enabled||!w.active?new Uint8Array:w.extractShrBuffer(T,n),M=f(),wa=!1,Ta=()=>{wa=!1},Ea=e=>{M.Accum=e},Da=e=>{M.XReg=e},Oa=e=>{M.YReg=e},ka=e=>{M.cycleCount=e},Aa=e=>{ja(),Object.assign(M,e)},ja=()=>{M.Accum=0,M.XReg=0,M.YReg=0,M.PStatus=36,M.StackPtr=255,Na(k(65533,!1)*256+k(65532,!1)),M.flagIRQ=0,M.flagNMI=!1,Ta()},Ma=e=>{Na((M.PC+e+65536)%65536)},Na=e=>{M.PC=e},Pa=e=>{M.PStatus=e|48},Fa=e=>(e&128?`N`:`.`)+(e&64?`V`:`.`)+(e&16?`B`:`.`)+(e&8?`D`:`.`)+(e&4?`I`:`.`)+(e&2?`Z`:`.`)+(e&1?`C`:`.`),Ia=()=>`${m(M.Accum)}  ${m(M.XReg)}  ${m(M.YReg)}  ${m(M.StackPtr)}  ${m(M.PStatus)}  ${Fa(M.PStatus)}`,La=Array(256).fill(``),Ra=()=>{let e=0;for(;e<256&&La[e]===``;)e++;return La.slice(e,256)},za=e=>{La.splice(256-e.length,e.length,...e)},Ba=()=>{let e=pa(256).slice(0,256),t=[];for(let n=255;n>M.StackPtr;n--){let r=`$`+m(e[n]),i=La[n];La[n].length>3&&n-1>M.StackPtr&&(La[n-1]===`JSR`||La[n-1]===`BRK`||La[n-1]===`IRQ`?(n--,r+=m(e[n])):i=``),r=(r+`   `).substring(0,6),t.push(m(256+n,4)+`: `+r+i)}return t.join(`
`)},Va=()=>{let e=pa(256).slice(0,256);for(let t=M.StackPtr-2;t<=255;t++){let n=e[t];if(La[t].startsWith(`JSR`)&&t-1>M.StackPtr&&La[t-1]===`JSR`){let r=e[t-1]+1;return(n<<8)+r}}return-1},Ha=(e,t)=>{La[M.StackPtr]=e,A(256+M.StackPtr,t),M.StackPtr=(M.StackPtr+255)%256},Ua=()=>{M.StackPtr=(M.StackPtr+1)%256;let e=k(256+M.StackPtr);if(isNaN(e))throw Error(`illegal stack value`);return e},Wa=()=>!!(M.PStatus&1),N=(e=!0)=>M.PStatus=e?M.PStatus|1:M.PStatus&254,Ga=()=>!!(M.PStatus&2),Ka=(e=!0)=>M.PStatus=e?M.PStatus|2:M.PStatus&253,qa=()=>!!(M.PStatus&4),Ja=(e=!0)=>M.PStatus=e?M.PStatus|4:M.PStatus&251,Ya=()=>!!(M.PStatus&8),Xa=()=>+!!Ya(),Za=(e=!0)=>M.PStatus=e?M.PStatus|8:M.PStatus&247,Qa=(e=!0)=>M.PStatus=e?M.PStatus|16:M.PStatus&239,$a=()=>!!(M.PStatus&64),eo=(e=!0)=>M.PStatus=e?M.PStatus|64:M.PStatus&191,to=()=>!!(M.PStatus&128),no=(e=!0)=>M.PStatus=e?M.PStatus|128:M.PStatus&127,P=e=>{Ka(e===0),no(e>=128)},F=(e,t)=>(e+t+256)%256,I=(e,t)=>t*256+e,L=(e,t,n)=>(t*256+e+n+65536)%65536,R=(e,t)=>e>>8==t>>8?0:1,ro=(e,t)=>{if(e){let e=M.PC;return Ma(t>127?t-256:t),3+R(e+2,M.PC+2)}return 2},z=Array(256),B=(e,t,n,r,i,a=!1)=>{console.assert(!z[n],`Duplicate instruction: `+e+` mode=`+t),z[n]={name:e,pcode:n,mode:t,bytes:r,execute:i,is6502:!a}},io=(e,t,n)=>{let r=k(e),i=k((e+1)%256),a=L(r,i,M.YReg);t(a);let o=5+R(a,I(r,i));return n&&(o+=Xa()),o},ao=(e,t,n)=>{let r=k(e),i=k((e+1)%256);t(I(r,i));let a=5;return n&&(a+=Xa()),a},oo=e=>{let t=+!!Wa(),n=M.Accum+e+t&255,r=(M.Accum&15)+(e&15)+t,i=0;r>=10&&(r=r+6&15,i=16);let a=(M.Accum&240)+(e&240)+i+r,o=a,s=M.Accum<=127&&e<=127,c=M.Accum>=128&&e>=128;eo((a&255)>=128?s:c),N(a>=160),Wa()&&(a+=96),M.Accum=a&255,ki()===`APPLE2EE`?P(M.Accum):(Ka(n===0),no(!!(o&128)))},so=e=>{let t=M.Accum+e+ +!!Wa();N(t>=256),t%=256;let n=M.Accum<=127&&e<=127,r=M.Accum>=128&&e>=128;eo(t>=128?n:r),M.Accum=t,P(M.Accum)},co=e=>{Ya()?oo(k(e)):so(k(e))};B(`ADC`,d.IMM,105,2,e=>(Xa()?oo(e):so(e),2+Xa())),B(`ADC`,d.ZP_REL,101,2,e=>(co(e),3+Xa())),B(`ADC`,d.ZP_X,117,2,e=>(co(F(e,M.XReg)),4+Xa())),B(`ADC`,d.ABS,109,3,(e,t)=>(co(I(e,t)),4+Xa())),B(`ADC`,d.ABS_X,125,3,(e,t)=>{let n=L(e,t,M.XReg);return co(n),4+Xa()+R(n,I(e,t))}),B(`ADC`,d.ABS_Y,121,3,(e,t)=>{let n=L(e,t,M.YReg);return co(n),4+Xa()+R(n,I(e,t))}),B(`ADC`,d.IND_X,97,2,e=>{let t=F(e,M.XReg);return co(I(k(t),k(t+1))),6+Xa()}),B(`ADC`,d.IND_Y,113,2,e=>io(e,co,!0)),B(`ADC`,d.IND,114,2,e=>ao(e,co,!0),!0);let lo=e=>{M.Accum&=k(e),P(M.Accum)};B(`AND`,d.IMM,41,2,e=>(M.Accum&=e,P(M.Accum),2)),B(`AND`,d.ZP_REL,37,2,e=>(lo(e),3)),B(`AND`,d.ZP_X,53,2,e=>(lo(F(e,M.XReg)),4)),B(`AND`,d.ABS,45,3,(e,t)=>(lo(I(e,t)),4)),B(`AND`,d.ABS_X,61,3,(e,t)=>{let n=L(e,t,M.XReg);return lo(n),4+R(n,I(e,t))}),B(`AND`,d.ABS_Y,57,3,(e,t)=>{let n=L(e,t,M.YReg);return lo(n),4+R(n,I(e,t))}),B(`AND`,d.IND_X,33,2,e=>{let t=F(e,M.XReg);return lo(I(k(t),k(t+1))),6}),B(`AND`,d.IND_Y,49,2,e=>io(e,lo,!1)),B(`AND`,d.IND,50,2,e=>ao(e,lo,!1),!0);let uo=e=>{let t=k(e);k(e),N((t&128)==128),t=(t<<1)%256,A(e,t),P(t)};B(`ASL`,d.IMPLIED,10,1,()=>(N((M.Accum&128)==128),M.Accum=(M.Accum<<1)%256,P(M.Accum),2)),B(`ASL`,d.ZP_REL,6,2,e=>(uo(e),5)),B(`ASL`,d.ZP_X,22,2,e=>(uo(F(e,M.XReg)),6)),B(`ASL`,d.ABS,14,3,(e,t)=>(uo(I(e,t)),6)),B(`ASL`,d.ABS_X,30,3,(e,t)=>{let n=L(e,t,M.XReg);return uo(n),6+R(n,I(e,t))}),B(`BCC`,d.ZP_REL,144,2,e=>ro(!Wa(),e)),B(`BCS`,d.ZP_REL,176,2,e=>ro(Wa(),e)),B(`BEQ`,d.ZP_REL,240,2,e=>ro(Ga(),e)),B(`BMI`,d.ZP_REL,48,2,e=>ro(to(),e)),B(`BNE`,d.ZP_REL,208,2,e=>ro(!Ga(),e)),B(`BPL`,d.ZP_REL,16,2,e=>ro(!to(),e)),B(`BVC`,d.ZP_REL,80,2,e=>ro(!$a(),e)),B(`BVS`,d.ZP_REL,112,2,e=>ro($a(),e)),B(`BRA`,d.ZP_REL,128,2,e=>ro(!0,e),!0);let fo=e=>{Ka((M.Accum&e)===0),no(!!(e&128)),eo(!!(e&64))};B(`BIT`,d.ZP_REL,36,2,e=>(fo(k(e)),3)),B(`BIT`,d.ABS,44,3,(e,t)=>(fo(k(I(e,t))),4)),B(`BIT`,d.IMM,137,2,e=>(Ka((M.Accum&e)===0),2),!0),B(`BIT`,d.ZP_X,52,2,e=>(fo(k(F(e,M.XReg))),4),!0),B(`BIT`,d.ABS_X,60,3,(e,t)=>{let n=L(e,t,M.XReg);return fo(k(n)),4+R(n,I(e,t))},!0);let po=(e,t,n=0)=>{wa=!0;let r=(M.PC+n)%65536,i=k(t),a=k(t+1);Ha(`${e} $`+m(a)+m(i),Math.trunc(r/256)),Ha(e,r%256),Qa(e===`BRK`),Ha(`P`,M.PStatus),ki()===`APPLE2EE`&&Za(!1),Ja();let o=L(i,a,e===`BRK`?-1:0);Na(o)},mo=()=>(Qa(),po(`BRK`,65534,2),7);B(`BRK`,d.IMPLIED,0,1,mo);let ho=e=>e||wa?0:(Qa(!1),po(`IRQ`,65534),7),go=()=>(po(`NMI`,65530),7);B(`CLC`,d.IMPLIED,24,1,()=>(N(!1),2)),B(`CLD`,d.IMPLIED,216,1,()=>(Za(!1),2)),B(`CLI`,d.IMPLIED,88,1,()=>(Ja(!1),2)),B(`CLV`,d.IMPLIED,184,1,()=>(eo(!1),2));let _o=e=>{let t=k(e);N(M.Accum>=t),P((M.Accum-t+256)%256)},vo=e=>{let t=k(e);N(M.Accum>=t),P((M.Accum-t+256)%256)};B(`CMP`,d.IMM,201,2,e=>(N(M.Accum>=e),P((M.Accum-e+256)%256),2)),B(`CMP`,d.ZP_REL,197,2,e=>(_o(e),3)),B(`CMP`,d.ZP_X,213,2,e=>(_o(F(e,M.XReg)),4)),B(`CMP`,d.ABS,205,3,(e,t)=>(_o(I(e,t)),4)),B(`CMP`,d.ABS_X,221,3,(e,t)=>{let n=L(e,t,M.XReg);return vo(n),4+R(n,I(e,t))}),B(`CMP`,d.ABS_Y,217,3,(e,t)=>{let n=L(e,t,M.YReg);return _o(n),4+R(n,I(e,t))}),B(`CMP`,d.IND_X,193,2,e=>{let t=F(e,M.XReg);return _o(I(k(t),k(t+1))),6}),B(`CMP`,d.IND_Y,209,2,e=>io(e,_o,!1)),B(`CMP`,d.IND,210,2,e=>ao(e,_o,!1),!0);let yo=e=>{let t=k(e);N(M.XReg>=t),P((M.XReg-t+256)%256)};B(`CPX`,d.IMM,224,2,e=>(N(M.XReg>=e),P((M.XReg-e+256)%256),2)),B(`CPX`,d.ZP_REL,228,2,e=>(yo(e),3)),B(`CPX`,d.ABS,236,3,(e,t)=>(yo(I(e,t)),4));let bo=e=>{let t=k(e);N(M.YReg>=t),P((M.YReg-t+256)%256)};B(`CPY`,d.IMM,192,2,e=>(N(M.YReg>=e),P((M.YReg-e+256)%256),2)),B(`CPY`,d.ZP_REL,196,2,e=>(bo(e),3)),B(`CPY`,d.ABS,204,3,(e,t)=>(bo(I(e,t)),4));let xo=e=>{let t=F(k(e),-1);A(e,t),P(t)};B(`DEC`,d.IMPLIED,58,1,()=>(M.Accum=F(M.Accum,-1),P(M.Accum),2),!0),B(`DEC`,d.ZP_REL,198,2,e=>(xo(e),5)),B(`DEC`,d.ZP_X,214,2,e=>(xo(F(e,M.XReg)),6)),B(`DEC`,d.ABS,206,3,(e,t)=>(xo(I(e,t)),6)),B(`DEC`,d.ABS_X,222,3,(e,t)=>{let n=L(e,t,M.XReg);return k(n),xo(n),7}),B(`DEX`,d.IMPLIED,202,1,()=>(M.XReg=F(M.XReg,-1),P(M.XReg),2)),B(`DEY`,d.IMPLIED,136,1,()=>(M.YReg=F(M.YReg,-1),P(M.YReg),2));let So=e=>{M.Accum^=k(e),P(M.Accum)};B(`EOR`,d.IMM,73,2,e=>(M.Accum^=e,P(M.Accum),2)),B(`EOR`,d.ZP_REL,69,2,e=>(So(e),3)),B(`EOR`,d.ZP_X,85,2,e=>(So(F(e,M.XReg)),4)),B(`EOR`,d.ABS,77,3,(e,t)=>(So(I(e,t)),4)),B(`EOR`,d.ABS_X,93,3,(e,t)=>{let n=L(e,t,M.XReg);return So(n),4+R(n,I(e,t))}),B(`EOR`,d.ABS_Y,89,3,(e,t)=>{let n=L(e,t,M.YReg);return So(n),4+R(n,I(e,t))}),B(`EOR`,d.IND_X,65,2,e=>{let t=F(e,M.XReg);return So(I(k(t),k(t+1))),6}),B(`EOR`,d.IND_Y,81,2,e=>io(e,So,!1)),B(`EOR`,d.IND,82,2,e=>ao(e,So,!1),!0);let Co=e=>{let t=F(k(e),1);A(e,t),P(t)};B(`INC`,d.IMPLIED,26,1,()=>(M.Accum=F(M.Accum,1),P(M.Accum),2),!0),B(`INC`,d.ZP_REL,230,2,e=>(Co(e),5)),B(`INC`,d.ZP_X,246,2,e=>(Co(F(e,M.XReg)),6)),B(`INC`,d.ABS,238,3,(e,t)=>(Co(I(e,t)),6)),B(`INC`,d.ABS_X,254,3,(e,t)=>{let n=L(e,t,M.XReg);return k(n),Co(n),7}),B(`INX`,d.IMPLIED,232,1,()=>(M.XReg=F(M.XReg,1),P(M.XReg),2)),B(`INY`,d.IMPLIED,200,1,()=>(M.YReg=F(M.YReg,1),P(M.YReg),2)),B(`JMP`,d.ABS,76,3,(e,t)=>(Na(L(e,t,-3)),3)),B(`JMP`,d.IND,108,3,(e,t)=>{let n=I(e,t);return e=k(n),t=k((n+1)%65536),Na(L(e,t,-3)),6}),B(`JMP`,d.IND_X,124,3,(e,t)=>{let n=L(e,t,M.XReg);return e=k(n),t=k((n+1)%65536),Na(L(e,t,-3)),6},!0),B(`JSR`,d.ABS,32,3,(e,t)=>{let n=(M.PC+2)%65536;return Ha(`JSR $`+m(t)+m(e),Math.trunc(n/256)),Ha(`JSR`,n%256),Na(L(e,t,-3)),6});let wo=e=>{M.Accum=k(e),P(M.Accum)};B(`LDA`,d.IMM,169,2,e=>(M.Accum=e,P(M.Accum),2)),B(`LDA`,d.ZP_REL,165,2,e=>(wo(e),3)),B(`LDA`,d.ZP_X,181,2,e=>(wo(F(e,M.XReg)),4)),B(`LDA`,d.ABS,173,3,(e,t)=>(wo(I(e,t)),4)),B(`LDA`,d.ABS_X,189,3,(e,t)=>{let n=L(e,t,M.XReg);return wo(n),4+R(n,I(e,t))}),B(`LDA`,d.ABS_Y,185,3,(e,t)=>{let n=L(e,t,M.YReg);return wo(n),4+R(n,I(e,t))}),B(`LDA`,d.IND_X,161,2,e=>{let t=F(e,M.XReg);return wo(I(k(t),k((t+1)%256))),6}),B(`LDA`,d.IND_Y,177,2,e=>io(e,wo,!1)),B(`LDA`,d.IND,178,2,e=>ao(e,wo,!1),!0);let To=e=>{M.XReg=k(e),P(M.XReg)};B(`LDX`,d.IMM,162,2,e=>(M.XReg=e,P(M.XReg),2)),B(`LDX`,d.ZP_REL,166,2,e=>(To(e),3)),B(`LDX`,d.ZP_Y,182,2,e=>(To(F(e,M.YReg)),4)),B(`LDX`,d.ABS,174,3,(e,t)=>(To(I(e,t)),4)),B(`LDX`,d.ABS_Y,190,3,(e,t)=>{let n=L(e,t,M.YReg);return To(n),4+R(n,I(e,t))});let Eo=e=>{M.YReg=k(e),P(M.YReg)};B(`LDY`,d.IMM,160,2,e=>(M.YReg=e,P(M.YReg),2)),B(`LDY`,d.ZP_REL,164,2,e=>(Eo(e),3)),B(`LDY`,d.ZP_X,180,2,e=>(Eo(F(e,M.XReg)),4)),B(`LDY`,d.ABS,172,3,(e,t)=>(Eo(I(e,t)),4)),B(`LDY`,d.ABS_X,188,3,(e,t)=>{let n=L(e,t,M.XReg);return Eo(n),4+R(n,I(e,t))});let Do=e=>{let t=k(e);k(e),N((t&1)==1),t>>=1,A(e,t),P(t)};B(`LSR`,d.IMPLIED,74,1,()=>(N((M.Accum&1)==1),M.Accum>>=1,P(M.Accum),2)),B(`LSR`,d.ZP_REL,70,2,e=>(Do(e),5)),B(`LSR`,d.ZP_X,86,2,e=>(Do(F(e,M.XReg)),6)),B(`LSR`,d.ABS,78,3,(e,t)=>(Do(I(e,t)),6)),B(`LSR`,d.ABS_X,94,3,(e,t)=>{let n=L(e,t,M.XReg);return Do(n),6+R(n,I(e,t))}),B(`NOP`,d.IMPLIED,234,1,()=>2);let Oo=e=>{M.Accum|=k(e),P(M.Accum)};B(`ORA`,d.IMM,9,2,e=>(M.Accum|=e,P(M.Accum),2)),B(`ORA`,d.ZP_REL,5,2,e=>(Oo(e),3)),B(`ORA`,d.ZP_X,21,2,e=>(Oo(F(e,M.XReg)),4)),B(`ORA`,d.ABS,13,3,(e,t)=>(Oo(I(e,t)),4)),B(`ORA`,d.ABS_X,29,3,(e,t)=>{let n=L(e,t,M.XReg);return Oo(n),4+R(n,I(e,t))}),B(`ORA`,d.ABS_Y,25,3,(e,t)=>{let n=L(e,t,M.YReg);return Oo(n),4+R(n,I(e,t))}),B(`ORA`,d.IND_X,1,2,e=>{let t=F(e,M.XReg);return Oo(I(k(t),k(t+1))),6}),B(`ORA`,d.IND_Y,17,2,e=>io(e,Oo,!1)),B(`ORA`,d.IND,18,2,e=>ao(e,Oo,!1),!0),B(`PHA`,d.IMPLIED,72,1,()=>(Ha(`PHA`,M.Accum),3)),B(`PHP`,d.IMPLIED,8,1,()=>(Ha(`PHP`,M.PStatus|16),3)),B(`PHX`,d.IMPLIED,218,1,()=>(Ha(`PHX`,M.XReg),3),!0),B(`PHY`,d.IMPLIED,90,1,()=>(Ha(`PHY`,M.YReg),3),!0),B(`PLA`,d.IMPLIED,104,1,()=>(M.Accum=Ua(),P(M.Accum),4)),B(`PLP`,d.IMPLIED,40,1,()=>(Pa(Ua()),4)),B(`PLX`,d.IMPLIED,250,1,()=>(M.XReg=Ua(),P(M.XReg),4),!0),B(`PLY`,d.IMPLIED,122,1,()=>(M.YReg=Ua(),P(M.YReg),4),!0);let ko=e=>{let t=k(e);k(e);let n=+!!Wa();N((t&128)==128),t=(t<<1)%256|n,A(e,t),P(t)};B(`ROL`,d.IMPLIED,42,1,()=>{let e=+!!Wa();return N((M.Accum&128)==128),M.Accum=(M.Accum<<1)%256|e,P(M.Accum),2}),B(`ROL`,d.ZP_REL,38,2,e=>(ko(e),5)),B(`ROL`,d.ZP_X,54,2,e=>(ko(F(e,M.XReg)),6)),B(`ROL`,d.ABS,46,3,(e,t)=>(ko(I(e,t)),6)),B(`ROL`,d.ABS_X,62,3,(e,t)=>{let n=L(e,t,M.XReg);return ko(n),6+R(n,I(e,t))});let Ao=e=>{let t=k(e);k(e);let n=Wa()?128:0;N((t&1)==1),t=t>>1|n,A(e,t),P(t)};B(`ROR`,d.IMPLIED,106,1,()=>{let e=Wa()?128:0;return N((M.Accum&1)==1),M.Accum=M.Accum>>1|e,P(M.Accum),2}),B(`ROR`,d.ZP_REL,102,2,e=>(Ao(e),5)),B(`ROR`,d.ZP_X,118,2,e=>(Ao(F(e,M.XReg)),6)),B(`ROR`,d.ABS,110,3,(e,t)=>(Ao(I(e,t)),6)),B(`ROR`,d.ABS_X,126,3,(e,t)=>{let n=L(e,t,M.XReg);return Ao(n),6+R(n,I(e,t))}),B(`RTI`,d.IMPLIED,64,1,()=>(Pa(Ua()),Qa(!1),Na(I(Ua(),Ua())-1),6)),B(`RTS`,d.IMPLIED,96,1,()=>(Na(I(Ua(),Ua())),6));let jo=e=>{let t=ki()===`APPLE2EE`,n=+!Wa(),r=255-e,i=M.Accum+r+(1-n),a=i&255,o=i>=256,s=M.Accum<=127&&r<=127,c=M.Accum>=128&&r>=128;eo(i%256>=128?s:c);let l=(M.Accum&15)-(e&15)-n;if(i=M.Accum-e-n,t)i<0&&(i-=96),l<0&&(i-=6);else{let t=(M.Accum&240)-(e&240);l<0&&(l=l-6&15,t-=16),t<0&&(t-=96),i=t+l}M.Accum=i&255,P(t?M.Accum:a),N(o)},Mo=e=>{Xa()?jo(k(e)):so(255-k(e))};B(`SBC`,d.IMM,233,2,e=>(Xa()?jo(e):so(255-e),2+Xa())),B(`SBC`,d.ZP_REL,229,2,e=>(Mo(e),3+Xa())),B(`SBC`,d.ZP_X,245,2,e=>(Mo(F(e,M.XReg)),4+Xa())),B(`SBC`,d.ABS,237,3,(e,t)=>(Mo(I(e,t)),4+Xa())),B(`SBC`,d.ABS_X,253,3,(e,t)=>{let n=L(e,t,M.XReg);return Mo(n),4+Xa()+R(n,I(e,t))}),B(`SBC`,d.ABS_Y,249,3,(e,t)=>{let n=L(e,t,M.YReg);return Mo(n),4+Xa()+R(n,I(e,t))}),B(`SBC`,d.IND_X,225,2,e=>{let t=F(e,M.XReg);return Mo(I(k(t),k(t+1))),6+Xa()}),B(`SBC`,d.IND_Y,241,2,e=>io(e,Mo,!0)),B(`SBC`,d.IND,242,2,e=>ao(e,Mo,!0),!0),B(`SEC`,d.IMPLIED,56,1,()=>(N(),2)),B(`SED`,d.IMPLIED,248,1,()=>(Za(),2)),B(`SEI`,d.IMPLIED,120,1,()=>(Ja(),2)),B(`STA`,d.ZP_REL,133,2,e=>(A(e,M.Accum),3)),B(`STA`,d.ZP_X,149,2,e=>(A(F(e,M.XReg),M.Accum),4)),B(`STA`,d.ABS,141,3,(e,t)=>(A(I(e,t),M.Accum),4)),B(`STA`,d.ABS_X,157,3,(e,t)=>{let n=L(e,t,M.XReg);return k(n),A(n,M.Accum),5}),B(`STA`,d.ABS_Y,153,3,(e,t)=>(A(L(e,t,M.YReg),M.Accum),5)),B(`STA`,d.IND_X,129,2,e=>{let t=F(e,M.XReg);return A(I(k(t),k(t+1)),M.Accum),6});let No=e=>{A(e,M.Accum)};B(`STA`,d.IND_Y,145,2,e=>(io(e,No,!1),6)),B(`STA`,d.IND,146,2,e=>ao(e,No,!1),!0),B(`STX`,d.ZP_REL,134,2,e=>(A(e,M.XReg),3)),B(`STX`,d.ZP_Y,150,2,e=>(A(F(e,M.YReg),M.XReg),4)),B(`STX`,d.ABS,142,3,(e,t)=>(A(I(e,t),M.XReg),4)),B(`STY`,d.ZP_REL,132,2,e=>(A(e,M.YReg),3)),B(`STY`,d.ZP_X,148,2,e=>(A(F(e,M.XReg),M.YReg),4)),B(`STY`,d.ABS,140,3,(e,t)=>(A(I(e,t),M.YReg),4)),B(`STZ`,d.ZP_REL,100,2,e=>(A(e,0),3),!0),B(`STZ`,d.ZP_X,116,2,e=>(A(F(e,M.XReg),0),4),!0),B(`STZ`,d.ABS,156,3,(e,t)=>(A(I(e,t),0),4),!0),B(`STZ`,d.ABS_X,158,3,(e,t)=>{let n=L(e,t,M.XReg);return k(n),A(n,0),5},!0),B(`TAX`,d.IMPLIED,170,1,()=>(M.XReg=M.Accum,P(M.XReg),2)),B(`TAY`,d.IMPLIED,168,1,()=>(M.YReg=M.Accum,P(M.YReg),2)),B(`TSX`,d.IMPLIED,186,1,()=>(M.XReg=M.StackPtr,P(M.XReg),2)),B(`TXA`,d.IMPLIED,138,1,()=>(M.Accum=M.XReg,P(M.Accum),2)),B(`TXS`,d.IMPLIED,154,1,()=>(M.StackPtr=M.XReg,2)),B(`TYA`,d.IMPLIED,152,1,()=>(M.Accum=M.YReg,P(M.Accum),2));let Po=e=>{let t=k(e);Ka((M.Accum&t)===0),A(e,t&~M.Accum)};B(`TRB`,d.ZP_REL,20,2,e=>(Po(e),5),!0),B(`TRB`,d.ABS,28,3,(e,t)=>(Po(I(e,t)),6),!0);let Fo=e=>{let t=k(e);Ka((M.Accum&t)===0),A(e,t|M.Accum)};B(`TSB`,d.ZP_REL,4,2,e=>(Fo(e),5),!0),B(`TSB`,d.ABS,12,3,(e,t)=>(Fo(I(e,t)),6),!0),[2,34,66,98,130,194,226].forEach(e=>{B(`???`,d.IMPLIED,e,2,()=>2),z[e].is6502=!1});for(let e=0;e<=15;e++)B(`???`,d.IMPLIED,3+16*e,1,()=>1),z[3+16*e].is6502=!1,B(`???`,d.IMPLIED,7+16*e,1,()=>1),z[7+16*e].is6502=!1,B(`???`,d.IMPLIED,11+16*e,1,()=>1),z[11+16*e].is6502=!1,B(`???`,d.IMPLIED,15+16*e,1,()=>1),z[15+16*e].is6502=!1;B(`???`,d.IMPLIED,68,2,()=>3),z[68].is6502=!1,B(`???`,d.IMPLIED,84,2,()=>4),z[84].is6502=!1,B(`???`,d.IMPLIED,212,2,()=>4),z[212].is6502=!1,B(`???`,d.IMPLIED,244,2,()=>4),z[244].is6502=!1,B(`???`,d.IMPLIED,92,3,()=>8),z[92].is6502=!1,B(`???`,d.IMPLIED,220,3,()=>4),z[220].is6502=!1,B(`???`,d.IMPLIED,252,3,()=>4),z[252].is6502=!1;for(let e=0;e<256;e++)z[e]||(console.error(`ERROR: OPCODE `+e.toString(16)+` should be implemented`),B(`BRK`,d.IMPLIED,e,1,mo));let Io=()=>{let e=Array(256);for(let t=0;t<256;t++)e[t]={name:z[t].name,mode:z[t].mode,pcode:z[t].pcode,bytes:z[t].bytes,is6502:z[t].is6502};x_(e)},Lo=(e,t,n)=>{let r=t&7,i=t>>>3;return e[i]|=n>>>r,r&&(e[i+1]|=n<<8-r),t+8},Ro=(e,t,n)=>(t=Lo(e,t,n>>>1|170),t=Lo(e,t,n|170),t),zo=(e,t)=>(t=Lo(e,t,255),t+2),Bo=e=>{
/*!
Converts a 256-byte source woz into the 343 byte values that
contain the Apple 6-and-2 encoding of that woz.
@param dest The at-least-343 byte woz to which the encoded sector is written.
@param src The 256-byte source data.
*/
let t=[150,151,154,155,157,158,159,166,167,171,172,173,174,175,178,179,180,181,182,183,185,186,187,188,189,190,191,203,205,206,207,211,214,215,217,218,219,220,221,222,223,229,230,231,233,234,235,236,237,238,239,242,243,244,245,246,247,249,250,251,252,253,254,255],n=new Uint8Array(343),r=[0,2,1,3];for(let t=0;t<84;t++)n[t]=r[e[t]&3]|r[e[t+86]&3]<<2|r[e[t+172]&3]<<4;n[84]=r[e[84]&3]<<0|r[e[170]&3]<<2,n[85]=r[e[85]&3]<<0|r[e[171]&3]<<2;for(let t=0;t<256;t++)n[86+t]=e[t]>>>2;n[342]=n[341];let i=342;for(;i>1;)i--,n[i]^=n[i-1];for(let e=0;e<343;e++)n[e]=t[n[e]];return n},Vo=(e,t,n)=>{
/*!
Converts a DSK-style track to a WOZ-style track.
@param dest The 6646-byte woz that will contain the WOZ track. Both track contents and the
proper suffix will be written.
@param src The 4096-byte woz that contains the DSK track — 16 instances of 256 bytes, each
a fully-decoded sector.
@param track_number The track number to encode into this track.
@param is_prodos @c true if the DSK image is in Pro-DOS order; @c false if it is in DOS 3.3 order.
*/
let r=0,i=new Uint8Array(6646).fill(0);for(let e=0;e<16;e++)r=zo(i,r);for(let a=0;a<16;a++){r=Lo(i,r,213),r=Lo(i,r,170),r=Lo(i,r,150),r=Ro(i,r,254),r=Ro(i,r,t),r=Ro(i,r,a),r=Ro(i,r,254^t^a),r=Lo(i,r,222),r=Lo(i,r,170),r=Lo(i,r,235);for(let e=0;e<7;e++)r=zo(i,r);r=Lo(i,r,213),r=Lo(i,r,170),r=Lo(i,r,173);let o=a===15?15:a*(n?8:7)%15,s=Bo(e.slice(o*256,o*256+256));for(let e=0;e<s.length;e++)r=Lo(i,r,s[e]);r=Lo(i,r,222),r=Lo(i,r,170),r=Lo(i,r,235);for(let e=0;e<16;e++)r=zo(i,r)}return i},Ho=(e,t)=>{let n=e.length/4096;if(n<34||n>40)return new Uint8Array;let r=new Uint8Array(1536+n*13*512).fill(0);r.set(ee(`WOZ2ÿ
\r
`),0),r.set(ee(`INFO`),12),r[16]=60,r[20]=2,r[21]=1,r[22]=0,r[23]=0,r[24]=1,r.fill(32,25,57),r.set(ee(`Apple2TS (CT6502)`),25),r[57]=1,r[58]=0,r[59]=32,r[60]=0,r[62]=0,r[64]=13,r.set(ee(`TMAP`),80),r[84]=160,r.fill(255,88,248);let i=0;for(let e=0;e<n;e++)i=88+(e<<2),e>0&&(r[i-1]=e),r[i]=r[i+1]=e;r.set(ee(`TRKS`),248),r.set(ne(1280+n*13*512),252);for(let a=0;a<n;a++){i=256+(a<<3),r.set(te(3+a*13),i),r[i+2]=13,r.set(ne(50304),i+4);let n=e.slice(a*16*256,(a+1)*16*256),o=Vo(n,a,t);i=1536+a*13*512,r.set(o,i)}let a=ae(r,12);return r.set(ne(a),8),r},Uo=null,Wo=(e,t)=>{if([87,79,90,50,255,10,13,10].find((e,n)=>e!==t[n])!==void 0)return!1;e.isWriteProtected=t[22]===1,e.isSynchronized=t[23]===1,e.optimalTiming=t[59]>0?t[59]:32;let n=(t[67]<<8)+t[66],r=(t[69]<<8)+t[68];if(n>0&&r>0)return Uo={message:`Unable to load: ${e.filename} contains a FLUX chunk`,code:c.ERROR},!1;let i=t.slice(8,12),a=i[0]+(i[1]<<8)+(i[2]<<16)+i[3]*2**24,o=ae(t,12);if(a!==0&&a!==o)return Uo={message:`CRC checksum error: ${e.filename}`,code:c.ERROR},!1;for(let n=0;n<160;n++){let r=t[88+n];if(r<255){let i=256+8*r,a=t.slice(i,i+8);e.trackStart[n]=512*((a[1]<<8)+a[0]),e.trackNbits[n]=a[4]+(a[5]<<8)+(a[6]<<16)+a[7]*2**24,e.maxQuarterTrack=n}}return!0},Go=(e,t)=>{if([87,79,90,49,255,10,13,10].find((e,n)=>e!==t[n])!==void 0)return!1;e.isWriteProtected=t[22]===1;for(let n=0;n<160;n++){let r=t[88+n];if(r<255){e.trackStart[n]=256+r*6656;let i=t.slice(e.trackStart[n]+6646,e.trackStart[n]+6656);e.trackNbits[n]=i[2]+(i[3]<<8),e.maxQuarterTrack=n}}return!0},Ko=(e,t)=>{let n=e.filename.toLowerCase().endsWith(`.po`),r=Ho(t,n);return r.length===0?new Uint8Array:r},qo=(e,t,n=!1)=>{e.diskHasChanges=!1,Uo=null;let r=e.filename.toLowerCase(),i=t.length>=4&&t[0]===87&&t[1]===79&&t[2]===90;if(t.length>1e4){if(!i&&ue(r,t?.length))return n&&!e.hardDrive?new Uint8Array:(e.hardDrive=!0,e.status=``,t);if(n&&e.hardDrive&&(i||r.endsWith(`.woz`)||r.endsWith(`.dsk`)||r.endsWith(`.do`)||r.endsWith(`.po`)))return new Uint8Array;if(t.length===143360&&(t=Ko(e,t)),Wo(e,t)||Go(e,t))return t}return r!==``&&(Uo===null&&(Uo={message:`Unknown format or unable to decode: ${e.filename}`,code:c.ERROR}),n_(Uo)),new Uint8Array},Jo=[162,32,160,0,162,3,134,60,138,10,36,60,240,16,5,60,73,255,41,126,176,8,74,208,251,152,157,86,3,200,232,16,229,32,88,255,186,189,0,1,10,10,10,10,133,43,170,189,142,192,189,140,192,189,138,192,189,137,192,160,80,189,128,192,152,41,3,10,5,43,170,189,129,192,169,86,32,168,252,136,16,235,133,38,133,61,133,65,169,8,133,39,24,8,189,140,192,16,251,73,213,208,247,189,140,192,16,251,201,170,208,243,234,189,140,192,16,251,201,150,240,9,40,144,223,73,173,240,37,208,217,160,3,133,64,189,140,192,16,251,42,133,60,189,140,192,16,251,37,60,136,208,236,40,197,61,208,190,165,64,197,65,208,184,176,183,160,86,132,60,188,140,192,16,251,89,214,2,164,60,136,153,0,3,208,238,132,60,188,140,192,16,251,89,214,2,164,60,145,38,200,208,239,188,140,192,16,251,89,214,2,208,135,160,0,162,86,202,48,251,177,38,94,0,3,42,94,0,3,42,145,38,200,208,238,230,39,230,61,165,61,205,0,8,166,43,144,219,76,1,8,0,0,0,0,0],Yo=new Map,Xo=()=>Yo.clear(),Zo=(e,t,n,r)=>Yo.set(e,{card:t,save:n,restore:r}),Qo=()=>Array.from(Yo,([e,t])=>({slot:e,card:t.card,state:t.save()})),$o=e=>{for(let t of e??[]){let e=Yo.get(t.slot);e?.card===t.card&&e.restore(t.state)}},es=0,ts=0,ns=!1,rs=0,is=!1,as=!1,os=[-1,0,2,1,4,-1,3,-1,6,7,-1,-1,5,-1,-1,-1],ss=[[0,1,2,3,0,-3,-2,-1],[-1,0,1,2,3,0,-3,-2],[-2,-1,0,1,2,3,0,-3],[-3,-2,-1,0,1,2,3,0],[0,-3,-2,-1,0,1,2,3],[3,0,-3,-2,-1,0,1,2],[2,3,0,-3,-2,-1,0,1],[1,2,3,0,-3,-2,-1,0]],cs=e=>{is=!1,ws(e),e.quarterTrack=e.maxQuarterTrack,e.prevQuarterTrack=e.maxQuarterTrack},ls=(e=!1)=>{if(e){let e=lc();e.motorRunning&&Ts(e)}else l_(u.MOTOR_OFF)},us=0,ds=(e,t,n)=>{us=0,e.prevQuarterTrack=e.quarterTrack,e.quarterTrack+=t,e.quarterTrack<0||e.quarterTrack>e.maxQuarterTrack?(l_(u.TRACK_END),e.quarterTrack=Math.max(0,Math.min(e.quarterTrack,e.maxQuarterTrack))):l_(u.TRACK_SEEK),e.status=` Trk ${e.quarterTrack/4}`,hc(),rs+=n,e.trackLocation+=Math.floor(rs/4),rs%=4,e.quarterTrack!=e.prevQuarterTrack&&(e.trackLocation=Math.floor(e.trackLocation*(e.trackNbits[e.quarterTrack]/e.trackNbits[e.prevQuarterTrack])))},fs=0,ps=[0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1],ms=()=>(fs++,ps[fs&31]),hs=0,gs=e=>(hs<<=1,hs|=e,hs&=15,hs===0?ms():e),_s=[128,64,32,16,8,4,2,1],vs=[127,191,223,239,247,251,253,254],ys=(e,t)=>{let n=e.trackLocation;e.trackLocation%=e.trackNbits[e.quarterTrack],n!==e.trackLocation&&(us>=9?(us=0,e.trackLocation+=4):us++);let r;if(e.trackStart[e.quarterTrack]>0){let n=t[e.trackStart[e.quarterTrack]+(e.trackLocation>>3)],i=e.trackLocation&7;r=(n&_s[i])>>7-i,r=gs(r)}else r=ms();return e.trackLocation++,r},bs=(e,t,n)=>{if(t.length===0)return 128;let r=0;for(rs+=n;rs>=e.optimalTiming/8;){let n=ys(e,t);ns?ns=!n:ts&128?ts=2|n:(ts=ts<<1|n,ts&128&&(ns=!0)),rs-=e.optimalTiming/8,e.quarterTrack===0&&(rs=Math.max(rs-1e-4,0))}return rs<0&&(rs=0),ts&=255,r=ts,r},xs=0,Ss=(e,t,n)=>{if(e.trackLocation%=e.trackNbits[e.quarterTrack],e.trackStart[e.quarterTrack]>0){let r=e.trackStart[e.quarterTrack]+(e.trackLocation>>3),i=t[r],a=e.trackLocation&7;n?i|=_s[a]:i&=vs[a],t[r]=i}e.trackLocation++},Cs=(e,t,n)=>{if(t.length!==0&&e.trackStart[e.quarterTrack]!==0&&ts>0){if(n>=16)for(let n=7;n>=0;n--)Ss(e,t,ts&2**n?1:0);n>=36&&Ss(e,t,0),n>=40&&Ss(e,t,0),Ds.push(n>=40?2:n>=36?1:ts),e.diskHasChanges=!0,e.lastAppleWriteTime=Date.now(),ts=0}},ws=e=>{es=0,is||(e.motorRunning=!1),hc(),l_(u.MOTOR_OFF)},Ts=e=>{es?(clearTimeout(es),es=0):rs=0,e.motorRunning=!0,hc(),l_(u.MOTOR_ON)},Es=e=>{es===0&&(es=setTimeout(()=>ws(e),1e3))},Ds=[],Os=e=>{Ds.length>0&&e.quarterTrack===0&&(Ds=[])},ks=(e,t)=>{if(e>=49408)return-1;let n=lc(),r=uc();if(n.hardDrive)return 0;let i=0,a=M.cycleCount-xs;switch(e&=15,e){case 9:is=!0,Ts(n),Os(n);break;case 8:n.motorRunning&&!n.writeMode&&(i=bs(n,r,a),xs=M.cycleCount),is=!1,Es(n),Os(n);break;case 10:case 11:{let t=e===10?2:3,r=lc();cc(t),n=lc(),n!==r&&r.motorRunning&&(r.motorRunning=!1,n.motorRunning=!0,hc());break}case 12:as=!1,n.motorRunning&&!n.writeMode&&(i=bs(n,r,a),xs=M.cycleCount);break;case 13:as=!0,n.motorRunning&&(n.writeMode?(Cs(n,r,a),xs=M.cycleCount,t>=0&&(ts=t)):(ts=0,rs+=a,n.trackLocation+=Math.floor(rs/4),rs%=4,xs=M.cycleCount));break;case 14:n.motorRunning&&n.writeMode&&(Cs(n,r,a),n.lastAppleWriteTime=Date.now(),xs=M.cycleCount),n.writeMode=!1,as&&(i=n.isWriteProtected?255:0),Os(n);break;case 15:n.writeMode=!0,xs=M.cycleCount,t>=0&&(ts=t);break;default:{if(e<0||e>7)break;let t=e/2;e%2?n.currentPhase|=1<<t:n.currentPhase&=~(1<<t);let r=os[n.currentPhase];if(n.motorRunning&&r>=0){let e=n.quarterTrack&7,t=ss[e][r];ds(n,t,a),xs=M.cycleCount}Os(n);break}}return i},As=()=>({dataRegister:ts,dataRegHold:ns,cycleRemainder:rs,prevCycleCount:xs,MOTOR_RUNNING:is,DATA_LATCH:as,fullRevolutionCount:us,randPos:fs,headWindow:hs,motorOffPending:es!==0}),js=e=>{ts=e.dataRegister,ns=e.dataRegHold,rs=e.cycleRemainder,xs=e.prevCycleCount,is=e.MOTOR_RUNNING,as=e.DATA_LATCH,us=e.fullRevolutionCount,fs=e.randPos,hs=e.headWindow,es&&=(clearTimeout(es),0),e.motorOffPending&&(es=setTimeout(()=>ws(lc()),1e3))},Ms=()=>{Yi(6,Uint8Array.from(Jo)),qi(6,ks),Zo(6,`disk2`,As,e=>js(e))},Ns=!1,Ps=e=>{let t=e.split(`,`),n=t[0].split(/([+-])/);return{labelUsed:n[0]?n[0].toUpperCase():``,operation:n[1]?n[1]:``,value:n[2]?parseInt(n[2].replace(`#`,``).replace(`$`,`0x`)):0,idx:t[1]?t[1]:``}},Fs=``,Is=e=>{console.error(e),Fs&&console.error(Fs)},Ls=e=>{let t=d.IMPLIED,n=-1;if(e.length>0){e.startsWith(`#`)?(t=d.IMM,e=e.substring(1)):e.startsWith(`(`)?(t=e.endsWith(`,Y`)?d.IND_Y:e.endsWith(`,X)`)?d.IND_X:d.IND,e=e.substring(1)):t=e.endsWith(`,X`)?e.length>5?d.ABS_X:d.ZP_X:e.endsWith(`,Y`)?e.length>5?d.ABS_Y:d.ZP_Y:e.length>3?d.ABS:d.ZP_REL,e.startsWith(`$`)&&(e=`0x`+e.substring(1)),n=parseInt(e);let r=Ps(e);if(r.operation&&r.value){switch(r.operation){case`+`:n+=r.value;break;case`-`:n-=r.value;break;default:console.error(`Unknown operation in operand: `+e)}n=(n%65536+65536)%65536}}return[t,n]},Rs={},zs=(e,t,n,r)=>{let i=d.IMPLIED,a=-1;if(n.match(/^[#]?[$0-9()]+/))return Object.entries(Rs).forEach(([e,t])=>{n=n.replace(RegExp(`\\b${e}\\b`,`g`),`$`+m(t))}),Ls(n);let o=Ps(n);if(o.labelUsed){let s=o.labelUsed.startsWith(`<`),c=o.labelUsed.startsWith(`>`),l=o.labelUsed.startsWith(`#`)||c||s;if(l&&(o.labelUsed=o.labelUsed.substring(1)),o.labelUsed in Rs?(a=Rs[o.labelUsed],c?a=a>>8&255:s&&(a&=255)):r===2&&Is(`Missing label: `+o.labelUsed),o.operation&&o.value){switch(o.operation){case`+`:a+=o.value;break;case`-`:a-=o.value;break;default:console.error(`Unknown operation in operand: `+n)}a=(a%65536+65536)%65536}p(t)?(i=d.ZP_REL,a=a-e+254,a>255&&(a-=256)):l?i=d.IMM:(i=a>=0&&a<=255?d.ZP_REL:d.ABS,i=o.idx===`X`?i===d.ABS?d.ABS_X:d.ZP_X:i,i=o.idx===`Y`?i===d.ABS?d.ABS_Y:d.ZP_Y:i)}return[i,a]},Bs=(e,t)=>{e=e.replace(/\s+/g,` `);let n=e.split(` `);return{labelDefine:n[0]?n[0].replace(`:`,``).toUpperCase():t,instr:n[1]?n[1]:``,operand:n[2]?n[2]:``}},Vs=(e,t)=>{if(e.labelDefine in Rs&&console.error(`Redefined label: `+e.labelDefine),e.instr===`EQU`||e.instr===`=`){let[n,r]=zs(t,e.instr,e.operand,2);n!==d.ABS&&n!==d.ZP_REL&&console.error(`Illegal EQU value: `+e.operand),Rs[e.labelDefine]=r}else Rs[e.labelDefine]=t},Hs=e=>{let t=[];switch(e.instr){case`ASC`:case`DA`:{let n=e.operand,r=0;n.startsWith(`"`)&&n.endsWith(`"`)?r=128:n.startsWith(`'`)&&n.endsWith(`'`)?r=0:console.error(`Invalid string: `+n),n=n.substring(1,n.length-1);for(let e=0;e<n.length;e++)t.push(n.charCodeAt(e)|r);t.push(0);break}case`HEX`:(e.operand.replace(/,/g,``).match(/.{1,2}/g)||[]).forEach(n=>{let r=parseInt(n,16);isNaN(r)&&console.error(`Invalid HEX value: ${n} in ${e.operand}`),t.push(r)});break;default:console.error(`Unknown pseudo ops: `+e.instr)}return t},Us=(e,t)=>{let n=[],r=z[e];return n.push(e),t>=0&&(n.push(t%256),r.bytes===3&&n.push(Math.trunc(t/256))),n},Ws=0,Gs=(e,t)=>{let n=Ws,r=[],i=``;if(e.forEach((e,a)=>{if(Fs=`Line ${a}: ${e}`,e=e.split(`;`)[0].trimEnd().toUpperCase(),!e)return;let o=(e+`                   `).slice(0,30)+m(n,4)+`- `,s=Bs(e,i);if(i=``,!s.instr){i=s.labelDefine;return}if(s.instr===`ORG`){if(t===1){let[e,t]=Ls(s.operand);e===d.ABS&&(Ws=t,n=t)}Ns&&t===2&&console.log(o);return}if(t===1&&s.labelDefine&&Vs(s,n),s.instr===`EQU`||s.instr===`=`)return;let c=[],l,u;if([`ASC`,`DA`,`HEX`].includes(s.instr))c=Hs(s),n+=c.length;else if([l,u]=zs(n,s.instr,s.operand,t),t===2&&isNaN(u)&&console.error(`Unknown/illegal value: ${e}`),s.instr===`DB`)c.push(u&255),n++;else if(s.instr===`DW`)c.push(u&255),c.push(u>>8&255),n+=2;else if(s.instr===`DS`)for(let e=0;e<u;e++)c.push(0),n++;else{t===2&&p(s.instr)&&(u<0||u>255)&&console.error(`Branch instruction out of range: ${e} value: ${u} pass: ${t}`);let r=z.findIndex(e=>e&&e.name===s.instr&&e.mode===l);r<0&&console.error(`Unknown instruction: "${e}" mode=${l} pass=${t}`),c=Us(r,u),n+=z[r].bytes}Ns&&t===2&&(c.forEach(e=>{o+=` ${m(e)}`}),console.log(o)),r.push(...c)}),Ns&&t===2){let e=``;r.forEach(t=>{e+=` ${m(t)}`}),console.log(e)}return r},Ks=(e,t,n=!1)=>{Rs={},Ns=n;try{return Ws=e,Gs(t,1),Gs(t,2)}catch(e){return console.error(e),[]}},qs=0,Js=`
         LDX   #$20    ; Apple IIe looks for magic bytes $20, $00, $03.
         LDA   #$00    ; These indicate a disk drive or SmartPort device.
         LDX   #$03
         LDA   #$00    ; $3C=disk drive, $00=SmartPort
         BIT   $CFFF   ; Trigger all peripheral cards to turn off expansion ROMs
         LDA   #$01    ; ProDOS command code = READ
         STA   $42     ; Store ProDOS command code
         LDA   #$4C    ; JMP
         STA   $07FD
         LDA   #$${m(192)}   ; jump address
         STA   $07FE
         LDA   #$60    ; Fake RTS to determine our slot
         STA   $07FF
         JSR   $07FF
         TSX
         LDA   $100,X  ; High byte of slot adddress
         STA   $07FF   ; Store this for the high byte of our JMP command
         ASL           ; Shift $Cs up to $s0 (e.g. $C7 -> $70)
         ASL           ; We need this for the ProDOS unit number (below).
         ASL           ; Format = bits DSSS0000
         ASL           ; D = drive number (0), SSS = slot number (1-7)
         STA   $43     ; Store ProDOS unit number here
         LDA   #$08    ; Store block (512 bytes) at address $0800
         STA   $45     ; Address high byte
         LDA   #$00
         STA   $44     ; Address low byte
         STA   $46     ; Block 0 low byte
         STA   $47     ; Block 0 high byte
         JSR   $07FD   ; Read the block (will JMP to our driver and trigger it)
         BCS   ERROR
         LDA   #$0A    ; Store block (512 bytes) at address $0A00
         STA   $45     ; Address high byte
         LDA   #$01
         STA   $46     ; Block 1 low byte
         JSR   $07FD   ; Read
         BCS   ERROR
         LDA   $0801   ; Should be nonzero
         BEQ   ERROR
         LDA   #$01    ; Should always be 1
         CMP   $0800
         BNE   ERROR
         LDX   $43     ; ProDOS block 0 code wants ProDOS unit number in X
         JMP   $801    ; Continue reading the disk
ERROR    JMP   $E000   ; Out to BASIC on error
`,Ys=()=>{let e=new Uint8Array(256).fill(0),t=Ks(0,Js.split(`
`));e.set(t,0);let n=Ks(0,`
         NOP           ; Hard drive driver address
         BRA   DONE
         TSX           ; SmartPort driver address
         INX
         INC   $100,X
         INC   $100,X
         INC   $100,X
DONE     BCS   ERR
         LDA   #$00
         RTS
ERR      LDA   #$27
         RTS
`.split(`
`));return e.set(n,192),e[254]=23,e[255]=192,e},Xs=new Uint8Array,Zs=(e=!0)=>{Xs.length===0&&(Xs=Ys()),Xs[1]=e?32:0,Yi(7,Xs,51136,nc),Yi(7,Xs,51139,tc)},Qs=(e,t)=>{if(e===0)A(t,2);else if(e<=2){A(t,240);let[,,n]=fc(e),r=n/512;A(t+1,r&255),A(t+2,r>>>8),A(t+3,0),Da(4),Oa(0)}else Ea(40),Da(0),Oa(0),N()},$s=(e,t)=>{let[,,n]=fc(e),r=n/512,i=r>1600?2:1,a=i==2?32:64;A(t,240),A(t+1,r&255),A(t+2,r>>>8),A(t+3,0);let o=`Apple2TS SP`;A(t+4,11);let s=0;for(;s<11;s++)A(t+5+s,o.charCodeAt(s));for(;s<16;s++)A(t+5+s,o.charCodeAt(8));A(t+21,i),A(t+22,a),A(t+23,1),A(t+24,0),Da(25),Oa(0)},ec=(e,t,n)=>{if(k(e,!1)!==3){console.error(`Incorrect SmartPort parameter count at address ${e}`),Ea(4),N();return}let r=k(e+4);switch(r){case 0:Qs(t,n);break;case 1:case 2:Ea(33),N();break;case 3:case 4:$s(t,n);break;default:console.error(`SmartPort statusCode ${r} not implemented`)}},tc=()=>{Ea(0),N(!1);let e=256+M.StackPtr,t=k(e+1)+256*k(e+2),n=k(t+1),r=k(t+2)+256*k(t+3),i=k(r+1),a=k(r+2)+256*k(r+3);switch(n){case 0:ec(r,i,a);return;case 1:{if(k(r,!1)!==3){console.error(`Incorrect SmartPort parameter count at address ${r}`),N();return}let e=512*(k(r+4)+256*k(r+5)+65536*k(r+6)),[t,n,o]=fc(i);if(o===0||e+512>o){Ea(39),N(!0);return}let s=t.slice(e+n,e+512+n);ma(a,s);break}default:console.error(`SmartPort command ${n} not implemented`),N();return}let o=dc(i);o.motorRunning=!0,qs||=setTimeout(()=>{qs=0,o&&(o.motorRunning=!1),hc()},500),hc()},nc=()=>{Ea(0),N(!1);let e=k(66),t=Math.max(Math.min(k(67)>>6,2),0),n=dc(t);if(!n.hardDrive)return;let[r,i,a]=fc(t),o=k(70)+256*k(71),s=512*o,c=k(68)+256*k(69);switch(n.status=` ${m(o,4)}`,e){case 0:{if(n.filename.length===0||a===0){Da(0),Oa(0),N();return}let e=a/512;Da(e&255),Oa(e>>>8);break}case 1:{if(s+512>a){console.warn(`[HD READ] block=${o} OUT OF RANGE (blockStart=${s}, dataLen=${a})`),N();return}let e=r.slice(s+i,s+512+i);ma(c,e);break}case 2:{if(s+512>a){N();return}if(n.isWriteProtected){N();return}let e=pa(c);r.set(e,s+i),n.diskHasChanges=!0,n.lastAppleWriteTime=Date.now();break}case 3:console.error(`Hard drive format not implemented yet`),N();return;default:console.error(`unknown hard drive command`),N();return}N(!1),n.motorRunning=!0,qs||=setTimeout(()=>{qs=0,n&&(n.motorRunning=!1),hc()},500),hc()},rc=(e,t,n)=>({index:e,hardDrive:n,drive:t,status:``,filename:``,diskHasChanges:!1,motorRunning:!1,isWriteProtected:!1,isSynchronized:!1,quarterTrack:0,prevQuarterTrack:0,writeMode:!1,currentPhase:0,trackStart:n?[]:Array(160).fill(0),trackNbits:n?[]:Array(160).fill(51024),trackLocation:0,maxQuarterTrack:0,lastLocalFileWriteTime:-1,cloudData:null,writableFileHandle:null,lastAppleWriteTime:-1,optimalTiming:32}),ic=()=>{V[0]=rc(0,1,!0),V[1]=rc(1,2,!0),V[2]=rc(2,1,!1),V[3]=rc(3,2,!1);for(let e=0;e<V.length;e++)ac[e]=new Uint8Array},V=[],ac=[],oc=32e6;ic();let sc=2,cc=e=>{sc=e},lc=()=>V[sc],uc=()=>ac[sc],dc=e=>V[+(e==2)],fc=e=>{let t=ac[+(e==2)],n=``;for(let e=0;e<4;e++)n+=String.fromCharCode(t[e]);let r=n===`2IMG`?64:0;return[t,r,t.length-r]},pc=[],mc=(e,t)=>(V[e].diskHasChanges&&ac[e]?.length>0&&se(ac[e]),{index:e,hardDrive:V[e].hardDrive,drive:V[e].drive,filename:V[e].filename,status:V[e].status,motorRunning:V[e].motorRunning,diskHasChanges:V[e].diskHasChanges,isWriteProtected:V[e].isWriteProtected,diskData:V[e].diskHasChanges&&!V[e].motorRunning||t?ac[e]:new Uint8Array,lastAppleWriteTime:V[e].lastAppleWriteTime,lastLocalFileWriteTime:V[e].lastLocalFileWriteTime,cloudData:V[e].cloudData,writableFileHandle:V[e].writableFileHandle}),hc=(e=-1,t=!1)=>{for(let n=0;n<V.length;n++){if(V[n].diskHasChanges&&ac[n]?.length>0&&se(ac[n]),V[n].filename===``&&!V[n].cloudData&&pc[n]&&pc[n].diskHasChanges===V[n].diskHasChanges&&pc[n].motorRunning===V[n].motorRunning&&pc[n].status===V[n].status&&n!==e)continue;let r=mc(n,t);c_(r,n===e||t),pc[n]={diskHasChanges:r.diskHasChanges,motorRunning:r.motorRunning,status:r.status}}},gc=e=>{let t=Array(V.length).fill(``);for(let n=0;n<V.length;n++)(e||ac[n].length<oc)&&(t[n]=Gn.Buffer.from(ac[n]).toString(`base64`));let n={currentDrive:sc,driveState:[],driveData:t};for(let e=0;e<V.length;e++)n.driveState[e]=V[e].filename===``?{}:{...V[e]};return n},_c=e=>{let t=V.map(e=>({...e})),n=[...ac];l_(u.MOTOR_OFF),sc=e.currentDrive,e.driveState.length===3&&sc>0&&sc++,ic();let r=0;for(let i=0;i<e.driveState.length;i++)Object.keys(e.driveState[i]).length>0&&(e.driveData[i]===``?n[r].length>=oc&&(V[r]=t[r],ac[r]=n[r]):(V[r]={...e.driveState[i]},ac[r]=new Uint8Array(Gn.Buffer.from(e.driveData[i],`base64`)))),e.driveState.length===3&&i===0&&(r=1),r++;hc(-1,!0)},vc=()=>{for(let e=0;e<V.length;e++)V[e].hardDrive||cs(V[e]);hc()},yc=(e=!1)=>{ls(e),hc()},bc=(e,t=!1)=>{let n=e.filename!==``||e.diskData.length!==0,r=e.index,i=e.drive,a=e.hardDrive;t||e.filename!==``&&(ue(e.filename,e.diskData?.length)?(a=!0,r=e.drive<=1?0:1,i=r+1):(a=!1,r=e.drive<=1?2:3,i=r-1)),a||(sc=r);let o=V[r],s=!a&&!!(o&&!o.hardDrive),c=s?o.quarterTrack:0,l=s?o.prevQuarterTrack:0,u=s?o.currentPhase:0;return V[r]=rc(r,i,a),s&&(V[r].quarterTrack=c,V[r].prevQuarterTrack=l,V[r].currentPhase=u),V[r].filename=e.filename,ac[r]=qo(V[r],e.diskData,t),ac[r].length===0?(V[r].filename=``,hc(r),!n):(a&&Zs(!0),V[r].motorRunning=e.motorRunning,V[r].cloudData=e.cloudData,V[r].writableFileHandle=e.writableFileHandle,V[r].lastLocalFileWriteTime=e.lastLocalFileWriteTime,hc(-1,!0),!0)},xc=e=>{let t=e.index;V[t].filename=e.filename,V[t].motorRunning=e.motorRunning,V[t].isWriteProtected=e.isWriteProtected,V[t].diskHasChanges=e.diskHasChanges,V[t].lastAppleWriteTime=e.lastAppleWriteTime,V[t].lastLocalFileWriteTime=e.lastLocalFileWriteTime,V[t].cloudData=e.cloudData,V[t].writableFileHandle=e.writableFileHandle,hc()},Sc=()=>ac[0].length>0||ac[1].length>0,Cc={PE:1,FE:2,OVRN:4,RX_FULL:8,TX_EMPTY:16,NDCD:32,NDSR:64,IRQ:128,HW_RESET:16},wc={BAUD_RATE:15,INT_CLOCK:16,WORD_LENGTH:96,STOP_BITS:128,HW_RESET:0},Tc={DTR_ENABLE:1,RX_INT_DIS:2,TX_INT_EN:4,RTS_TX_INT_EN:12,RX_ECHO:16,PARITY_EN:32,PARITY_CNF:192,HW_RESET:0,HW_RESET_MOS:2};var Ec=class{get rxCount(){return this._receiveBuffer.length}buffer(e){for(let t=0;t<e.length;t++)this._receiveBuffer.push(e[t]);let t=this._receiveBuffer.length-16;t=t<0?0:t;for(let e=0;e<t;e++)this._receiveBuffer.shift(),this._status|=Cc.OVRN;this._status|=Cc.RX_FULL,(this._control&Tc.RX_INT_DIS)==0&&this.irq(!0)}set data(e){let t=new Uint8Array(1).fill(e);this._extFuncs.sendData(t),this._command&Tc.TX_INT_EN&&this.irq(!0)}get data(){return this._receiveBuffer.length&&(this._lastRead=this._receiveBuffer.shift()),this._status&=~(Cc.PE|Cc.FE|Cc.OVRN),this._receiveBuffer.length?(this._status|=Cc.RX_FULL,(this._control&Tc.RX_INT_DIS)==0&&this.irq(!0)):this._status&=~Cc.RX_FULL,this._lastRead}set control(e){this._control=e,this.serialConfigChange(this.buildConfigChange())}get control(){return this._control}set command(e){this._command=e,this.serialConfigChange(this.buildConfigChange())}get command(){return this._command}get status(){let e=this._status;return this._status&Cc.IRQ&&this.irq(!1),this._status&=~Cc.IRQ,e}set status(e){this.reset()}irq(e){e?this._status|=Cc.IRQ:this._status&=~Cc.IRQ,this._extFuncs.interrupt(e)}buildConfigChange(){let e={};switch(this._control&wc.BAUD_RATE){case 0:e.baud=0;break;case 1:e.baud=50;break;case 2:e.baud=75;break;case 3:e.baud=109;break;case 4:e.baud=134;break;case 5:e.baud=150;break;case 6:e.baud=300;break;case 7:e.baud=600;break;case 8:e.baud=1200;break;case 9:e.baud=1800;break;case 10:e.baud=2400;break;case 11:e.baud=3600;break;case 12:e.baud=4800;break;case 13:e.baud=7200;break;case 14:e.baud=9600;break;case 15:e.baud=19200}switch(this._control&wc.WORD_LENGTH){case 0:e.bits=8;break;case 32:e.bits=7;break;case 64:e.bits=6;break;case 96:e.bits=5}if(e.stop=this._control&wc.STOP_BITS?2:1,e.parity=`none`,this._command&Tc.PARITY_EN)switch(this._command&Tc.PARITY_CNF){case 0:e.parity=`odd`;break;case 64:e.parity=`even`;break;case 128:e.parity=`mark`;break;case 192:e.parity=`space`}return e}serialConfigChange(e){let t=!1;(e.baud!=this._lastConfig.baud||e.baud>0)&&(t=!0),e.bits!=this._lastConfig.bits&&(t=!0),e.stop!=this._lastConfig.stop&&(t=!0),e.parity!=this._lastConfig.parity&&(t=!0),t&&(this._lastConfig=e,this._extFuncs.serialConfig(this._lastConfig))}reset(){this._control=wc.HW_RESET,this._command=Tc.HW_RESET,this._status=Cc.HW_RESET,this.irq(!1),this._receiveBuffer=[]}constructor(e){this._extFuncs=e,this._control=wc.HW_RESET,this._command=Tc.HW_RESET,this._status=Cc.HW_RESET,this._lastConfig=this.buildConfigChange(),this._lastRead=0,this._receiveBuffer=[],this.reset()}};let Dc=new Uint8Array([32,155,201,169,22,72,169,0,157,184,4,157,184,3,157,56,4,157,184,5,157,56,6,157,184,6,185,130,192,133,43,74,74,144,4,104,41,254,72,184,185,129,192,74,176,7,74,176,14,169,1,208,61,74,169,3,176,2,169,128,157,184,4,44,88,255,165,43,41,32,73,32,157,184,3,112,10,32,155,200,174,248,7,157,184,5,96,165,43,74,74,41,3,168,240,4,104,41,127,72,185,166,201,157,56,6,164,38,104,41,149,72,169,9,157,56,5,104,157,56,7,165,43,72,41,160,80,2,41,128,32,161,205,32,129,205,104,41,12,80,2,169,0,10,10,10,9,11,153,138,192,185,136,192,96,32,155,201,32,170,200,41,127,172,248,7,190,184,5,96,32,255,202,176,5,32,44,204,144,246,96,32,30,202,104,168,104,170,165,39,96,240,41,189,184,6,16,5,94,184,6,208,36,32,62,204,144,26,189,184,3,41,192,240,14,165,39,201,224,144,8,189,184,4,9,64,157,184,4,40,240,208,208,203,32,255,202,144,220,32,17,204,40,8,240,218,32,209,201,76,208,200,32,26,203,176,183,165,39,72,189,56,7,41,192,208,22,165,36,240,66,201,8,240,4,201,16,208,10,9,240,61,184,6,24,101,36,133,36,189,184,6,197,36,240,41,169,160,144,8,189,56,7,10,16,31,169,136,133,39,44,88,255,8,112,12,234,44,88,255,80,184,174,248,7,76,239,201,32,181,201,32,107,203,76,104,201,104,184,8,133,39,72,32,104,203,32,181,201,104,73,141,10,208,5,157,184,6,133,36,189,184,4,16,13,189,56,6,240,8,24,253,184,6,169,141,144,218,40,112,164,189,56,7,48,22,188,184,6,10,48,14,152,160,0,56,253,56,6,201,248,144,3,105,39,168,132,36,76,184,200,142,248,7,132,38,169,0,157,184,5,96,41,72,80,132,133,39,32,155,201,32,99,203,76,163,200,165,39,73,8,10,240,4,73,238,208,9,222,184,6,16,3,157,184,6,96,201,192,176,251,254,184,6,96,189,56,7,41,8,240,22,189,184,4,164,39,192,148,208,4,9,128,208,6,192,146,208,5,41,127,157,184,4,96,138,10,10,10,10,133,38,169,0,157,184,5,112,15,160,0,177,60,133,39,32,2,204,32,186,252,144,242,96,32,210,202,144,251,185,136,192,160,0,145,60,32,186,252,144,239,96,189,184,4,16,49,169,2,72,169,127,32,226,205,164,36,177,40,133,39,169,7,37,79,208,16,164,36,169,223,209,40,208,2,165,39,145,40,230,79,230,79,189,184,4,48,9,32,17,204,104,169,141,133,39,96,32,255,202,144,12,32,17,204,32,209,201,32,163,204,76,43,202,32,62,204,144,198,112,190,189,56,7,10,16,34,104,168,165,39,192,1,240,32,176,52,201,155,208,6,200,152,72,76,43,202,201,193,144,8,201,219,176,4,9,32,133,39,152,72,32,104,203,76,43,202,201,155,240,226,201,176,144,10,201,187,176,6,168,185,9,202,133,39,160,0,240,226,201,155,208,222,160,0,240,201,155,156,159,219,220,223,251,252,253,254,255,162,202,202,208,253,56,233,1,208,246,174,248,7,96,164,38,185,137,192,72,41,32,74,74,133,53,104,41,15,201,8,144,4,41,7,176,2,165,53,5,53,240,5,9,32,157,184,5,96,164,38,185,137,192,41,112,201,16,96,32,210,202,144,21,185,136,192,9,128,201,138,208,9,168,189,56,7,41,32,208,3,152,56,96,24,96,164,38,185,129,192,74,176,54,189,184,4,41,7,240,5,32,252,205,56,96,165,39,41,127,221,56,5,208,5,254,184,4,56,96,189,56,7,41,8,240,21,32,255,202,144,16,201,147,240,14,72,189,56,7,74,74,104,144,4,157,184,6,24,96,32,170,200,201,145,208,249,24,96,32,26,203,176,241,32,158,204,164,38,185,129,192,74,144,78,74,144,75,165,39,72,189,56,4,201,103,144,16,201,108,176,34,201,107,104,72,73,155,41,127,208,24,176,25,189,184,4,41,31,9,128,133,39,32,2,204,32,170,200,73,134,208,237,157,56,4,222,56,4,104,133,39,73,141,10,208,10,189,184,3,41,48,240,3,157,56,4,32,2,204,76,234,203,32,2,204,10,168,189,184,3,192,24,240,12,74,74,192,20,240,6,74,74,192,26,208,37,41,3,240,13,168,185,254,203,168,169,32,32,196,202,136,208,248,165,39,10,201,26,208,13,189,56,7,106,144,7,169,138,133,39,76,107,203,96,1,8,64,32,245,202,208,251,152,9,137,168,165,39,153,255,191,96,72,164,36,165,39,145,40,104,201,149,208,12,165,39,201,32,176,6,32,223,204,89,219,204,133,39,96,24,189,56,7,41,4,240,9,173,0,192,16,4,141,16,192,56,96,230,78,208,2,230,79,32,44,204,184,144,243,32,17,204,41,127,221,56,5,208,61,164,38,185,129,192,74,176,53,160,10,185,147,204,133,39,152,72,32,163,204,104,168,136,16,241,169,1,32,123,206,32,52,204,16,251,201,136,240,225,133,39,32,163,204,32,26,203,189,184,4,41,7,208,232,169,141,133,39,44,88,255,56,96,186,195,211,211,160,197,204,208,208,193,141,189,56,7,16,19,189,56,7,41,2,240,13,189,184,4,41,56,240,6,138,72,169,175,72,96,32,223,204,9,128,201,224,144,6,89,211,204,76,246,253,201,193,144,249,201,219,176,245,89,215,204,144,240,32,0,224,32,0,0,0,192,0,0,224,192,189,184,3,42,42,42,41,3,168,165,39,96,66,103,192,84,71,166,67,135,166,81,71,184,82,199,172,90,231,243,73,144,211,75,144,223,69,67,128,70,227,4,76,227,1,88,227,8,84,131,64,83,67,64,77,227,32,0,66,246,124,80,246,154,68,246,155,70,246,70,76,246,64,67,246,58,84,214,52,78,144,232,83,86,96,0,169,63,160,7,208,16,169,207,160,5,208,10,169,243,160,3,208,4,169,252,160,1,61,184,3,133,42,189,56,4,41,3,24,106,42,136,208,252,5,42,157,184,3,96,41,7,10,10,10,133,42,10,197,38,240,15,189,184,4,41,199,5,42,157,184,4,169,0,157,56,6,96,41,15,208,7,185,129,192,74,74,74,74,9,16,133,42,169,224,133,43,185,139,192,37,43,5,42,153,139,192,96,136,10,10,10,10,10,133,42,169,31,208,231,30,184,4,56,176,16,153,137,192,32,147,254,32,137,254,174,248,7,30,184,4,24,126,184,4,96,185,138,192,72,9,12,153,138,192,169,233,32,196,202,104,153,138,192,96,169,40,157,56,6,169,128,29,56,7,208,5,169,254,61,56,7,157,56,7,96,201,40,144,14,157,56,6,169,63,208,238,30,56,5,56,126,56,5,96,168,165,39,41,127,201,32,208,9,192,3,240,1,96,169,4,208,109,201,13,208,18,32,121,206,192,7,240,1,96,169,205,72,189,56,4,72,164,38,96,133,53,169,206,72,185,48,206,72,165,53,96,167,55,97,137,138,167,137,137,221,56,5,208,6,222,184,4,76,2,204,201,48,144,13,201,58,176,9,41,15,157,56,4,169,2,208,39,201,32,176,6,157,56,5,76,121,206,160,0,240,77,73,48,201,10,176,13,160,10,125,56,4,136,208,250,157,56,4,240,21,160,46,208,54,169,0,133,42,174,248,7,189,184,4,41,248,5,42,157,184,4,96,168,189,56,4,192,68,240,9,192,69,208,17,29,56,7,208,5,73,255,61,56,7,157,56,7,169,6,208,211,169,32,157,184,5,208,245,185,235,204,240,244,197,53,240,5,200,200,200,208,242,200,185,235,204,133,42,41,32,208,7,189,56,7,41,16,208,235,189,56,7,74,74,36,42,176,4,16,224,48,2,80,220,165,42,72,41,7,32,123,206,200,104,41,16,208,7,185,235,204,157,56,4,96,169,205,72,185,235,204,72,164,38,189,56,4,96,194,44,88,255,112,12,56,144,24,184,80,6,1,49,142,148,151,154,133,39,134,53,138,72,152,72,8,120,141,255,207,32,88,255,186,189,0,1,141,248,7,170,10,10,10,10,133,38,168,40,80,41,30,56,5,94,56,5,185,138,192,41,31,208,5,169,239,32,5,200,228,55,208,11,169,7,197,54,240,5,133,54,24,144,8,228,57,208,249,169,5,133,56,189,56,7,41,2,8,144,3,76,191,200,189,184,4,72,10,16,14,166,53,165,39,9,32,157,0,2,133,39,174,248,7,104,41,191,157,184,4,40,240,6,32,99,203,76,181,200,76,252,200,32,0,200,162,0,96,76,155,200,76,170,201,74,32,155,201,176,8,32,245,202,240,6,24,144,3,32,210,202,189,184,5,170,96,162,3,181,54,72,202,16,250,174,248,7,189,56,6,133,54,189,184,4,41,56,74,74,74,9,192,133,55,138,72,165,39,72,9,128,32,237,253,104,133,39,104,141,248,7,170,10,10,10,10,133,38,141,255,207,165,54,157,56,6,162,0,104,149,54,232,224,4,144,248,174,248,7,96,193,208,208,204,197,8]),Oc=1,kc,Ac=e=>{Er(Oc,e)},jc=e=>{console.log(`SerialConfig: `,e),S_(e)},Mc=[],Nc=()=>{if(!kc||Mc.length===0)return;let e=16-kc.rxCount;e>0&&kc.buffer(new Uint8Array(Mc.splice(0,e)))},Pc=e=>{kc&&(Mc.push(...e),Nc())},Fc=()=>{Mc.length=0,kc&&kc.reset()},Ic=(e=!0,t=1)=>{if(!e)return;Oc=t,kc=new Ec({sendData:__,interrupt:Ac,serialConfig:jc});let n=new Uint8Array(Dc.length+256);n.set(Dc.slice(1792,2048)),n.set(Dc,256),Yi(Oc,n),qi(Oc,Lc)},Lc=(e,t=-1)=>{if(e>=49408)return-1;let n={DIPSW1:1,DIPSW2:2,IOREG:8,STATUS:9,COMMAND:10,CONTROL:11};switch(e&15){case n.DIPSW1:return 226;case n.DIPSW2:return 40;case n.IOREG:if(t>=0)kc.data=t;else{let e=kc.data;return Nc(),e}break;case n.STATUS:if(t>=0)kc.status=t;else return kc.status;break;case n.COMMAND:if(t>=0)kc.command=t;else return kc.command;break;case n.CONTROL:if(t>=0)kc.control=t;else return kc.control;break;default:console.log(`SSC unknown softswitch`,(e&15).toString(16))}return-1},Rc=(e,t)=>String(e).padStart(t,`0`);(()=>{let e=new Uint8Array(256).fill(96);return e[0]=8,e[2]=40,e[4]=88,e[6]=112,e})();let zc=()=>{let e=new Date,t=Rc(e.getMonth()+1,2)+`,`+Rc(e.getDay(),2)+`,`+Rc(e.getDate(),2)+`,`+Rc(e.getHours(),2)+`,`+Rc(e.getMinutes(),2);for(let e=0;e<t.length;e++)A(512+e,t.charCodeAt(e)|128)},Bc=49286,Vc=49289,Hc=49291,Uc=49292,Wc=49293,Gc=49294,Kc=49295,qc=(e,t,n,r,i)=>{let a=e&255,o=e>>8&3,s=t&255,c=t>>8&3;j(n,a),j(r,o<<4|c),j(i,s)},Jc=(e,t,n)=>{let r=ta(e),i=ta(t),a=ta(n),o=i>>4&3,s=i&3;return[r|o<<8,a|s<<8]},Yc=()=>Jc(Vc,Hc,Uc),Xc=()=>Jc(Wc,Gc,Kc),Zc=(e,t)=>{qc(e,t,Vc,Hc,Uc)},Qc=(e,t)=>{qc(e,t,Wc,Gc,Kc)},$c=e=>{j(Bc,e),h_(!!e)},el=()=>{tl=0,nl=0,Zc(0,1023),Qc(0,1023),$c(0),il=0,al=0,ol=0,sl=0,cl=0,ll=0,ul=0,dl=0,rl=0},tl=0,nl=0,rl=0,il=0,al=0,ol=0,sl=0,cl=0,ll=0,ul=0,dl=0,fl=0,pl=5,ml=()=>{let e=new Uint8Array(256).fill(0),t=Ks(0,`
Cx00	php	        ; BASIC entry (handled in JS)  This will only work for mouse
Cx01	sei         ; Clock bytes required as above.
Cx02	plp
Cx03	rts
Cx04	db $00      ; $58 = Clock, disabled because it breaks A2osX https://github.com/ct6502/apple2ts/issues/67
Cx05	db $38      ; Pascal ID Byte
Cx06	db $70      ; Clock
Cx07	db $18      ; Pascal ID Byte
Cx08	rts         ; Clock Read Method - handled by JS
Cx09	db $00
Cx0a	db $00
Cx0b	db $01      ; Pascal Generic Signature  / Clock Write (method & value ignored)
Cx0c	db $20      ; $2x = Pascal XY Pointing Device, ID=x0 apple mouse
Cx0d	rts         ; init pascal (for clock need an RTS here)  could move methods to offset 60
Cx0e	db <PASCAL  ; read
Cx0f	db <PASCAL  ; write
Cx10	db <PASCAL  ; status
Cx11	db $00      ; Pascal optional routines follow
;
Cx12    db <SETMOUSE          ; $39
Cx13    db <SERVEMOUSE        ; $47
Cx14    db <READMOUSE         ; $C7
Cx15    db <CLEARMOUSE        ; $D7
Cx16    db <POSMOUSE          ; $BB
Cx17    db <CLAMPMOUSE        ; $A3
Cx18    db <HOMEMOUSE         ; $DF
Cx19    db <INITMOUSE         ; $E6
Cx1a    db <GETCLAMP          ; $26
Cx1b    db <UNDOCUMENTED      ; $22 applemouse has methods here
Cx1c    db <TIMEDATA          ; $24
Cx1d    db <UNDOCUMENTED      ; $22 not sure if some will call them 
Cx1e    db <UNDOCUMENTED      ; $22
Cx1f    db <UNDOCUMENTED      ; $22
;
; All methods (except SERVEMOUSE) entered with X = Cn, Y = n0
; 
; The interrupt status byte is defined as follows:
; 
; Bit 7 6 5 4 3 2 1 0
;     | | | | | | | |
;     | | | | | | | +---  Previously, button 1 was up (0) or down (1)
;     | | | | | | +-----  Movement interrupt
;     | | | | | +-------  Button 0/1 interrupt
;     | | | | +---------  VBL interrupt
;     | | | +-----------  Currently, button 1 is up (0) or down (1)
;     | | +-------------  X/Y moved since last READMOUSE
;     | +---------------  Previously, button 0 was up (0) or down (1)
;     +-----------------  Currently, button 0 is up (0) or down (1)
; 
; (Button 1 is not physically present on the mouse, and is probably only
; supported for an ADB mouse on the IIgs.)
; 
; The mode byte is defined as follows.
; 
; Bit 7 6 5 4 3 2 1 0
;     | | | | | | | |
;     | | | | | | | +---  Mouse off (0) or on (1)
;     | | | | | | +-----  Interrupt if mouse is moved
;     | | | | | +-------  Interrupt if button is pressed
;     | | | | +---------  Interrupt on VBL
;     | | | +-----------  Reserved
;     | | +-------------  Reserved
;     | +---------------  Reserved
;     +-----------------  Reserved
; 

SLOWX   EQU $0478-$c0 ; + Cs        Low byte of absolute X position
SLOWY   EQU $04F8-$c0 ; + Cs        Low byte of absolute Y position
SHIGHX  EQU $0578-$c0 ; + Cs        High byte of absolute X position
SHIGHY  EQU $05F8-$c0 ; + Cs        High byte of absolute Y position
STEMPA  EQU $0678-$c0 ; + Cs        Reserved and used by the firmware
STEMPB  EQU $06F8-$c0 ; + Cs        Reserved and used by the firmware
SBUTTON EQU $0778-$c0 ; + Cs        Button 0/1 interrupt status byte
SMODE   EQU $07F8-$c0 ; + Cs        Mode byte

LOWX   EQU $C081 ; + $s0        Low byte of absolute X position
HIGHX  EQU $C082 ; + $s0        High byte of absolute X position
LOWY   EQU $C083 ; + $s0        Low byte of absolute Y position
HIGHY  EQU $C084 ; + $s0        High byte of absolute Y position
BUTTON EQU $C085 ; + $s0        Button 0/1 interrupt status byte
MODE   EQU $C086 ; + $s0        Mode byte
CLAMP  EQU $C087 ; + $s0        Clamp value

CMD    EQU $C08A ; + $s0         Command reg
INIT   EQU $0    ;               initialize
READ   EQU $1    ;               read mouse and update regs, clear ints
CLEAR  EQU $2    ;               clear mouse and update regs, clear ints
GCLAMP EQU $3    ;               get mouse clamping
SERVE  EQU $4    ;               check/serve mouse int
HOME   EQU $5    ;               set to clamping window upper left
CLAMPX EQU $6    ;               clamp x values to x -> y
CLAMPY EQU $7    ;               clamp y values to x -> y
POS    EQU $8    ;               set positions
UNDOC  EQU $9    ;               calling an undocumented entry

PASCAL
    ldx #$03        ; return error for pascal

UNDOCUMENTED        ; $Cn22
    sec
    rts
                    ; Technote #2
TIMEDATA            ; $Cn24, A bit 0: 1 - 50hz, 0 = 60hz VBL
    clc
    rts
                    ; Technote #7
                    ; Return 8 clamping bytes one at a time to $578
GETCLAMP            ; $Cn26
    lda $478        ; index byte, starting at $4E according to technote
    sta CLAMP,y     ; indicates which byte in the order we want
    lda #GCLAMP
    sta CMD,y
    lda CLAMP,y
    sta $578
    clc             ; In this order: minXH, minYH, minXL, minYL
    rts             ;                maxXH, maxYH, maxXL, maxYL

SETMOUSE            ; $C039
    cmp #$10
    bcs return      ; invalid
    sta MODE,y      ; set mode
    lda MODE,y      ; reread to ensure valid
    sta SMODE,x
return 
    rts

SERVEMOUSE          ; $Cn47
    ldy $06
    lda #$60
    sta $06
    jsr $0006       ; start by finding our slot - not entered with X,Y set
    sty $06
    tsx
    lda $100,x
    tax             ; X = Cs
    asl
    asl
    asl
    asl
    tay             ; Y = s0

    lda #SERVE
    sta CMD,y

    lda BUTTON,y 
    and #$0e
    sec
    beq return      ; exit without changing anything

    ora SBUTTON,x
    sta SBUTTON,x
    clc             ; claim it
    rts

copyin 
    lda SLOWX,x
    sta LOWX,y
    lda SLOWY,x
    sta LOWY,y
    lda SHIGHX,x
    sta HIGHX,y
    lda SHIGHY,x
    sta HIGHY,y
    rts

copyout 
    lda LOWX,y
    sta SLOWX,x
    lda LOWY,y
    sta SLOWY,x
    lda HIGHX,y
    sta SHIGHX,x
    lda HIGHY,y
    sta SHIGHY,x
    rts

CLAMPMOUSE          ; $CnA3
    and #$1
    sta STEMPA,x
    phx
    phx
    ldx #$c0        ; note load from screen hole 0, not slot

    lda <cmcont-1
    pha
    bra copyin

cmcont 
    plx
    lda #CLAMPX     ; A = 1 for Y
    ora STEMPA,x
    sta CMD,y
    rts

POSMOUSE            ; $CnBB
    phx
    lda <pmcont-1
    pha
    bra copyin

pmcont 
    lda #POS
    sta CMD,y
    rts

READMOUSE           ; $CnC7
    lda #READ
    sta CMD,y

    lda BUTTON,y
    and #$F1        ; mask off interrupts
    sta SBUTTON,x
    clc
    bra copyout

CLEARMOUSE          ; $CnD7
    lda #CLEAR
    sta CMD,y
    clc
    bra copyout

HOMEMOUSE           ; $CnDF
    lda #HOME
    sta CMD,y
    clc
    rts

INITMOUSE           ; $CnE6
    lda #INIT
    sta CMD,y
    lda MODE,y
    sta SMODE,x
    bra READMOUSE   ; Ends at $CnF2

    ; should leave about 13 bytes
`.split(`
`));return e.set(t,0),e[251]=214,e[255]=1,e},hl=(e=!0,t=5)=>{if(!e)return;pl=t;let n=49152+pl*256,r=49152+pl*256+8;Yi(pl,ml(),n,wl),Yi(pl,ml(),r,zc),qi(pl,Dl),Bc=49280+(Bc&15)+pl*16,Vc=49280+(Vc&15)+pl*16,Hc=49280+(Hc&15)+pl*16,Uc=49280+(Uc&15)+pl*16,Wc=49280+(Wc&15)+pl*16,Gc=49280+(Gc&15)+pl*16,Kc=49280+(Kc&15)+pl*16;let[i,a]=Yc();i===0&&a===0&&(Zc(0,1023),Qc(0,1023)),ta(Bc)!==0&&h_(!0),Zo(pl,`mouse`,Sl,e=>Cl(e))},gl=()=>{let e=ta(Bc);if(e&1){let t=!1;e&8&&(dl|=8,t=!0),e&al&4&&(dl|=4,t=!0),e&al&2&&(dl|=2,t=!0),t&&Er(pl,!0)}},_l=e=>{if(ta(Bc)&1)if(e.buttons>=0){switch(e.buttons){case 0:il&=-129;break;case 16:il|=128;break;case 1:il&=-17;break;case 17:il|=16}al|=il&128?4:0}else{if(e.x>=0&&e.x<=1){let[t,n]=Yc();tl=Math.round((n-t)*e.x+t),al|=2}if(e.y>=0&&e.y<=1){let[t,n]=Xc();nl=Math.round((n-t)*e.y+t),al|=2}}},vl=0,yl=``,bl=0,xl=0,Sl=()=>({mousex:tl,mousey:nl,clampidx:rl,bstatus:il,istatus:al,lastbstatus:ol,lastmousex:sl,lastmousey:cl,tmpmousex:ll,tmpmousey:ul,servestatus:dl,command:fl,basicPos:vl,basicString:yl,CSWHSave:bl,CSWLSave:xl}),Cl=e=>{({mousex:tl,mousey:nl,clampidx:rl,bstatus:il,istatus:al,lastbstatus:ol,lastmousex:sl,lastmousey:cl,tmpmousex:ll,tmpmousey:ul,servestatus:dl,command:fl,basicPos:vl,basicString:yl,CSWHSave:bl,CSWLSave:xl}=e),h_(ta(Bc)!==0),Er(pl,dl!==0)},wl=()=>{let e=192+pl;k(55,!1)===e&&k(54,!1)===0?El():k(57,!1)===e&&k(56,!1)===0&&Tl()},Tl=()=>{if(vl===0){let e=192+pl;bl=k(55,!1),xl=k(54,!1),A(55,e),A(54,3);let t=(il&128)!=(ol&128),n=0;n=il&128?t?2:1:t?3:4,k(49152)&128&&(n=-n),ol=il,yl=tl.toString()+`,`+nl.toString()+`,`+n.toString()}vl>=yl.length?(M.Accum=141,vl=0,A(55,bl),A(54,xl)):(M.Accum=yl.charCodeAt(vl)|128,vl++)},El=()=>{switch(M.Accum){case 128:console.log(`mouse off`),$c(0);break;case 129:console.log(`mouse on`),$c(1)}},Dl=(e,t)=>{if(e>=49408)return-1;let n=t<0,r={CLOCK:0,LOWX:1,HIGHX:2,LOWY:3,HIGHY:4,STATUS:5,MODE:6,CLAMP:7,CLOCKMAGIC:8,COMMAND:10},i={INIT:0,READ:1,CLEAR:2,GCLAMP:3,SERVE:4,HOME:5,CLAMPX:6,CLAMPY:7,POS:8};switch(e&15){case r.LOWX:if(n)return tl&255;ll=ll&65280|t,ll&=65535;break;case r.HIGHX:if(n)return tl>>8&255;ll=t<<8|ll&255,ll&=65535;break;case r.LOWY:if(n)return nl&255;ul=ul&65280|t,ul&=65535;break;case r.HIGHY:if(n)return nl>>8&255;ul=t<<8|ul&255,ul&=65535;break;case r.STATUS:return il;case r.MODE:if(n)return ta(Bc);$c(t);break;case r.CLAMP:if(n){let[e,t]=Yc(),[n,r]=Xc();switch(rl){case 0:return e>>8&255;case 1:return n>>8&255;case 2:return e&255;case 3:return n&255;case 4:return t>>8&255;case 5:return r>>8&255;case 6:return t&255;case 7:return r&255;default:return console.log(`AppleMouse: invalid clamp index: `+rl),0}}rl=78-t;break;case r.CLOCK:case r.CLOCKMAGIC:return console.log(`clock registers not implemented: C080, C088`),0;case r.COMMAND:if(n)return fl;switch(fl=t,t){case i.INIT:tl=0,nl=0,sl=0,cl=0,Zc(0,1023),Qc(0,1023),il=0,al=0;break;case i.READ:al=0,il&=-112,il|=ol>>1&64,il|=ol>>4&1,ol=il,(sl!==tl||cl!==nl)&&(il|=32,sl=tl,cl=nl);break;case i.CLEAR:console.log(`cmd.clear`),tl=0,nl=0,sl=0,cl=0;break;case i.SERVE:il&=-15,il|=dl,dl=0,Er(pl,!1);break;case i.HOME:{let[e]=Yc(),[t]=Xc();tl=e,nl=t}break;case i.CLAMPX:{let e=ll>32767?ll-65536:ll,t=ul;Zc(e,t),console.log(e+` -> `+t)}break;case i.CLAMPY:{let e=ll>32767?ll-65536:ll,t=ul;Qc(e,t),console.log(e+` -> `+t)}break;case i.GCLAMP:console.log(`cmd.getclamp`);break;case i.POS:tl=ll,nl=ul}break;default:console.log(`AppleMouse unknown IO addr`,e.toString(16))}return t},Ol={RX_FULL:1,TX_EMPTY:2,DCD:4,CTS:8,FE:16,OVRN:32,PE:64,IRQ:128},kl={COUNTER_DIV:3,WORD_SEL:28,TX_RTS:96,RX_INT_ENABLE:128},Al={DIV01:0,DIV16:1,DIV64:2,RESET:3},jl={RTS_NO_INT:0,RTS_TX_INT:32,RTS_CLEAR:64,RTS_BREAK:96};var Ml=class{update(e){(this._status&Ol.TX_EMPTY)===0&&(this._outDelay+=e,this._outDelay>320&&(this._outDelay=0,this._status|=Ol.TX_EMPTY,(this._control&kl.TX_RTS)===jl.RTS_TX_INT&&this.irq(!0)))}buffer(e){for(let t=0;t<e.length;t++)this._receiveBuffer.push(e[t]);let t=this._receiveBuffer.length-16;t=t<0?0:t;for(let e=0;e<t;e++)this._receiveBuffer.shift(),this._status|=Ol.OVRN;this._status|=Ol.RX_FULL,this._control&kl.RX_INT_ENABLE&&this.irq(!0)}set data(e){let t=new Uint8Array(1).fill(e);this._extFuncs.sendData(t),this._status&=~Ol.TX_EMPTY,this._outCount++}get data(){return this._receiveBuffer.length&&(this._lastRead=this._receiveBuffer.shift()),this._status&=~(Ol.DCD|Ol.FE|Ol.OVRN|Ol.PE),this._receiveBuffer.length?(this._status|=Ol.RX_FULL,this._control&kl.RX_INT_ENABLE&&this.irq(!0)):(this._status&=~Ol.RX_FULL,this.irq(!1)),this._lastRead}set control(e){this._control,this._control=e,(this._control&kl.COUNTER_DIV)===Al.RESET?this.reset():(this._control&kl.TX_RTS)==jl.RTS_TX_INT&&(this._status&=~Ol.TX_EMPTY),this._status&Ol.RX_FULL&&this._control&kl.RX_INT_ENABLE&&this.irq(!0)}get status(){let e=this._status;return this._status&Ol.IRQ&&this.irq(!1),e}irq(e){e?this._status|=Ol.IRQ:this._status&=~Ol.IRQ,this._extFuncs.interrupt(e)}reset(){this._control=0,this._status=Ol.TX_EMPTY|Ol.DCD,this.irq(!1),this._receiveBuffer=[],this._outCount=0,this._outDelay=0}constructor(e){this._extFuncs=e,this._lastRead=0,this._control=0,this._status=0,this._receiveBuffer=[],this._outCount=0,this._outDelay=0,this.reset()}};let Nl={OUTPUT_ENABLE:128,IRQ_ENABLE:64,COUNTER_MODE:56,BIT8_MODE:4,INTERNAL_CLOCK:2,SPECIAL:1},Pl={TIMER1_IRQ:1,TIMER2_IRQ:2,TIMER3_IRQ:4,ANY_IRQ:128},Fl=(e,t)=>{let n=``;if(t&Nl.OUTPUT_ENABLE?n+=`OE   `:n+=`/OE  `,t&Nl.IRQ_ENABLE?n+=`IRQ  `:n+=`/IRQ `,t&Nl.BIT8_MODE?n+=`D8BIT `:n+=`16BIT `,t&Nl.INTERNAL_CLOCK?n+=`ICLK `:n+=`ECLK `,t&Nl.SPECIAL)switch(e){case 0:n+=`RST  `;break;case 1:n+=`WR0  `;break;case 2:n+=`DIV8 `;break}else switch(e){case 0:n+=`RUN  `;break;case 1:n+=`WR2  `;break;case 2:n+=`DIV1 `;break}switch(n+=`-> `,t&Nl.COUNTER_MODE){case 0:n+=`CONTINUOUS0`;break;case 8:n+=`FREQUENCY_CMP0`;break;case 16:n+=`CONTINUOUS1`;break;case 24:n+=`PULSE_WIDTH_CMP0`;break;case 32:n+=`SINGLE_SHOT0`;break;case 40:n+=`FREQUENCY_CMP1`;break;case 48:n+=`SINGLE_SHOT1`;break;case 56:n+=`PULSE_WIDTH_CMP1`}return n};var Il=class{decrement(e){return this._enabled?(this._count-=e,this._count<0&&(this._count=65535,this._enabled=!1,!0)):!1}get count(){return this._count}set control(e){this._control=e}get control(){return this._control}set latch(e){switch(this._latch=e,this._control&Nl.COUNTER_MODE){case 0:case 32:this.reload()}}get latch(){return this._latch}reload(){this._count=this._latch,this._enabled=!0}reset(){this._latch=65535,this._control=0,this._enabled=!0,this.reload()}constructor(){this._latch=65535,this._count=65535,this._control=0,this._enabled=!0}},Ll=class{status(){return this._statusRead=this._status&7,this._status}timerControl(e,t){e===0&&(e=this._timer[1].control&Nl.SPECIAL?0:2);let n=this._timer[e].control;if(this._timer[e].control=t,n!=t&&(t&Nl.IRQ_ENABLE?this._irqMask|=1<<e:this._irqMask&=~(1<<e),e==0))switch((n&Nl.SPECIAL)<<1|t&Nl.SPECIAL){case 0:case 3:break;case 1:case 2:this._timer[0].reload(),this._timer[1].reload(),this._timer[2].reload(),this.irq(0,!1),this.irq(1,!1),this.irq(2,!1)}}timerLSBw(e,t){let n=this._timer[0].control&Nl.SPECIAL,r=!1;switch(this._timer[e].control&Nl.COUNTER_MODE){case 16:case 48:r=!0}let i=this._msb*256+t;this._timer[e].latch=i,(n||r)&&this._timer[e].reload(),this.irq(e,!1)}timerLSBr(e){return this._lsb}timerMSBw(e,t){this._msb=t}timerMSBr(e){let t=this._timer[0].control&Nl.SPECIAL?this._timer[e].latch:this._timer[e].count;return this._lsb=t&255,this._statusRead&1<<e&&(this._statusRead&=~(1<<e),this.irq(e,!1)),t>>8&255}update(e){let t=this._timer[0].control&Nl.SPECIAL;if(this._debugStatus&&(this._debugStatusCount++,this._debugStatusCount>1020300&&(this._debugStatusCount=0,this.printStatus())),!t){this._div8+=e;let t=!1;for(let n=0;n<3;n++){let r=e;if(n==2&&this._timer[2].control&Nl.SPECIAL)if(this._div8>8)r=Math.floor(this._div8/8),this._div8%=8;else continue;if(t=this._timer[n].decrement(r),t)switch(this.irq(n,!0),this._timer[n].control&Nl.COUNTER_MODE){case 0:case 16:this._timer[n].reload()}}}}irq(e,t){let n=1<<e;t?this._status|=n:this._status&=~n,this._status&this._irqMask?(this._status|=Pl.ANY_IRQ,this._statusRead&=~n,this._interrupt(!0)):(this._status&=~Pl.ANY_IRQ,this._interrupt(!1))}printStatus(){console.log(`Status : `+this._status.toString(16)),console.log(`IRQMask: `+this._irqMask.toString(16));for(let e=0;e<3;e++)console.log(`[`+e+`]: `+Fl(e,this._timer[e].control)+` : `+this._timer[e].latch+` : `+this._timer[e].count)}reset(){this._timer.forEach(e=>{e.reset()}),this._status=0,this._irqMask=0,this.irq(0,!1),this.irq(1,!1),this.irq(2,!1),this._timer[0].control=Nl.SPECIAL}constructor(e){this._interrupt=e,this._status=0,this._irqMask=0,this._statusRead=0,this._timer=[new Il,new Il,new Il],this._msb=this._lsb=0,this._div8=0,this._debugStatus=!1,this._debugStatusCount=0,this.reset()}};let Rl=2,zl,Bl,Vl=0,Hl=e=>{if(Vl){let e=M.cycleCount-Vl;zl.update(e),Bl.update(e)}Vl=M.cycleCount},Ul=e=>{Er(Rl,e)},Wl=e=>{Bl&&Bl.buffer(e)},Gl=(e=!0,t=2)=>{e&&(Rl=t,zl=new Ll(Ul),Bl=new Ml({sendData:v_,interrupt:Ul}),qi(Rl,ql),Ar(Hl,Rl))},Kl=()=>{zl&&(zl.reset(),Bl.reset())},ql=(e,t=-1)=>{if(e>=49408)return-1;let n={TCONTROL1:0,TCONTROL2:1,T1MSB:2,T1LSB:3,T2MSB:4,T2LSB:5,T3MSB:6,T3LSB:7,ACIASTATCTRL:8,ACIADATA:9,SDMIDICTRL:12,SDMIDIDATA:13,DRUMSET:14,DRUMCLEAR:15},r=-1;switch(e&15){case n.SDMIDIDATA:case n.ACIADATA:t>=0?Bl.data=t:r=Bl.data;break;case n.SDMIDICTRL:case n.ACIASTATCTRL:t>=0?Bl.control=t:r=Bl.status;break;case n.TCONTROL1:t>=0?zl.timerControl(0,t):r=0;break;case n.TCONTROL2:t>=0?zl.timerControl(1,t):r=zl.status();break;case n.T1MSB:t>=0?zl.timerMSBw(0,t):r=zl.timerMSBr(0);break;case n.T1LSB:t>=0?zl.timerLSBw(0,t):r=zl.timerLSBr(0);break;case n.T2MSB:t>=0?zl.timerMSBw(1,t):r=zl.timerMSBr(1);break;case n.T2LSB:t>=0?zl.timerLSBw(1,t):r=zl.timerLSBr(1);break;case n.T3MSB:t>=0?zl.timerMSBw(2,t):r=zl.timerMSBr(2);break;case n.T3LSB:t>=0?zl.timerLSBw(2,t):r=zl.timerLSBr(2);break;case n.DRUMSET:case n.DRUMCLEAR:break;default:console.log(`PASSPORT unknown IO`,(e&15).toString(16))}return r},Jl=!1,Yl=!1,Xl=!1,Zl=255,Ql=255,$l=0,eu=!1,tu=!1,nu=!0,ru=!1,iu=!1,au=null,ou=``,H=new Uint8Array(515),su=0,cu=0,lu=0,uu=new Uint8Array(1),du=0,fu=0,pu=!1,mu,hu=!1,gu=!1,_u=0,vu=null,yu=0,bu=()=>{yu=Date.now(),vu&&vu(wu())},xu=()=>{Date.now()-yu>=100&&bu()},Su=e=>{vu=e},Cu=()=>_u,wu=()=>({attached:eu&&au!==null,name:ou,size:au?au.length:0,lba:mu,writeProtected:hu,hasChanges:gu}),Tu=e=>{hu=e,bu()},Eu=e=>{(e===void 0||e===_u)&&(gu=!1,bu())},Du=()=>au,Ou=()=>{su=0,lu=0,uu=null,du=0,fu=0,iu=!1,tu=!1,Yl=!1,Zl=255,Ql=255,nu=!0,ru=!1,pu=!1,Jl=!1,Xl=!1,$l=0},ku=(e,t=`sd.img`)=>{Ru(),e&&e.length>0&&(au=e,ou=t,eu=!0,gu=!1,hu=!1,mu=void 0,_u=0,console.log(`[VERA SD] Attached image '${t}' (${e.length} bytes, ${Math.floor(e.length/512)} sectors)`),bu())},Au=()=>{Ru()},ju=()=>{Ou()},Mu=e=>{Yl&&($l+=e*12,$l>=10&&(Yl=!1,Ql=eu&&au?Ku(Zl):255))},Nu=e=>{switch(e){case 0:return Xl&&Jl&&!Yl&&(Zl=255,Yl=!0,$l=0),Ql;case 1:return!!Yl<<7|!!Xl<<2|!!Jl}return 0},Pu=(e,t)=>{switch(e){case 0:Jl&&!Yl&&(Zl=t,Yl=!0,$l=0);break;case 1:+!!Jl!=(t&1)&&(Jl=!!(t&1),Jl&&zu(Jl)),Xl=!!(t&4)}},Fu=()=>au?au.length:0,Iu=(e,t)=>{if(!au)return!1;let n=e*512;return n+512>au.length?!1:(t.set(au.subarray(n,n+512)),!0)},Lu=(e,t)=>{if(!au||hu)return!1;let n=e*512;return n+512>au.length?!1:(au.set(t.subarray(0,512),n),_u++,gu||(gu=!0,bu()),!0)},Ru=()=>{Ou(),(eu||au)&&(au=null,ou=``,eu=!1,gu=!1,hu=!1,mu=void 0,console.log(`[VERA SD] Detached image`),bu())},zu=e=>{pu=e,su=0},Bu=()=>{let e=new Uint8Array([255,255,0,255,254,64,14,0,50,91,89,0,0,0,0,127,128,10,64,0,1]),t=(Fu()>>19)-1;e[12]|=t>>16&63,e[13]=t>>8&255,e[14]=t&255,uu=e,du=21},Vu=()=>{uu=new Uint8Array([+!!nu]),du=1},Hu=()=>{if(ru){let e=new Uint8Array([0,0]);uu=e,du=e.length}else{let e=new Uint8Array([31,255]);uu=e,du=e.length}},Uu=()=>{let e=new Uint8Array([+!!nu,192,255,128,0]);uu=e,du=e.length},Wu=()=>{let e=new Uint8Array([1,0,0,1,170]);uu=e,du=e.length},Gu=e=>(e[0]=254,cu*512>=Fu()?(e[0]=8,1):(Iu(cu,e.subarray(1,513)),e[513]=255,e[514]=255,515)),Ku=e=>{if(!pu||!eu||!au)return 255;let t=255;if(su==0&&e==255){if(uu&&(t=uu[fu++],fu==du))if(iu){let e=new Uint8Array(515);cu++,mu=cu,xu(),du=Gu(e),du==1&&(iu=!1,bu()),uu=e,fu=0}else uu=null,iu=!1,bu()}else if(H[su++]=e,(H[0]&192)==64&&su==6){if(su=0,(H[0]&192)!=64)return uu=null,255;switch(H[0]&=63,tu&&=(H[0]|=128,!1),lu=H[0],H[0]){case 0:nu=!0,Vu();break;case 8:Wu();break;case 9:Bu();break;case 169:nu=!1,ru=!0,Vu();break;case 12:iu=!1,bu(),Vu();break;case 13:Hu();break;case 16:Vu();break;case 18:{iu=!0,cu=(H[1]<<24|H[2]<<16|H[3]<<8|H[4])>>>0,mu=cu,bu();let e=new Uint8Array(516);e[0]=0,du=1+Gu(e.subarray(1)),du==2&&(iu=!1),uu=e;break}case 17:{cu=(H[1]<<24|H[2]<<16|H[3]<<8|H[4])>>>0,mu=cu,bu();let e=new Uint8Array(516);e[0]=0,du=1+Gu(e.subarray(1)),du==2&&(iu=!1),uu=e;break}case 24:cu=(H[1]<<24|H[2]<<16|H[3]<<8|H[4])>>>0,mu=cu,bu(),su>4&&cu*512>=Fu()?(uu=new Uint8Array([0,8]),du=2):Vu();break;case 55:tu=!0,Vu();break;case 58:Uu();break;default:Vu()}fu=0}else if(su==515&&(su=0,lu==24&&H[0]==254&&cu*512<Fu())){let e=Lu(cu,H.subarray(1,513));uu=new Uint8Array([e?5:13]),du=1,fu=0}return t},qu=new Uint8Array(4096),Ju=0,Yu=0,Xu=0,Zu=0,Qu=0,$u=!1,ed=new Uint8Array([0,1,2,3,4,5,6,8,11,14,18,23,30,38,49,64]),td=0,nd=0,rd=0,id=()=>{Ju=0,Yu=0,Xu=0},ad=()=>{Yu=0,Xu=Ju},od=()=>{id(),Zu=0,Qu=0,td=0,nd=0,rd=0},sd=e=>{(e&192)==192?$u=!0:($u=!1,e&128&&id()),e&64&&ad(),Zu=e&63},cd=()=>{let e=Zu;return Xu==4095&&(e|=128),Xu==0&&(e|=64),e},ld=e=>{Qu=e>128?256-e:e},ud=()=>Qu,dd=e=>{Xu<4095&&(qu[Ju++]=e,Ju==4096&&(Ju=0),Xu++)},fd=()=>{let e=0;return Xu==0?0:(e=qu[Yu++],Yu==4096&&(Yu=0),Xu--,e)},pd=()=>Xu<1024,md=(e,t)=>{let n=0;for(;t--;){let t=rd;if(rd+=Qu,rd&=255,(t&128)!=(rd&128))if(Xu==0)td=0,nd=0;else{switch(Zu>>4&3){case 0:td=fd()<<8<<16>>16,nd=td;break;case 1:Xu<2?(Xu=0,Yu=Ju):(td=fd()<<8<<16>>16,nd=fd()<<8<<16>>16);break;case 2:Xu<2?(Xu=0,Yu=Ju):(td=(fd()|fd()<<8)<<16>>16,nd=td);break;case 3:Xu<4?(Xu=0,Yu=Ju):(td=(fd()|fd()<<8)<<16>>16,nd=(fd()|fd()<<8)<<16>>16)}$u&&Xu==0&&ad()}e[n++]=Math.trunc(td*ed[Zu&15]/64),e[n++]=Math.trunc(nd*ed[Zu&15]/64)}},hd=console.log,gd=2**53-1,_d=-(2**53-1),vd=(e,t)=>e>t?e:t,yd=1024,bd=0,xd=0,Sd=new Int16Array(yd*2),Cd=()=>{let e=M.cycleCount-bd;if(e<=0){bd=M.cycleCount;return}let t=xd+e*48828.125/1e6,n=Math.trunc(t);for(xd=t-n,bd=M.cycleCount;n>0;){let e=Math.min(n,yd);md(Sd,e),n-=e}},wd=new Uint8Array(131072),Td=new Uint8Array(512),Ed=Array(128).fill(null).map(()=>new Uint8Array(8)),U=new Uint32Array(2),Dd=new Uint8Array(2),Od=new Uint8Array(2),W=0,kd=0,Ad=0,jd=0,Md=0,Nd=[,,].fill(null).map(()=>new Uint8Array(7)),G=new Uint8Array(256),Pd=[,,].fill(null).map(()=>new Uint8Array(256)),Fd=[,,].fill(null).map(()=>new Uint8Array(640)),Id=new Uint8Array(640),Ld=new Uint8Array(640),Rd=new Uint8Array(640),zd=0,Bd=new Uint8Array(2),Vd=new Uint8Array(2),Hd=!1,Ud=!1,Wd,Gd,Kd,K,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf=new Uint8Array(2),hf=new Uint8Array(2),q=new Uint8Array(4),gf,_f=new Uint8Array([86,47,0,2]),vf=new Uint8Array(640),yf=new Uint8Array(64),bf=0,xf=0,Sf=0,Cf=0,wf=0,Tf=new Uint8ClampedArray(1228800),Ef=new Uint32Array(Tf.buffer),Df=new Uint8Array(512),Of=new Uint8Array(4),kf=new Uint8Array(4),Af=new Uint8Array(4),jf=[],Mf=new Uint16Array([0,4095,2048,2814,3148,197,10,3815,3461,1600,3959,819,1911,2806,143,3003,0,273,546,819,1092,1365,1638,1911,2184,2457,2730,3003,3276,3549,3822,4095,529,1075,1604,2150,2696,3225,4027,529,1058,1587,2116,2645,3174,3959,512,1041,1553,2082,2594,3123,3891,512,1024,1536,2048,2560,3072,3840,545,1091,1636,2182,2728,3273,4075,529,1074,1619,2164,2709,3254,4055,528,1073,1617,2146,2690,3235,4035,528,1072,1600,2144,2688,3216,4016,289,835,1380,1926,2472,3017,3579,289,834,1123,1668,2213,2502,3063,288,577,1121,1410,1698,2243,2547,288,576,864,1152,1440,1728,2032,289,835,1125,1670,2216,2506,3068,289,578,868,1157,1446,1736,2041,32,321,354,643,676,965,1014,32,65,97,130,162,195,243,290,836,1126,1672,2218,2508,3071,290,580,870,1160,1450,1740,2047,34,324,358,648,682,972,1023,34,68,102,136,170,204,255,274,820,1110,1640,2186,2476,3023,274,548,838,1112,1386,1676,1951,2,276,294,568,586,860,879,2,20,22,40,42,60,63,274,820,1350,1896,2442,2972,3519,274,804,1078,1608,2138,2412,2943,258,532,1046,1320,1578,2108,2367,258,516,774,1032,1290,1548,1807,530,1076,1606,2152,2698,3228,4030,529,1059,1589,2119,2649,3179,3965,513,1043,1557,2086,2600,3130,3900,513,1027,1540,2054,2568,3081,3851]),Nf=()=>{U.fill(0),Od.fill(0),W=0,kd=0,Dd.fill(0),Ad=0,jd=0,Md=0,jf.length=0,Nd.forEach(e=>e.fill(0)),G.fill(0),G[1]=128,G[2]=128,G[5]=160,G[7]=240,Wd=0,K=32768,qd=32768,Gd=0,Kd=0,nf=!1,tf=!1,Qd=!1,$d=!1,df=!1,ef=!1,rf=!1,uf=!1,gf=0,af=!1,of=!1,cf=0,lf=0,sf=0,q[0]=0,q[1]=0,q[2]=0,q[3]=0,pf=0,mf[0]=0,mf[1]=0,hf[0]=0,hf[1]=0,Jd=0,Yd=0,Xd=0,Zd=2,ff=!1,Ed.forEach(e=>e.fill(0));for(let e=0;e<256;e++)Td[e*2+0]=Mf[e]&255,Td[e*2+1]=Mf[e]>>8;qf();for(let e=0;e<131072;e++)wd[e]=Math.floor(Math.random()*256);zd=0,bf=0,xf=0,Sf=0,Cf=0,Wf=-1,od(),bd=M.cycleCount,xd=0},Pf=()=>(Nf(),!0),Ff=[,,].fill(null).map(()=>({})),If=[,,].fill(null).map(()=>[,,].fill(null).map(()=>({}))),Lf=(e,t)=>t+e.hscroll&e.layerw_max,Rf=(e,t)=>t+e.vscroll&e.layerh_max,zf=(e,t,n)=>e.map_base+((n>>e.tileh_log2<<e.mapw_log2)+(t>>e.tilew_log2)<<1),Bf=e=>{let t=Ff[e],n=t.layerw_max,r=t.hscroll;t.color_depth=Nd[e][0]&3,t.map_base=Nd[e][1]<<9,t.tile_base=(Nd[e][2]&252)<<9,t.bitmap_mode=!!(Nd[e][0]&4),t.text_mode=t.color_depth==0&&!t.bitmap_mode,t.text_mode_256c=!!(Nd[e][0]&8),t.tile_mode=!t.bitmap_mode&&!t.text_mode,t.bitmap_mode?(t.hscroll=0,t.vscroll=0):(t.hscroll=Nd[e][3]|(Nd[e][4]&15)<<8,t.vscroll=Nd[e][5]|(Nd[e][6]&15)<<8);let i=0,a=0;if(t.tilew=0,t.tileh=0,t.tile_mode||t.text_mode?(t.mapw_log2=5+(Nd[e][0]>>4&3),t.maph_log2=5+(Nd[e][0]>>6&3),i=1<<t.mapw_log2,a=1<<t.maph_log2,t.tilew_log2=3+(Nd[e][2]&1),t.tileh_log2=3+(Nd[e][2]>>1&1),t.tilew=1<<t.tilew_log2,t.tileh=1<<t.tileh_log2):t.bitmap_mode&&(t.tilew=Nd[e][2]&1?640:320,t.tileh=480),t.mapw_max=i-1,t.maph_max=a-1,t.tilew_max=t.tilew-1,t.tileh_max=t.tileh-1,t.layerw_max=i*t.tilew-1,t.layerh_max=a*t.tileh-1,n!=t.layerw_max||r!=t.hscroll){let e=gd,n=_d;for(let r=0;r<640;++r){let i=Lf(t,r);i<e&&(e=i),i>n&&(n=i)}t.min_eff_x=e,t.max_eff_x=n}t.bits_per_pixel=1<<t.color_depth,t.tile_size_log2=t.tilew_log2+t.tileh_log2+t.color_depth-3,t.first_color_pos=8-t.bits_per_pixel,t.color_mask=(1<<t.bits_per_pixel)-1,t.color_fields_max=(8>>t.color_depth)-1},Vf=(e,t)=>{e.color_depth=t.color_depth,e.map_base=t.map_base,e.tile_base=t.tile_base,e.text_mode=t.text_mode,e.text_mode_256c=t.text_mode_256c,e.tile_mode=t.tile_mode,e.bitmap_mode=t.bitmap_mode,e.hscroll=t.hscroll,e.vscroll=t.vscroll,e.mapw_log2=t.mapw_log2,e.maph_log2=t.maph_log2,e.tilew=t.tilew,e.tileh=t.tileh,e.tilew_log2=t.tilew_log2,e.tileh_log2=t.tileh_log2,e.mapw_max=t.mapw_max,e.maph_max=t.maph_max,e.tilew_max=t.tilew_max,e.tileh_max=t.tileh_max,e.layerw_max=t.layerw_max,e.layerh_max=t.layerh_max,e.tile_size_log2=t.tile_size_log2,e.min_eff_x=t.min_eff_x,e.max_eff_x=t.max_eff_x,e.bits_per_pixel=t.bits_per_pixel,e.first_color_pos=t.first_color_pos,e.color_mask=t.color_mask,e.color_fields_max=t.color_fields_max},Hf=Array(128).fill(null).map(()=>({})),Uf=e=>{let t=Hf[e];t.sprite_zdepth=Ed[e][6]>>2&3,t.sprite_collision_mask=Ed[e][6]&240,t.sprite_x=Ed[e][2]|(Ed[e][3]&3)<<8,t.sprite_y=Ed[e][4]|(Ed[e][5]&3)<<8,t.sprite_width_log2=(Ed[e][7]>>4&3)+3,t.sprite_height_log2=(Ed[e][7]>>6)+3,t.sprite_width=1<<t.sprite_width_log2,t.sprite_height=1<<t.sprite_height_log2,t.sprite_x>=1024-t.sprite_width&&(t.sprite_x-=1024),t.sprite_y>=1024-t.sprite_height&&(t.sprite_y-=1024),t.hflip=Ed[e][6]&1,t.vflip=Ed[e][6]>>1&1,t.color_mode=Ed[e][1]>>7&1,t.sprite_address=Ed[e][0]<<5|(Ed[e][1]&15)<<13,t.palette_offset=(Ed[e][7]&15)<<4,Gf(e)},Wf=-1,Gf=e=>{if(Hf[e].sprite_zdepth>0)e>Wf&&(Wf=e);else if(e===Wf){let t=-1;for(let n=e-1;n>=0;n--)if(Hf[n].sprite_zdepth>0){t=n;break}Wf=t}},Kf={entries:new Uint32Array(256),dirty:!1},qf=()=>{let e=G[0]&3,t=(G[0]&7)==6;for(let n=0;n<256;++n){let r=0,i=0,a=0;if(e==0)r=0,i=0,a=255;else{let e=Td[n*2]|Td[n*2+1]<<8;r=(e>>8&15)<<4|e>>8&15,i=(e>>4&15)<<4|e>>4&15,a=(e&15)<<4|e&15,t&&(r=i=a=(r+a+i)/3)}Kf.entries[n]=(4278190080|(a&255)<<16|(i&255)<<8|r&255)>>>0}Kf.dirty=!1},Jf=(e,t,n)=>{let r=0,i=t;for(;n>=2;){let t=wd[i++];e[r++]=t>>4,e[r++]=t&15,n-=2}},Yf=e=>{if(Cp(Id,0,640),Cp(Ld,0,640),Cp(Rd,0,640),Wf<0)return;let t=801;for(let n=0;n<=Wf&&(t--,t!=0);n++){let r=Hf[n];if(r.sprite_zdepth==0||e<r.sprite_y||e>=r.sprite_y+r.sprite_height)continue;let i=r.vflip?r.sprite_height-1-(e-r.sprite_y):e-r.sprite_y,a=r.hflip?r.sprite_width-1:0,o=r.hflip?-1:1,s=r.sprite_address+(i<<r.sprite_width_log2-(1-r.color_mode)),c=r.sprite_width<64?r.sprite_width:64,l=(2-r.color_mode<<2)-1;if(r.color_mode==0)Jf(yf,s,c);else for(let e=0;e<c;e++)yf[e]=wd[s+e];for(let e=0;e<r.sprite_width;++e){let n=r.sprite_x+e;if(n>=640){a+=o;continue}if(!(e&l)&&(t--,t==0)||(t--,t==0))break;let i=yf[a];a+=o,i>0&&(zd|=Rd[n]&r.sprite_collision_mask,Rd[n]|=r.sprite_collision_mask,r.sprite_zdepth>Ld[n]&&(i<16&&(i+=r.palette_offset),Id[n]=i,Ld[n]=r.sprite_zdepth))}}},Xf=(e,t)=>{let n=If[1][e],r=If[0][e],i=(8>>n.color_depth)-1,a=Rf(r,t),o=(a&n.tileh_max)<<n.tilew_log2>>3,s=zf(n,n.min_eff_x,a),c=zf(n,n.max_eff_x,a)-s+2,l=Df;pp(l,s,c);let u=0,d=0,f=0,p=0,m=0;{let e=Lf(n,0),t=e&n.tilew_max,r=zf(n,e,a)-s,c=l[r],ee=l[r+1];n.text_mode_256c?(d=ee,f=0):(d=ee&15,f=ee>>4),u=c<<n.tile_size_log2;let te=t>>3,ne=u+o+te;p=fp(n.tile_base+ne),m=i-(t&7)}for(let t=0;t<640;t++){let r=Lf(n,t),c=r&n.tilew_max;if(!(r&7)){if((r&n.tilew_max)==0){let e=zf(n,r,a)-s,t=l[e],i=l[e+1];n.text_mode_256c?(d=i,f=0):(d=i&15,f=i>>4),u=t<<n.tile_size_log2}let e=c>>3,t=u+o+e;p=fp(n.tile_base+t),m=i}let ee=p>>m&1;--m,Fd[e][t]=ee?d:f}},Zf=(e,t)=>{let n=If[1][e],r=If[0][e],i=(8>>n.color_depth)-1,a=Rf(r,t),o=a&n.tileh_max,s=o^n.tileh_max,c=o<<(n.tilew_log2+n.color_depth-3&31),l=s<<(n.tilew_log2+n.color_depth-3&31),u=zf(n,n.min_eff_x,a),d=zf(n,n.max_eff_x,a)-u+2,f=Df;pp(f,u,d);let p=0,m=!1,ee=!1,te=0,ne=0,re=0,ie=0;{let e=Lf(n,0),t=zf(n,e,a)-u,r=f[t],i=f[t+1];m=i>>3&1,ee=i>>2&1,p=i&240,te=(r|(i&3)<<8)<<n.tile_size_log2,ie=ee?n.bits_per_pixel:-n.bits_per_pixel;let o=e&n.tilew_max;ee?(o^=n.tilew_max,re=0):re=n.first_color_pos;let s=o<<n.color_depth>>3,d=te+(m?l:c)+s;ne=fp(n.tile_base+d)}for(let t=0;t<640;t++){let r=Lf(n,t);if((r&i)==0){if((r&n.tilew_max)==0){let e=zf(n,r,a)-u,t=f[e],i=f[e+1];m=i>>3&1,ee=i>>2&1,p=i&240,te=(t|(i&3)<<8)<<n.tile_size_log2,ie=ee?n.bits_per_pixel:-n.bits_per_pixel}let e=r&n.tilew_max;ee?(e^=n.tilew_max,re=0):re=n.first_color_pos;let t=e<<n.color_depth>>3,i=te+(m?l:c)+t;ne=fp(n.tile_base+i)}let o=ne>>re&n.color_mask;re+=ie,o>0&&o<16&&(o+=p,n.text_mode_256c&&(o|=128)),Fd[e][t]=o}},Qf=(e,t)=>{let n=If[1][e],r=t%n.tileh*n.tilew*n.bits_per_pixel>>3;for(let t=0;t<640;t++){let i=t%n.tilew,a=Nd[e][4]&15,o=r+(i*n.bits_per_pixel>>3),s=fp(n.tile_base+o)>>n.first_color_pos-((i&n.color_fields_max)<<n.color_depth)&n.color_mask;s>0&&s<16&&(s+=a<<4,n.text_mode_256c&&(s|=128)),Fd[e][t]=s}},$f=(e,t,n,r)=>{let i=0;switch(e){case 3:i=t||r||n;break;case 2:i=r||t||n;break;case 1:i=r||n||t;break;case 0:i=r||n}return i},ep=-1,tp=0,np=0,rp=0,ip=(e,t)=>{let n=G[0],r=G[6]<<1,i=G[7]<<1;if(e!=ep&&(ep=e,tp=0,Pd[1].set(Pd[0]),Pd[0].set(G),Vf(If[1][0],If[0][0]),Vf(If[1][1],If[0][1]),Vf(If[0][0],Ff[0]),Vf(If[0][1],Ff[1]),(n&3)>1?e>>1?(e&65534)>=r&&(e&65534)<i&&(np+=Pd[1][2]<<10):np=e*(Pd[1][2]<<9):e==0?np=0:e>=r&&e<i&&(np+=Pd[1][2]<<9)),n&8&&(n&3)>1&&(e&=65534),Kf.dirty&&qf(),e>=480)return;let a=Math.round(t);a>640&&(a=640),tp==0&&(rp=0);let o=G[0]&3,s=G[3],c=G[4]<<2,l=G[5]<<2,u=np>>16;u>=480&&(u=480-(e&1)),Bd[0]=n&16?1:0,Bd[1]=n&32?1:0,Ud=!!(n&64);for(let e=0;e<2;e++){if(!Bd[e]&&Vd[e])for(let t=tp;t<640;t++)Fd[e][t]=0;tp==0&&(Vd[e]=Bd[e])}if(!Ud&&Hd)for(let e=tp;e<640;e++)Id[e]=0,Ld[e]=0,Rd[e]=0;if(tp==0&&(Hd=Ud),Ud&&Yf(u),Bd[0]&&(If[1][0].text_mode?Xf(0,u):If[1][0].bitmap_mode?Qf(0,u):Zf(0,u)),Bd[1]&&(If[1][1].text_mode?Xf(1,u):If[1][1].bitmap_mode?Qf(1,u):Zf(1,u)),o!=0)if(e<r||e>=i){let e=s;e|=e<<8,e|=e<<16,Cp(vf,e,640)}else{c=c<640?c:640,l=l<640?l:640;for(let e=tp;e<c&&e<a;++e)vf[e]=s;let e=G[1];for(let t=vd(c,tp);t<l&&t<a;++t){let n=rp>>16;vf[t]=n<640?$f(Ld[n],Id[n],Fd[0][n],Fd[1][n]):0,rp+=e<<9}for(let e=l;e<a;++e)vf[e]=s}{let t=e*640+tp;for(let e=tp;e<a;e++)Ef[t++]=Kf.entries[vf[e]]}if(o==2){let t=(e*640+tp)*4;for(let n=tp;n<a;n++)(n<42.88||n>597.12||e<24||e>456)&&(Tf[t]>>=2,Tf[t+1]>>=2,Tf[t+2]>>=2),t+=4}tp=a},ap=(e,t)=>{e==480&&(zd!=0&&(jd|=4),jd=jd&15|zd,zd=0,jd|=1),e==t&&(jd|=2)},op=(e,t,n)=>{let r=0,i=G[0]&2,a=!1;if(bf+=25*t/e,bf>=800)for(;bf>=800;)bf-=800,i||ip(xf-0,800),xf++,xf==525&&(xf=0,i||(a=!0,wf++)),i||ap(xf-0,Md);else n&&(i||ip(xf-0,bf));if(Sf+=25*t/e,Sf>=794)for(;Sf>=794;)Sf-=794,i&&(Cf<525?(r=Cf-42,r&1||ip(r,794)):(r=Cf-568,r&1||ip(r|1,794))),Cf++,Cf==525&&(G[0]|=128,i&&(a=!0,wf++)),Cf==1050&&(G[0]&=-129,Cf=0,i&&(a=!0,wf++)),i&&ap(Cf<525?Cf-42:Cf-568,Md&-2);else n&&i&&(Cf<525?(r=Cf-42,r&1||ip(r,Sf)):(r=Cf-568,r&1||ip(r|1,Sf)));return a},sp=()=>(ud()!==0&&Cd(),!!((jd|(pd()?8:0))&Ad)),cp=()=>(jf.length>0&&r_(jf.splice(0)),t_(Tf,G[0]),!0),lp=new Int16Array([0,0,1,-1,2,-2,4,-4,8,-8,16,-16,32,-32,64,-64,128,-128,256,-256,512,-512,40,-40,80,-80,160,-160,320,-320,640,-640]),up=(e,t)=>{let n=U[e],r=lp[Od[e]];return Qd&&hf[e]&&!r&&(mf[e]?(Od[e]&1||(U[e]+=1),mf[e]=0):(Od[e]&1&&--U[e],mf[e]=1)),e==1&&$d&&(r==4?r=pf==(n&3)?1:3:r==320&&(r=pf==(n&3)?1:319)),U[e]+=r,e==1&&Wd==1?(K+=Gd,K&65536&&(K&=-65537,Qd&&hf[0]&&(mf[1]?(Od[0]&1||(U[1]+=1),mf[1]=0):(Od[0]&1&&--U[1],mf[1]=1)),U[1]+=lp[Od[0]])):Wd==2&&t==0?(K+=Gd,qd+=Kd,Jd=(Number(qd)>>16)-(Number(K)>>16),e==0&&ef&&!tf&&(lf=lf+1&3),e==1&&(Qd?(U[1]=U[0]+(K>>17),mf[1]=K>>16&1):U[1]=U[0]+(K>>16))):e==1&&Wd==3&&t==0&&(K+=Gd,qd+=Kd),n},dp=()=>{if(Wd!=3)return;let e=0,t=K>>19&255,n=qd>>19&255,r=K>>16&7,i=qd>>16&7;if(ff||(t&=Zd-1,n&=Zd-1),t>=Zd||n>=Zd)e=Yd+(i<<3-Qd)+(r>>Number(Qd)),mf[1]=(r&1)>>1-Qd;else{e=Xd+n*Zd+t;let a=fp(e);e=Yd+(a<<6-Qd),e+=(i<<3-Qd)+(r>>Number(Qd)),mf[1]=(r&1)>>1-Qd}U[1]=e,Dd[1]=fp(e)},fp=e=>wd[e&131071],pp=(e,t,n)=>{if(t>=0&&t+n<=131072)for(let r=0;r<n;r++)e[r]=wd[t+r];else for(let r=0;r<n;++r)e[r]=fp(t+r)},mp=(e,t)=>{let n=e&63;Cd(),jf.push({cycle:M.cycleCount,reg:n,value:t})},hp=(e,t)=>{i_({cycle:M.cycleCount,reg:e,value:t})},gp=(e,t,n)=>{Qd?t?(!rf||(n&15)>0)&&(wd[e&131071]=wd[e&131071]&240|n&15):(!rf||(n&240)>0)&&(wd[e&131071]=wd[e&131071]&15|n&240):(!rf||n>0)&&(wd[e&131071]=n),e>=129472&&e<129536?mp(e,n):e>=129536&&e<130048?(Td[e&511]=n,Kf.dirty=!0):e>=130048&&e<131072&&(Ed[e>>3&127][e&7]=n,Uf(e>>3&127))},_p=(e,t,n)=>{if(!rf||t>0)switch(n){case 0:wd[e&131071]=t;break;case 1:wd[e&131071]=wd[e&131071]&15|t&240;break;case 2:wd[e&131071]=wd[e&131071]&240|t&15}},vp=e=>{switch(e&31){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 12:case 13:case 14:case 15:return G[e];case 11:return G[e]&63;case 16:return K>>16&255;case 17:return K>>24&7|K&128;case 18:return qd>>16&255;case 19:return qd>>24&7|qd&128;case 20:return K>>8&255;case 21:return qd>>8&255;case 22:return Jd>=768?af&&Wd==2?0:128:Qd?af&&Wd==2?(qd&32768)>>8|K>>11&96|K>>14&16|(Jd&7)<<1|(K&32768)>>15:!!(Jd&65528)<<7|K>>11&96|K>>14&16|(Jd&7)<<1:!!(Jd&65520)<<7|K>>11&96|(Jd&15)<<1;case 23:return(Jd&1016)>>2;case 24:return q[0];case 25:return q[1];case 26:return q[2];case 27:return q[3]}return _f[e%4]},yp=e=>{let t=!1;switch(kd){case 5:switch(e){case 11:case 12:t=!0}break;case 63:switch(e){case 9:case 10:case 11:case 12:t=!0}}t&&hd(`Warning: %04X wrote to read-only VERA register at 9F%02X (DCSEL=%d)
`,0,e+32,kd)},bp=e=>{let t=!1;switch(kd){case 2:switch(e){case 10:case 11:case 12:t=!0}break;case 3:case 4:switch(e){case 9:case 10:case 11:case 12:t=!0}break;case 5:switch(e){case 9:case 10:t=!0}break;case 6:switch(e){case 11:case 12:t=!0}}t&&hd(`Warning: %04X read from write-only VERA register at 9F%02X (DCSEL=%d)
`,0,e+32,kd)},xp=(e,t)=>{let n=G[0]&2?Cf%525:xf;switch(n>=512&&(n=511),bp(e),e&31){case 0:return U[W]&255;case 1:return U[W]>>8&255;case 2:return U[W]>>16|mf[W]<<1|hf[W]<<2|Od[W]<<3;case 3:case 4:{if(t)return Dd[e-3];let n=!!mf[e-3];up(e-3,!1);let r=Dd[e-3];if(e==4&&Wd==3?dp():Dd[e-3]=fp(U[e-3]),tf)if(Qd){let e=n?(r&15)<<4:r&240;cf?(q[lf]=q[lf]&240|e>>4,cf=0,lf=lf+1&3):(q[lf]=q[lf]&15|e,cf=1)}else q[lf]=r,lf=sf?lf&2|lf+1&1:lf+1&3;return r}case 5:return kd<<1|W;case 6:return(Md&256)>>1|(n&256)>>2|Ad&15;case 7:return ud()!==0&&Cd(),jd|(pd()?8:0);case 8:return n&255;case 9:case 10:case 11:case 12:{let n=e-9+(kd<<2);if(t)return vp(n);switch(n){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 22:case 23:return vp(n);case 24:gf=0;break;case 25:{let e=((q[1]<<8|q[0])<<16>>16)*((q[3]<<8|q[2])<<16>>16);df?gf-=e:gf+=e;break}}return _f[n%4]}case 13:case 14:case 15:case 16:case 17:case 18:case 19:return Nd[0][e-13];case 20:case 21:case 22:case 23:case 24:case 25:case 26:return Nd[1][e-20];case 27:return Cd(),cd();case 28:return ud();case 29:return 0;case 30:case 31:return Nu(e&1)}return 0},Sp=(e,t)=>{switch(yp(e),e&31){case 0:af&&Qd&&Wd==2&&W==1?(of=!0,U[1]=U[1]&131068|t&3):(U[W]=U[W]&130816|t,$d&&W==1&&(pf=t&3)),Dd[W]=fp(U[W]);break;case 1:U[W]=U[W]&65791|t<<8,Dd[W]=fp(U[W]);break;case 2:U[W]=U[W]&65535|(t&1)<<16,mf[W]=t>>1&1,hf[W]=t>>2&1,Od[W]=t>>3,Dd[W]=fp(U[W]);break;case 3:case 4:{if(of&&Wd){switch(of=!1,t>>6){case 0:wd[U[1]&131071]=q[lf]&192|Dd[1]&63;break;case 1:wd[U[1]&131071]=q[lf]&48|Dd[1]&207;break;case 2:wd[U[1]&131071]=q[lf]&12|Dd[1]&243;break;case 3:wd[U[1]&131071]=q[lf]&3|Dd[1]&252}break}let n=!!mf[e-3],r=up(e-3,!0);if(!nf&&!uf&&!ef){gp(r,n,t),Dd[e-3]=fp(U[e-3]);break}let i=0,a=Of,o=kf,s=Af;if(uf){let e=((q[1]<<8|q[0])<<16>>16)*((q[3]<<8|q[2])<<16>>16);e=df?gf-e:gf+e,s[0]=e&255,s[1]=e>>8&255,s[2]=e>>16&255,s[3]=e>>24&255}else wp(s,q,q.length);i=ef?q[lf]:t,nf&&!ef?(a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3]):(a[0]=i,a[1]=i,a[2]=i,a[3]=i),nf?(r&=131068,rf?Qd?(o[0]=!(a[0]&240)<<1|!(a[0]&15),o[1]=!(a[1]&240)<<1|!(a[1]&15),o[2]=!(a[2]&240)<<1|!(a[2]&15),o[3]=!(a[3]&240)<<1|!(a[3]&15)):(o[0]=a[0]==0?3:0,o[1]=a[1]==0?3:0,o[2]=a[2]==0?3:0,o[3]=a[3]==0?3:0):(o[0]=t&3,o[1]=t>>2&3,o[2]=t>>4&3,o[3]=t>>6&3),_p(r+0,a[0],o[0]),_p(r+1,a[1],o[1]),_p(r+2,a[2],o[2]),_p(r+3,a[3],o[3])):gp(r,n,i),Dd[e-3]=fp(U[e-3]);break}case 5:t&128&&Nf(),kd=t>>1&63,W=t&1;break;case 6:Md=Md&255|t>>7<<8,Ad=t&15;break;case 7:jd&=t^255;break;case 8:Md=Md&256|t;break;case 9:case 10:case 11:case 12:{op(1,0,!0);let n=e-9+(kd<<2);switch(n==0?((!(G[0]&8)&&t&8||(G[0]&3)==1&&(t&3)>1&&t&8)&&Cp(Tf,0,1228800),G[0]=G[0]&-128|t&127,Kf.dirty=!0):G[n]=t,n){case 8:Wd=t&3,Qd=(t&4)>>2,$d=(t&8)>>3,ef=(t&16)>>4,tf=(t&32)>>5,nf=(t&64)>>6,rf=(t&128)>>7;break;case 9:Yd=(t&252)<<9,ff=(t&2)>>1,af=t&1;break;case 10:Xd=(t&252)<<9,Zd=2<<((t&3)<<1);break;case 11:if(sf=t&1,cf=(t&2)>>1,lf=(t&12)>>2,uf=(t&16)>>4,df=(t&32)>>5,t&64){let e=((q[1]<<8|q[0])<<16>>16)*((q[3]<<8|q[2])<<16>>16);df?gf-=e:gf+=e}t&128&&(gf=0);break;case 12:Gd=(((G[13]&127)<<15)+(G[12]<<7)|(G[13]&64?4290772992:0))<<5*!!(G[13]&128);break;case 13:Gd=(((G[13]&127)<<15)+(G[12]<<7)|(G[13]&64?4290772992:0))<<5*!!(G[13]&128),(Wd==1||Wd==2)&&(K=K&134152192|32768);break;case 14:Kd=(((G[15]&127)<<15)+(G[14]<<7)|(G[15]&64?4290772992:0))<<5*!!(G[15]&128);break;case 15:Kd=(((G[15]&127)<<15)+(G[14]<<7)|(G[15]&64?4290772992:0))<<5*!!(G[15]&128),(Wd==1||Wd==2)&&(qd=qd&134152192|32768);break;case 16:K=K&117505920|t<<16,dp();break;case 17:K=K&16776960|(t&7)<<24|t&128,dp();break;case 18:qd=qd&117505920|t<<16,dp();break;case 19:qd=qd&16776960|(t&7)<<24|t&128,dp();break;case 20:K=K&134152320|t<<8;break;case 21:qd=qd&134152320|t<<8;break;case 24:q[0]=t;break;case 25:q[1]=t;break;case 26:q[2]=t;break;case 27:q[3]=t}break}case 13:case 14:case 15:case 16:case 17:case 18:case 19:op(1,0,!0),Nd[0][e-13]=t,Bf(0);break;case 20:case 21:case 22:case 23:case 24:case 25:case 26:op(1,0,!0),Nd[1][e-20]=t,Bf(1);break;case 27:Cd(),sd(t),hp(`ctrl`,t);break;case 28:Cd(),ld(t),hp(`rate`,t);break;case 29:Cd(),dd(t),hp(`fifo`,t);break;case 30:case 31:Pu(e&1,t)}},Cp=(e,t,n)=>{e.fill(t,0,n)},wp=(e,t,n)=>{if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){let r=e,i=t;r.set(i.subarray(0,n),0);return}let r=e;for(let e=0;e<n;e++){let n=t[e],i=r[e];ArrayBuffer.isView(i)&&ArrayBuffer.isView(n)?i.set(n):typeof n==`object`&&n?(i||(r[e]=Array.isArray(n)?[]:{}),Object.assign(r[e],n)):r[e]=n}},Tp=5,Ep=!1,Dp=0,Op=0,kp=e=>{e!=Ep&&(Ep=e,Er(Tp,e))},Ap=()=>{let e=Pf();return e||console.log(`video_init fails`),ju(),e},jp=()=>{if(Op>0){let e=Op;Op=0;let t=op(1,e,!1);Mu(e),t&&cp(),kp(sp())}},Mp=()=>{Op=0,Dp=0,Nf()},Np=(e=!0,t=3)=>{e&&(Mp(),Ap()&&(Tp=t,qi(Tp,Fp),Ar(Pp,Tp)))},Pp=e=>{if(Dp){let e=M.cycleCount-Dp;Op+=e,Op>=16&&jp()}Dp=M.cycleCount},Fp=(e,t=-1)=>{if(e>=49408){if(Dp){let e=M.cycleCount-Dp;Op+=e}return Dp=M.cycleCount,jp(),t>=0?(Sp(e&255,t),0):xp(e&255,!1)}return 0},Ip=(e=!0,t=4)=>{e&&(qi(t,Tm),Ar(gm,t),Zo(t,`mockingboard`,()=>({data:Array.from({length:256},(e,n)=>D(t,n)),prevCycleCount:mm[t]}),e=>hm(t,e)))},Lp=[0,128],Rp=[1,129],zp=[2,130],Bp=[3,131],Vp=[4,132],Hp=[5,133],Up=[6,134],Wp=[7,135],Gp=[8,136],Kp=[9,137],qp=[10,138],Jp=[11,139],Yp=[12,140],Xp=[13,141],Zp=[14,142],Qp=[16,144],$p=[17,145],em=[18,146],tm=[19,147],nm=[32,160],rm=(e=4)=>{for(let t=0;t<=255;t++)O(e,t,0);for(let t=0;t<=1;t++)bm(e,t)},im=(e,t)=>!!(D(e,Zp[t])&64),am=(e,t)=>!!(D(e,em[t])&64),om=(e,t)=>!!(D(e,tm[t])&64),sm=(e,t)=>!!(D(e,Jp[t])&64),cm=(e,t)=>{O(e,Vp[t],D(e,Up[t])),O(e,Hp[t],D(e,Wp[t]));let n=D(e,em[t]);O(e,em[t],n&-65)},lm=(e,t,n)=>{let r=D(e,Vp[t])-n;if(O(e,Vp[t],r),r<0){r=r%256+256,O(e,Vp[t],r);let n=D(e,Hp[t]);if(n--,O(e,Hp[t],n),n<0&&(n+=256,O(e,Hp[t],n),om(e,t)&&(!am(e,t)||sm(e,t)))){let n=D(e,em[t]);O(e,em[t],n|64);let r=D(e,Xp[t]);O(e,Xp[t],r|64),im(e,t)&&Sm(e,t,-1),sm(e,t)&&cm(e,t)}}},um=(e,t)=>!!(D(e,Zp[t])&32),dm=(e,t)=>!!(D(e,em[t])&32),fm=(e,t)=>!!(D(e,tm[t])&32),pm=(e,t,n)=>{if(D(e,Jp[t])&32)return;let r=D(e,Gp[t])-n;if(O(e,Gp[t],r),r<0){r=r%256+256,O(e,Gp[t],r);let n=D(e,Kp[t]);if(n--,O(e,Kp[t],n),n<0&&(n+=256,O(e,Kp[t],n),fm(e,t)&&!dm(e,t))){let n=D(e,em[t]);O(e,em[t],n|32);let r=D(e,Xp[t]);O(e,Xp[t],r|32),um(e,t)&&Sm(e,t,-1)}}},mm=Array(8).fill(0),hm=(e,t)=>{mm[e]=t.prevCycleCount,t.data.forEach((t,n)=>O(e,n,t));for(let t=0;t<=1;t++)Sm(e,t,-1),bm(e,t);let n=[0,1].some(t=>!!(D(e,Xp[t])&D(e,Zp[t])&127));Er(e,n)},gm=e=>{let t=M.cycleCount-mm[e];for(let n=0;n<=1;n++)lm(e,n,t),pm(e,n,t);mm[e]=M.cycleCount},_m=(e,t)=>{let n=[];for(let r=0;r<=15;r++)n[r]=D(e,nm[t]+r);return n},vm=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ym=new Map,bm=(e,t)=>{let n=_m(e,t),r=`${e}:${t}`,i=ym.get(r);i&&vm(n,i)||(ym.set(r,n),g_({slot:e,chip:t,params:n}))},xm=(e,t)=>{switch(D(e,Lp[t])&7){case 0:for(let n=0;n<=15;n++)O(e,nm[t]+n,0);bm(e,t);break;case 7:O(e,$p[t],D(e,Rp[t]));break;case 6:{let n=D(e,$p[t]),r=D(e,Rp[t]);n>=0&&n<=15&&(O(e,nm[t]+n,r),bm(e,t));break}}},Sm=(e,t,n)=>{let r=D(e,Xp[t]);n>=0&&(r&=127-(n&127));let i=D(e,Zp[t]),a=!!(r&i&127);a?r|=128:r&=127,O(e,Xp[t],r),Er(e,a)},Cm=(e,t,n)=>{let r=D(e,Zp[t]);n>=0&&(n&=255,n&128?r|=n:r&=255-n),r|=128,O(e,Zp[t],r),Sm(e,t,-1)},wm=1e3,Tm=(e,t=-1)=>{if(e<49408)return-1;let n=(e&3840)>>8,r=e&255;if(wm<500){wm++;let i=D(n,r);Qi(n,e,i,t)}let i=r&128?1:0;switch(r){case Lp[i]:t>=0&&(O(n,Lp[i],t),xm(n,i));break;case Rp[i]:case zp[i]:case Bp[i]:case qp[i]:case Jp[i]:case Yp[i]:O(n,r,t);break;case Vp[i]:t>=0&&O(n,Up[i],t),Sm(n,i,64);break;case Hp[i]:if(t>=0){O(n,Wp[i],t),cm(n,i);let e=D(n,tm[i]);O(n,tm[i],e|64),Sm(n,i,64)}break;case Up[i]:t>=0&&(O(n,r,t),Sm(n,i,64));break;case Wp[i]:t>=0&&O(n,r,t);break;case Gp[i]:t>=0&&O(n,Qp[i],t),Sm(n,i,32);break;case Kp[i]:if(t>=0){O(n,Kp[i],t),O(n,Gp[i],D(n,Qp[i]));let e=D(n,em[i]);O(n,em[i],e&-33);let r=D(n,tm[i]);O(n,tm[i],r|32),Sm(n,i,32)}break;case Xp[i]:t>=0&&Sm(n,i,t);break;case Zp[i]:Cm(n,i,t)}return-1},Em=e=>{if(e>=49152)return{space:`system`};let t=E[e>>>8]+(e&255);return t<65536?{space:`main`}:t>=98048&&t<98048+(ni+1)*65536?{space:`aux`,auxBank:Math.floor((t-n)/65536)}:{space:`system`}},Dm=(e,t,n,r)=>{let i=[];for(let a=e;a<e+t;a++){let e=n===`active`?Em(a):n===`aux`?{space:n,auxBank:r}:{space:n},t=i.at(-1);t&&t.address+t.length===a&&t.space===e.space&&t.auxBank===e.auxBank?t.length++:i.push({address:a,length:1,...e})}return i},Om=e=>{let{address:t,length:n,space:r}=e;if(!Number.isInteger(t)||t<0||t>65535)throw Error(`Memory address must be between $0000 and $FFFF`);if(!Number.isInteger(n)||n<1||t+n>65536)throw Error(`Memory range must fit within $0000-$FFFF`);if(![`active`,`main`,`aux`].includes(r))throw Error(`Unknown memory space`);if(e.auxBank!==void 0&&r!==`aux`)throw Error(`Auxiliary bank is valid only for auxiliary memory`);if(r!==`active`&&t+n>49152)throw Error(`Physical memory range must fit within $0000-$BFFF`);let i=li(),a=e.auxBank??i;if(r===`aux`){if(!Pi())throw Error(`Auxiliary memory is not configured`);if(!Number.isInteger(a)||a<0||a>ni)throw Error(`Auxiliary bank must be between 0 and ${ni}`)}return{address:t,length:n,space:r,requestedAuxBank:e.auxBank??null,auxBank:a}},km=e=>{let{address:t,length:r,space:i,requestedAuxBank:a,auxBank:o}=Om(e),s;if(i===`active`){s=new Uint8Array(r);for(let e=0;e<r;e++){let n=t+e,r=E[n>>>8]+(n&255);s[e]=T[r]}}else{let e=i===`main`?t:n+o*65536+t;s=T.slice(e,e+r)}let c=Dm(t,r,i,o);return{address:t,length:r,requestedSpace:i,requestedAuxBank:a,effectiveAuxBank:c.some(e=>e.space===`aux`)?o:null,effectiveSegments:c,mapping:{RAMRD:b.AUXRAMREAD.isSet,RAMWRT:b.AUXRAMWRITE.isSet,ALTZP:b.ALTZP.isSet,"80STORE":b.STORE80.isSet,PAGE2:b.PAGE2.isSet,HIRES:b.HIRES.isSet},bytes:s}},Am=e=>{let t=e?.bytes;if(!Array.isArray(t)||t.length<1||t.length>32||t.some(e=>!Number.isInteger(e)||e<0||e>255))throw Error(`Memory predicate must contain 1 to 32 byte values`);let r=e.mask??t.map(()=>255);if(!Array.isArray(r)||r.length!==t.length||r.some(e=>!Number.isInteger(e)||e<0||e>255))throw Error(`Memory predicate mask must match the byte pattern`);let i=Om({address:e.address,length:t.length,space:e.space,auxBank:e.auxBank}),a=t.flatMap((e,t)=>r[t]===0?[]:[{index:t,mask:r[t],expected:e&r[t]}]),o=i.space===`main`?i.address:i.space===`aux`?n+i.auxBank*65536+i.address:null,s=e=>{let t=i.address+e;return T[o===null?E[t>>>8]+(t&255):o+e]};return Object.assign(()=>{for(let e of a)if((s(e.index)&e.mask)!==e.expected)return!1;return!0},{read:()=>t.map((e,t)=>s(t))})},jm=e=>{let{bytes:t,maxMatches:n=32}=e;if(!Array.isArray(t)||t.length<1||t.length>32||t.some(e=>!Number.isInteger(e)||e<0||e>255))throw Error(`Memory pattern must contain 1 to 32 byte values`);if(!Number.isInteger(n)||n<1||n>64)throw Error(`Maximum matches must be between 1 and 64`);let{bytes:r,...i}=km(e),a=[],o=0;for(let i=0;i+t.length<=r.length;i++)t.every((e,t)=>r[i+t]===e)&&(o++,a.length<n&&a.push(e.address+i));return{...i,matches:a,totalMatchCount:o,truncated:o>a.length}},Mm=e=>{let t=e&&`all`in e?e.all:[e];if(!Array.isArray(t)||t.length<1||t.length>8||t.some(e=>!e||`all`in e)||e&&`all`in e&&Object.keys(e).length!==1)throw Error(`Memory condition all must contain 1 to 8 non-nested predicates`);let n=t.map(Am);return{matches:()=>n.every(e=>e()),read:()=>n.map(e=>e.read())}},Nm=null,Pm=null,Fm=(e,t,n)=>({outcome:t,completedPhases:e.phase,failurePhase:t===`completed`?null:e.phase,keyDeliveries:e.keyDeliveries,cyclesElapsed:Math.max(0,n-e.startCycles),...t===`timeout`?{timeout:e.timeout}:{},...t===`condition_triggered`?{stopCondition:e.stopCondition}:{},...e.stopConditions.length?{stopConditionsArmed:e.stopConditions.length}:{}}),Im=e=>{if(e.startExecution!==void 0&&typeof e.startExecution!=`boolean`)throw Error(`Conditional input startExecution must be boolean`);if(!Array.isArray(e.phases)||e.phases.length<1||e.phases.length>16)throw Error(`Conditional input sequence must contain 1 to 16 phases`);if(!Number.isInteger(e.timeoutMs)||e.timeoutMs<1||e.timeoutMs>12e4)throw Error(`Conditional input timeout must be between 1 and 120000 milliseconds`);let t=0,n=e.phases.map(e=>{if(typeof e?.keys!=`string`||Array.from(e.keys).some(e=>{let t=e.charCodeAt(0);return e.length!==1||t<1||t>255}))throw Error(`Each phase must contain valid Apple II keys`);let n=Array.from(e.keys).length;if(n<1||n>32)throw Error(`Each phase must contain 1 to 32 keys`);return t+=n,{condition:e.when===void 0?null:Mm(e.when),keys:e.keys}});if(t>64)throw Error(`Conditional input sequence cannot contain more than 64 keys`);let r=e.stopConditions===void 0?[]:e.stopConditions;if(!Array.isArray(r)||r.length>8||r.some(e=>typeof e?.name!=`string`||!/^[A-Za-z0-9_-]{1,64}$/.test(e.name))||new Set(r.map(e=>e.name)).size!==r.length)throw Error(`stopConditions must contain at most 8 uniquely named conditions (1 to 64 letters, digits, _ or -)`);let i=r.map(e=>({name:e.name,condition:Mm(e.when)}));return{phases:n,finalCondition:Mm(e.final),stopConditions:i}},Lm=()=>Nm!==null,Rm=(e,t)=>{let n=Im(e);return Nm||rn()?Promise.resolve({outcome:`input_busy`,completedPhases:0,failurePhase:0,keyDeliveries:[],cyclesElapsed:0}):new Promise(r=>{Nm={...n,phase:0,keyInFlight:!1,keyDeliveries:[],deadline:performance.now()+e.timeoutMs,startCycles:t,resolve:r}})},zm=()=>{let e=Nm;if(!e||Pm)return Pm;let t=e.stopConditions.find(e=>e.condition.matches());return t&&(e.stopCondition={name:t.name,matchedBytes:t.condition.read()},Pm=`condition_triggered`),Pm},Bm=()=>{let e=Nm;if(!e||Pm||e.keyInFlight)return Pm;if(performance.now()>=e.deadline)return e.timeout={waitingFor:`condition`,actualBytes:(e.phase<e.phases.length?e.phases[e.phase].condition:e.finalCondition)?.read()??[]},Pm=`timeout`,Pm;if(e.phase===e.phases.length)return e.finalCondition.matches()&&(Pm=`completed`),Pm;let t=e.phases[e.phase];if(t.condition&&!t.condition.matches())return null;let n=t.condition?M.cycleCount:null,r=t.condition?.read()??[],i=[];e.keyInFlight=!0;let a=Math.max(1,Math.ceil(e.deadline-performance.now()));return sn({keys:t.keys,timeoutMs:a},a=>{Nm===e&&(e.keyInFlight=!1,e.keyDeliveries.push({...a,phase:e.phase,predicateMatchCycle:n,matchedBytes:r,keyConsumptionCycles:i}),a.outcome===`timeout`&&(e.timeout={waitingFor:`key_consumption`,actualBytes:t.condition?.read()??[]}),a.outcome===`completed`?e.phase++:Pm||=a.outcome===`timeout`?`timeout`:`cancelled`)},()=>i.push(M.cycleCount)).catch(()=>{Nm===e&&(e.keyInFlight=!1,Pm??=`cancelled`)}),null},Vm=e=>!Nm||Pm?!1:(Pm=e,!0),Hm=e=>{let t=Nm,n=Pm;return!t||!n?!1:(Nm=null,Pm=null,t.resolve(Fm(t,n,e)),!0)},Um={numLines:ar.numLines,collapseLoops:ar.collapseLoops,ignoreRegisters:ar.ignoreRegisters},Wm=e=>{Um.numLines=e.numLines,Um.collapseLoops=e.collapseLoops,Um.ignoreRegisters=e.ignoreRegisters},J=[],Gm=()=>{if(J.length<50)return;let e=Um.ignoreRegisters?24:99,t=J[J.length-1].slice(10,e),n=J.length-2,r=Math.max(J.length-20,0),i=-1;for(;n>=r;){if(J[n].slice(10,e)===t){i=n;break}n--}let a=J.length-i-1;if(i===-1||J.length-2*a<0)return;for(let t=i-1;t>=i-a+1;t--)if(J[t].slice(10,e)!==J[t+a].slice(10,e))return;let o=J[i-a].indexOf(`repeated`),s=`******** ${a===1?`1 line repeated`:`${a} lines repeated`}`;if(Um.ignoreRegisters)for(let t=i-a+1;t<i;t++){let n=J[t],r=J[t+a];J[t+a]=r.slice(0,e)+r.slice(e).split(``).map((t,r)=>t===n[e+r]?t:`*`).join(``)}if(i>=a&&o>0){J.splice(i-a+1,a);let e=parseInt(J[i-a].slice(o+9))+1;J[i-a]=`${s} ${e} times`}else J[i]=`${s} 1 time`,J.splice(i-a+1,a-1);for(let e=i-a+1;e<J.length;e++)J[e].startsWith(`    `)?J[e]=`      ..`+J[e].slice(8):J[e].startsWith(`  `)?J[e]=`    ....`+J[e].slice(8):J[e].startsWith(`..`)?J[e]=`  ......`+J[e].slice(8):J[e]=`........`+J[e].slice(8)},Km=e=>{J.length>Um.numLines&&(J=J.slice(J.length-Um.numLines)),J.push(e),Um.collapseLoops&&Gm()},qm=()=>{J=[]},Jm=()=>J,Ym=0,Y=[],Xm=null,Zm=()=>Ym,Qm=()=>{let e=JSON.parse(JSON.stringify(M)),r=0,i=Array(256+256*(ni+1)).fill(0);for(let e=0;e<256;e++){let t=e*256;T.subarray(t,t+256).some(e=>e!==255)&&(i[e]=1,r++)}for(let e=0;e<256*(ni+1);e++){let t=n+e*256;T.subarray(t,t+256).some(e=>e!==255)&&(i[256+e]=1,r++)}let a=new Uint8Array(r*256);r=0;let o=0;i.forEach((e,t)=>{if(e){let e=(t<256?0:32512)+t*256,n=T.subarray(e,e+256);a.set(n,256*r),r++,o=t}});let s=T.subarray(t,65792);return{s6502:e,extraRamSize:64*(ni+1),machineName:rg(),cardStates:Qo(),joystick:qe(),softSwitches:ng(),stackDump:Ra(),memvalid:i.slice(0,o+1).join(``),memC000:Gn.Buffer.from(s).toString(`base64`),memory:Gn.Buffer.from(a).toString(`base64`)}},$m=(e,r,i=!0)=>{let a=JSON.parse(JSON.stringify(e.s6502));Xi();let o=e.machineName||`APPLE2EE`;Dg(o,!1,i),fg(),Aa(a);let s=e.softSwitches;for(let e in s){let t=e;try{b[t].isSet=s[e]}catch{}}w.enabled&&b.NEWVIDEO&&w.writeSoftSwitch(b.NEWVIDEO.isSet?128:0),`WRITEBSR1`in s&&(b.BSR_PREWRITE.isSet=!1,b.BSR_WRITE.isSet=s.WRITEBSR1||s.WRITEBSR2||s.RDWRBSR1||s.RDWRBSR2);let c=new Uint8Array(Gn.Buffer.from(e.memory,`base64`));if(r<1){T.set(c.slice(0,65536)),T.set(c.slice(131072,163584),65536),T.set(c.slice(65536,131072),n);let e=(c.length-163584)/1024;e>0&&(ji(e+64),T.set(c.slice(163584),163584))}else if(r<2)ji(e.extraRamSize),T.set(c);else{let r=0;(typeof e.memvalid==`string`?e.memvalid.split(``).map(e=>+(e===`1`)):e.memvalid).forEach((e,t)=>{if(e){let e=c.subarray(r*256,r*256+256);t<256?T.set(e,t*256):T.set(e,n+(t-256)*256),r++}}),T.set(Gn.Buffer.from(e.memC000,`base64`),t)}e.stackDump&&za(e.stackDump),$o(e.cardStates),Je(e.joystick),Hi(),Zt(!0)},eh=e=>({emulator:null,state6502:Qm(),driveState:gc(e),thumbnail:``,snapshots:null}),th=()=>{let e=eh(!0);return e.snapshots=Y,e},nh=(e,t=!1,n=!0,r=e.emulator?.version||(e.state6502.memvalid?2:.9))=>{_g(),$m(e.state6502,r,n),_c(e.driveState),t&&(Y.length=0,Ym=0),e.snapshots&&(Y.length=0,Y.push(...e.snapshots),Ym=Y.length),n&&Xg()},rh=e=>{if(!e)throw Error(`Invalid session snapshot id`);let t=eh(!1);return Xm={id:e,state:t,auxCardEnabled:Pi(),auxCard:ug()[3]},{snapshotId:e,cycleCount:t.state6502.s6502.cycleCount}},ih=e=>{if(!Xm||Xm.id!==e)throw Error(`Session snapshot not found`);let t=Xm.state;return nh(t,!1,!1,2),{snapshotId:e,cycleCount:t.state6502.s6502.cycleCount}},ah=e=>{if(!Xm||Xm.id!==e.snapshotId)throw Error(`Session snapshot not found`);if(e.space!==`main`&&e.space!==`aux`)throw Error(`Session memory comparison requires physical main or auxiliary RAM`);let t=e.maxChanges??32;if(!Number.isInteger(t)||t<1||t>64)throw Error(`Maximum changes must be between 1 and 64`);let n=Xm.state.state6502;if(n.machineName!==rg())throw Error(`Session snapshot machine configuration has changed`);let{bytes:r,mapping:i,...a}=km(e),o=a.effectiveAuxBank;if(e.space===`aux`&&(!Xm.auxCardEnabled||Xm.auxCard!==ug()[3]||o===null||o>=n.extraRamSize/64))throw Error(`Auxiliary bank is unavailable in the session snapshot`);let s=n.memvalid,c=(o===null?0:256+o*256)+(e.address>>>8),l=c+((e.address&255)+e.length-1>>>8),u=new Uint8Array(e.length).fill(255),d=0;for(let t=0;t<=l;t++)if(s[t]===`1`){if(t>=c){let r=d*256,i=Math.floor(r/3)*3,a=n.memory.slice(i/3*4,Math.ceil((r+256)/3)*4),o=Gn.Buffer.from(a,`base64`).subarray(r-i,r-i+256),s=(t-c)*256-(e.address&255),l=Math.max(0,-s),f=Math.min(256,e.length-s);u.set(o.subarray(l,f),s+l)}d++}let f=[],p=0;for(let n=0;n<r.length;n++)u[n]!==r[n]&&(p++,f.length<t&&f.push({address:e.address+n,before:u[n],after:r[n]}));return{...a,snapshotId:e.snapshotId,baselineCycleCount:n.s6502.cycleCount,currentCycleCount:M.cycleCount,currentMapping:i,changes:f,totalChangeCount:p,truncated:p>f.length}},oh=()=>{let e=Ym-1;return e<0||!Y[e]?-1:e},sh=()=>{let e=Ym+1;return e>=Y.length||!Y[e]?-1:e},ch=()=>{Y.length===30&&Y.shift(),Y.push(eh(!1)),Ym=Y.length,y_(Y[Y.length-1].state6502.s6502.PC)},lh=()=>{let e=oh();e<0||(Rg(r.PAUSED),setTimeout(()=>{Ym===Y.length&&(ch(),e=Math.max(Ym-2,0)),Ym=e,nh(Y[Ym])},50))},uh=()=>{let e=sh();e<0||(Rg(r.PAUSED),setTimeout(()=>{Ym=e,nh(Y[e])},50))},dh=e=>{e<0||e>=Y.length||(Rg(r.PAUSED),setTimeout(()=>{Ym=e,nh(Y[e])},50))},fh=()=>{for(;Y.length>0&&Ym<Y.length-1;)Y.pop();Ym=Y.length},ph=()=>{let e=[];for(let t=0;t<Y.length;t++)e[t]={s6502:Y[t].state6502.s6502,thumbnail:Y[t].thumbnail};return e},mh=e=>{Y.length>0&&(Y[Y.length-1].thumbnail=e)};var hh=class e{static{this.FLAG_S=128}static{this.FLAG_Z=64}static{this.FLAG_Y=32}static{this.FLAG_H=16}static{this.FLAG_X=8}static{this.FLAG_PV=4}static{this.FLAG_N=2}static{this.FLAG_C=1}constructor(e){this.a=0,this.f=0,this.b=0,this.c=0,this.d=0,this.e=0,this.h=0,this.l=0,this.aPrime=0,this.fPrime=0,this.bPrime=0,this.cPrime=0,this.dPrime=0,this.ePrime=0,this.hPrime=0,this.lPrime=0,this.ix=0,this.iy=0,this.sp=65535,this.pc=0,this.i=0,this.r=0,this.iff1=!1,this.iff2=!1,this.im=1,this.halted=!1,this.parityTable=Array(256),this.bus=e,this.initParityTable(),this.reset()}initParityTable(){for(let e=0;e<256;e++){let t=0;for(let n=0;n<8;n++)e&1<<n&&t++;this.parityTable[e]=t%2==0}}reset(){this.a=255,this.f=255,this.b=0,this.c=0,this.d=0,this.e=0,this.h=0,this.l=0,this.aPrime=0,this.fPrime=0,this.bPrime=0,this.cPrime=0,this.dPrime=0,this.ePrime=0,this.hPrime=0,this.lPrime=0,this.ix=65535,this.iy=65535,this.sp=65535,this.pc=0,this.i=0,this.r=0,this.iff1=!1,this.iff2=!1,this.im=1,this.halted=!1}get bc(){return(this.b<<8|this.c)&65535}set bc(e){this.b=e>>8&255,this.c=e&255}get de(){return(this.d<<8|this.e)&65535}set de(e){this.d=e>>8&255,this.e=e&255}get hl(){return(this.h<<8|this.l)&65535}set hl(e){this.h=e>>8&255,this.l=e&255}get af(){return(this.a<<8|this.f)&65535}set af(e){this.a=e>>8&255,this.f=e&255}read8(e){return this.bus.readByte(e&65535)&255}write8(e,t){this.bus.writeByte(e&65535,t&255)}read16(e){let t=this.read8(e);return(this.read8(e+1)<<8|t)&65535}write16(e,t){this.write8(e,t&255),this.write8(e+1,t>>8&255)}push16(e){this.sp=this.sp-2&65535,this.write16(this.sp,e)}pop16(){let e=this.read16(this.sp);return this.sp=this.sp+2&65535,e}fetch8(){let e=this.read8(this.pc);return this.pc=this.pc+1&65535,this.r=this.r&128|this.r+1&127,e}fetch16(){let e=this.fetch8();return(this.fetch8()<<8|e)&65535}fetchSigned8(){let e=this.fetch8();return e>=128?e-256:e}step(){if(this.halted)return this.r=this.r&128|this.r+1&127,4;let e=this.fetch8();return this.executeOpcode(e)}executeOpcode(t){switch(t){case 0:return 4;case 1:return this.bc=this.fetch16(),10;case 2:return this.write8(this.bc,this.a),7;case 3:return this.bc=this.bc+1&65535,6;case 4:return this.b=this.inc8(this.b),4;case 5:return this.b=this.dec8(this.b),4;case 6:return this.b=this.fetch8(),7;case 7:{let t=!!(this.a&128);return this.a=(this.a<<1|!!t)&255,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(t?e.FLAG_C:0)|this.a&(e.FLAG_Y|e.FLAG_X),4}case 8:{let e=this.a;this.a=this.aPrime,this.aPrime=e;let t=this.f;return this.f=this.fPrime,this.fPrime=t,4}case 9:return this.addHL(this.bc),11;case 10:return this.a=this.read8(this.bc),7;case 11:return this.bc=this.bc-1&65535,6;case 12:return this.c=this.inc8(this.c),4;case 13:return this.c=this.dec8(this.c),4;case 14:return this.c=this.fetch8(),7;case 15:{let t=!!(this.a&1);return this.a=(this.a>>1|(t?128:0))&255,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(t?e.FLAG_C:0)|this.a&(e.FLAG_Y|e.FLAG_X),4}case 16:{let e=this.fetchSigned8();return this.b=this.b-1&255,this.b===0?8:(this.pc=this.pc+e&65535,13)}case 17:return this.de=this.fetch16(),10;case 18:return this.write8(this.de,this.a),7;case 19:return this.de=this.de+1&65535,6;case 20:return this.d=this.inc8(this.d),4;case 21:return this.d=this.dec8(this.d),4;case 22:return this.d=this.fetch8(),7;case 23:{let t=(this.f&e.FLAG_C)!==0,n=!!(this.a&128);return this.a=(this.a<<1|!!t)&255,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(n?e.FLAG_C:0)|this.a&(e.FLAG_Y|e.FLAG_X),4}case 24:{let e=this.fetchSigned8();return this.pc=this.pc+e&65535,12}case 25:return this.addHL(this.de),11;case 26:return this.a=this.read8(this.de),7;case 27:return this.de=this.de-1&65535,6;case 28:return this.e=this.inc8(this.e),4;case 29:return this.e=this.dec8(this.e),4;case 30:return this.e=this.fetch8(),7;case 31:{let t=(this.f&e.FLAG_C)!==0,n=!!(this.a&1);return this.a=(this.a>>1|(t?128:0))&255,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(n?e.FLAG_C:0)|this.a&(e.FLAG_Y|e.FLAG_X),4}case 32:{let t=this.fetchSigned8();return(this.f&e.FLAG_Z)===0?(this.pc=this.pc+t&65535,12):7}case 33:return this.hl=this.fetch16(),10;case 34:{let e=this.fetch16();return this.write16(e,this.hl),16}case 35:return this.hl=this.hl+1&65535,6;case 36:return this.h=this.inc8(this.h),4;case 37:return this.h=this.dec8(this.h),4;case 38:return this.h=this.fetch8(),7;case 39:return this.daa(),4;case 40:{let t=this.fetchSigned8();return(this.f&e.FLAG_Z)===0?7:(this.pc=this.pc+t&65535,12)}case 41:return this.addHL(this.hl),11;case 42:{let e=this.fetch16();return this.hl=this.read16(e),16}case 43:return this.hl=this.hl-1&65535,6;case 44:return this.l=this.inc8(this.l),4;case 45:return this.l=this.dec8(this.l),4;case 46:return this.l=this.fetch8(),7;case 47:return this.a=~this.a&255,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV|e.FLAG_C)|e.FLAG_H|e.FLAG_N|this.a&(e.FLAG_Y|e.FLAG_X),4;case 48:{let t=this.fetchSigned8();return(this.f&e.FLAG_C)===0?(this.pc=this.pc+t&65535,12):7}case 49:return this.sp=this.fetch16(),10;case 50:{let e=this.fetch16();return this.write8(e,this.a),13}case 51:return this.sp=this.sp+1&65535,6;case 52:{let e=this.read8(this.hl);return this.write8(this.hl,this.inc8(e)),11}case 53:{let e=this.read8(this.hl);return this.write8(this.hl,this.dec8(e)),11}case 54:return this.write8(this.hl,this.fetch8()),10;case 55:return this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|e.FLAG_C|this.a&(e.FLAG_Y|e.FLAG_X),4;case 56:{let t=this.fetchSigned8();return(this.f&e.FLAG_C)===0?7:(this.pc=this.pc+t&65535,12)}case 57:return this.addHL(this.sp),11;case 58:{let e=this.fetch16();return this.a=this.read8(e),13}case 59:return this.sp=this.sp-1&65535,6;case 60:return this.a=this.inc8(this.a),4;case 61:return this.a=this.dec8(this.a),4;case 62:return this.a=this.fetch8(),7;case 63:{let t=(this.f&e.FLAG_C)!==0;return this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(t?e.FLAG_H:0)|(t?0:e.FLAG_C)|this.a&(e.FLAG_Y|e.FLAG_X),4}case 64:return 4;case 65:return this.b=this.c,4;case 66:return this.b=this.d,4;case 67:return this.b=this.e,4;case 68:return this.b=this.h,4;case 69:return this.b=this.l,4;case 70:return this.b=this.read8(this.hl),7;case 71:return this.b=this.a,4;case 72:return this.c=this.b,4;case 73:return 4;case 74:return this.c=this.d,4;case 75:return this.c=this.e,4;case 76:return this.c=this.h,4;case 77:return this.c=this.l,4;case 78:return this.c=this.read8(this.hl),7;case 79:return this.c=this.a,4;case 80:return this.d=this.b,4;case 81:return this.d=this.c,4;case 82:return 4;case 83:return this.d=this.e,4;case 84:return this.d=this.h,4;case 85:return this.d=this.l,4;case 86:return this.d=this.read8(this.hl),7;case 87:return this.d=this.a,4;case 88:return this.e=this.b,4;case 89:return this.e=this.c,4;case 90:return this.e=this.d,4;case 91:return 4;case 92:return this.e=this.h,4;case 93:return this.e=this.l,4;case 94:return this.e=this.read8(this.hl),7;case 95:return this.e=this.a,4;case 96:return this.h=this.b,4;case 97:return this.h=this.c,4;case 98:return this.h=this.d,4;case 99:return this.h=this.e,4;case 100:return 4;case 101:return this.h=this.l,4;case 102:return this.h=this.read8(this.hl),7;case 103:return this.h=this.a,4;case 104:return this.l=this.b,4;case 105:return this.l=this.c,4;case 106:return this.l=this.d,4;case 107:return this.l=this.e,4;case 108:return this.l=this.h,4;case 109:return 4;case 110:return this.l=this.read8(this.hl),7;case 111:return this.l=this.a,4;case 112:return this.write8(this.hl,this.b),7;case 113:return this.write8(this.hl,this.c),7;case 114:return this.write8(this.hl,this.d),7;case 115:return this.write8(this.hl,this.e),7;case 116:return this.write8(this.hl,this.h),7;case 117:return this.write8(this.hl,this.l),7;case 118:return this.halted=!0,4;case 119:return this.write8(this.hl,this.a),7;case 120:return this.a=this.b,4;case 121:return this.a=this.c,4;case 122:return this.a=this.d,4;case 123:return this.a=this.e,4;case 124:return this.a=this.h,4;case 125:return this.a=this.l,4;case 126:return this.a=this.read8(this.hl),7;case 127:return 4;case 128:return this.add8(this.b),4;case 129:return this.add8(this.c),4;case 130:return this.add8(this.d),4;case 131:return this.add8(this.e),4;case 132:return this.add8(this.h),4;case 133:return this.add8(this.l),4;case 134:return this.add8(this.read8(this.hl)),7;case 135:return this.add8(this.a),4;case 136:return this.adc8(this.b),4;case 137:return this.adc8(this.c),4;case 138:return this.adc8(this.d),4;case 139:return this.adc8(this.e),4;case 140:return this.adc8(this.h),4;case 141:return this.adc8(this.l),4;case 142:return this.adc8(this.read8(this.hl)),7;case 143:return this.adc8(this.a),4;case 144:return this.sub8(this.b),4;case 145:return this.sub8(this.c),4;case 146:return this.sub8(this.d),4;case 147:return this.sub8(this.e),4;case 148:return this.sub8(this.h),4;case 149:return this.sub8(this.l),4;case 150:return this.sub8(this.read8(this.hl)),7;case 151:return this.sub8(this.a),4;case 152:return this.sbc8(this.b),4;case 153:return this.sbc8(this.c),4;case 154:return this.sbc8(this.d),4;case 155:return this.sbc8(this.e),4;case 156:return this.sbc8(this.h),4;case 157:return this.sbc8(this.l),4;case 158:return this.sbc8(this.read8(this.hl)),7;case 159:return this.sbc8(this.a),4;case 160:return this.and8(this.b),4;case 161:return this.and8(this.c),4;case 162:return this.and8(this.d),4;case 163:return this.and8(this.e),4;case 164:return this.and8(this.h),4;case 165:return this.and8(this.l),4;case 166:return this.and8(this.read8(this.hl)),7;case 167:return this.and8(this.a),4;case 168:return this.xor8(this.b),4;case 169:return this.xor8(this.c),4;case 170:return this.xor8(this.d),4;case 171:return this.xor8(this.e),4;case 172:return this.xor8(this.h),4;case 173:return this.xor8(this.l),4;case 174:return this.xor8(this.read8(this.hl)),7;case 175:return this.xor8(this.a),4;case 176:return this.or8(this.b),4;case 177:return this.or8(this.c),4;case 178:return this.or8(this.d),4;case 179:return this.or8(this.e),4;case 180:return this.or8(this.h),4;case 181:return this.or8(this.l),4;case 182:return this.or8(this.read8(this.hl)),7;case 183:return this.or8(this.a),4;case 184:return this.cp8(this.b),4;case 185:return this.cp8(this.c),4;case 186:return this.cp8(this.d),4;case 187:return this.cp8(this.e),4;case 188:return this.cp8(this.h),4;case 189:return this.cp8(this.l),4;case 190:return this.cp8(this.read8(this.hl)),7;case 191:return this.cp8(this.a),4;case 192:return(this.f&e.FLAG_Z)===0?(this.pc=this.pop16(),11):5;case 193:return this.bc=this.pop16(),10;case 194:{let t=this.fetch16();return(this.f&e.FLAG_Z)===0&&(this.pc=t),10}case 195:return this.pc=this.fetch16(),10;case 196:{let t=this.fetch16();return(this.f&e.FLAG_Z)===0?(this.push16(this.pc),this.pc=t,17):10}case 197:return this.push16(this.bc),11;case 198:return this.add8(this.fetch8()),7;case 199:return this.push16(this.pc),this.pc=0,11;case 200:return(this.f&e.FLAG_Z)===0?5:(this.pc=this.pop16(),11);case 201:return this.pc=this.pop16(),10;case 202:{let t=this.fetch16();return(this.f&e.FLAG_Z)!==0&&(this.pc=t),10}case 203:return this.executeCBPrefix();case 204:{let t=this.fetch16();return(this.f&e.FLAG_Z)===0?10:(this.push16(this.pc),this.pc=t,17)}case 205:{let e=this.fetch16();return this.push16(this.pc),this.pc=e,17}case 206:return this.adc8(this.fetch8()),7;case 207:return this.push16(this.pc),this.pc=8,11;case 208:return(this.f&e.FLAG_C)===0?(this.pc=this.pop16(),11):5;case 209:return this.de=this.pop16(),10;case 210:{let t=this.fetch16();return(this.f&e.FLAG_C)===0&&(this.pc=t),10}case 211:{let e=this.fetch8();return this.bus.writeIO&&this.bus.writeIO(this.a<<8|e,this.a),11}case 212:{let t=this.fetch16();return(this.f&e.FLAG_C)===0?(this.push16(this.pc),this.pc=t,17):10}case 213:return this.push16(this.de),11;case 214:return this.sub8(this.fetch8()),7;case 215:return this.push16(this.pc),this.pc=16,11;case 216:return(this.f&e.FLAG_C)===0?5:(this.pc=this.pop16(),11);case 217:{let e=this.b;return this.b=this.bPrime,this.bPrime=e,e=this.c,this.c=this.cPrime,this.cPrime=e,e=this.d,this.d=this.dPrime,this.dPrime=e,e=this.e,this.e=this.ePrime,this.ePrime=e,e=this.h,this.h=this.hPrime,this.hPrime=e,e=this.l,this.l=this.lPrime,this.lPrime=e,4}case 218:{let t=this.fetch16();return(this.f&e.FLAG_C)!==0&&(this.pc=t),10}case 219:{let e=this.fetch8();return this.bus.readIO&&(this.a=this.bus.readIO(this.a<<8|e)&255),11}case 220:{let t=this.fetch16();return(this.f&e.FLAG_C)===0?10:(this.push16(this.pc),this.pc=t,17)}case 221:return this.executeIXIYPrefix(!0);case 222:return this.sbc8(this.fetch8()),7;case 223:return this.push16(this.pc),this.pc=24,11;case 224:return(this.f&e.FLAG_PV)===0?(this.pc=this.pop16(),11):5;case 225:return this.hl=this.pop16(),10;case 226:{let t=this.fetch16();return(this.f&e.FLAG_PV)===0&&(this.pc=t),10}case 227:{let e=this.read16(this.sp);return this.write16(this.sp,this.hl),this.hl=e,19}case 228:{let t=this.fetch16();return(this.f&e.FLAG_PV)===0?(this.push16(this.pc),this.pc=t,17):10}case 229:return this.push16(this.hl),11;case 230:return this.and8(this.fetch8()),7;case 231:return this.push16(this.pc),this.pc=32,11;case 232:return(this.f&e.FLAG_PV)===0?5:(this.pc=this.pop16(),11);case 233:return this.pc=this.hl,4;case 234:{let t=this.fetch16();return(this.f&e.FLAG_PV)!==0&&(this.pc=t),10}case 235:{let e=this.de;return this.de=this.hl,this.hl=e,4}case 236:{let t=this.fetch16();return(this.f&e.FLAG_PV)===0?10:(this.push16(this.pc),this.pc=t,17)}case 237:return this.executeEDPrefix();case 238:return this.xor8(this.fetch8()),7;case 239:return this.push16(this.pc),this.pc=40,11;case 240:return(this.f&e.FLAG_S)===0?(this.pc=this.pop16(),11):5;case 241:return this.af=this.pop16(),10;case 242:{let t=this.fetch16();return(this.f&e.FLAG_S)===0&&(this.pc=t),10}case 243:return this.iff1=!1,this.iff2=!1,4;case 244:{let t=this.fetch16();return(this.f&e.FLAG_S)===0?(this.push16(this.pc),this.pc=t,17):10}case 245:return this.push16(this.af),11;case 246:return this.or8(this.fetch8()),7;case 247:return this.push16(this.pc),this.pc=48,11;case 248:return(this.f&e.FLAG_S)===0?5:(this.pc=this.pop16(),11);case 249:return this.sp=this.hl,6;case 250:{let t=this.fetch16();return(this.f&e.FLAG_S)!==0&&(this.pc=t),10}case 251:return this.iff1=!0,this.iff2=!0,4;case 252:{let t=this.fetch16();return(this.f&e.FLAG_S)===0?10:(this.push16(this.pc),this.pc=t,17)}case 253:return this.executeIXIYPrefix(!1);case 254:return this.cp8(this.fetch8()),7;case 255:return this.push16(this.pc),this.pc=56,11;default:return 4}}inc8(t){let n=t+1&255;return this.f=this.f&e.FLAG_C|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(n&15?0:e.FLAG_H)|(t===127?e.FLAG_PV:0)|n&(e.FLAG_Y|e.FLAG_X),n}dec8(t){let n=t-1&255;return this.f=this.f&e.FLAG_C|e.FLAG_N|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(t&15?0:e.FLAG_H)|(t===128?e.FLAG_PV:0)|n&(e.FLAG_Y|e.FLAG_X),n}add8(t){let n=this.a+t,r=n&255,i=this.a^t^r;this.f=(r===0?e.FLAG_Z:0)|r&e.FLAG_S|(i&16?e.FLAG_H:0)|(i&128?e.FLAG_PV:0)|(n>255?e.FLAG_C:0)|r&(e.FLAG_Y|e.FLAG_X),this.a=r}adc8(t){let n=(this.f&e.FLAG_C)===0?0:1,r=this.a+t+n,i=r&255,a=this.a^t^i;this.f=(i===0?e.FLAG_Z:0)|i&e.FLAG_S|(a&16?e.FLAG_H:0)|(a&128?e.FLAG_PV:0)|(r>255?e.FLAG_C:0)|i&(e.FLAG_Y|e.FLAG_X),this.a=i}sub8(t){let n=this.a-t,r=n&255,i=this.a^t^r;this.f=e.FLAG_N|(r===0?e.FLAG_Z:0)|r&e.FLAG_S|(i&16?e.FLAG_H:0)|(i&128?e.FLAG_PV:0)|(n<0?e.FLAG_C:0)|r&(e.FLAG_Y|e.FLAG_X),this.a=r}sbc8(t){let n=(this.f&e.FLAG_C)===0?0:1,r=this.a-t-n,i=r&255,a=this.a^t^i;this.f=e.FLAG_N|(i===0?e.FLAG_Z:0)|i&e.FLAG_S|(a&16?e.FLAG_H:0)|(a&128?e.FLAG_PV:0)|(r<0?e.FLAG_C:0)|i&(e.FLAG_Y|e.FLAG_X),this.a=i}and8(t){this.a=this.a&t&255,this.f=e.FLAG_H|(this.a===0?e.FLAG_Z:0)|this.a&e.FLAG_S|(this.parityTable[this.a]?e.FLAG_PV:0)|this.a&(e.FLAG_Y|e.FLAG_X)}xor8(t){this.a=(this.a^t)&255,this.f=(this.a===0?e.FLAG_Z:0)|this.a&e.FLAG_S|(this.parityTable[this.a]?e.FLAG_PV:0)|this.a&(e.FLAG_Y|e.FLAG_X)}or8(t){this.a=(this.a|t)&255,this.f=(this.a===0?e.FLAG_Z:0)|this.a&e.FLAG_S|(this.parityTable[this.a]?e.FLAG_PV:0)|this.a&(e.FLAG_Y|e.FLAG_X)}cp8(t){let n=this.a-t,r=n&255,i=this.a^t^r;this.f=e.FLAG_N|(r===0?e.FLAG_Z:0)|r&e.FLAG_S|(i&16?e.FLAG_H:0)|(i&128?e.FLAG_PV:0)|(n<0?e.FLAG_C:0)|t&(e.FLAG_Y|e.FLAG_X)}addHL(t){let n=this.hl,r=n+t,i=n^t^r;this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(i&4096?e.FLAG_H:0)|(r>65535?e.FLAG_C:0)|r>>8&255&(e.FLAG_Y|e.FLAG_X),this.hl=r&65535}daa(){let t=this.a,n=this.f,r=0,i=!1;((n&e.FLAG_H)!==0||(t&15)>9)&&(r|=6),((n&e.FLAG_C)!==0||t>153)&&(r|=96,i=!0),t=(n&e.FLAG_N)===0?t+r&255:t-r&255,n=n&e.FLAG_N|(t===0?e.FLAG_Z:0)|t&e.FLAG_S|(this.parityTable[t]?e.FLAG_PV:0)|(i?e.FLAG_C:0)|t&(e.FLAG_Y|e.FLAG_X),this.a=t,this.f=n}executeCBPrefix(){let t=this.fetch8(),n=t&7,r=t>>3&7,i=t>>6&3,a=this.getRegByIdx(n);if(i===0){switch(r){case 0:{let t=!!(a&128);a=(a<<1|!!t)&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}case 1:{let t=!!(a&1);a=(a>>1|(t?128:0))&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}case 2:{let t=(this.f&e.FLAG_C)!==0,n=!!(a&128);a=(a<<1|!!t)&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(n?e.FLAG_C:0);break}case 3:{let t=(this.f&e.FLAG_C)!==0,n=!!(a&1);a=(a>>1|(t?128:0))&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(n?e.FLAG_C:0);break}case 4:{let t=!!(a&128);a=a<<1&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}case 5:{let t=!!(a&1);a=(a>>1|a&128)&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}case 6:{let t=!!(a&128);a=(a<<1|1)&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}case 7:{let t=!!(a&1);a=a>>1&255,this.f=(a===0?e.FLAG_Z:0)|a&e.FLAG_S|(this.parityTable[a]?e.FLAG_PV:0)|(t?e.FLAG_C:0);break}}return this.setRegByIdx(n,a),n===6?15:8}if(i===1){let t=!!(a&1<<r);return this.f=this.f&e.FLAG_C|e.FLAG_H|(t?0:e.FLAG_Z|e.FLAG_PV)|a&(e.FLAG_Y|e.FLAG_X),n===6?12:8}return i===2?(a&=~(1<<r),this.setRegByIdx(n,a&255),n===6?15:8):(a|=1<<r,this.setRegByIdx(n,a&255),n===6?15:8)}sbcHL(t){let n=(this.f&e.FLAG_C)===0?0:1,r=this.hl,i=r-t-n,a=i&65535,o=r^t^a;this.f=e.FLAG_N|(a===0?e.FLAG_Z:0)|a>>8&e.FLAG_S|(o&4096?e.FLAG_H:0)|(o&32768?e.FLAG_PV:0)|(i<0?e.FLAG_C:0),this.hl=a}adcHL(t){let n=(this.f&e.FLAG_C)===0?0:1,r=this.hl,i=r+t+n,a=i&65535,o=r^t^a;this.f=(a===0?e.FLAG_Z:0)|a>>8&e.FLAG_S|(o&4096?e.FLAG_H:0)|(o&32768?e.FLAG_PV:0)|(i>65535?e.FLAG_C:0),this.hl=a}executeEDPrefix(){switch(this.fetch8()){case 71:return this.i=this.a,9;case 79:return this.r=this.a,9;case 87:return this.a=this.i,this.f=this.f&e.FLAG_C|(this.a===0?e.FLAG_Z:0)|this.a&e.FLAG_S|(this.iff2?e.FLAG_PV:0),9;case 95:return this.a=this.r,this.f=this.f&e.FLAG_C|(this.a===0?e.FLAG_Z:0)|this.a&e.FLAG_S|(this.iff2?e.FLAG_PV:0),9;case 67:{let e=this.fetch16();return this.write16(e,this.bc),20}case 83:{let e=this.fetch16();return this.write16(e,this.de),20}case 99:{let e=this.fetch16();return this.write16(e,this.hl),20}case 115:{let e=this.fetch16();return this.write16(e,this.sp),20}case 75:{let e=this.fetch16();return this.bc=this.read16(e),20}case 91:{let e=this.fetch16();return this.de=this.read16(e),20}case 107:{let e=this.fetch16();return this.hl=this.read16(e),20}case 123:{let e=this.fetch16();return this.sp=this.read16(e),20}case 66:return this.sbcHL(this.bc),15;case 82:return this.sbcHL(this.de),15;case 98:return this.sbcHL(this.hl),15;case 114:return this.sbcHL(this.sp),15;case 74:return this.adcHL(this.bc),15;case 90:return this.adcHL(this.de),15;case 106:return this.adcHL(this.hl),15;case 122:return this.adcHL(this.sp),15;case 68:case 84:case 100:case 116:case 76:case 92:case 108:case 124:{let e=this.a;return this.a=0,this.sub8(e),8}case 69:case 85:case 101:case 117:case 77:case 93:case 109:case 125:return this.pc=this.pop16(),this.iff1=this.iff2,14;case 160:{let t=this.read8(this.hl);return this.write8(this.de,t),this.hl=this.hl+1&65535,this.de=this.de+1&65535,this.bc=this.bc-1&65535,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_C)|(this.bc===0?0:e.FLAG_PV),16}case 176:{let t=this.read8(this.hl);return this.write8(this.de,t),this.hl=this.hl+1&65535,this.de=this.de+1&65535,this.bc=this.bc-1&65535,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_C)|(this.bc===0?0:e.FLAG_PV),this.bc===0?16:(this.pc=this.pc-2&65535,21)}case 168:{let t=this.read8(this.hl);return this.write8(this.de,t),this.hl=this.hl-1&65535,this.de=this.de-1&65535,this.bc=this.bc-1&65535,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_C)|(this.bc===0?0:e.FLAG_PV),16}case 184:{let t=this.read8(this.hl);return this.write8(this.de,t),this.hl=this.hl-1&65535,this.de=this.de-1&65535,this.bc=this.bc-1&65535,this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_C)|(this.bc===0?0:e.FLAG_PV),this.bc===0?16:(this.pc=this.pc-2&65535,21)}case 161:{let t=this.read8(this.hl),n=this.a-t&255;return this.hl=this.hl+1&65535,this.bc=this.bc-1&65535,this.f=e.FLAG_N|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(this.bc===0?0:e.FLAG_PV)|this.f&e.FLAG_C,16}case 177:{let t=this.read8(this.hl),n=this.a-t&255;return this.hl=this.hl+1&65535,this.bc=this.bc-1&65535,this.f=e.FLAG_N|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(this.bc===0?0:e.FLAG_PV)|this.f&e.FLAG_C,this.bc!==0&&n!==0?(this.pc=this.pc-2&65535,21):16}case 169:{let t=this.read8(this.hl),n=this.a-t&255;return this.hl=this.hl-1&65535,this.bc=this.bc-1&65535,this.f=e.FLAG_N|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(this.bc===0?0:e.FLAG_PV)|this.f&e.FLAG_C,16}case 185:{let t=this.read8(this.hl),n=this.a-t&255;return this.hl=this.hl-1&65535,this.bc=this.bc-1&65535,this.f=e.FLAG_N|(n===0?e.FLAG_Z:0)|n&e.FLAG_S|(this.bc===0?0:e.FLAG_PV)|this.f&e.FLAG_C,this.bc!==0&&n!==0?(this.pc=this.pc-2&65535,21):16}case 70:case 102:return this.im=0,8;case 86:case 118:return this.im=1,8;case 94:case 126:return this.im=2,8;default:return 8}}executeIXIYPrefix(t){let n=this.fetch8(),r=()=>t?this.ix:this.iy,i=e=>{t?this.ix=e&65535:this.iy=e&65535};if(n===33)return i(this.fetch16()),14;if(n===34)return this.write16(this.fetch16(),r()),20;if(n===42)return i(this.read16(this.fetch16())),20;if(n===35)return i(r()+1),10;if(n===43)return i(r()-1),10;if(n===225)return i(this.pop16()),14;if(n===229)return this.push16(r()),15;if(n===249)return this.sp=r(),10;if(n===227){let e=this.read16(this.sp);return this.write16(this.sp,r()),i(e),23}if(n===233)return this.pc=r(),8;if(n===9||n===25||n===41||n===57){let t=n===9?this.bc:n===25?this.de:n===41?r():this.sp,a=r(),o=a+t,s=a^t^o;return this.f=this.f&(e.FLAG_S|e.FLAG_Z|e.FLAG_PV)|(s&4096?e.FLAG_H:0)|(o>65535?e.FLAG_C:0),i(o),15}if(n===52){let e=this.fetchSigned8(),t=r()+e&65535,n=this.inc8(this.read8(t));return this.write8(t,n),23}if(n===53){let e=this.fetchSigned8(),t=r()+e&65535,n=this.dec8(this.read8(t));return this.write8(t,n),23}if(n===54){let e=this.fetchSigned8(),t=this.fetch8();return this.write8(r()+e&65535,t),19}if([70,78,86,94,102,110,126].includes(n)){let e=this.fetchSigned8(),t=this.read8(r()+e&65535),i=n-64>>3;return this.setRegByIdx(i,t),19}if([112,113,114,115,116,117,119].includes(n)){let e=this.fetchSigned8(),t=n&7;return this.write8(r()+e&65535,this.getRegByIdx(t)),19}if([134,142,150,158,166,174,182,190].includes(n)){let e=this.fetchSigned8(),t=this.read8(r()+e&65535);switch(n){case 134:this.add8(t);break;case 142:this.adc8(t);break;case 150:this.sub8(t);break;case 158:this.sbc8(t);break;case 166:this.and8(t);break;case 174:this.xor8(t);break;case 182:this.or8(t);break;case 190:this.cp8(t)}return 19}return this.executeOpcode(n)}getRegByIdx(e){switch(e){case 0:return this.b;case 1:return this.c;case 2:return this.d;case 3:return this.e;case 4:return this.h;case 5:return this.l;case 6:return this.read8(this.hl);case 7:return this.a;default:return 0}}setRegByIdx(e,t){switch(t&=255,e){case 0:this.b=t;break;case 1:this.c=t;break;case 2:this.d=t;break;case 3:this.e=t;break;case 4:this.h=t;break;case 5:this.l=t;break;case 6:this.write8(this.hl,t);break;case 7:this.a=t}}};let gh=[1,2,3,4,5,6,7,8,9,10,11,13,14,15,12,0];var _h=class{constructor(e=2){this.enabled=!0,this.slot=2,this.activeCpu=`6502`,this.z80Initialized=!1,this.memoryBus=null,this.slot=e,this.z80=new hh(this)}reset(){this.activeCpu=`6502`,this.z80Initialized=!1,this.z80.reset()}setMemoryBus(e){this.memoryBus=e}translateZ80Address(e){let t=e>>12&15,n=e&4095;return gh[t]<<12|n}readByte(e){let t=this.translateZ80Address(e);return this.memoryBus?this.memoryBus.read(t)&255:255}writeByte(e,t){let n=this.translateZ80Address(e);if(n===(49152|this.slot<<8)){this.deactivateZ80();return}this.memoryBus&&this.memoryBus.write(n,t&255)}activateZ80(){this.activeCpu=`Z80`,this.z80Initialized||=(this.z80.reset(),!0)}deactivateZ80(){this.activeCpu=`6502`}stepZ80(){return this.activeCpu===`Z80`?this.z80.step():0}};let vh=0,yh=0,bh=!1,xh=`default`,Sh=!1,Ch=16.6881,wh=17030,X=r.IDLE,Th=()=>X,Eh,Dh=0,Oh=-1,kh=0,Ah=`paused`,jh=`idle`,Mh=null,Nh=null,Ph=l.NONE,Fh=0,Ih=`APPLE2EE`,Lh=0,Rh=s.AUTO_OFF,zh=1e5,Bh=0,Vh=!1,Hh=0,Uh=!1,Wh=[],Gh=e=>{Ph=e,Xg()},Kh=e=>{if(X!==r.PAUSED)throw Error(`Memory is available only while the emulator is paused`);return km(e)},qh=e=>{if(X!==r.PAUSED)throw Error(`Memory is available only while the emulator is paused`);return jm(e)},Jh=e=>{if(X!==r.PAUSED)throw Error(`Session snapshots can be created only while the emulator is paused`);return rh(e)},Yh=e=>{if(X!==r.PAUSED)throw Error(`Memory is available only while the emulator is paused`);return ah(e)},Xh=e=>{if(X!==r.PAUSED)throw Error(`Session snapshots can be restored only while the emulator is paused`);let t=ih(e);return Rg(r.PAUSED,!1,void 0,{reason:`explicit`}),t},Zh=e=>{if(X!==r.PAUSED)throw Error(`Memory write watchpoints can be changed only while the emulator is paused`);let t=Om(e);if(t.length>4096)throw Error(`Memory write watchpoint length must be between 1 and 4096`);let n=t.space===`aux`?t.auxBank:null,i={watchpointId:`mwp:${t.space}:${n??`-`}:${t.address}:${t.length}`,address:t.address,length:t.length,space:t.space,auxBank:n};return br(i),{...i,executionSequence:kh}},Qh=()=>{if(X!==r.PAUSED)throw Error(`Memory write watchpoints can be changed only while the emulator is paused`);return{cleared:br(null)}},$h=e=>{Uh=e},eg=()=>{b.VBLINV.isSet=!1,gl()},tg=()=>{b.VBLINV.isSet=!0},ng=()=>{let e={};for(let t in b)e[t]=b[t].isSet;return e},rg=()=>Ih,ig=(e,t)=>{Aa(e),Xg(),t!==void 0&&$(t)},ag=()=>{qr(),Di(),Oi()},og=e=>{ka(e),ag(),Bh=M.cycleCount,Xg()},sg=e=>{Sh=e,Xg()},cg=new _h(2),Z={...o},lg=e=>{Z={...e},dg=!1,fg(),Xg()},ug=()=>Z,dg=!1,fg=()=>{if(dg)return;dg=!0,jr(),Xo();for(let e=1;e<=7;e++)Ji(e);Ih===`APPLE2P`?Z[3]!==`none`&&Z[3]!==`videoterm`&&Z[3]!==`vidhd`&&(Z[3]=`videoterm`):Z[3]!==`none`&&Z[3]!==`aux`&&Z[3]!==`vidhd`&&(Z[3]=`aux`),cg.enabled=!1,Lh=0;let e=e=>{Ji(e),cg.slot=e,cg.enabled=!0,cg.setMemoryBus({read:e=>k(e,!1),write:(e,t)=>A(e,t)}),qi(e,(t,n=-1)=>(t>>8===192+e&&n>=0&&cg.activateZ80(),-1))};Z[1]===`ssc`&&Ic(),Z[2]===`softcard`?e(2):Z[2]===`passport`?Gl(!0,2):Z[2]===`vera`&&(Np(!0,2),Lh=2),Z[3]===`videoterm`?Qr():$r(),Z[3]===`vidhd`?pg(3):mg(),Ni(Z[3]===`aux`||Z[3]===`vidhd`),Z[4]===`mockingboard`?Ip(!0,4):Z[4]===`mouse`?hl(!0,4):Z[4]===`vera`?(Np(!0,4),Lh=4):Z[4]===`softcard`&&e(4),Z[5]===`mouse`?hl(!0,5):Z[5]===`mockingboard`?Ip(!0,5):Z[5]===`softcard`&&e(5),Z[6]===`disk2`&&Ms(),Z[7]===`smartport`&&(!cg.enabled||Sc())&&Zs(),Io()},pg=(e=3)=>{w.enabled=!0,w.slot=e,w.reset(),Yi(e,w.rom)},mg=()=>{w.enabled=!1,w.reset()},hg=()=>{cg.reset(),C.reset(),w.enabled&&w.reset(),vc(),We(),el(),Kl(),Lh!==0&&Mp(),Fc(),Z[4]===`mockingboard`&&rm(4),Z[5]===`mockingboard`&&rm(5)},gg=()=>{ka(0),Xi(),Ai(Ih),fg();{let e=Ks(768,`
        ORG   $300
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
        NOP
OVER    LDA   #$00
LOOPA   LDX   #$00
LOOPX   LDY   #$00
LOOPY   INY
        BNE   LOOPY
        INX
        BNE   LOOPX  ; do inner Y loop again, 256 times
        INC
        STA   $315
        BNE   LOOPA  ; do inner X loop again, 256 times
        JMP   OVER   ; do outer loop forever
        RTS
`.split(`
`));T.set(e,768)}(!cg.enabled||Sc())&&Zs(),_g(),dc(1).filename===``&&(Zs(!1),(!cg.enabled||Sc())&&setTimeout(()=>{Zs()},200))},_g=()=>{Dr(),Fn(),k(49282,!1),ja(),hg(),ag(),Bh=M.cycleCount,Zt(!0)},vg=(e,t)=>{vh=e,Ch=vh===4?0:16.6881,wh=17030*[.1,.5,1,2,3,4,24][vh+2],Lg(),Xg(),t!==void 0&&$(t)},yg=e=>{xh=e},bg=()=>xh===`game`||xh===`embed`,xg=e=>{bh=e,Xg()},Sg=e=>{switch(Rh=e,Bh=M.cycleCount,Rh){case s.AUTO_OFF:case s.AUTO_100K:zh=1e5;break;case s.AUTO_1M:zh=1e6;break;default:console.error(`Unknown auto snapshot mode: ${Rh}`),zh=1e5}},Cg=(e,t)=>{e>>8==192?A(e,t):T[e]=t,e>=8192&&e<=24575&&X===r.PAUSED&&da(le(e)),Xg()},wg=(e,t,n)=>{let r=0;try{for(let n of t)A(e+r,n),r+=1;Tg(e,t.length),n!==void 0&&$(n)}catch(e){if(n===void 0)throw e;$(n,`Memory write processed ${r} of ${t.length} bytes; the next byte and earlier writes may have taken effect. ${e instanceof Error?e.message:String(e)}`)}},Tg=(e,t)=>{if(X===r.PAUSED){let n=new Set;for(let r=0;r<t;r++){let t=e+r;t>=8192&&t<=24575&&n.add(le(t))}n.forEach(da)}Xg()},Eg=(e,t,n)=>{try{fg(),ha(e,t),Tg(e,t.length),n!==void 0&&$(n)}catch(e){if(n===void 0)throw e;$(n,e instanceof Error?e.message:String(e))}},Dg=(e,t=!0,n=!0)=>{Ih=e,e===`APPLE2P`?Z[3]!==`none`&&Z[3]!==`videoterm`&&Z[3]!==`vidhd`&&(Z[3]=`videoterm`):Z[3]!==`none`&&Z[3]!==`aux`&&Z[3]!==`vidhd`&&(Z[3]=`aux`),dg=!1,Ai(Ih),fg(),t&&_g(),n&&Xg()},Og=e=>{(e===0||e===2||e===4)&&Lh!==e&&(Lh=e,e===2?(Z[2]=`vera`,Z[4]===`vera`&&(Z[4]=`none`)):e===4?(Z[4]=`vera`,Z[2]===`vera`&&(Z[2]=`none`)):(Z[2]===`vera`&&(Z[2]=`none`),Z[4]===`vera`&&(Z[4]=`none`)),dg=!1,fg(),Xg())},kg=e=>{let t={...M},n=pa(256),r=Ks(256,`
       JSR   $D82A
LOOP   JMP   LOOP
`.split(`
`));for(let t=0;t<e.length;t++)T[512+t]=e.charCodeAt(t);T[512+e.length]=0,T.set(r,256),T[184]=0,T[185]=2,M.Accum=e.charCodeAt(0),M.PC=256,setTimeout(()=>{ma(256,n),Aa(t)},30)},Ag=e=>{ji(e),Xg()},jg=null,Mg=null,Ng=()=>{jg&&=(clearTimeout(jg),null);let e=performance.now();Mg===null&&(Mg=e),e-Mg>=200?(Mg=null,Vh=!0):jg=setTimeout(()=>{Vh=!0,jg=null,Mg=null},90)},Pg=()=>{hr(),X===r.IDLE&&(gg(),X=r.PAUSED),Uh||qm(),Jr(Uh?Km:null)!==-1&&Rg(r.PAUSED,!0,void 0,{reason:`step`})},Fg=()=>{hr(),X===r.IDLE&&(gg(),X=r.PAUSED),k(M.PC,!1)===32?(Uh||qm(),Jr(Uh?Km:null)!==-1&&Ig()):Pg()},Ig=()=>{hr(),X===r.IDLE&&(gg(),X=r.PAUSED),_r(),Rg(r.RUNNING)},Lg=()=>{Wh=[{time:performance.now(),cycles:M.cycleCount}],Fh=performance.now()},Rg=(e,t=!0,n,i)=>{e!==r.RUNNING&&(Vm(`unexpected_stop`),on()),Eh!==void 0&&Eh!==n&&$(Eh,`Worker operation was superseded`);let a=e===r.NEED_BOOT||e===r.NEED_RESET;Eh=a?n:void 0,fg(),t&&X===r.RUNNING&&e===r.PAUSED&&(Sh=!0),X=e,X===r.RUNNING&&Ah!==`running`?(kh++,Ah=`running`,jh=null,Mh=null,Nh=null,Dh>0&&(Oh=M.cycleCount)):X===r.PAUSED&&(Ah!==`paused`||i!==void 0)?(kh++,Ah=`paused`,jh=i?.reason??`explicit`,Mh=i?.breakpointAddress??null,Nh=i?.memoryWrite??null):X===r.IDLE&&(Ah!==`paused`||jh!==`idle`)&&(kh++,Ah=`paused`,jh=`idle`,Mh=null,Nh=null),X===r.PAUSED?(Vn(),Hh&&=(clearInterval(Hh),0),yc()):X===r.RUNNING&&(yc(!0),hr(),fh(),Hh||=setInterval(Zt,1e3)),Uh||qm(),Xg(),e!==r.RUNNING&&!a&&Hm(M.cycleCount),Lg(),yh===0&&(yh=1,e_()),n!==void 0&&!a&&$(n)},zg=e=>{Dh=isNaN(e)||e<1?0:e},Bg=e=>{X===r.IDLE?(Rg(r.NEED_BOOT),setTimeout(()=>{Rg(r.NEED_RESET),setTimeout(()=>{e()},200)},200)):e()},Vg=(e,t,n)=>{Bg(()=>{ma(e,t),n&&Na(e)})},Hg=(e,t,n=e)=>{fg(),_g(),ma(e,t),Na(n),Rg(r.RUNNING,!1)},Ug=e=>{Bg(()=>{bn(e)})},Wg=()=>{if(X===r.IDLE||!bh)return new Uint8Array;switch(Ph){case l.CURRENT:return va();case l.MAIN:return ya();case l.AUX:return ba();case l.HGR1:return xa();case l.HGR2:return Sa();case l.NONE:default:return new Uint8Array}},Gg=()=>X===r.IDLE||!bh||Ph===l.CURRENT?new Uint8Array:va(),Kg=()=>{let e=_a(),t=e[105]|e[106]<<8,n=e[107]|e[108]<<8,r=T.slice(t,n+1),i=r.length-1;r[i]=0;for(let e=0;e<i;e+=7){let t=r.slice(e,e+7),n=t[0];if(n===0)break;let i=t[1];if(!(n&128)&&i&128){let n=t[3]|t[4]<<8,i=t[2],a=T.slice(n,n+i);r[e+3]=r.length&255,r[e+4]=r.length>>8&255,r=new Uint8Array([...r,...a])}}return r},qg=()=>X===r.IDLE?``:Ba(),Jg=!1,Yg=()=>(k(b.PB0.isSetAddr,!1),k(b.PB1.isSetAddr,!1),{addressGetTable:E,altChar:b.ALTCHARSET.isSet,basicMemory:Kg(),breakpoints:pr,button0:b.PB0.isSet,button1:b.PB1.isSet,canGoBackward:oh()>=0,canGoForward:sh()>=0,c800Slot:si(),cout:k(57,!1)<<8|k(56,!1),cpuSpeed:yh,currentMemory:Gg(),extraRamSize:64*(ni+1),execution:{executionSequence:kh,state:Ah,pauseReason:jh,breakpoint:Mh===null?null:{breakpointId:`bp:${Mh}`,address:Mh},memoryWrite:Nh,PC:M.PC,A:M.Accum,X:M.XReg,Y:M.YReg,S:M.StackPtr,PStatus:M.PStatus,machineName:Ih,memoryConfiguration:{slot3Card:Z[3],ramWorksKb:64*(ni+1)}},heatMapCPU:Gr(),heatMapCPUMax:Kr(),heatMapGetMem:Ci(),heatMapGetMemMax:Ti(),heatMapSetMem:wi(),heatMapSetMemMax:Ei(),hires:fa(),iTempState:Zm(),isDebugging:bh,isTracing:Uh,lores:aa(!0),machineName:Ih,memoryDump:Wg(),noDelayMode:!b.COLUMN80.isSet&&b.DHIRES.isSet&&Ih!==`APPLE2P`,ramWorksBank:li(),runMode:X,s6502:M,showDebugTab:Sh,shr:Ca(),slotConfig:Z,softSwitches:ng(),speedMode:vh,stackString:qg(),textPage:aa(),timeTravelThumbnails:ph(),tracelog:X===r.PAUSED?Jm():[],veraSlot:Lh,vidhdActive:w.active,zeroPage:_a()}),Xg=()=>{let e=Yg();o_(e),Jg||(Jg=!0,b_(Bn()))},Zg=e=>{if(e)for(let t=0;t<e.length;t++)Ln(e[t]);else Rn();e&&(e[0]<=49167||e[0]>=49232)&&Hi(),Xg()},Qg=e=>{jn(e.mode,e.enabled),Hi(),Xg()},$g=()=>{if(X===r.IDLE||X===r.PAUSED)return;if(X===r.NEED_BOOT){let e=Eh;Eh=void 0,gg(),Rg(r.RUNNING),e!==void 0&&$(e)}else if(X===r.NEED_RESET){let e=Eh;Eh=void 0,_g(),Rg(r.RUNNING),e!==void 0&&$(e)}let e=0,t=-1;for(;;){let n=0;if(cg.activeCpu===`Z80`){let e=cg.stepZ80()||4;n=Math.max(1,Math.round(e/2)),M.cycleCount+=n}else n=Jr(Uh?Km:null);if(zm()||cn(),Bm()){Rg(r.PAUSED,!1,void 0,{reason:`input-sequence`});break}if(n<0)break;e+=n;let i=M.cycleCount%17030;if(i<4550)b.VBLINV.isSet&&eg();else{tg();let e=Math.floor((i-4550)/65);e!==t&&e<192&&(t=e,da(e))}if(Dh>0&&M.cycleCount-Oh>=Dh){Dh=0,Rg(r.PAUSED,!0,void 0,{reason:`cycle-limit`});break}if(e>=wh)break}Wh.length>120&&Wh.shift(),Wh.push({time:performance.now(),cycles:M.cycleCount});let n=Wh.length>1?(Wh[Wh.length-1].cycles-Wh[0].cycles)/(Wh[Wh.length-1].time-Wh[0].time):0;yh=n<1e4?Math.round(n/10)/100:Math.round(n/100)/10,st(),un(),Xg(),Rh!==s.AUTO_OFF&&M.cycleCount-Bh>=zh&&(Bh=M.cycleCount,Ng()),Vh&&(Vh=!1,ch())},e_=()=>{$g(),Fh+=Ch;let e=performance.now(),t=Fh-e;t<0&&(Fh=e,t=0),t=X===r.PAUSED?20:Math.max(1,t),setTimeout(e_,t)},Q=(e,t)=>{try{self.postMessage({msg:e,payload:t})}catch(e){console.error(`worker2main: doPostMessage error: ${e}`)}},t_=(e,t)=>{t===0?Q(i.VERA_FRAME,{dcVideo:t}):Q(i.VERA_FRAME,{fb:e,dcVideo:t})},n_=e=>{Q(i.ERRORMSG,e)},r_=e=>{Q(i.VERA_PSG_BATCH,e)},i_=e=>{Q(i.VERA_PCM_WRITE,e)},a_=e=>{Q(i.VERA_SD_STATUS,e)};Su(a_);let o_=e=>{Q(i.MACHINE_STATE,e)},s_=e=>{Q(i.CLICK,e)},c_=(e,t=!1)=>{Q(i.DRIVE_PROPS,t?{props:e,replaceDiskData:t}:e)},l_=e=>{Q(i.DRIVE_SOUND,e)},u_=e=>{Q(i.GET_MEMORY_RESPONSE,e)},d_=e=>{Q(i.SAVE_STATE,e)},f_=e=>{Q(i.RUMBLE,e)},p_=e=>{Q(i.HELP_TEXT,e)},m_=e=>{Q(i.ENHANCED_MIDI,e)},h_=e=>{Q(i.SHOW_APPLE_MOUSE,e)},g_=e=>{Q(i.MBOARD_SOUND,e)},__=e=>{Q(i.COMM_DATA,e)},v_=e=>{Q(i.MIDI_DATA,e)},y_=e=>{Q(i.REQUEST_THUMBNAIL,e)},b_=e=>{Q(i.SOFTSWITCH_DESCRIPTIONS,e)},x_=e=>{Q(i.INSTRUCTIONS,e)},S_=e=>{Q(i.SERIAL_CONFIG_CHANGE,e)},$=(e,t,n)=>{Q(i.OPERATION_RESULT,n===void 0?{operationId:e,error:t}:{operationId:e,error:t,value:n})};typeof self<`u`&&(self.onmessage=e=>{if(!(!e.data||typeof e.data!=`object`)&&`msg`in e.data)switch(e.data.msg){case a.RUN_MODE:Rg(e.data.payload,!0,e.data.operationId);break;case a.CYCLES_TO_RUN:zg(e.data.payload);break;case a.STATE6502:ig(e.data.payload,e.data.operationId);break;case a.DEBUG:xg(e.data.payload);break;case a.APP_MODE:yg(e.data.payload);break;case a.SHOW_DEBUG_TAB:sg(e.data.payload);break;case a.BREAKPOINTS:yr(e.data.payload);break;case a.STEP_INTO:Pg();break;case a.STEP_OVER:Fg();break;case a.STEP_OUT:Ig();break;case a.AUTO_SNAPSHOT:Sg(e.data.payload);break;case a.BASIC_STEP:vr();break;case a.SPEED:vg(e.data.payload,e.data.operationId);break;case a.TIME_TRAVEL_STEP:e.data.payload===`FORWARD`?uh():lh();break;case a.TIME_TRAVEL_INDEX:dh(e.data.payload);break;case a.TIME_TRAVEL_SNAPSHOT:Ng();break;case a.THUMBNAIL_IMAGE:mh(e.data.payload);break;case a.RESTORE_STATE:nh(e.data.payload,!0);break;case a.KEYBOARD_STATE:Vm(`cancelled`),ln(e.data.payload),e.data.operationId!==void 0&&$(e.data.operationId);break;case a.KEY_SEQUENCE:if(e.data.operationId===void 0)break;if(Th()!==r.RUNNING){$(e.data.operationId,void 0,{outcome:`not_running`,keysDelivered:0,keyMayHaveBeenObserved:!1});break}if(Lm()){$(e.data.operationId,void 0,{outcome:`input_busy`,keysDelivered:0,keyMayHaveBeenObserved:!1});break}sn(e.data.payload).then(t=>$(e.data.operationId,void 0,t),t=>$(e.data.operationId,t instanceof Error?t.message:String(t)));break;case a.CONDITIONAL_KEY_SEQUENCE:if(e.data.operationId===void 0)break;try{let t=e.data.payload,n=Th();if(n!==r.RUNNING&&!(n===r.PAUSED&&t.startExecution)){$(e.data.operationId,void 0,{outcome:`not_running`,completedPhases:0,failurePhase:0,keyDeliveries:[],cyclesElapsed:0});break}let i=Rm(t,M.cycleCount);n===r.PAUSED&&Lm()&&Rg(r.RUNNING,!1),i.then(t=>$(e.data.operationId,void 0,t),t=>$(e.data.operationId,t instanceof Error?t.message:String(t)))}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.CANCEL_CONDITIONAL_KEY_SEQUENCE:{let t=Vm(`cancelled`);t&&Rg(r.PAUSED,!1,void 0,{reason:`input-sequence`}),e.data.operationId!==void 0&&$(e.data.operationId,void 0,{cancelled:t});break}case a.KEYPRESS:Vm(`cancelled`),yn(e.data.payload);break;case a.KEYRELEASE:fn();break;case a.MOUSEEVENT:_l(e.data.payload);break;case a.PASTE_TEXT:Vm(`cancelled`),Ug(e.data.payload);break;case a.APPLE_PRESS:Ge(!0,e.data.payload);break;case a.APPLE_RELEASE:Ge(!1,e.data.payload);break;case a.GET_MEMORY_REQUEST:u_(va());break;case a.GET_MEMORY_VIEW:try{$(e.data.operationId,void 0,Kh(e.data.payload))}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.COMPARE_SESSION_MEMORY:case a.FIND_MEMORY:try{$(e.data.operationId,void 0,e.data.msg===a.COMPARE_SESSION_MEMORY?Yh(e.data.payload):qh(e.data.payload))}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.SET_MEMORY_WRITE_WATCHPOINT:try{$(e.data.operationId,void 0,Zh(e.data.payload))}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.CLEAR_MEMORY_WRITE_WATCHPOINT:try{$(e.data.operationId,void 0,Qh())}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.CREATE_SESSION_SNAPSHOT:case a.RESTORE_SESSION_SNAPSHOT:try{$(e.data.operationId,void 0,e.data.msg===a.CREATE_SESSION_SNAPSHOT?Jh(String(e.data.payload)):Xh(String(e.data.payload)))}catch(t){$(e.data.operationId,t instanceof Error?t.message:String(t))}break;case a.GET_SAVE_STATE:d_(eh(!0));break;case a.GET_SAVE_STATE_SNAPSHOTS:d_(th());break;case a.DRIVE_PROPS:{let t=e.data.payload;xc(t);break}case a.DRIVE_NEW_DATA:{let t=e.data.payload;try{let n=`props`in t?bc(t.props,t.forceIndex):bc(t);if(e.data.operationId!==void 0){if(!n)throw Error(`Worker rejected disk image`);$(e.data.operationId)}}catch(t){if(e.data.operationId===void 0)throw t;$(e.data.operationId,t instanceof Error?t.message:String(t))}break}case a.GAMEPAD:tt(e.data.payload);break;case a.SET_BINARY_BLOCK:{let t=e.data.payload;Vg(t.address,t.data,t.run);break}case a.RUN_BINARY:{let t=e.data.payload;Hg(t.address,t.data,t.entryAddress);break}case a.LOAD_BINARY:{let t=e.data.payload;Eg(t.address,t.data,e.data.operationId);break}case a.SET_CYCLECOUNT:og(e.data.payload);break;case a.SET_MEMORY:{let t=e.data.payload;Cg(t.address,t.value);break}case a.WRITE_MEMORY:{let t=e.data.payload;wg(t.address,t.data,e.data.operationId);break}case a.COMM_DATA:Pc(e.data.payload);break;case a.MIDI_DATA:Wl(e.data.payload);break;case a.RAMWORKS:Ag(e.data.payload);break;case a.MACHINE_NAME:Dg(e.data.payload);break;case a.VERA_SLOT:Og(e.data.payload);break;case a.SLOT_CONFIG:lg(e.data.payload);break;case a.VERA_SD_IMAGE:{let t=e.data.payload;!t||!t.data?Au():ku(t.data,t.name),a_(wu());break}case a.VERA_SD_GET_IMAGE:{let e=Du(),t=wu();Q(i.VERA_SD_IMAGE_DATA,e?{data:e,name:t.name,writeSeq:Cu()}:null);break}case a.VERA_SD_WRITE_PROTECT:Tu(e.data.payload);break;case a.VERA_SD_CLEAR_CHANGES:Eu(typeof e.data.payload==`number`?e.data.payload:void 0);break;case a.REVERSE_YAXIS:Ke(e.data.payload);break;case a.SOFTSWITCHES:Zg(e.data.payload);break;case a.VIDEO7_OVERRIDE:Qg(e.data.payload);break;case a.SIRIUS_JOYPORT:pe(e.data.payload);break;case a.EXECUTE_BASIC_COMMAND:{let t=e.data.payload;kg(t);break}case a.TRACING:$h(e.data.payload);break;case a.TRACE_SETTINGS:Wm(e.data.payload);break;case a.MEMORY_DUMP_STATE:Gh(e.data.payload);break;case a.ENABLE_GAME_PATCHES:Jt(e.data.payload);break;default:console.error(`worker2main: unhandled msg: ${JSON.stringify(e.data)}`)}})})();
//# sourceMappingURL=worker2main-DdJJ59pI.js.map