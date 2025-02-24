import { LanguageId } from "src/main";

/**
 * Interface that contains all the settings for the extension.
 */
export interface ExecutorSettings {
	lastOpenLanguageTab: LanguageId | undefined;
	releaseNote2_1_0wasShowed: boolean;
	persistentOuput: boolean;
	timeout: number;
	allowInput: boolean;
	wslMode: boolean;
	shellWSLMode: boolean;
	onlyCurrentBlock: boolean;
	nodePath: string;
	nodeArgs: string;
	jsInject: string;
	jsFileExtension: string;
	tsPath: string;
	tsArgs: string;
	tsInject: string;
	latexCompilerPath: string;
	latexCompilerArgs: string;
	latexDoFilter: boolean;
	latexTexfotPath: string;
	latexTexfotArgs: string;
	latexDocumentclass: string;
	latexAdaptFont: '' | 'obsidian' | 'system';
	latexKeepLog: boolean;
	latexSubprocessesUseShell: boolean;
	latexMaxFigures: number;
	latexFigureTitlePattern: string;
	latexDoCrop: boolean;
	latexCropPath: string;
	latexCropArgs: string;
	latexCropNoStandalone: boolean;
	latexCropNoPagenum: boolean;
	latexSaveSvg: '' | 'poppler' | 'inkscape';
	latexSvgPath: string;
	latexSvgArgs: string;
	latexInkscapePath: string;
	latexInkscapeArgs: string;
	latexSavePdf: boolean;
	latexSavePng: boolean;
	latexPngPath: string;
	latexPngArgs: string;
	latexOutputEmbeddings: boolean;
	latexInvertFigures: boolean;
	latexCenterFigures: boolean;

	latexInject: string;
	leanPath: string;
	leanArgs: string;
	leanInject: string;
	luaPath: string;
	luaArgs: string;
	luaFileExtension: string;
	luaInject: string;
	dartPath: string;
	dartArgs: string;
	dartFileExtension: string;
	dartInject: string;
	csPath: string;
	csArgs: string;
	csFileExtension: string;
	csInject: string;
	pythonPath: string;
	pythonArgs: string;
	pythonEmbedPlots: boolean;
	pythonFileExtension: string;
	pythonInject: string;
	shellPath: string;
	shellArgs: string;
	shellFileExtension: string;
	shellInject: string;
	batchPath: string;
	batchArgs: string;
	batchFileExtension: string;
	batchInject: string;
	groovyPath: string;
	groovyArgs: string;
	groovyFileExtension: string;
	groovyInject: string;
	golangPath: string,
	golangArgs: string,
	golangFileExtension: string,
	goInject: string;
	javaPath: string,
	javaArgs: string,
	javaFileExtension: string,
	javaInject: string;
	maxPrologAnswers: number;
	prologInject: string;
	powershellPath: string;
	powershellArgs: string;
	powershellFileExtension: string;
	powershellInject: string;
	powershellEncoding: BufferEncoding;
	octavePath: string;
	octaveArgs: string;
	octaveFileExtension: string;
	octaveInject: string;
	maximaPath: string;
	maximaArgs: string;
	maximaFileExtension: string;
	maximaInject: string;
	cargoPath: string;
	cargoEvalArgs: string;
	rustInject: string;
	cppRunner: string;
	cppFileExtension: string;
	cppInject: string;
	cppArgs: string;
	cppUseMain: boolean;
	clingPath: string;
	clingArgs: string;
	clingStd: string;
	rustFileExtension: string,
	RPath: string;
	RArgs: string;
	REmbedPlots: boolean;
	RFileExtension: string;
	rInject: string;
	kotlinPath: string;
	kotlinArgs: string;
	kotlinFileExtension: string;
	kotlinInject: string;
	swiftPath: string;
	swiftArgs: string;
	swiftFileExtension: string;
	swiftInject: string;
	runghcPath: string;
	ghcPath: string;
	ghciPath: string;
	haskellInject: string;
	useGhci: boolean;
	mathematicaPath: string;
	mathematicaArgs: string;
	mathematicaFileExtension: string;
	mathematicaInject: string;
	phpPath: string;
	phpArgs: string;
	phpFileExtension: string;
	phpInject: string;
	scalaPath: string;
	scalaArgs: string;
	scalaFileExtension: string;
	scalaInject: string;
	racketPath: string;
	racketArgs: string;
	racketFileExtension: string;
	racketInject: string;
	fsharpPath: string;
	fsharpArgs: string;
	fsharpInject: "";
	fsharpFileExtension: string;
	cArgs: string;
	cUseMain: boolean;
	cInject: string;
	rubyPath: string;
	rubyArgs: string;
	rubyFileExtension: string;
	rubyInject: string;
	sqlPath: string;
	sqlArgs: string;
	sqlInject: string;
	applescriptPath: string;
	applescriptArgs: string;
	applescriptFileExtension: string;
	applescriptInject: string;
	zigPath: string;
	zigArgs: string;
	zigInject: string;
	ocamlPath: string;
	ocamlArgs: string;
	ocamlInject: string;

	jsInteractive: boolean;
	tsInteractive: boolean;
	csInteractive: boolean;
	latexInteractive: boolean;
	leanInteractive: boolean;
	luaInteractive: boolean;
	dartInteractive: boolean;
	pythonInteractive: boolean;
	cppInteractive: boolean;
	prologInteractive: boolean;
	shellInteractive: boolean;
	batchInteractive: boolean;
	bashInteractive: boolean;
	groovyInteractive: boolean;
	rInteractive: boolean;
	goInteractive: boolean;
	rustInteractive: boolean;
	javaInteractive: boolean;
	powershellInteractive: boolean;
	kotlinInteractive: boolean;
	swiftInteractive: boolean;
	mathematicaInteractive: boolean;
	haskellInteractive: boolean;
	scalaInteractive: boolean;
	racketInteractive: boolean;
	fsharpInteractive: boolean;
	cInteractive: boolean;
	rubyInteractive: boolean;
	sqlInteractive: boolean;
	octaveInteractive: boolean;
	maximaInteractive: boolean;
	applescriptInteractive: boolean;
	zigInteractive: boolean;
	ocamlInteractive: boolean;
	phpInteractive: boolean;
}


/**
 * The default settings for the extensions as implementation of the ExecutorSettings interface.
 */
export const DEFAULT_SETTINGS: ExecutorSettings = {
	lastOpenLanguageTab: undefined,

	releaseNote2_1_0wasShowed: false,
	persistentOuput: false,
	timeout: 10000,
	allowInput: true,
	wslMode: false,
	shellWSLMode: false,
	onlyCurrentBlock: false,
	nodePath: "node",
	nodeArgs: "",
	jsFileExtension: "js",
	jsInject: "",
	tsPath: "ts-node",
	tsArgs: "",
	tsInject: "",
	latexCompilerPath: "lualatex",
	latexCompilerArgs: "-interaction=nonstopmode",
	latexDoFilter: true,
	latexTexfotPath: "texfot",
	latexTexfotArgs: "--quiet",
	latexDocumentclass: "article",
	latexAdaptFont: "obsidian",
	latexKeepLog: false,
	latexSubprocessesUseShell: false,
	latexMaxFigures: 10,
	latexFigureTitlePattern: /[^\n][^%`]*\\title\s*\{(?<name>[^\}]*)\}/.source,
	latexDoCrop: false,
	latexCropPath: "pdfcrop",
	latexCropArgs: "--quiet",
	latexCropNoStandalone: true,
	latexCropNoPagenum: true,
	latexSaveSvg: "poppler",
	latexSvgPath: "pdftocairo",
	latexSvgArgs: "-svg",
	latexInkscapePath: "inkscape",
	latexInkscapeArgs: '--pages=all --export-plain-svg',
	latexSavePdf: true,
	latexSavePng: false,
	latexPngPath: "pdftocairo",
	latexPngArgs: "-singlefile -png",
	latexOutputEmbeddings: true,
	latexInvertFigures: true,
	latexCenterFigures: true,
	latexInject: "",
	leanPath: "lean",
	leanArgs: "",
	leanInject: "",
	luaPath: "lua",
	luaArgs: "",
	luaFileExtension: "lua",
	luaInject: "",
	dartPath: "dart",
	dartArgs: "",
	dartFileExtension: "dart",
	dartInject: "",
	csPath: "dotnet-script",
	csArgs: "",
	csFileExtension: "csx",
	csInject: "",
	pythonPath: "python",
	pythonArgs: "",
	pythonEmbedPlots: true,
	pythonFileExtension: "py",
	pythonInject: "",
	shellPath: "bash",
	shellArgs: "",
	shellFileExtension: "sh",
	shellInject: "",
	batchPath: "call",
	batchArgs: "",
	batchFileExtension: "bat",
	batchInject: "",
	groovyPath: "groovy",
	groovyArgs: "",
	groovyFileExtension: "groovy",
	groovyInject: "",
	golangPath: "go",
	golangArgs: "run",
	golangFileExtension: "go",
	goInject: "",
	javaPath: "java",
	javaArgs: "-ea",
	javaFileExtension: "java",
	javaInject: "",
	maxPrologAnswers: 15,
	prologInject: "",
	powershellPath: "powershell",
	powershellArgs: "-file",
	powershellFileExtension: "ps1",
	powershellInject: "$OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding",
	powershellEncoding: "latin1",
	cargoPath: "cargo",
	cargoEvalArgs: "",
	rustInject: "",
	cppRunner: "cling",
	cppFileExtension: "cpp",
	cppInject: "",
	cppArgs: "",
	cppUseMain: false,
	clingPath: "cling",
	clingArgs: "",
	clingStd: "c++17",
	rustFileExtension: "rs",
	RPath: "Rscript",
	RArgs: "",
	REmbedPlots: true,
	RFileExtension: "R",
	rInject: "",
	kotlinPath: "kotlinc",
	kotlinArgs: "-script",
	kotlinFileExtension: "kts",
	kotlinInject: "",
	swiftPath: "swift",
	swiftArgs: "",
	swiftFileExtension: "swift",
	swiftInject: "",
	runghcPath: "runghc",
	ghcPath: "ghc",
	ghciPath: "ghci",
	useGhci: false,
	haskellInject: "",
	mathematicaPath: "wolframscript",
	mathematicaArgs: "-file",
	mathematicaFileExtension: "wls",
	mathematicaInject: "",
	scalaPath: "scala",
	scalaArgs: "",
	scalaFileExtension: "scala",
	scalaInject: "",
	racketPath: "racket",
	racketArgs: "",
	racketFileExtension: "rkt",
	racketInject: "#lang racket",
	fsharpPath: "dotnet",
	fsharpArgs: "fsi",
	fsharpInject: "",
	fsharpFileExtension: "fsx",
	cArgs: "",
	cUseMain: true,
	cInject: "",
	rubyPath: "ruby",
	rubyArgs: "",
	rubyFileExtension: "rb",
	rubyInject: "",
	sqlPath: "psql",
	sqlArgs: "-d <database> -U <user> -f",
	sqlInject: "",
	octavePath: "octave",
	octaveArgs: "-q",
	octaveFileExtension: "m",
	octaveInject: "figure('visible','off')  # Necessary to embed plots",
	maximaPath: "maxima",
	maximaArgs: "-qb",
	maximaFileExtension: "mx",
	maximaInject: "",
	applescriptPath: "osascript",
	applescriptArgs: "",
	applescriptFileExtension: "scpt",
	applescriptInject: "",
	zigPath: "zig",
	zigArgs: "run",
	zigInject: "",
	ocamlPath: "ocaml",
	ocamlArgs: "",
	ocamlInject: "",
	phpPath: "php",
	phpArgs: "",
	phpFileExtension: "php",
	phpInject: "",
	jsInteractive: true,
	tsInteractive: false,
	csInteractive: false,
	latexInteractive: false,
	leanInteractive: false,
	luaInteractive: false,
	dartInteractive: false,
	pythonInteractive: true,
	cppInteractive: false,
	prologInteractive: false,
	shellInteractive: false,
	batchInteractive: false,
	bashInteractive: false,
	groovyInteractive: false,
	rInteractive: false,
	goInteractive: false,
	rustInteractive: false,
	javaInteractive: false,
	powershellInteractive: false,
	kotlinInteractive: false,
	swiftInteractive: false,
	mathematicaInteractive: false,
	haskellInteractive: false,
	scalaInteractive: false,
	fsharpInteractive: false,
	cInteractive: false,
	racketInteractive: false,
	rubyInteractive: false,
	sqlInteractive: false,
	octaveInteractive: false,
	maximaInteractive: false,
	applescriptInteractive: false,
	zigInteractive: false,
	ocamlInteractive: false,
	phpInteractive: false,
}
