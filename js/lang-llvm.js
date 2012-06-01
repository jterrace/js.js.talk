/**
 * @fileoverview
 * Registers a language handler for LLVM.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-llvm">(my LLVM code)</pre>
 *
 *
 * The regular expressions were adapted from:
 * https://github.com/hansstimer/llvm.tmbundle/blob/76fedd8f50fd6108b1780c51d79fbe3223de5f34/Syntaxes/LLVM.tmLanguage
 *
 * @author Nikhil Dabas
 */
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         // Whitespace
         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
         // A double quoted, possibly multi-line, string.
         [PR['PR_STRING'],      /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"'],
         // comment.llvm
         [PR['PR_COMMENT'],       /^;[^\r\n]*/, null, ';'],
        ],
        [
         // llvm instructions
         [PR['PR_KEYWORD'],     /^\b(?:add|alloca|and|ashr|bitcast|br|call|eq|exact|extractelement|extractvalue|fadd|fcmp|fdiv|fmul|fpext|fptosi|fptoui|fptrunc|free|frem|fsub|getelementptr|icmp|inbounds|indirectbr|insertelement|insertvalue|inttoptr|invoke|load|lshr|malloc|mul|ne|nsw|nuw|oeq|oge|ogt|ole|olt|one|or|ord|phi|ptrtoint|ret|sdiv|select|sext|sge|sgt|shl|shufflevector|sitofp|sle|slt|srem|store|sub|switch|trunc|udiv|ueq|uge|uge|ugt|ugt|uitofp|ule|ule|ult|ult|une|uno|unreachable|unwind|urem|va_arg|xor|zext)\b/, null],
         
         // llvm keywords
         [PR['PR_KEYWORD'],     /^\b(?:addrspace|alias|align|alignstack|alwaysinline|appending|asm|blockaddress|byval|c|cc|ccc|coldcc|common|constant|datalayout|declare|default|define|deplibs|dllexport|dllimport|except|extern_weak|external|fastcc|gc|global|hidden|inlinehint|inreg|internal|linkonce|linkonce_odr|metadata|module|naked|nest|noalias|nocapture|noimplicitfloat|noinline|noredzone|noreturn|nounwind|optsize|private|protected|ptx_device|ptx_kernel|readnone|readonly|section|sideeffect|signext|sret|ssp|sspreq|tail|target|thread_local|to|triple|uwtable|volatile|weak|weak_odr|x86_fastcallcc|x86_stdcallcc|zeroext)\b/, null],
         
         // variable.llvm
         [PR['PR_TYPE'],       /^\s(?:[%@][-a-zA-Z$._][-a-zA-Z$._0-9]*)/],
         
         // variable.language.llvm
         [PR['PR_TYPE'],       /^\s(?:[%]\d+)/],
         
         // storage.type.language.llvm
         [PR['PR_PLAIN'],       /^\b(?:i\d+\**)/],
         
         // variable.metadata.llvm
         [PR['PR_PLAIN'],       /^(!\d+)/],
         
         // constant.numeric.float.llvm
         [PR['PR_LITERAL'],       /^\b\d+\.\d+\b/],
         
         // constant.numeric.integer.llvm
         [PR['PR_LITERAL'],       /^\b(?:\d+|0(?:x|X)[a-fA-F0-9]+)\b/],
        ]),
    ['llvm', 'll']);
