@echo off
setlocal
cd %~dp0

set PROTOC_OUT_DIR=proto\generated

mkdir "%PROTOC_OUT_DIR%" 2>nul

protoc ^
  --js_out="import_style=commonjs,binary:%PROTOC_OUT_DIR%" ^
  --ts_out="import_style=commonjs,binary:%PROTOC_OUT_DIR%" ^
  proto\user.proto

endlocal




