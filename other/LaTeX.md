# LaTeX 使用方式

- [LaTeX 使用方式](#latex-使用方式)
  - [如何在vscode使用](#如何在vscode使用)
  - [如何使用中文顯示](#如何使用中文顯示)
  - [遇到問題部分](#遇到問題部分)

## 如何在vscode使用

1. Extensions裝```LaTeX Workshop```
2. 建立一個檔案```demo.tex```
    - 用XeLaTeX编译器编译
    - 编码为UTF-8

    ```tex
    % !TeX program = xelatex
    % !TeX encoding = UTF-8

    \documentclass{article}

    \usepackage{fontspec}
    \usepackage{xeCJK}
    \setCJKmainfont{SimSun} % 使用中文字体宋体

    %  \begin{document} 表示正文开始。 
    \begin{document}
    Hello, world!
    你好，世界！
    % 正文结束
    \end{document}

    ```

## 如何使用中文顯示

```tex
% 使用 UTF-8 編碼的中文字符
\usepackage[utf8]{inputenc}
% fontspec 套件，它提供了設定字型的相關指令。
\usepackage{fontspec}
% 引入了 xeCJK 套件，它提供了一些可以用來設定中文字型的指令。
\usepackage{xeCJK}
% 設定了中文字型，使用的是 Windows 系統下的標準中文字型「宋体」。
\setCJKmainfont{SimSun} % 使用中文字体宋体
```

## 遇到問題部分

- 問題:
  - 因為您正在使用pdflatex編譯，而fontspec套件需要使用XeLaTeX或LuaLaTeX編譯
  - 需要使用XeLaTeX或LuaLaTeX來編譯您的LaTeX文件，而不是pdflatex。

    ```log
    Fatal Package fontspec Error: The fontspec package requires either XeTeX or
    (fontspec)                      LuaTeX.
    (fontspec)                      
    (fontspec)                      You must change your typesetting engine to,
    (fontspec)                      e.g., "xelatex" or "lualatex" instead of
    (fontspec)                      "latex" or "pdflatex".

    Type <return> to continue.
    ```

- 解決方式
  - 安装XeLaTeX引擎和相关的TeX发行版
  - VSCode中配置LaTeX Workshop插件以使用XeLaTeX引擎进行编译

    ```json
        "latex-workshop.latex.recipes": [
            {
                "name": "xelatex",
                "tools": [
                    "xelatex"
                ]
            },
            // ....
        ],
        "latex-workshop.latex.tools": [
            {
                "name": "xelatex",
                "command": "xelatex",
                "args": [
                    "-synctex=1",
                    "-interaction=nonstopmode",
                    "-file-line-error",
                    "%DOC%.tex"
                ]
            },
            // ....
        ]
    ```
