# Update special pages cachebust

1) Install gulp task manager and configure env variable CMS_PROD_LOCAL_PATH in your machine. Example: export CMS_PROD_LOCAL_PATH="PATH_YOUR_LOCAL_CMS"

2) Get the rules form '/especial' tree-view item and write rules.json file with ajax content

3) Run this app:
 - Mobile version: gulp --mobile
 - Desktop/Tablet version: gulp --pc or just gulp

4) Copy files from dist folder to CMS_PROD_LOCAL_PATH and COMPARE CHANGES before your commit