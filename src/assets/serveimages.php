<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

$errors = '';

if (empty($errors)) {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $list = array();

    $target_dir = $request->targetpath; 

    $dir_path = "archives/" + $target_dir;
    if(is_dir($dir_path)){
        $files = opendir($dir_path);
        if($files){
            while(($file_name = readdir($files)) !== FALSE){
                if($file_name != '.' && $file_name != '..'){
                    array_push($list, $file_name);
                }
            }
        }
    }

    echo json_encode($list);

}
