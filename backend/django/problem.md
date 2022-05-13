[[_TOC_]]
- [開發經驗](#開發經驗)
  - [資料庫操作類( `DB`)](#資料庫操作類-db)
  - [Model操作](#model操作)
# 開發經驗
## 資料庫操作類( `DB`)
1. django如何刪除Table並重新初始化
    - 步驟:
        - 刪除db中對應的表 (mysql)

            ![django_problem_1_dropTable](../img/django_db_problem_1_dropTable.JPG)

        - 刪除db中django_migrations對應的app_id
        
            ![django_db_problem_1_dropMigrationsAppId](../img/django_db_problem_1_dropMigrationsAppId.JPG)

        - 删除表所在项目migrations目录下除init.py外的所有python文件

            ![django_db_problem_1_removeFile](../img/django_db_problem_1_removeFile.JPG)
        - 重新執行指令:
            ```
                python manage.py makemigrations
                python manage.py migrate
            ```
    - Ref : [django删除表后重新建表](https://blog.csdn.net/u011996193/article/details/105811769?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-105811769-blog-102973565.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4-105811769-blog-102973565.pc_relevant_default&utm_relevant_index=7)
    - ###### tags: `DB` `Model` `Django` `makemigrations`

## Model操作