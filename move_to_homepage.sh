#!/bin/bash

# assigns variables
function assign_variables() {

    [ -d /media/$USER/Data/Personal/gitrepo/ ] && local_git_local="/media/$USER/Data/Personal/gitrepo/" && echo -e "local git local:\t$local_git_local"

    astro_practice="/media/$USER/Data/Personal/gitrepo/astro_practice" && homepage=""

    [ -d /run/media/$USER/Data/Personal/gitrepo/ ] && local_git_local="/run/media/$USER/Data/Personal/gitrepo/" && echo -e "local git local:\t$local_git_local"

    astro_practice="$local_git_local/astro_practice"
    local_homepage="$local_git_local/homepage"

}
