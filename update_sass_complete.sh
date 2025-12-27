#!/bin/bash

#1. Update Sass 
#2. Compile Sass to CSS 
# (OF COURSE looking at the dev server to test the change here 

#3. yarn run build 
#4. Rsync astro/dist/ 
#5. Upload changes to server 


# 1. / 2. 
function compile_sass() {
    yarn run sass
}


#3.
function build_project(){
    yarn run build 
}

function rsync_to_homepage() {
    # the "source"
    local dist_path="dist/"
    
    # Destination 
    local homepage_path="../Homepage/"


    # 1 - clear existing (only some) "Homepage" content 
    
    
    
}