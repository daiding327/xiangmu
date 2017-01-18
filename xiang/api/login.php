<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $conn=new mysqli("localhost","root","","usercenter");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
		$aa=0;
        $result=$conn->query("select * from t_user where user='".$_POST["user"]."' and secret='".$_POST["password"]."';");
        $res="{";
        while($row = mysqli_fetch_assoc($result)){
			$aa=1;
            $res.="\"user\":\"".$row["user"]."\",";
            $res.="\"secret\":\"".$row["secret"]."\"";
        }
        $conn->close();
        //$res=substr($res,0,strripos($res,","));
        $res.="}";
        echo $aa;
		//echo $res;
    }
    doGet();
?>