git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/away-2/lx_lesson.git
git push -u origin main

// 执行过git add 但未执行 git commit ,想要撤销此次git add，执行
git  reset

//  已经push到git仓库的文件，删除提交到本地仓库的文件，可以执行
git  rm  -r  --cached   文件名
git  rm  -r  --cached  lesson_lx/Vue/readme.md

// git push显示提交成功，但贡献值那里没有变绿
一般都是邮箱地址与仓库邮箱地址不一致，执行
git config user.email 
查看邮箱地址，如果不一致则改变邮箱地址，执行
git config --global user.email 邮箱地址  #对所有仓库设置电子邮箱
git config --local user.email  邮箱地址  #仅对当前仓库设置电子邮箱
git  config  --global  user.email  1968642178@qq.com

//git log 查看所有提交记录信息

// git log --oneline  查看上一次提交记录，信息简洁

// git reset --hard HEAD^ 表示回退到上一个版本

// git reset --hard sa52ds   表示回退到某个版本

// git是一个分步式的版本控制系统
// git 是免费的，很好用
// git 有一个暂存区stage 和一个 master 分支区
// git status  查看当前工作区和暂存区的状态，显示已修改和未跟踪的文件。
// git add < file >: 将文件添加到暂存区，准备提交。
// git add .  //将全部文件添加到暂存区，准备提交。
// git reset[file]:  // 重置暂存区与工作区，与上一次commit保持一致.
// git reset--，同时重置暂存区，但工作区不变.
// git commit - m "": //将暂存区的文件提交到本地仓库，并附上提交信息。
// git push: //将本地仓库的提交推送到远程仓库。
// git checkout -- index.txt 从暂存区复制一份到工作区，用版本器里面的版本替换了工作区里面的版本git 密钥操作
// git init //在当前目录初始化一个新的Git仓库。
// git init [project-name] // 新建一个目录，将其初始化为Git代码库。
// git clone [url] //克隆（下载）一个远程仓库到本地。
// git branch //列出所有本地分支，当前分支前面会有一个星号。
// git checkout git checkout -b //创建并切换分支 -d//删除 // 切换到指定分支。
// git merge // 将指定分支合并到当前分支。
// git pull //从远程仓库拉取最新的提交到本地仓库，并自动合并到当前分支。
// git diff //显示尚未暂存的文件和已暂存的文件之间的差异。
// git log // 查看提交日志，显示过去的提交历史。
// git remote // 显示远程仓库的信息。
// git stash //将当前工作区的修改保存到一个临时区域（stash），以便稍后再恢复。
// git tag //创建、列出或删除标签，用于标记重要的提交。

要将 master_sjl 分支已经提交的代码合并到 master 分支，可以使用以下命令：

# 切换到 master 分支  
git checkout master  
  
# 合并 master_sjl 分支的代码到 master 分支  
git merge master_sjl

这个命令将会将 master_sjl 分支的更改合并到 master 分支上。如果存在冲突，你需要手动解决冲突后再进行合并。
请注意，如果你已经将 master_sjl 分支推送到远程仓库，合并之后需要再次推送 master 分支的更改到远程仓库。使用以下命令进行推送：

# 推送 master 分支的更改到远程仓库  
git push origin master
这样，你的 master 分支就会被更新为包含 master_sjl 分支的更改。

要将 master 分支更新的代码拉取到 master_sjl 分支，你可以使用以下命令：

# 切换到 master_sjl 分支  
git checkout master_sjl  
  
# 拉取 master 分支的最新代码到 master_sjl 分支  
git pull origin master
这个命令将会从 master 分支上拉取最新的代码更改，并将其合并到 master_sjl 分支上。如果存在冲突，你需要手动解决冲突后再进行拉取和合并操作。

请注意，如果你在 master_sjl 分支上有未提交的更改，拉取 master 分支的代码后可能会覆盖这些更改。确保在拉取和合并之前，先提交或保存你的本地更改，以免丢失数据。

