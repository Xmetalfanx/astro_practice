#!/bin/bash

# assigns variables
function assign_variables() {

    # idea: find location of gitrepo folder

    # would be Debian or Ubuntu
    [ -d "/media/$USER/Data/Personal/gitRepos/" ] && local_git_dir="/media/$USER/Data/Personal/gitRepos"

    # OpenSUSE, Arch, or (99% sure) Fedora bases... maybe Solus too 
    [ -d "/run/media/$USER/Data/Personal/gitRepos/" ] && local_git_dir="/run/media/$USER/Data/Personal/gitRepos"

    astro_practice_dir="${local_git_dir}/astro_practice"
    local_homepage_dir="${local_git_dir}/Homepage"

}

function build_astro_project() { 
    printf "%s" "Building Astro project Astro_Practice"
    (
        cd "${astro_practice_dir}" || exit 1
        yarn run build    
    )
}

function homepage_backup() {
    (
     cd "$local_git_dir" || exit
     tar -zcvf Homepage.tar.gz Homepage   
    )
}


# the purge function purge_local_homepage_dir should be run before this step 
function move_astro_project() {
    built_project_dir="${astro_practice_dir}/dist/"

    echo -e "Moving built astro_project from ${built_project_dir} to ${local_homepage_dir}"

    # delete here may remove the need for the purge function 
    rsync -a \
        --delete \
        --exclude='/keybase.txt' \
        --exclude='/*_tests/' \
        --exclude='/colors/' \
        "${astro_practice_dir}/dist/" \
        "${local_homepage_dir}/"

}

assign_variables

build_astro_project

move_astro_project