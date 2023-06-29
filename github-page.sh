#run sh github-page.sh  
#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
# if this file is not working, run each command individually
npm run build

git add .
git commit -m "build"
git push
git subtree push --prefix dist origin gh-pages