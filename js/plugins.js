// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"KhasCore","status":true,"description":"[1.2] Required by Khas plugins.","parameters":{}},
{"name":"KhasAdvancedGraphics","status":true,"description":"[1.1] Adds lighting and procedurally generated fog.","parameters":{"Custom Blending":"ON","Adaptive Exposure":"ON","Adaptive Exposure - Pre-decay multiplier":"1.7","Adaptive Exposure - Post-decay multiplier":"0.005","Variable Fog Density":"ON","Zoom Compatibility":"OFF"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"60","Fade In Time":"60","Wait Time":"80"}},
{"name":"SRD_CharacterChoices","status":true,"description":"Allows the use of the \"Show Choices\" event to have the Player to select an animated Character.","parameters":{"Walking Speed":"15","Character Padding":"18","Sprite Width":"48","Sprite Height":"48","X Offset":"12","Y Offset":"14"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"VP","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"75","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"true","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_ClassChangeCore","status":true,"description":"v1.12 This plugin creates a system where your player\r\ncan change classes through the main menu.","parameters":{"---General---":"","Class Command":"Classe","Auto Add Menu":"true","Show Command":"true","Enable Command":"true","Auto Place Command":"true","Default Icon":"78","Maintain Levels":"true","Unlocked Classes":"","---Command Window---":"","Class Change Command":"Classe","Show Class Change":"true","Enable Class Change":"true","Show Skill Learn":"true","Finish Command":"Voltar","Text Alignment":"center","---Window Settings---":"","Current Class Color":"17","Class Level Format":"LV%1","Class Level Font Size":"20"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.18 Adds more features to the Message Window to customized\r\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.04 Alter the save menu for a more aesthetic layout\r\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Carregar","Save Command":"Salvar","Delete Command":"Deletar","---Help Window---":"","Select Help":"Selecione um slot.","Load Help":"Carrega o jogo salvo.","Save Help":"Salva o progresso atual do seu jogo.","Delete Help":"Deleta todos os dados desse jogo salvo.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"Esse arquivo é de um jogo diferente :(","Empty Game Text":"Vazio","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime","Data Column 2":"location, save count","Data Column 3":"empty, gold count","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Tempo de jogo:","Save Count":"Saves totais:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Carregar esse jogo salvo?","Save Confirmation":"true","Save Text":"Sobrescrever esse jogo salvo?","Delete Confirmation":"true","Delete Text":"Deletar esse jogo salvo?","Confirm Yes":"Sim","Confirm No":"Não"}},
{"name":"YEP_X_NewGamePlus","status":false,"description":"v1.00 (Requires YEP_SaveCore.js) Allow your players to have\r\na New Game+ mode that allows carrying over save data.","parameters":{"---General---":"","Command Text":"Novo Jogo de Novo","Command Help":"Iniciar um jogo jogo com os dados desse jogo salvo.","--New Game+ Data--":"","Carried Switches":"0","Carried Variables":"0","Playtime":"true","Save Count":"true","Step Count":"true","Battle Count":"true","Victory Count":"true","Escape Count":"true","--New Game+ Actors--":"","Copy Actor":"true","EXP":"true","JP":"true","Skills":"true","--New Game+ Party--":"","Gold":"true","Items":"true","Weapons":"true","Armors":"true"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"true","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"true","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"true","Show State Text":"true","Show Buff Text":"true","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.17 (Requires YEP_BattleEngineCore.js) This plugin lets\r\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\r\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"100","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"true","Show Max":"false"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.08 A simple battle status window that shows the\r\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"false","State Icons Row":"1","---Actor Switching---":"","Left / Right":"true","PageUp / PageDown":"true","Allow Turn Skip":"true","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"-16"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.06 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Resultados de batalha","Battle Drops Text":"Coisas possivelmente inúteis","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"NIVEL MÁXIMO","Show Skills Learned":"false","Gained EXP Text":"EXP Ganho","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.00 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 chegou ao nivel %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Habilidade aprendida","Skill Text Plural":"Habilidades aprendidas","Skill List Width":"200"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.03 Revamps the shop menu appearance and provides the\r\nframework for many new shop options.","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1","Add State":"+Estado","Add Buff":"+Buff","Remove State":"-Estado","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_SkillCore","status":true,"description":"v1.11a Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_SkillLearnSystem","status":true,"description":"v1.13 Allows actors to learn skills from the skill menu\nthrough crafting them via items or otherwise.","parameters":{"---General---":"","Learn Command":"Novas habilidades","Show Command":"true","Enable Command":"true","Integrate":"false","---Confirm Learn---":"","Confirm Window":"true","Confirm Text":"Deseja que %1 aprenda %2?","Confirm Yes":"Sim","Confirm No":"Não","---Skill Learn---":"","Learned Text":"Aprendido","Learned Size":"20","Learn Cost":"Custo para aprender","Cost Size":"20","Show Gold Window":"true","---Default---":"","Default Gold Cost":"20","Default JP Cost":"100"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.01a Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"Geral","Parameters Text":"Informações","Experience Text":"Experiencia","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Informações","Graph Text":"Gráfico de atributos","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elementos","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---State---":"","States Command":"Estado de Buffs","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Atributos","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","hit Name":"Taxa de Acerto","eva Name":"Taxa de Evasão","cri Name":"Taxa de Acerto Critico","cev Name":"Taxa de Evasão Critica","mev Name":"Taxa de Evasão Magica","mrf Name":"Taxa de Reflexão Mágica","cnt Name":"Taxa de Counter","hrg Name":"Taxa de Regen. HP","mrg Name":"Taxa de Regen. MP","trg Name":"Taxa de Regen. TP","tgr Name":"Taxa Agressiva","grd Name":"Proteção","rec Name":"Recuperação","pha Name":"Farmacologia","mcr Name":"Taxa de Custo de MP","tcr Name":"Taxa de Custo de TP","pdr Name":"Taxa de Dano Fisico","mdr Name":"Taxa de Dano Magico","fdr Name":"Taxa de Dano ao Cair","exr Name":"Taxa de EXP"}},
{"name":"YEP_X_BattleStatistics","status":true,"description":"v1.01 (Requires YEP_StatusMenuCore.js) Logs the battle\nstatistics of actors for your players to view.","parameters":{"Command Name":"Estatísticas","Battle Count Text":"Batalhas Iniciadas","Battle Count Format":"%1 de %2 batalhas (%3%)","Kill Count Text":"Derrotas","Kill Count Format":"%1 Derrotas por Batalha","Death Count Text":"Mortes","Death Count Format":"%1 Mortes por Batalha","Assist Count Text":"Assistencias","Assist Count Format":"%1 Assistencias por Batalha","Damage Dealt":"Dano Inflingido","Damage Taken":"Dano Recebido","Healing Dealt":"Cura Performada","Healing Taken":"Cura Recebida"}},
{"name":"YEP_X_ProfileStatusPage","status":true,"description":"v1.01 (Requires YEP_StatusMenuCore.js) Places a Profile\nStatus Page in the status menu for your actors.","parameters":{"Command Name":"Profile","Default Profile":"true","Image Align":"right"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_JobPoints","status":true,"description":"v1.08 This plugin by itself doesn't do much, but it enables\nactors to acquire JP (job points) used for other plugins.","parameters":{"---General---":"","JP Text":"SP","JP Icon":"188","Max JP":"0","JP Per Action":"10 + Math.randomInt(10)","JP Per Level":"100 + Math.randomInt(100)","JP Per Enemy":"50 + Math.randomInt(10)","Show Results":"true","JP Gained in Battle":"%1 ganhou %2%3!","Alive Actors":"true","---Menu---":"","Show In Menu":"true","Menu Format":"%1\\c[4]%2\\c[0]%3","---Victory Aftermath---":"","Enable Aftermath":"true","Aftermath Text":"SP Ganho","Aftermath Format":"+%1\\c[4]%2\\c[0]%3","Aftermath JP Earned":"SP Ganho em batalha"}},
{"name":"YEP_EnemyLevels","status":true,"description":"v1.07 This plugin enables giving your enemies levels and\r\nparameter changes with those levels.","parameters":{"---General---":"","Show Level":"true","Level Format":"Lv%1 %2","Minimum Level":"1","Maximum Level":"9999","Maximum Cap":"9999","Preserve Rate":"true","---Level Setup---":"","Default Type":"5","Positive Fluctuation":"2","Negative Fluctuation":"2","---MaxHP Growth---":"","MaxHP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxHP Rate Growth":"0.15","MaxHP Flat Growth":"50.0","---MaxMP Growth---":"","MaxMP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxMP Rate Growth":"0.10","MaxMP Flat Growth":"10.0","---ATK Growth---":"","ATK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","ATK Rate Growth":"0.05","ATK Flat Growth":"2.5","---DEF Growth---":"","DEF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","DEF Rate Growth":"0.05","DEF Flat Growth":"2.5","---MAT Growth---":"","MAT Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MAT Rate Growth":"0.05","MAT Flat Growth":"2.5","---MDF Growth---":"","MDF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MDF Rate Growth":"0.05","MDF Flat Growth":"2.5","---AGI Growth---":"","AGI Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","AGI Rate Growth":"0.05","AGI Flat Growth":"2.5","---LUK Growth---":"","LUK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","LUK Rate Growth":"0.05","LUK Flat Growth":"2.5","---EXP Growth---":"","EXP Formula":"base * (1 + (level) * rate) + (flat * (level))","EXP Rate Growth":"0.20","EXP Flat Growth":"10.0","---Gold Growth---":"","Gold Formula":"base * (1 + (level) * rate) + (flat * (level))","Gold Rate Growth":"0.40","Gold Flat Growth":"10.0"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_GabWindow","status":true,"description":"v1.05 The Gab Window functions as a window for random\r\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.03 Use regions to block out Events and/or the player from\r\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"0","All Restrict":"255","Player Allow":"0","Event Allow":"0","All Allow":"0"}}
];
