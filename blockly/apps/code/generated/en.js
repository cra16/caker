// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Functions</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badXml">Error parsing XML:\\n%1\\n\\nSelect \'OK\' to abandon your changes or \'Cancel\' to further edit the XML.</span><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span></div>';
};


codepage.debug = function(opt_data, opt_ignored, opt_ijData) {
  return '<!-- debug template --><script type="text/javascript" src="../../generators/cake.js"><\/script><script type="text/javascript" src="../../generators/cake/colour.js"><\/script><script type="text/javascript" src="../../generators/cake/stdio.js"><\/script><script type="text/javascript" src="../../generators/cake/stdlib.js"><\/script><script type="text/javascript" src="../../generators/cake/math.js"><\/script><script type="text/javascript" src="../../generators/cake/string.js"><\/script><script type="text/javascript" src="../../generators/cake/lists.js"><\/script><script type="text/javascript" src="../../generators/cake/logic.js"><\/script><script type="text/javascript" src="../../generators/cake/loops.js"><\/script><script type="text/javascript" src="../../generators/cake/procedures.js"><\/script><script type="text/javascript" src="../../generators/cake/text.js"><\/script><script type="text/javascript" src="../../generators/cake/variables.js"><\/script><script type="text/javascript" src="../../blocks/colour.js"><\/script><script type="text/javascript" src="../../blocks/stdio.js"><\/script><script type="text/javascript" src="../../blocks/stdlib.js"><\/script><script type="text/javascript" src="../../blocks/math.js"><\/script><script type="text/javascript" src="../../blocks/string.js"><\/script><script type="text/javascript" src="../../blocks/lists.js"><\/script><script type="text/javascript" src="../../blocks/logic.js"><\/script><script type="text/javascript" src="../../blocks/loops.js"><\/script><script type="text/javascript" src="../../blocks/procedures.js"><\/script><script type="text/javascript" src="../../blocks/text.js"><\/script><script type="text/javascript" src="../../blocks/variables.js"><\/script><!-- Load the Google Drive SDK Realtime libraries. --><script type="text/javascript" src="https://apis.google.com/js/api.js"><\/script><!-- /debug template -->';
};


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_uncompressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../python_compressed.js"><\/script><script type="text/javascript" src="../../dart_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script>' + codepage.debug(null, null, opt_ijData) + '<table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Cake</a> : C language</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon">Blocks</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff">JavaScript</td><td class="tabmin">&nbsp;</td><td id="tab_python" class="taboff">Python</td><td class="tabmin">&nbsp;</td><td id="tab_dart" class="taboff">Dart</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff">XML</td><td class="tabmin">&nbsp;</td><td id="tab_cake" class="taboff">C</td><td class="tabmax"><button id="trashButton" class="notext" title="Discard all blocks."><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" class="notext" title="Save and link to blocks."><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button id="runButton" class="notext primary" title="Run the program defined by the blocks in the workspace."><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + codepage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_javascript" class="content"></pre><pre id="content_python" class="content"></pre><pre id="content_dart" class="content"></pre><textarea id="content_xml" class="content" wrap="off"></textarea><pre id="content_cake" class="content"></pre>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Variables"><block type="variables_declare"></block><block type="variables_get"></block><block type="variables_set"></block></category><category name="Loops"><block type="controls_whileUntil"></block><block type="controls_for"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Functions" custom="PROCEDURE"></category><category name="Library"><category name="Stdio"><category name="FILE I/O"><block type="library_stdio_fopen"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fclose"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fprintf"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fscanf"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fread"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fwrite"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_fflush"><value name="TEXT"><block type="library_func_paren"></block></value></block></category><category name="I/O"><block type="library_stdio_printf"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_scanf"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_getchar"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_putchar"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_gets"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdio_puts"><value name="TEXT"><block type="library_func_paren"></block></value></block></category></category><category name="Stdlib"><block type="library_stdlib_rand"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdlib_srand"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdlib_malloc"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdlib_free"><value name="TEXT"><block type="library_func_paren"></block></value></block><block type="library_stdlib_exit"><value name="TEXT"><block type="library_func_paren"></block></value></block></category><category name="Math"><block type="library_func_paren"></block><block type="library_math_sin"></block><block type="library_math_cos"></block><block type="library_math_tan"></block></category></category></xml>';
};


codepage.old_toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Text"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">text</field></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">text</field></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">text</field></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt_ext"><value name="TEXT"><block type="text"></block></value></block></category><category name="Lists"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block></category><category name="Colour"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category></xml>';
};


codepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return codepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><div id="blockly"></div>';
};